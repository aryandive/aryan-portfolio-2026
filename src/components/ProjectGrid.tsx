import React from 'react';
import ProjectCard from './ProjectCard';

type Project = {
  id: number;
  title: string;
  slug: string;
  category: "HARDWARE" | "CLOUD";
  summary: string;
  techStack: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  createdAt: Date | null;
};

type ProjectGridProps = {
  projects: Project[];
};

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-6" id="projects-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
      {projects.length === 0 && (
        <div className="col-span-full py-12 text-center text-zinc-500 font-sans">
          No projects found for this category.
        </div>
      )}
    </main>
  );
}
