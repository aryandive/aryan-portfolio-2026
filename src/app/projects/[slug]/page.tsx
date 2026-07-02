import { notFound } from "next/navigation";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";
import { GitBranch, Globe } from "lucide-react";
import { MDXRemote } from 'next-mdx-remote/rsc';
import fs from 'fs';
import path from 'path';
import rehypePrettyCode from 'rehype-pretty-code';

const rehypeOptions = {
  theme: 'github-dark-dimmed',
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage(props: PageProps) {
  const params = await props.params;
  const slug = params.slug;

  // 1. Fetch metadata
  const projectList = await db
    .select()
    .from(projects)
    .where(eq(projects.slug, slug))
    .limit(1);

  if (!projectList.length) {
    return notFound();
  }

  const project = projectList[0];

  // 2. Read the local MDX file
  const filePath = path.join(process.cwd(), 'src', 'content', 'projects', `${slug}.mdx`);
  
  let fileContent = '';
  try {
    fileContent = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error("MDX load error:", error);
    return <div className="text-zinc-500 mt-20 text-center font-mono">404 | Case Study Not Found</div>;
  }

  return (
    <main className="max-w-3xl mx-auto py-12 px-6 min-h-screen">
      {/* Header / Navigation */}
      <div className="mb-12">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-mono text-zinc-500 hover:text-white transition-colors mb-12"
        >
          <span className="text-emerald-500 mr-2">➜</span> cd ..
        </Link>
        
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">{project.title}</h1>
            <span className="text-[10px] uppercase tracking-widest font-mono px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-emerald-400">
              {project.category}
            </span>
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl mt-2">
            {project.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 border-b border-zinc-900 pb-8">
            <div className="flex flex-wrap items-center gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="text-xs font-mono px-1.5 py-0.5 bg-zinc-900/50 border border-zinc-800/50 rounded text-cyan-400/80">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex-1" />

            <div className="flex items-center gap-4">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  <GitBranch className="w-4 h-4" />
                </a>
              )}
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-zinc-500 hover:text-emerald-400 transition-colors"
                >
                  <Globe className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Render the MDX dynamically */}
      <article className="prose prose-invert prose-zinc max-w-none prose-pre:bg-[#22272e] prose-pre:border prose-pre:border-zinc-800 prose-a:text-cyan-400">
        <MDXRemote 
          source={fileContent} 
          options={{
            mdxOptions: {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              rehypePlugins: [[rehypePrettyCode as any, rehypeOptions]],
            }
          }} 
        />
      </article>
    </main>
  );
}
