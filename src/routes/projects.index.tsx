import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHeader, PageShell } from "@/components/page";
import { projects } from "@/lib/projects";
export const Route = createFileRoute("/projects/")({ head: () => ({ meta: [{ title: "Projects — Raounek Nour El Yakine" }, { name: "description", content: "Selected work across cybersecurity, AI, web and UI/UX." }] }), component: Projects });
function Projects() { return <><PageHeader eyebrow="03 / PROJECTS" title={<>My <em>projects.</em></>} subtitle="A mix of product ideas, interfaces, experiments and security-focused work."/><PageShell><div className="projects-index-grid reveal">{projects.map((p, i) => <Link key={p.id} to="/projects/$id" params={{ id: p.id }} className={`project-index-card card-${i % 4}`}><div className="project-index-top"><span>0{i + 1}</span><ArrowUpRight size={17}/></div><div className="project-index-body"><small>{p.tech.slice(0, 3).join(" · ")}</small><h2>{p.title}</h2><p>{p.tagline.en}</p></div><div className="project-index-bottom">VIEW CASE STUDY <span>↗</span></div></Link>)}</div></PageShell></>; }

