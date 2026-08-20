import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-900 bg-zinc-950 mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
        <div>
          <p>&copy; {new Date().getFullYear()} Aryan Dive. Built with Next.js & Neon DB.</p>
        </div>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Email</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
