"use client";

import { useRef, useOptimistic } from "react";
import { addGuestbookEntry } from "@/app/actions";

type GuestbookEntry = {
  id: number;
  name: string;
  message: string;
  createdAt: Date | null;
};

export default function Guestbook({ initialEntries }: { initialEntries: GuestbookEntry[] }) {
  const formRef = useRef<HTMLFormElement>(null);

  const [optimisticEntries, addOptimisticEntry] = useOptimistic(
    initialEntries,
    (state, newEntry: GuestbookEntry) => {
      return [newEntry, ...state];
    }
  );

  async function clientAction(formData: FormData) {
    const name = formData.get("name")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    if (!name.trim() || !message.trim()) return;

    const newEntry: GuestbookEntry = {
      id: Math.random(), // Temporary ID for the optimistic UI
      name,
      message,
      createdAt: new Date(),
    };

    // Optimistically update UI
    addOptimisticEntry(newEntry);
    
    // Clear the form instantly
    formRef.current?.reset();

    // Call the server action to persist
    await addGuestbookEntry(formData);
  }

  return (
    <section className="mt-24 border-t border-zinc-900 pt-16 mb-8">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-emerald-500 text-lg">➜</span>
        <h2 className="text-2xl font-bold text-white tracking-tight">/guestbook</h2>
      </div>

      <form ref={formRef} action={clientAction} className="flex flex-col gap-4 mb-16 max-w-2xl">
        <input
          type="text"
          name="name"
          placeholder="Name or handle"
          required
          maxLength={255}
          className="bg-zinc-900/50 border border-zinc-800 rounded px-4 py-2.5 text-sm text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
        />
        <textarea
          name="message"
          placeholder="Leave a message in the ledger..."
          required
          rows={3}
          className="w-full bg-zinc-900/50 border border-zinc-800 rounded px-4 py-3 text-sm text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
        />
        <div className="flex justify-end mt-2">
          <button
            type="submit"
            className="px-6 py-2 bg-zinc-900 border border-zinc-800 rounded text-sm font-semibold tracking-wider text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
          >
            [ SUBMIT ]
          </button>
        </div>
      </form>

      <div className="flex flex-col gap-6 font-mono text-sm max-w-2xl">
        {optimisticEntries.map((entry) => (
          <div key={entry.id} className="border-l-2 border-zinc-800 pl-4 py-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-zinc-600 text-xs">
                [{entry.createdAt ? new Date(entry.createdAt).toISOString().split('T')[0] : "just now"}]
              </span>
              <span className="text-cyan-400 font-semibold">{entry.name}</span>
            </div>
            <p className="text-zinc-400 leading-relaxed break-words whitespace-pre-wrap">
              {entry.message}
            </p>
          </div>
        ))}
        {optimisticEntries.length === 0 && (
          <div className="text-zinc-600 italic">No entries found. Be the first to write in the ledger.</div>
        )}
      </div>
    </section>
  );
}
