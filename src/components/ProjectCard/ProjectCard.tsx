import type { Project } from "../../types";
import { GithubIcon, ExternalLinkIcon } from "../Icons/Icons";
import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
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
            className="project-card__link"
          >
            <GithubIcon /> Code
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="project-card__link"
          >
            <ExternalLinkIcon /> Live
          </a>
        </div>
      </div>
    </article>
  );
}
