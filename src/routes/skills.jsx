import { createFileRoute } from "@tanstack/react-router";
import { Code2, Database, Palette, Server, Shield, Terminal, Wrench } from "lucide-react";
import { PageHeader, PageShell } from "@/components/page";
export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Raounek Nour El Yakine" },
      { name: "description", content: "Current technical and creative toolkit." },
    ],
  }),
  component: Skills,
});
const groups = [
  [
    Shield,
    "01",
    "Cybersecurity",
    ["Web security", "Pentesting", "Linux", "Cryptography", "Network Security"],
  ],
  [
    Code2,
    "02",
    "Frontend",
    ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
  ],
  [Server, "03", "Backend", ["Node.js", "Express.js", "REST APIs", "JWT auth"]],
  [Terminal, "04", "Programming", ["Python", "Java", "C", "SQL"]],
  [
    Palette,
    "05",
    "UI / UX",
    ["Figma", "Visual design", "Prototyping", "Product thinking"],
  ],
  [
    Database,
    "06",
    "Data & systems",
    ["PostgreSQL", "MongoDB", "SQL", "APIs"],
  ],
  [Wrench, "07", "Tools", ["Git", "GitHub", "VS Code", "Docker", "Android tooling"]],
];

function Skills() {
  return (
    <>
      <PageHeader
        eyebrow="02 / TOOLKIT"
        title={
          <>
            My <em>skills.</em>
          </>
        }
        subtitle=""
      />
      <PageShell>
        <div className="skills-grid reveal">
          {groups.map(([Icon, n, title, items]) => (
            <article key={title}>
              <div className="skill-top">
                <span>{n}</span>
                <Icon />
              </div>
              <h2>{title}</h2>
              <div className="skill-tags">
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="skill-line">
                <i />
              </div>
            </article>
          ))}
        </div>
      </PageShell>
    </>
  );
}
