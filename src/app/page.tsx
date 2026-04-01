import { db } from "@/db";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";

// Next.js 15 requires searchParams to be a Promise
type PageProps = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

export default async function Home({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;
  const currentCategory = resolvedParams.category;

  // 1. Fetch data directly from Neon DB (Server-Side)
  // If a category exists in the URL, filter the query. Otherwise, fetch all.
  const fetchedProjects = await db
    .select()
    .from(projects)
    .where(
      currentCategory
        ? eq(projects.category, currentCategory as "HARDWARE" | "CLOUD")
        : undefined
    )
    .orderBy(projects.createdAt);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 p-8 md:p-24 font-mono">
      {/* Hero Section */}
      <header className="max-w-4xl mb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-white">
          Aryan Dive
        </h1>
        <h2 className="text-xl text-neutral-400 mb-6">
          Electronics & Computer Engineering | Full Stack Developer
        </h2>
        <p className="text-neutral-500 max-w-2xl leading-relaxed">
          Bridging the gap between low-level embedded firmware (C/C++, ESP32)
          and highly scalable cloud architectures (Next.js, FastAPI, PostgreSQL).
        </p>
      </header>

      {/* The URL-Driven Filter Bar */}
      <nav className="flex gap-4 mb-12 border-b border-neutral-800 pb-4">
        <Link
          href="/"
          className={`px-4 py-2 text-sm transition-colors hover:text-white ${
            !currentCategory ? "text-white font-bold border-b-2 border-white" : "text-neutral-500"
          }`}
        >
          ALL PROJECTS
        </Link>
        <Link
          href="/?category=CLOUD"
          className={`px-4 py-2 text-sm transition-colors hover:text-emerald-400 ${
            currentCategory === "CLOUD" ? "text-emerald-400 font-bold border-b-2 border-emerald-400" : "text-neutral-500"
          }`}
        >
          CLOUD & SAAS
        </Link>
        <Link
          href="/?category=HARDWARE"
          className={`px-4 py-2 text-sm transition-colors hover:text-amber-400 ${
            currentCategory === "HARDWARE" ? "text-amber-400 font-bold border-b-2 border-amber-400" : "text-neutral-500"
          }`}
        >
          HARDWARE & ECE
        </Link>
      </nav>

      {/* The Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
        {fetchedProjects.map((project) => (
          <article
            key={project.id}
            className="border border-neutral-800 bg-neutral-900/50 p-6 rounded-lg hover:border-neutral-700 transition-colors group"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-neutral-200 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <span
                className={`text-xs px-2 py-1 rounded-full border ${
                  project.category === "HARDWARE"
                    ? "border-amber-400/30 text-amber-400 bg-amber-400/10"
                    : "border-emerald-400/30 text-emerald-400 bg-emerald-400/10"
                }`}
              >
                {project.category}
              </span>
            </div>
            
            <p className="text-neutral-400 text-sm mb-6 line-clamp-2">
              {project.summary}
            </p>

            {/* Render the JSONB tech stack array */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
        
        {fetchedProjects.length === 0 && (
          <div className="col-span-full py-12 text-center text-neutral-500">
            No projects found for this category.
          </div>
        )}
      </div>
    </main>
  );
}