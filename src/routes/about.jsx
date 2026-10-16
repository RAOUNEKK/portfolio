import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Heart, ShieldCheck, Sparkles } from "lucide-react";
import characterImg from "@/assets/raounek-character.webp";
import { PageHeader, PageShell } from "@/components/page";
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Raounek Nour El Yakine" },
      { name: "description", content: "A little more about Raounek Nour El Yakine." },
    ],
  }),
  component: About,
});
function About() {
  const cards = [
    [
      ShieldCheck,
      "01",
      "Security first",
      "Learning by doing: labs, web security, pentesting and security-focused projects.",
    ],
    [
      Sparkles,
      "02",
      "Creative thinking",
      "UI/UX, visual identity and product ideas are part of how I approach technical work.",
    ],
    [
      Heart,
      "03",
      "Build, then improve",
      "I prefer shipping a focused version, learning from it and making the next version better.",
    ],
  ];
  return (
    <>
      <PageHeader
        eyebrow="01 / ABOUT"
        title={
          <>
            About <em>me.</em>
          </>
        }
        subtitle="Systems Security Engineering student with a creative streak and a habit of turning ideas into projects."
      />
      <PageShell>
        <div className="about-feature reveal">
          <div className="about-feature-art">
            <div className="art-orbit" />
            <img src={characterImg} alt="Animated character representing Raounek Nour El Yakine" />
            <span className="art-note">
              the person
              <br />
              behind the projects ✦
            </span>
          </div>
          <div className="about-feature-copy">
            <div className="section-kicker">
              <span>A QUICK INTRO</span>
            </div>
            <h2>
              Curious about
              <br />
              <em>how things work.</em>
            </h2>
            <p>
              I’m studying Systems Security Engineering and building a toolkit around cybersecurity,
              AI and digital products. I care about understanding systems rather than only making
              them look good — but I also believe good design makes technical work easier to use.
            </p>
            <p>
              I’m focused on practical security skills, stronger web foundations and projects that
              can eventually become real products.
            </p>
            <div className="fact-row">
              <span>Security</span>
              <span>AI</span>
              <span>Web</span>
              <span>Creative</span>
            </div>
          </div>
        </div>
        <div className="about-principles reveal">
          {cards.map(([Icon, n, title, body]) => (
            <article key={n}>
              <span>{n}</span>
              <Icon />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <div className="next-panel reveal">
          <div className="section-kicker">
            <span>THE NEXT CHAPTER</span>
          </div>
          <h2>
            Still learning.
            <br />
            <em>Still building.</em>
          </h2>
          <Link to="/projects" className="black-button">
            See what I’ve made <ArrowUpRight size={16} />
          </Link>
        </div>
      </PageShell>
    </>
  );
}
