import { getNoteBySlug, getAllNotes } from "@/lib/notes";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import Link from "next/link";

const rehypeOptions = {
  theme: 'github-dark-dimmed',
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const notes = getAllNotes();
  return notes.map((note) => ({
    slug: note.slug,
  }));
}

export default async function NotePage(props: PageProps) {
  const params = await props.params;
  const slug = params.slug;

  let note;
  try {
    note = getNoteBySlug(slug);
  } catch {
    return <div className="text-zinc-500 mt-20 text-center font-mono">404 | Ledger Entry Not Found</div>;
  }

  const { meta, content } = note;

  return (
    <main className="max-w-3xl mx-auto py-12 px-6 min-h-screen">
      <div className="mb-12">
        <Link 
          href="/notes" 
          className="inline-flex items-center text-sm font-mono text-zinc-500 hover:text-white transition-colors mb-12"
        >
          <span className="text-emerald-500 mr-2">➜</span> cd ..
        </Link>
        
        <header className="border-b border-zinc-900 pb-8 mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            {meta.title}
          </h1>
          <div className="flex items-center gap-4 text-sm">
            <span className="font-mono text-zinc-500">{meta.date}</span>
          </div>
        </header>
      </div>

      <article className="prose prose-invert prose-zinc max-w-none prose-pre:bg-[#22272e] prose-pre:border prose-pre:border-zinc-800 prose-a:text-cyan-400">
        <MDXRemote 
          source={content} 
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
