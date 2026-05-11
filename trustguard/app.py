import os
import logging
import requests
from flask import Flask, request, jsonify

app = Flask(__name__)
logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
logger = logging.getLogger(__name__)

ACCESS_TOKEN = os.environ.get("ACCESS_TOKEN")
PHONE_NUMBER_ID = os.environ.get("PHONE_NUMBER_ID")
VERIFY_TOKEN = os.environ.get("VERIFY_TOKEN")

WHATSAPP_API_BASE = "https://graph.facebook.com/v19.0"

# Track users who have already received the greeting (in-memory; resets on restart)
greeted_users: set[str] = set()


# ---------------------------------------------------------------------------
# WhatsApp helpers
# ---------------------------------------------------------------------------

def _auth_headers() -> dict:
    return {
        "Authorization": f"Bearer {ACCESS_TOKEN}",
        "Content-Type": "application/json",
    }


def send_whatsapp_message(to: str, body: str) -> dict:
    """Send a plain-text WhatsApp message to a recipient."""
    url = f"{WHATSAPP_API_BASE}/{PHONE_NUMBER_ID}/messages"
    payload = {
        "messaging_product": "whatsapp",
        "to": to,
        "type": "text",
        "text": {"body": body},
    }
    response = requests.post(url, headers=_auth_headers(), json=payload, timeout=15)
    response.raise_for_status()
    logger.info("Message sent to %s", to)
    return response.json()


def download_audio(media_id: str) -> bytes:
    """
    Download an audio file from the WhatsApp Cloud API.

    Steps:
    1. Retrieve the temporary media URL using the media ID.
    2. Stream-download the binary content with the Bearer token.
    """
    headers = {"Authorization": f"Bearer {ACCESS_TOKEN}"}

    # Step 1 – resolve media URL
    meta_resp = requests.get(
        f"{WHATSAPP_API_BASE}/{media_id}",
        headers=headers,
        timeout=15,
    )
    meta_resp.raise_for_status()
    media_url = meta_resp.json().get("url")

    if not media_url:
        raise ValueError(f"Could not resolve media URL for media_id={media_id}")

    # Step 2 – download binary content
    audio_resp = requests.get(media_url, headers=headers, timeout=60)
    audio_resp.raise_for_status()
    logger.info("Downloaded %d bytes for media_id=%s", len(audio_resp.content), media_id)
    return audio_resp.content


# ---------------------------------------------------------------------------
# Deepfake analysis
# ---------------------------------------------------------------------------

def analyze_deepfake(audio_bytes: bytes) -> dict:
    """
    PLACEHOLDER – send audio to a deepfake detection API and return a result dict.

    Replace the body of this function with your chosen provider, e.g.:

    ┌─────────────────────────────────────────────────────────────────────────┐
    │  UncovAI  (https://uncovai.com)                                         │
    │  ──────────────────────────────────────────────────────────────────────  │
    │  DEEPFAKE_API_KEY = os.environ.get("DEEPFAKE_API_KEY")                  │
    │  resp = requests.post(                                                   │
    │      "https://api.uncovai.com/v1/detect",                               │
    │      headers={"Authorization": f"Bearer {DEEPFAKE_API_KEY}"},           │
    │      files={"file": ("audio.ogg", audio_bytes, "audio/ogg")},           │
    │      timeout=60,                                                         │
    │  )                                                                       │
    │  data = resp.json()                                                      │
    │  return {                                                                 │
    │      "trust_score": 1.0 - data["deepfake_probability"],                 │
    │      "is_deepfake": data["is_deepfake"],                                │
    │      "confidence": data["confidence"],                                   │
    │  }                                                                       │
    ├─────────────────────────────────────────────────────────────────────────┤
    │  Reality Defender  (https://realitydefender.com)                        │
    │  ──────────────────────────────────────────────────────────────────────  │
    │  resp = requests.post(                                                   │
    │      "https://api.realitydefender.com/v1/audio/analyze",               │
    │      headers={"Authorization": f"Bearer {DEEPFAKE_API_KEY}"},           │
    │      files={"audio": audio_bytes},                                       │
    │      timeout=60,                                                         │
    │  )                                                                       │
    │  data = resp.json()                                                      │
    │  trust = data["authenticity_score"]   # 0.0–1.0                         │
    │  return {                                                                 │
    │      "trust_score": trust,                                               │
    │      "is_deepfake": trust < 0.5,                                        │
    │      "confidence": data["confidence"],                                   │
    │  }                                                                       │
    └─────────────────────────────────────────────────────────────────────────┘

    Returns:
        dict with keys:
            trust_score  – float 0.0–1.0  (1.0 = fully trusted, 0.0 = definitely fake)
            is_deepfake  – bool
            confidence   – float 0.0–1.0
    """
    # ------------------------------------------------------------------ #
    # SIMULATED RESPONSE – remove once a real API is wired up             #
    # ------------------------------------------------------------------ #
    logger.info("analyze_deepfake called with %d bytes (placeholder mode)", len(audio_bytes))
    return {
        "trust_score": 0.18,
        "is_deepfake": True,
        "confidence": 0.91,
    }
    # ------------------------------------------------------------------ #


