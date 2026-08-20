import { db } from "@/db";
import { projects, guestbook } from "@/db/schema";
import { eq, desc } from "drizzle-orm";
import Header from "@/components/Header";
import FilterNav from "@/components/FilterNav";
import ProjectGrid from "@/components/ProjectGrid";
import Footer from "@/components/Footer";
import Guestbook from "@/components/Guestbook";

// Next.js 15 requires searchParams to be a Promise
type PageProps = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

export default async function Home({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;
  const currentCategoryRaw = resolvedParams.category;
  const currentCategory = currentCategoryRaw ? currentCategoryRaw.toUpperCase() : undefined;

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
    .orderBy(desc(projects.createdAt));

  const fetchedGuestbook = await db
    .select()
    .from(guestbook)
    .orderBy(desc(guestbook.createdAt));

  return (
    <div className="bg-zinc-950 text-zinc-300 font-mono min-h-screen selection:bg-zinc-800 selection:text-white flex flex-col">
      <div className="flex-grow max-w-5xl mx-auto px-6 pt-24 pb-20 w-full">
        <Header />
        <FilterNav currentCategory={currentCategoryRaw} />
        <ProjectGrid projects={fetchedProjects} />
        <Guestbook initialEntries={fetchedGuestbook} />
      </div>
      <Footer />
    </div>
  );
}