import { createFileRoute } from "@tanstack/react-router";
import { Code2, Database, Palette, Shield, Terminal, Wrench } from "lucide-react";
import { PageHeader, PageShell } from "@/components/page";
export const Route = createFileRoute("/skills")({ head: () => ({ meta: [{ title: "Skills — Raounek Nour El Yakine" }, { name: "description", content: "Current technical and creative toolkit." }] }), component: Skills });
const groups = [
    [Shield, "01", "Cybersecurity", ["Web security", "Pentesting", "Linux", "TryHackMe", "Security concepts"]],
    [Code2, "02", "Web", ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Vite"]],
    [Terminal, "03", "Programming", ["Python", "Java", "C", "SQL", "Algorithms"]],
    [Palette, "04", "UI / UX", ["Figma", "Visual design", "Typography", "Prototyping", "Product thinking"]],
    [Database, "05", "Data & systems", ["PostgreSQL", "APIs", "Networking", "Linux systems"]],
    [Wrench, "06", "Tools", ["Git", "GitHub", "VS Code", "Docker", "Android tooling"]],
] as const;
function Skills() { return <><PageHeader eyebrow="02 / TOOLKIT" title={<>My <em>skills.</em></>} subtitle="A snapshot of the areas I’m actively building competence in — not a claim that I know everything."/><PageShell><div className="skills-grid reveal">{groups.map(([Icon, n, title, items]) => <article key={title}><div className="skill-top"><span>{n}</span><Icon /></div><h2>{title}</h2><div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div><div className="skill-line"><i /></div></article>)}</div></PageShell></>; }

