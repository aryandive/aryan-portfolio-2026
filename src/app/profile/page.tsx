import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import ProfileCollage from "@/components/ProfileCollage";
import {
  Cpu,
  Server,
  Code2,
  Wrench,
  Terminal,
  Activity,
  ArrowRight,
  GitBranch,
  Mail,
  Radio,
} from "lucide-react";

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.62 1.62 0 1 0-.01-3.24 1.62 1.62 0 0 0 .01 3.24m1.39 9.74v-8.37H5.07v8.37h2.78z" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Profile | Aryan Dive",
  description:
    "Electronics & Computer Engineering (ECE) Undergrad & Full-Stack Systems Engineer. Bridging low-level firmware with high-throughput cloud architectures.",
};

export default function ProfilePage() {
  return (
    <div className="bg-zinc-950 text-zinc-300 font-mono min-h-screen selection:bg-zinc-800 selection:text-white flex flex-col">
      <div className="flex-grow max-w-4xl mx-auto px-6 pt-20 pb-20 w-full">
        {/* Top Navigation Bar */}
        <nav className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-900 pb-6 mb-12 gap-4">
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span className="text-emerald-500">➜</span>
            <span className="text-cyan-400">~</span>
            <span className="text-zinc-400">/sys/profile</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-emerald-400 ml-2">
              REV: 2026.1
            </span>
          </div>

          <div className="flex gap-6 text-sm font-semibold tracking-wider">
            <Link
              href="/"
              prefetch={true}
              className="text-zinc-500 hover:text-white transition-colors"
            >
              [ Projects ]
            </Link>
            <Link
              href="/profile"
              prefetch={true}
              className="text-white border-b-2 border-emerald-400 pb-0.5 transition-colors"
            >
              [ Profile ]
            </Link>
            <Link
              href="/notes"
              prefetch={true}
              className="text-zinc-500 hover:text-white transition-colors"
            >
              [ Notes ]
            </Link>
          </div>
        </nav>

        {/* Profile Hero Header */}
        <header className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Aryan Dive
            </h1>
            <div className="flex items-center gap-2 self-start sm:self-auto px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/60 text-emerald-400 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SYSTEM STATE: NOMINAL</span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-zinc-400 font-sans mb-6">
            3rd Year Electronics & Computer Engineering Undergrad{" "}
            <span className="text-zinc-600">|</span> Full-Stack Systems Engineer
          </p>

          <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">
            Specializing in the intersection of physical hardware logic and modern cloud infrastructure.
            Treating software as programmable hardware — optimized for latency, signal integrity, and zero-waste allocations.
          </p>
        </header>

        {/* Datasheet Quick Specs Grid */}
        <section className="mb-16">
          <div className="text-[11px] font-mono uppercase text-zinc-500 tracking-wider mb-3 flex items-center gap-2">
            <Radio className="w-3.5 h-3.5 text-cyan-400" />
            <span>OPERATOR DATASHEET SPECIFICATION</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-lg p-3.5">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">
                Discipline
              </span>
              <p className="text-xs text-zinc-200 font-semibold">
                B.Tech in ECE
              </p>
              <p className="text-[11px] text-zinc-500 mt-0.5">3rd Year Undergrad</p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-lg p-3.5">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">
                Architecture Ethos
              </span>
              <p className="text-xs text-zinc-200 font-semibold">
                Programmable Hardware
              </p>
              <p className="text-[11px] text-zinc-500 mt-0.5">Bare-metal to Edge</p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-lg p-3.5">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">
                Embedded Tooling
              </span>
              <p className="text-xs text-zinc-200 font-semibold">
                C/C++, ESP32, FreeRTOS
              </p>
              <p className="text-[11px] text-zinc-500 mt-0.5">KiCad, DSO, UART/SPI</p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-lg p-3.5">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">
                Cloud Core
              </span>
              <p className="text-xs text-zinc-200 font-semibold">
                Next.js 16, TypeScript
              </p>
              <p className="text-[11px] text-zinc-500 mt-0.5">Neon DB, WebSockets</p>
            </div>
          </div>
        </section>

        {/* 
          =======================================================
          ABOUT ME SECTION
          (Edit the text below to update your personal bio details)
          =======================================================
        */}
        <section className="mb-16 space-y-6">
          <div className="border-b border-zinc-900 pb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>01 // ABOUT ME</span>
            </h2>
            <span className="text-xs text-zinc-500 font-mono">
              cat /proc/engineer/bio.md
            </span>
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-zinc-400">
            <p>
              I am an Electronics & Computer Engineering undergrad who codes on a custom-rigged workstation. 
              My background began in hardware tinkering: burning bootloaders onto ATMega microcontrollers, 
              wiring breadboards with ESP32s and Raspberry Pis, analyzing oscilloscopes, and designing custom PCB layouts.
            </p>

            <p>
              That physical intuition dictates how I build software. Where many see web applications as layers 
              of high-level abstractions, I see programmable hardware. Understanding clock cycles, memory buses, 
              and cache hierarchies changes how you write TypeScript, query relational databases, and design 
              distributed microservices.
            </p>

            <div className="bg-zinc-900/40 border-l-2 border-emerald-500 p-4 my-4 text-zinc-300">
              <p className="text-xs italic text-zinc-400 font-mono">
                &ldquo;If a cloud database query or WebSocket frame has more latency than reading from SRAM, 
                you had better have a defensible reason for why.&rdquo;
              </p>
            </div>

            <p>
              Today, my work spans both ends of the wire: writing bare-metal firmware in C/C++ with FreeRTOS 
              for sensor nodes, and building production cloud systems using Next.js 16, Neon Serverless Postgres, 
              and Drizzle ORM. Whether optimizing a 120Hz high-frequency sensor pipeline (like in SyncFlowState) 
              or hacking on agricultural AI platforms, my aim is always zero energy leaks, resilient error handling, 
              and uncompromising throughput.
            </p>
          </div>
        </section>

        {/* Technical Inventory / Skills Matrix */}
        <section className="mb-16">
          <div className="border-b border-zinc-900 pb-4 mb-6 flex items-center justify-between">
            <h2 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>02 // HARDWARE & SOFTWARE INVENTORY</span>
            </h2>
            <span className="text-xs text-zinc-500 font-mono">
              ls -l /sys/capabilities
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Embedded */}
            <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-lg p-5">
              <div className="flex items-center gap-2 text-white font-semibold text-sm mb-3">
                <Cpu className="w-4 h-4 text-emerald-400" />
                <h3>Embedded Silicon & Firmware</h3>
              </div>
              <ul className="space-y-1.5 text-xs text-zinc-400 font-mono">
                <li>• ESP32 (WROOM / S3), STM32 ARM Cortex-M</li>
                <li>• FreeRTOS multitasking & hardware interrupts</li>
                <li>• Protocols: SPI, I2C, UART, CAN, Raw TCP/Sockets</li>
                <li>• PCB layout & schematic capture (KiCad)</li>
              </ul>
            </div>

            {/* Cloud */}
            <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-lg p-5">
              <div className="flex items-center gap-2 text-white font-semibold text-sm mb-3">
                <Server className="w-4 h-4 text-cyan-400" />
                <h3>Cloud Architecture & Edge</h3>
              </div>
              <ul className="space-y-1.5 text-xs text-zinc-400 font-mono">
                <li>• Next.js 16 (React Server Components, App Router)</li>
                <li>• Neon Serverless PostgreSQL & Drizzle ORM</li>
                <li>• Low-latency WebSockets & custom binary protocols</li>
                <li>• Edge middleware, caching & RSC streaming</li>
              </ul>
            </div>

            {/* Languages */}
            <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-lg p-5">
              <div className="flex items-center gap-2 text-white font-semibold text-sm mb-3">
                <Code2 className="w-4 h-4 text-amber-400" />
                <h3>Languages & Compilers</h3>
              </div>
              <ul className="space-y-1.5 text-xs text-zinc-400 font-mono">
                <li>• C / C++ (Memory models, pointer arithmetic)</li>
                <li>• TypeScript (Strict mode, zero `any`)</li>
                <li>• Python (FastAPI, data parsing)</li>
                <li>• Rust & SQL (Drizzle schema migrations)</li>
              </ul>
            </div>

            {/* Instrumentation */}
            <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-lg p-5">
              <div className="flex items-center gap-2 text-white font-semibold text-sm mb-3">
                <Wrench className="w-4 h-4 text-purple-400" />
                <h3>Workbench Instrumentation</h3>
              </div>
              <ul className="space-y-1.5 text-xs text-zinc-400 font-mono">
                <li>• Digital Storage Oscilloscopes (Tektronix DSO)</li>
                <li>• Logic Analyzers, Multimeters, Soldering Station</li>
                <li>• Linux / POSIX shell tooling, Git, Docker</li>
                <li>• Vercel Edge Runtime & Telemetry Analytics</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Selected Engineering Highlights */}
        <section className="mb-16">
          <div className="border-b border-zinc-900 pb-4 mb-6 flex items-center justify-between">
            <h2 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span>03 // BENCHMARK PROJECTS</span>
            </h2>
            <Link
              href="/"
              prefetch={true}
              className="text-xs text-zinc-500 hover:text-emerald-400 flex items-center gap-1 font-mono transition-colors"
            >
              <span>View All</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-zinc-900/30 border border-zinc-800/70">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
                <span className="text-cyan-400">CLOUD / DISTRIBUTED</span>
                <span>SUB-15MS</span>
              </div>
              <h3 className="text-sm font-bold text-white mb-1">
                SyncFlowState
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Real-time state synchronization over raw WebSockets, engineered to handle 120Hz sensor data streams from ESP32 devices.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-zinc-900/30 border border-zinc-800/70">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
                <span className="text-emerald-400">HARDWARE / EMBEDDED</span>
                <span>FREERTOS</span>
              </div>
              <h3 className="text-sm font-bold text-white mb-1">
                ESP32 Aquarium Monitor
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Embedded C++ system for real-time water quality monitoring, telemetry logging, and automated chemical dosing.
              </p>
            </div>
          </div>
        </section>

        {/* Visual Media Collage (Interactive Workbench & Lab Gallery) */}
        <ProfileCollage />

        {/* Transceiver / Contact Terminal */}
        <section className="mt-16 pt-12 border-t border-zinc-900">
          <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>TRANSMISSION CHANNEL OPEN</span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Interested in collaborating or discussing systems architecture?
                </h3>
                <p className="text-xs text-zinc-400 mt-2 max-w-lg leading-relaxed">
                  Open for hardware/software co-design, embedded firmware roles, and cloud infrastructure engineering.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="mailto:aryandive07@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-500 text-zinc-950 font-semibold text-xs hover:bg-emerald-400 transition-colors shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Signal (Email)</span>
                </a>
                <a
                  href="https://github.com/aryandive"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-800/80 hover:bg-zinc-700 text-white font-medium text-xs border border-zinc-700 transition-colors"
                >
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/aryandive"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-800/80 hover:bg-zinc-700 text-white font-medium text-xs border border-zinc-700 transition-colors"
                >
                  <LinkedInIcon />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
