import { createFileRoute } from "@tanstack/react-router";

const recipient = "yakinhrz@gmail.com";

// Resend refuses to send from free-mail addresses (gmail.com, outlook.com...) because you
// can't verify those domains. Without your own verified domain, the only sender Resend
// accepts is its shared test address, which can deliver to the email of your Resend account.
const sharedSender = "Raounek Portfolio <onboarding@resend.dev>";
const freeMailDomains = /@(gmail|googlemail|yahoo|hotmail|outlook|live|icloud|proton|protonmail)\./i;

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return Response.json({ error: "Invalid request body." }, { status: 400 });
        }

        if (!payload || typeof payload !== "object") {
          return Response.json({ error: "Invalid request body." }, { status: 400 });
        }

        const data = payload as Record<string, unknown>;
        const name = typeof data.name === "string" ? data.name.trim() : "";
        const email = typeof data.email === "string" ? data.email.trim() : "";
        const message = typeof data.message === "string" ? data.message.trim() : "";

        if (!name || !email || !message) {
          return Response.json({ error: "Please complete all fields." }, { status: 400 });
        }
        if (name.length > 120 || email.length > 254 || message.length > 10000) {
          return Response.json({ error: "One or more fields are too long." }, { status: 400 });
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
        }

        const apiKey = process.env.RESEND_API_KEY;
        const configuredFrom = process.env.RESEND_FROM_EMAIL?.trim();
        const from = configuredFrom && !freeMailDomains.test(configuredFrom) ? configuredFrom : sharedSender;
        if (!apiKey) {
          return Response.json(
            { error: "The contact form is not configured yet. Please email me directly at yakinhrz@gmail.com." },
            { status: 503 },
          );
        }

        try {
          const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from,
              to: [recipient],
              reply_to: email,
              subject: `Portfolio message from ${name}`,
              text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            }),
          });

          if (!response.ok) {
            // Visible in your server / Vercel function logs so the real reason is never hidden.
            console.error("[contact] Resend rejected the email:", response.status, await response.text());
            return Response.json(
              { error: "Your message could not be sent right now. Please email me directly at yakinhrz@gmail.com." },
              { status: 502 },
            );
          }

          return Response.json({ success: true });
        } catch (err) {
          console.error("[contact] Network error calling Resend:", err);
          return Response.json(
            { error: "A network error occurred. Please email me directly at yakinhrz@gmail.com." },
            { status: 502 },
          );
        }
      },
    },
  },
});
