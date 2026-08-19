import type { Project } from "../../types";
import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <li className="project-card">
      <img
        className="project-card__image"
        src={project.image}
        alt={`Screenshot of ${project.name}`}
      />
      <div className="project-card__body">
        <h3 className="project-card__name">{project.name}</h3>
        <div className="project-card__description">
          {project.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="project-card__links">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="project-card__link project-card__link_github"
          >
            Code
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="project-card__link project-card__link_live-site"
          >
            Live
          </a>
        </div>
      </div>
    </li>
  );
}
