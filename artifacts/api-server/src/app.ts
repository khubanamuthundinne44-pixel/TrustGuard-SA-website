import express, { type Express, type Request, type Response } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import http from "http";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

// ---------------------------------------------------------------------------
// Reverse proxy: forward /webhook and /health to the TrustGuard SA Flask app
// ---------------------------------------------------------------------------
function proxyToFlask(req: Request, res: Response) {
  // req.originalUrl preserves the full path (e.g. /webhook?hub.challenge=…)
  const flaskPath = req.originalUrl;
  const options = {
    hostname: "localhost",
    port: 8000,
    path: flaskPath,
    method: req.method,
    headers: { ...req.headers, host: "localhost:8000" },
  };

  const proxy = http.request(options, (flaskRes) => {
    res.writeHead(flaskRes.statusCode ?? 502, flaskRes.headers);
    flaskRes.pipe(res, { end: true });
  });

  proxy.on("error", (err) => {
    logger.error({ err, flaskPath }, "Flask proxy error");
    if (!res.headersSent) {
      res.status(502).json({ error: "TrustGuard SA service unavailable" });
    }
  });

  req.pipe(proxy, { end: true });
}

app.use("/webhook", proxyToFlask);
app.use("/health", proxyToFlask);

export default app;