def build_trust_reply(result: dict) -> str:
    """Format a user-friendly reply message based on the deepfake analysis result."""
    trust_score: float = result["trust_score"]
    is_deepfake: bool = result["is_deepfake"]
    confidence: float = result["confidence"]

    score_pct = int(trust_score * 100)
    conf_pct = int(confidence * 100)

    if is_deepfake or trust_score < 0.40:
        return (
            "🚨 *DEEPFAKE DETECTED – HIGH RISK*\n\n"
            f"🔴 Trust Score: {score_pct}%\n"
            f"📊 Detection Confidence: {conf_pct}%\n\n"
            "This voice note shows strong signs of being *AI-generated*.\n\n"
            "⚠️ *Do NOT* act on instructions or requests made in this audio.\n"
            "This is likely a *scam attempt*. Please report it and stay safe.\n\n"
            "_— TrustGuard SA_"
        )
    elif trust_score < 0.65:
        return (
            "⚠️ *SUSPICIOUS AUDIO – PROCEED WITH CAUTION*\n\n"
            f"🟡 Trust Score: {score_pct}%\n"
            f"📊 Detection Confidence: {conf_pct}%\n\n"
            "This voice note has characteristics that *may indicate AI generation*.\n\n"
            "Please verify the sender through a separate, trusted channel before acting.\n\n"
            "_— TrustGuard SA_"
        )
    else:
        return (
            "✅ *AUDIO APPEARS AUTHENTIC*\n\n"
            f"🟢 Trust Score: {score_pct}%\n"
            f"📊 Detection Confidence: {conf_pct}%\n\n"
            "This voice note does *not* appear to be AI-generated.\n\n"
            "As always, stay vigilant about unsolicited requests involving money or personal information.\n\n"
            "_— TrustGuard SA_"
        )


# ---------------------------------------------------------------------------
# Webhook routes
# ---------------------------------------------------------------------------

@app.route("/webhook", methods=["GET"])
def verify_webhook():
    """
    Handle Meta's webhook verification challenge.
    Meta sends hub.mode, hub.verify_token, and hub.challenge as query params.
    """
    mode = request.args.get("hub.mode")
    token = request.args.get("hub.verify_token")
    challenge = request.args.get("hub.challenge")

    if mode == "subscribe" and token == VERIFY_TOKEN:
        logger.info("Webhook verified successfully.")
        return challenge, 200

    logger.warning("Webhook verification failed – token mismatch or wrong mode.")
    return "Forbidden", 403


@app.route("/webhook", methods=["POST"])
def receive_message():
    """
    Receive and process incoming WhatsApp messages.

    Message flow:
    1. Parse the webhook payload.
    2. Greet new users on first contact.
    3. If the message is audio/voice: download → analyse → reply with Trust Score.
    4. If the message is text: prompt the user to send a voice note.
    """
    data = request.get_json(silent=True) or {}

    try:
        entry = data["entry"][0]
        changes = entry["changes"][0]
        value = changes["value"]

        if "messages" not in value:
            # Delivery receipts, status updates, etc. – nothing to process
            return jsonify({"status": "ok"}), 200

        message = value["messages"][0]
        sender: str = message["from"]
        msg_type: str = message["type"]

        logger.info("Incoming message from %s, type=%s", sender, msg_type)

        # ── Greeting ──────────────────────────────────────────────────────
        if sender not in greeted_users:
            greeted_users.add(sender)
            send_whatsapp_message(
                sender,
                (
                    "👋 Welcome to *TrustGuard SA*.\n\n"
                    "Send or forward a suspicious voice note here to verify "
                    "if it is an AI-generated scam."
                ),
            )
            # If the first message is not audio, stop here (greeting is enough)
            if msg_type not in ("audio", "voice"):
                return jsonify({"status": "ok"}), 200

        # ── Audio / voice note ────────────────────────────────────────────
        if msg_type in ("audio", "voice"):
            send_whatsapp_message(sender, "🔍 Analysing your voice note… Please wait a moment.")

            media_id = message[msg_type]["id"]
            audio_bytes = download_audio(media_id)
            result = analyze_deepfake(audio_bytes)
            reply = build_trust_reply(result)
            send_whatsapp_message(sender, reply)

        # ── Text / other ──────────────────────────────────────────────────
        elif msg_type == "text":
            send_whatsapp_message(
                sender,
                "Please *send or forward a voice note* to check whether it is AI-generated.",
            )
        else:
            send_whatsapp_message(
                sender,
                "I can only analyse *voice notes*. Please send or forward a suspicious audio message.",
            )

    except (KeyError, IndexError, TypeError) as exc:
        logger.error("Failed to parse webhook payload: %s | raw=%s", exc, data)

    return jsonify({"status": "ok"}), 200


# ---------------------------------------------------------------------------
# Health check
# ---------------------------------------------------------------------------

@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "ok", "service": "TrustGuard SA"}), 200


# ---------------------------------------------------------------------------
# Entry point
# ---------------------------------------------------------------------------

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    app.run(host="0.0.0.0", port=port, debug=False)
