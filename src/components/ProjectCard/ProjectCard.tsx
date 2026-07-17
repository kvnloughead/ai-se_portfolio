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
        className="project-card-image"
        src={project.image}
        alt={`Screenshot of ${project.name}`}
      />
      <div className="project-card-body">
        <h3 className="project-card-name">{project.name}</h3>
        <div className="project-card-description">
          {project.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="project-card-links">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="project-card-link"
          >
            <GithubIcon /> Code
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="project-card-link"
          >
            <ExternalLinkIcon /> Live
          </a>
        </div>
      </div>
    </article>
  );
}
