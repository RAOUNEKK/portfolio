import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import characterImg from "@/assets/raounek-character-wave.webp";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
export const Route = createFileRoute("/")({
    head: () => ({ meta: [
            { title: "Raounek Nour El Yakine — Systems Security × AI × Digital Products" },
            { name: "description", content: "Raounek Nour El Yakine's portfolio — systems security engineering, AI, digital products and thoughtful interface design." },
        ] }),
    component: Home,
});
function Home() {
    const [active, setActive] = useState(0);
    const [introDone, setIntroDone] = useState(false);
    useEffect(() => {
        const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
        const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        }), { threshold: 0.08 });
        nodes.forEach((node) => observer.observe(node));
        const timer = window.setTimeout(() => setIntroDone(true), 2450);
        return () => { observer.disconnect(); window.clearTimeout(timer); };
    }, []);
    const current = projects[active];
    return <main className="portfolio-home">
    <section className={`home-hero page-width ${introDone ? "intro-done" : ""}`} id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="name-stage" aria-label="Raounek Nour El Yakine">
            <span className="name-ghost">RAOUNEK</span>
            <h1 className="hero-name">RAOUNEK</h1>
            <div className="name-underline"/>
            <div className="name-note">NOUR EL YAKINE · SECURITY × AI × PRODUCT</div>
          </div>
          <div className="hero-description"><p>I build digital experiences where <strong>security, technology and visual thinking</strong> meet.</p><Link to="/projects" className="black-button">Explore my work <ArrowUpRight size={16}/></Link></div>
        </div>
        <div className="character-stage" aria-hidden="true">
          <div className="character-halo"/>
          <img className="hero-character" src={characterImg} alt=""/>
        </div>
      </div>
      <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="hero-line"/><span>↓</span></div>
    </section>

    <section className="white-section page-width reveal">
      <div className="section-head"><div className="section-kicker"><span>01 / ABOUT</span></div><span className="section-index">01</span></div>
      <div className="about-lead"><h2>I care about what happens <em>underneath</em> and what people see on the surface.</h2><div><p>Security taught me to question systems. Design taught me to question experiences. I like the space between both: building things that are clear, intentional and secure.</p><Link to="/about" className="underlined-link">More about me <ArrowUpRight size={15}/></Link></div></div>
    </section>

    <section className="black-section reveal"><div className="page-width"><div className="section-head light"><div className="section-kicker"><span>02 / HOW I WORK</span></div><span className="section-index">02</span></div><div className="process-intro"><h2>FROM IDEA<br />TO <em>LAUNCH.</em></h2><p>A simple loop: understand the problem, shape the experience, build it, then challenge it.</p></div><div className="process-grid">{[["01", "DEFINE", "Understand the problem, user and risk."], ["02", "DESIGN", "Shape the experience before overbuilding."], ["03", "BUILD", "Turn the idea into something real and testable."], ["04", "BREAK", "Question assumptions, test weak points and improve."]].map(([n, t, d]) => <article className="process-card" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

    <section className="work-section page-width reveal" id="work"><div className="section-head"><div className="section-kicker"><span>03 / SELECTED WORK</span></div><span className="section-index">03</span></div><div className="work-heading"><h2>PROJECTS THAT<br /><em>DO SOMETHING.</em></h2><Link to="/projects" className="round-button">VIEW ALL <ArrowUpRight size={16}/></Link></div><div className="project-showcase"><div className="project-visual"><div className="project-visual-grid"/><span className="project-number">0{active + 1}</span><div className="project-display"><small>CASE STUDY / {current.tech.slice(0, 2).join(" · ")}</small><h3>{current.title}</h3><p>{current.tagline.en}</p><div className="tag-row">{current.tech.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div><Link to="/projects/$id" params={{ id: current.id }} className="black-button project-cta">Read case study <ArrowUpRight size={16}/></Link></div><div className="project-corner">✳</div></div><div className="project-list">{projects.map((project, index) => <Link to="/projects/$id" params={{ id: project.id }} key={project.id} className={`project-row ${active === index ? "active" : ""}`} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)}><span>0{index + 1}</span><strong>{project.title}</strong><small>{project.tech.slice(0, 2).join(" · ")}</small><ArrowUpRight size={17}/></Link>)}</div></div></section>

    <section className="lavender-section page-width reveal"><div className="section-head"><div className="section-kicker"><span>04 / CURRENTLY</span></div><span className="section-index">04</span></div><div className="current-grid"><h2>LEARNING,<br /><em>BUILDING,</em><br />ITERATING.</h2><div><p>This year is about getting stronger in cybersecurity, becoming fluent enough in web development to own my code, and turning security + AI ideas into useful projects.</p><div className="check-list"><span><Check /> Cybersecurity foundations</span><span><Check /> Web development</span><span><Check /> AI × Security</span><span><Check /> Product building</span></div></div></div></section>

    <section className="contact-section page-width reveal"><div className="contact-panel"><div><div className="section-kicker"><span>05 / LET'S TALK</span></div><h2>HAVE AN IDEA?<br /><em>LET'S BUILD IT.</em></h2></div><div><p>Projects, internships, collaborations or a good conversation about cybersecurity and technology.</p><Link to="/contact" className="black-button">Get in touch <ArrowUpRight size={16}/></Link><div className="social-row"><a href={site.github} target="_blank" rel="noreferrer"><Github size={15}/> GitHub</a>{site.linkedin && <a href={site.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15}/> LinkedIn</a>}</div></div></div></section>
  </main>;
}

