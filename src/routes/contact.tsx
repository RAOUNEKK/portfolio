import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check, Github, Linkedin, Mail, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { PageShell } from "@/components/page";
import { site } from "@/lib/site";
import character from "@/assets/raounek-character-wave.webp";
export const Route = createFileRoute("/contact")({
    head: () => ({
        meta: [
            { title: "Contact — Raounek Nour El Yakine" },
            { name: "description", content: "Get in touch with Raounek Nour El Yakine." },
        ],
    }),
    component: Contact,
});
function Contact() {
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState("");
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const update = (key: keyof typeof form) => (e: {
        target: {
            value: string;
        };
    }) => setForm((f) => ({ ...f, [key]: e.target.value }));
    const submit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setSending(true);
        setSent(false);
        setError("");
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.error || "Your message could not be sent.");
            setSent(true);
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            setError(err instanceof Error ? err.message : "Your message could not be sent. Please try again.");
        } finally {
            setSending(false);
        }
    };
    return (<main className="contact-page">
      <section className="contact-hero page-width reveal">
        <div className="contact-hero-copy">
          <div className="section-kicker"><span>05 / CONTACT</span></div>
          <p className="contact-hero-overline">LET'S BUILD SOMETHING WORTH REMEMBERING.</p>
          <h1>Let’s talk<span>.</span></h1>
          <p className="contact-hero-subtitle">
            Have an idea, a collaboration, an opportunity, or a problem that needs a creative technical mind?
            <strong> I’d love to hear it.</strong>
          </p>
          <a className="black-button contact-hero-cta" href="#message">
            Start a conversation <ArrowUpRight size={17}/>
          </a>
        </div>

        <div className="contact-hero-art" aria-hidden="true">
          <div className="contact-art-grid"/>
          <div className="contact-lavender-orb"/>
          <span className="contact-sticker contact-sticker-one">AVAILABLE FOR<br />GOOD IDEAS</span>
          <span className="contact-sticker contact-sticker-two">✦ 2026</span>
          <img src={character} alt=""/>
          <span className="contact-art-caption">RAOUNEK NOUR EL YAKINE / SYSTEMS SECURITY + CREATIVE TECH</span>
        </div>
      </section>

      <div className="contact-ticker" aria-hidden="true">
        <div>CYBERSECURITY <b>✦</b> AI <b>✦</b> DIGITAL PRODUCTS <b>✦</b> UI / UX <b>✦</b> LET'S CREATE <b>✦</b> CYBERSECURITY <b>✦</b> AI <b>✦</b> DIGITAL PRODUCTS <b>✦</b></div>
      </div>

      <PageShell>
        <section className="contact-connect reveal">
          <div className="contact-section-heading">
            <div className="section-kicker"><span>01 / FIND ME</span></div>
            <h2>Choose your<br /><em>way in.</em></h2>
          </div>
          <div className="contact-social-grid">
            <a className="contact-social-card" href={`mailto:${site.email}`}>
              <span className="contact-social-number">01</span>
              <Mail size={23}/>
              <div><small>EMAIL</small><strong>Say hello.</strong><span>{site.email}</span></div>
              <ArrowUpRight size={18}/>
            </a>
            {site.linkedin && (<a className="contact-social-card lavender" href={site.linkedin} target="_blank" rel="noreferrer">
              <span className="contact-social-number">02</span>
              <Linkedin size={23}/>
              <div><small>LINKEDIN</small><strong>Let’s connect.</strong><span>Professional / creative work</span></div>
              <ArrowUpRight size={18}/>
            </a>)}
            <a className="contact-social-card black" href={site.github} target="_blank" rel="noreferrer">
              <span className="contact-social-number">03</span>
              <Github size={23}/>
              <div><small>GITHUB</small><strong>See the work.</strong><span>Projects / experiments / code</span></div>
              <ArrowUpRight size={18}/>
            </a>
          </div>
        </section>

        <section className="contact-message reveal" id="message">
          <div className="contact-message-intro">
            <div className="section-kicker"><span>02 / MESSAGE</span></div>
            <h2>Tell me what you’re <em>thinking.</em></h2>
            <p>
              No complicated briefing needed. Tell me what you’re building, what you’re stuck on,
              or simply what you have in mind.
            </p>
          </div>

          <form className="contact-form-new" onSubmit={submit}>
            <label><span>01 / NAME</span><input required placeholder="Your name" value={form.name} onChange={update("name")}/></label>
            <label><span>02 / EMAIL</span><input type="email" required placeholder="you@example.com" value={form.email} onChange={update("email")}/></label>
            <label className="message-field"><span>03 / YOUR MESSAGE</span><textarea rows={5} required placeholder="Tell me a little about it..." value={form.message} onChange={update("message")}/></label>
            <button className="black-button contact-send" type="submit">
              {sent ? <><Check size={17}/> Message sent</> : sending ? "Sending…" : <><Send size={17}/> Send message</>}
            </button>
            {sent && <p className="contact-form-status" role="status">Thanks! Your message has been sent successfully.</p>}
            {error && (<p className="contact-form-status contact-form-error" role="alert">
              {error}{" "}
              <a href={`mailto:${site.email}?subject=${encodeURIComponent(`Portfolio message from ${form.name || "a visitor"}`)}&body=${encodeURIComponent(form.message)}`}>
                Open it in your email app instead →
              </a>
            </p>)}
          </form>
        </section>

        <section className="contact-bottom reveal">
          <div><span>ONE LAST THING</span><h3>Let’s make the<br /><em>next thing</em> interesting.</h3></div>
          <div className="contact-bottom-mark">raounek<span>.</span></div>
        </section>
      </PageShell>
    </main>);
}

