# Contact form setup

The contact form sends messages from the server through Resend to `yakinhrz@gmail.com`. The API key stays on the server and is never bundled into the browser.

1. Create a Resend account at https://resend.com/.
2. Add and verify a domain you control in Resend. Follow Resend's instructions to add the required DNS records. For a production portfolio, use an address on that verified domain as the sender.
3. Create an API key in Resend.
4. In your local project, create a `.env` file in the project root by copying `.env.example`.
5. Set `RESEND_API_KEY` to your real Resend API key and `RESEND_FROM_EMAIL` to a sender address on your verified domain, for example `Raounek Portfolio <contact@yourdomain.com>`.
6. Add the same two environment variables in your hosting provider's server-side environment settings. Do not commit `.env` or expose the API key in frontend variables such as `VITE_*`.
7. Restart the dev server and test the form. Check the inbox and spam folder for `yakinhrz@gmail.com`.

Until these environment variables are configured and the sender domain is verified, the form returns a clear error and asks the visitor to email `yakinhrz@gmail.com` directly. Messages are not stored in a database.
