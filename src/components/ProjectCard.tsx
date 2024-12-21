import React from 'react';
import { Project } from '../types/Project';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul>
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <div className="project-links">
        {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Demo</a>}
        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>}
      </div>
    </div>
  );
};

export default ProjectCard;