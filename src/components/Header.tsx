import Link from 'next/link';

export default function Header() {
  return (
    <header className="mb-20">
      {/* Top Row: Name & Links */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-900 pb-6 mb-6 gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Aryan Dive</h1>
        </div>
        <div className="flex gap-6 text-sm font-semibold tracking-wider">
          <Link href="/" className="text-zinc-500 hover:text-white transition-colors">
            [ Profile ]
          </Link>
          <Link href="/notes" className="text-zinc-500 hover:text-white transition-colors">
            [ Notes ]
          </Link>
        </div>
      </div>

      {/* Bio & Tech Stack */}
      <h2 className="text-lg text-zinc-400 mb-6 font-sans">
        Electronics & Computer Engineering | Full Stack Developer
      </h2>
      <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 mb-8">
        Bridging the gap between low-level embedded firmware and highly scalable cloud architectures.
        Architecting systems from microcontrollers to serverless edge networks.
      </p>

      {/* Core Skills Terminal Block */}
      <div className="inline-block bg-zinc-900 border border-zinc-800 rounded-md px-4 py-2 text-xs text-zinc-400 shadow-inner">
        <span className="text-emerald-500">➜</span>{" "}
        <span className="text-cyan-400">~</span>{" "}
        <span className="text-zinc-300">cat</span> core_stack.json
        <br />
        <span className="text-zinc-500">
          {'["C/C++", "Python", "TypeScript", "Next.js", "PostgreSQL", "ESP32"]'}
        </span>
      </div>
    </header>
  );
}
