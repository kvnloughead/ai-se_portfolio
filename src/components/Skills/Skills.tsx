import { skillGroups } from "../../data/skills";
import "./Skills.css";

export function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="section__inner">
        <h2 className="section__title">Skills</h2>
        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div key={group.category} className="skills-group">
              <h3 className="skills__group-title">{group.category}</h3>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item} className="skills__tag">
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
