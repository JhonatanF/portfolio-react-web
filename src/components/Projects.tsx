import React from 'react';
import ProjectCard from './ProjectCard.tsx';
import { Project } from '../types/Project'; // Import the Project interface
import './Projects.css';

const projectsData: Project[] = [
  // Add your projects here!
  {
    id: 1,
    title: "E-commerce Website",
    description: "A full-featured e-commerce platform with user authentication, product browsing, shopping cart, and checkout functionality.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    imageUrl: "/placeholder.jpg", // Replace with actual image paths later
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/ecommerce-website"
  },
  {
    id: 2,
    title: "Weather App",
    description: "A mobile app that displays current weather conditions and forecasts for a user's location or searched city.",
    technologies: ["React Native", "OpenWeatherMap API"],
    imageUrl: "/placeholder.jpg", // Replace with actual image paths later
    demoUrl: "https://weatherapp.com",
  },
  {
    id: 3,
    title: "Task Manager API",
    description: "A RESTful API for managing tasks, users, and projects.",
    technologies: ["Node.js", "Express", "PostgreSQL"],
    imageUrl: "/placeholder.jpg", // Replace with actual image paths later
    githubUrl: "https://github.com/yourusername/task-manager-api"
  },
  // Add more projects...
];

const Projects: React.FC = () => {
  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;