import { getAllNotes } from "@/lib/notes";
import Link from "next/link";

export default function NotesIndex() {
  const notes = getAllNotes();

  return (
    <main className="max-w-3xl mx-auto py-12 px-6 min-h-screen">
      <header className="mb-16 border-b border-zinc-900 pb-8">
        <h1 className="text-4xl font-bold tracking-tight text-white mb-4">Engineering Ledger</h1>
        <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
          A collection of unpolished technical notes, architecture decisions, and debugging logs. Bypassing the database for frictionless publishing.
        </p>
      </header>

      <div className="flex flex-col gap-6">
        {notes.map((note) => (
          <Link 
            key={note.slug} 
            href={`/notes/${note.slug}`}
            className="group block p-4 -mx-4 rounded-md hover:bg-zinc-900/30 border border-transparent hover:border-zinc-800/50 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-2">
              <span className="text-sm font-mono text-zinc-500 min-w-[120px]">
                {note.date}
              </span>
              <h2 className="text-lg font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors">
                {note.title}
              </h2>
            </div>
            <p className="text-sm text-zinc-500 sm:ml-[144px]">
              {note.summary}
            </p>
          </Link>
        ))}

        {notes.length === 0 && (
          <div className="text-zinc-500 text-sm font-mono">No notes found.</div>
        )}
      </div>
    </main>
  );
}
