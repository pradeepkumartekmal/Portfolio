import express from "express";
import cors from "cors";
import { Resend } from "resend";

const app = express();

// parsers
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

// CORS (safe even if proxied, and fixes cross origin cases)
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// request log
app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// health
app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/api/contact", async (req, res) => {
  try {
    const name = String(req.body?.name ?? "").trim();
    const email = String(req.body?.email ?? "").trim();
    const message = String(req.body?.message ?? "").trim(); // optional

    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "RESEND_API_KEY missing" });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || "tekmalpradeep@gmail.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    const result = await resend.emails.send({
      from: `Portfolio Contact <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message || "(no message)"}`,
    });

    if ((result as any)?.error) {
      const errObj = (result as any).error;
      const msg =
        typeof errObj === "string"
          ? errObj
          : errObj?.message || JSON.stringify(errObj);
      return res.status(500).json({ error: msg });
    }

    return res.json({ ok: true });
  } catch (err: any) {
    return res
      .status(500)
      .json({ error: err?.message || "Failed to send" });
  }
});

// IMPORTANT: dedicated port for Vite proxy
const PORT = 3001;
app.listen(PORT, "0.0.0.0", () => console.log("Express on", PORT));