import { projects } from "../../data/projects";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import "./Projects.css";

export function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="section__inner">
        <h2 className="section__title">Projects</h2>
        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
