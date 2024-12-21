export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string; // Placeholder for now
    demoUrl?: string;
    githubUrl?: string;
  }