import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { PageShell } from "@/components/page";
import { useApp } from "@/lib/app-context";
import { getProject, projects } from "@/lib/projects";
export const Route = createFileRoute("/projects/$id")({
  loader: ({ params }) => {
    const project = getProject(params.id);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Raounek Nour El Yakine` },
          { name: "description", content: loaderData.project.tagline.en },
        ]
      : [{ title: "Project — Raounek Nour El Yakine" }],
  }),
  notFoundComponent: NotFoundProject,
  component: ProjectDetail,
});
function NotFoundProject() {
  return (
    <PageShell>
      <div className="not-found">
        <span>404</span>
        <h1>Project not found.</h1>
        <Link to="/projects" className="black-button">
          Back to projects <ArrowUpRight size={16} />
        </Link>
      </div>
    </PageShell>
  );
}
const labels = {
  stack: { en: "Stack used", fr: "Technologies utilisées", ar: "التقنيات المستخدمة" },
  index: { en: "Index", fr: "Sommaire", ar: "الفهرس" },
};
function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const { t, lang } = useApp();
  const sections = [
    { key: "case.overview", body: project.overview[lang] },
    { key: "case.problem", body: project.problem[lang] },
    { key: "case.research", body: project.research[lang] },
    { key: "case.design", body: project.design[lang] },
    { key: "case.dev", body: project.development[lang] },
    { key: "case.challenges", body: project.challenges[lang] },
    { key: "case.solution", body: project.solution[lang] },
    { key: "case.results", body: project.results[lang] },
  ];
  return (
    <PageShell>
      <div className="project-detail-head">
        <Link to="/projects" className="back-link">
          <ArrowLeft size={15} /> {t("case.back")}
        </Link>
        <div className="detail-kicker">CASE STUDY / {project.tech.slice(0, 3).join(" · ")}</div>
        <h1>{project.title}</h1>
        <p>{project.tagline[lang]}</p>
        <div className="detail-actions">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="black-button">
              Live project <ArrowUpRight size={16} />
            </a>
          )}
          {project.code && (
            <a href={project.code} target="_blank" rel="noreferrer" className="outline-button">
              <Github size={16} /> Source code
            </a>
          )}
        </div>
      </div>
      <div className="detail-grid">
        <aside className="detail-sidebar">
          <div>
            <span>{labels.stack[lang]}</span>
            <ul>
              {project.tech.map((tech, i) => (
                <li key={tech}>
                  <b>{String(i + 1).padStart(2, "0")}</b>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span>{labels.index[lang]}</span>
            <ol>
              {sections.map((section, i) => (
                <li key={section.key}>
                  <a href={`#detail-${i}`}>
                    {String(i + 1).padStart(2, "0")} · {t(section.key)}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>
        <article className="detail-content">
          {sections.map((section, i) => (
            <section key={section.key} id={`detail-${i}`} className="detail-section reveal">
              <div className="detail-section-title">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h2>{t(section.key)}</h2>
              </div>
              <p>{section.body}</p>
            </section>
          ))}
          {project.images && project.images.length > 0 && (
            <section className="detail-gallery">
              <div className="detail-section-title">
                <span>09</span>
                <h2>{t("case.gallery")}</h2>
              </div>
              <div className="gallery-grid">
                {project.images.map((src, n) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${project.title} screenshot ${n + 1}`}
                    loading="lazy"
                    className="gallery-shot"
                  />
                ))}
              </div>
            </section>
          )}
        </article>
      </div>
      <div className="more-work">
        <span>MORE WORK</span>
        <div>
          {projects
            .filter((p) => p.id !== project.id)
            .slice(0, 3)
            .map((p) => (
              <Link key={p.id} to="/projects/$id" params={{ id: p.id }}>
                {p.title}
                <ArrowUpRight size={16} />
              </Link>
            ))}
        </div>
      </div>
    </PageShell>
  );
}
