import { createFileRoute } from "@tanstack/react-router";

const recipient = "yakinhrz@gmail.com";

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
        const from = process.env.RESEND_FROM_EMAIL;
        if (!apiKey || !from) {
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
            return Response.json(
              { error: "Your message could not be sent right now. Please email me directly at yakinhrz@gmail.com." },
              { status: 502 },
            );
          }

          return Response.json({ success: true });
        } catch {
          return Response.json(
            { error: "A network error occurred. Please email me directly at yakinhrz@gmail.com." },
            { status: 502 },
          );
        }
      },
    },
  },
});
