import { Router } from "express";

const router = Router();

const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>Privacy Policy – TrustGuard SA</title>
  <style>
    body{font-family:Arial,sans-serif;max-width:800px;margin:40px auto;padding:0 20px;color:#222;line-height:1.7}
    h1{color:#1a73e8}h2{color:#333;margin-top:32px}
    p,li{margin:12px 0}footer{margin-top:48px;font-size:.85em;color:#888}
  </style>
</head>
<body>
  <h1>&#x1F6E1;&#xFE0F; TrustGuard SA &mdash; Privacy Policy</h1>
  <p><strong>Effective date: 12 May 2026</strong></p>
  <p>TrustGuard SA ("we","our","the service") is a WhatsApp-based tool that analyses voice notes, images and videos to detect AI-generated or deepfake content. This Privacy Policy explains what data we collect, how we use it, and your rights.</p>

  <h2>1. Information We Collect</h2>
  <ul>
    <li>Your WhatsApp phone number (sender ID)</li>
    <li>Media files you send or forward (voice notes, images, videos) &mdash; used solely for deepfake analysis and then discarded</li>
    <li>Analysis results (trust score, timestamp) for service improvement</li>
  </ul>

  <h2>2. How We Use Your Information</h2>
  <ul>
    <li>To perform deepfake / AI-generation detection on submitted media</li>
    <li>To send you analysis results and safety warnings via WhatsApp</li>
    <li>To improve detection accuracy over time</li>
  </ul>

  <h2>3. Data Sharing</h2>
  <p>We do <strong>not</strong> sell or share your personal information with third parties, except:</p>
  <ul>
    <li>Third-party deepfake detection APIs (media bytes only, no personal identifiers)</li>
    <li>WhatsApp / Meta, as required to deliver messages through their platform</li>
    <li>When required by law</li>
  </ul>

  <h2>4. Data Retention</h2>
  <p>Media files are processed in memory and are <strong>not stored</strong> on our servers after analysis. Phone numbers are held in memory only for session greeting purposes and are cleared on server restart.</p>

  <h2>5. Your Rights</h2>
  <p>You may request deletion of any data associated with your phone number by contacting us. You can stop using the service at any time by not sending further messages.</p>

  <h2>6. Data Deletion</h2>
  <p>To request deletion of your data, send an email to <strong>privacy@trustguardsa.co.za</strong> with your WhatsApp number and we will remove all associated records within 30 days.</p>

  <h2>7. Security</h2>
  <p>All communication between your device, WhatsApp, and our servers is encrypted in transit. We do not store media or personal data persistently.</p>

  <h2>8. Contact</h2>
  <p>For privacy questions or data requests: <strong>privacy@trustguardsa.co.za</strong></p>

  <h2>9. Changes to This Policy</h2>
  <p>We may update this policy from time to time. The effective date at the top of this page will reflect the latest revision.</p>

  <footer>&copy; 2026 TrustGuard SA. All rights reserved.</footer>
</body>
</html>`;

router.get("/privacy", (_req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.send(HTML);
});

router.get("/terms", (_req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.send(HTML);
});

export default router;
