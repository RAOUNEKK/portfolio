import type { ReactNode } from "react";
import { BriefcaseBusiness, Code2, GraduationCap, Palette, Sparkles } from "lucide-react";
import buttonsImg from "@/assets/things/buttons.jpg";
import clip2 from "@/assets/things/clip-2.png";
import clip6 from "@/assets/things/clip-6.png";
import clip9 from "@/assets/things/clip-9.png";
import clip15 from "@/assets/things/clip-15.png";
import clip17 from "@/assets/things/clip-17.png";
import iconsImg from "@/assets/things/icons.jpg";
import lettersImg from "@/assets/things/letters.jpg";
const education = [
    ["NOW", "ENSTA Algiers", "Systems Security Engineering", "3rd year"],
    ["FOCUS", "Computer Engineering", "Cybersecurity · Web · Product", "Current"],
];
const experience = [
    ["01", "Web Development", "Building responsive interfaces and practical web products."],
    ["02", "UI / UX Design", "Turning ideas into clear, expressive and usable interfaces."],
    ["03", "Creative Projects", "Visual identity, portfolio experiences and product concepts."],
];
const skills = ["UI / UX", "Web Development", "Cybersecurity", "Branding", "Creative Coding", "Product Ideas"];
const software = ["Figma", "VS Code", "Git", "React", "TypeScript", "Photoshop"];
export function PortfolioBoard() {
    return (<section className="portfolio-board-wrap mx-auto mt-10 max-w-7xl px-4 md:mt-16" aria-label="Portfolio profile board">
      <div className="portfolio-board animate-paper">
        <img src={clip2} alt="" className="board-asset board-clip-one" aria-hidden="true"/>
        <img src={clip6} alt="" className="board-asset board-clip-two" aria-hidden="true"/>
        <img src={clip9} alt="" className="board-asset board-clip-three" aria-hidden="true"/>
        <img src={clip15} alt="" className="board-asset board-clip-four" aria-hidden="true"/>
        <img src={clip17} alt="" className="board-asset board-clip-five" aria-hidden="true"/>
        <img src={buttonsImg} alt="Decorative buttons" className="board-asset board-buttons"/>
        <img src={iconsImg} alt="Decorative stationery icons" className="board-asset board-icons"/>

        <div className="board-header">
          <div>
            <div className="board-kicker"><span className="board-dot"/> PERSONAL / PROFILE BOARD</div>
            <h2 className="board-title">
              A little <span className="ink-cyan">snapshot</span> of what I do
            </h2>
          </div>
          <div className="board-mini-note">
            <Sparkles className="h-4 w-4"/>
            <span>creative + curious</span>
          </div>
        </div>

        <div className="board-grid">
          <BoardPanel className="board-education" title="Education" tone="melon" icon={<GraduationCap />}>
            <div className="board-timeline">
              {education.map(([year, school, field, detail]) => (<div key={year} className="board-row">
                  <span className="board-year">{year}</span>
                  <div>
                    <strong>{school}</strong>
                    <span>{field}</span>
                    <small>{detail}</small>
                  </div>
                </div>))}
            </div>
          </BoardPanel>

          <BoardPanel className="board-experience" title="Experience" tone="cyan" icon={<BriefcaseBusiness />}>
            <div className="board-experience-list">
              {experience.map(([number, title, body], index) => (<article key={number} className={`board-experience-item item-${index}`}>
                  <span className="board-number">{number}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{body}</p>
                  </div>
                </article>))}
            </div>
          </BoardPanel>

          <BoardPanel className="board-skills" title="Skills" tone="apricot" icon={<Palette />}>
            <div className="skill-paper-cloud">
              {skills.map((skill, i) => <span key={skill} className={`skill-paper skill-paper-${i % 6}`}>{skill}</span>)}
            </div>
          </BoardPanel>

          <BoardPanel className="board-software" title="Software" tone="lavender" icon={<Code2 />}>
            <div className="software-grid">
              {software.map((tool, i) => <span key={tool} className={`software-chip software-${i % 6}`}>{tool}</span>)}
            </div>
            <div className="board-letters-strip" aria-hidden="true">
              <img src={lettersImg} alt=""/>
            </div>
          </BoardPanel>
        </div>

        <div className="board-footer-strip">
          <span>DESIGN</span><i>✦</i><span>DEVELOP</span><i>✦</i><span>SECURE</span><i>✦</i><span>CREATE</span>
        </div>
      </div>
    </section>);
}
function BoardPanel({ title, tone, icon, className = "", children }: {
    title: string;
    tone: "melon" | "cyan" | "apricot" | "lavender";
    icon: ReactNode;
    className?: string;
    children: ReactNode;
}) {
    return (<section className={`board-panel board-panel-${tone} ${className}`}>
      <div className="board-panel-title">
        <span className="board-panel-icon">{icon}</span>
        <h3>{title}</h3>
      </div>
      {children}
    </section>);
}

