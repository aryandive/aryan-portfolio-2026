import React from 'react';
import { ExternalLink } from 'lucide-react';

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

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const isHardware = project.category === 'HARDWARE';
  const categoryColorClass = isHardware
    ? "border-amber-900/50 text-amber-500 bg-amber-950/30"
    : "border-emerald-900/50 text-emerald-500 bg-emerald-950/30";

  const hoverColorClass = isHardware ? "group-hover:text-amber-400" : "group-hover:text-emerald-400";

  return (
    <article className="project-card flex flex-col justify-between p-6 rounded-lg border border-zinc-800 bg-zinc-900/40 cursor-pointer group relative">
      <div>
        <div className="flex justify-between items-start mb-4">
          <h3 className={`text-xl font-bold text-white transition-colors ${hoverColorClass}`}>
            {project.title}
          </h3>
          <div className="flex gap-2 items-center">
            <span className={`text-[10px] px-2 py-1 rounded border ${categoryColorClass}`}>
              {project.category}
            </span>
            {(project.liveUrl || project.githubUrl) && (
              <a
                href={project.liveUrl || project.githubUrl || '#'}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 hover:text-white transition-colors"
                title="Live Demo / Code"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
        <p className="text-sm text-zinc-400 mb-6 font-sans line-clamp-3">
          {project.summary}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 text-xs">
        {project.techStack.map((tech) => (
          <span key={tech} className="px-2 py-1 rounded bg-zinc-800/80 text-zinc-300">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
