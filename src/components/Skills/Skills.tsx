import { skillGroups } from "../../data/skills";
import "./Skills.css";

export function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="section-inner">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.category} className="skills-group">
              <h3 className="skills-group-title">{group.category}</h3>
              <ul className="skills-list">
                {group.items.map((item) => (
                  <li key={item} className="skills-tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
