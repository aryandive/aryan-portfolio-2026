"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, X, Terminal, Cpu, Activity, Camera } from "lucide-react";

interface CollageItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  src: string;
  aspect: string;
  badge: string;
}

const collageItems: CollageItem[] = [
  {
    id: "workbench",
    tag: "FIG_01 // SIGNAL LAB",
    title: "Tektronix DSO & ESP32 Waveform Analysis",
    description:
      "Tuning PWM signals and measuring low-jitter clock transitions on a dedicated electrical engineering workbench with soldering and probe instrumentation.",
    src: "/images/profile/workbench.jpg",
    aspect: "col-span-12 md:col-span-8 row-span-2",
    badge: "120Hz SPI PROBE",
  },
  {
    id: "workstation",
    tag: "FIG_02 // COCKPIT",
    title: "Primary Engineering Workstation",
    description:
      "Dual-display developer environment running schematic capture side-by-side with low-latency terminal workflows and system telemetry.",
    src: "/images/profile/workstation.jpg",
    aspect: "col-span-12 md:col-span-4",
    badge: "DUAL-MONITOR RIG",
  },
  {
    id: "pcb",
    tag: "FIG_03 // SILICON",
    title: "Custom ARM Cortex-M PCB Prototyping",
    description:
      "Matte black circuit board layout with gold traces, decoupled power rails, and active status LEDs for embedded sensor aggregation.",
    src: "/images/profile/pcb.jpg",
    aspect: "col-span-12 md:col-span-4",
    badge: "STM32F4 // 4-LAYER",
  },
];

export default function ProfileCollage() {
  const [selectedImage, setSelectedImage] = useState<CollageItem | null>(null);

  return (
    <section className="mt-16 pt-12 border-t border-zinc-900">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono mb-2">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>OPTICAL TELEMETRY // MEDIA COLLAGE</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-3">
            Hardware Lab & Workbench Collage
          </h2>
          <p className="text-xs text-zinc-400 mt-1 max-w-xl">
            Visual logs from the workbench: signal debugging, prototype fabrication, and the software cockpit.
            {/* Note for Aryan: Drop your own photos into /public/images/profile/ to customize */}
          </p>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-zinc-500 font-mono bg-zinc-900/60 border border-zinc-800/80 px-3 py-1.5 rounded">
          <Camera className="w-3.5 h-3.5 text-cyan-400" />
          <span>3 FRAME CAPTURES</span>
        </div>
      </div>

      {/* Collage Grid */}
      <div className="grid grid-cols-12 gap-4">
        {/* Main Bench Card (Large) */}
        <div
          onClick={() => setSelectedImage(collageItems[0])}
          className="col-span-12 lg:col-span-8 group relative rounded-lg overflow-hidden border border-zinc-800/80 bg-zinc-900/40 cursor-pointer transition-all duration-300 hover:border-zinc-600 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.2)]"
        >
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
            <Image
              src={collageItems[0].src}
              alt={collageItems[0].title}
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105 transform-gpu will-change-transform"
              priority
              unoptimized
            />
            {/* Dark vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

            {/* Top HUD Tag */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className="text-[10px] font-mono tracking-widest bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-emerald-400 px-2.5 py-1 rounded">
                {collageItems[0].tag}
              </span>
              <span className="text-[10px] font-mono bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 px-2 py-0.5 rounded hidden sm:inline-block">
                {collageItems[0].badge}
              </span>
            </div>

            {/* Expand Hint */}
            <div className="absolute top-3 right-3 p-1.5 rounded bg-zinc-950/80 border border-zinc-800 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-3.5 h-3.5" />
            </div>

            {/* Bottom Caption */}
            <div className="absolute bottom-3 left-3 right-3">
              <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                {collageItems[0].title}
              </h3>
              <p className="text-xs text-zinc-400 line-clamp-2 mt-1">
                {collageItems[0].description}
              </p>
            </div>
          </div>
        </div>

        {/* Secondary Column: Workstation & PCB */}
        <div className="col-span-12 lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
          {/* Workstation Card */}
          <div
            onClick={() => setSelectedImage(collageItems[1])}
            className="flex-1 group relative rounded-lg overflow-hidden border border-zinc-800/80 bg-zinc-900/40 cursor-pointer transition-all duration-300 hover:border-zinc-600 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.2)]"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={collageItems[1].src}
                alt={collageItems[1].title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105 transform-gpu will-change-transform"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              <div className="absolute top-3 left-3">
                <span className="text-[10px] font-mono tracking-widest bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-cyan-400 px-2 py-0.5 rounded">
                  {collageItems[1].tag}
                </span>
              </div>

              <div className="absolute top-3 right-3 p-1.5 rounded bg-zinc-950/80 border border-zinc-800 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {collageItems[1].title}
                </h3>
                <p className="text-[11px] text-zinc-400 line-clamp-1 mt-0.5">
                  {collageItems[1].badge}
                </p>
              </div>
            </div>
          </div>

          {/* PCB Macro Card */}
          <div
            onClick={() => setSelectedImage(collageItems[2])}
            className="flex-1 group relative rounded-lg overflow-hidden border border-zinc-800/80 bg-zinc-900/40 cursor-pointer transition-all duration-300 hover:border-zinc-600 hover:shadow-[0_0_30px_-10px_rgba(234,179,8,0.2)]"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={collageItems[2].src}
                alt={collageItems[2].title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105 transform-gpu will-change-transform"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              <div className="absolute top-3 left-3">
                <span className="text-[10px] font-mono tracking-widest bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-amber-400 px-2 py-0.5 rounded">
                  {collageItems[2].tag}
                </span>
              </div>

              <div className="absolute top-3 right-3 p-1.5 rounded bg-zinc-950/80 border border-zinc-800 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                  {collageItems[2].title}
                </h3>
                <p className="text-[11px] text-zinc-400 line-clamp-1 mt-0.5">
                  {collageItems[2].badge}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4th Element: Telemetry & Customization Card */}
        <div className="col-span-12 rounded-lg border border-zinc-800/60 bg-zinc-900/30 p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-zinc-800/60 border border-zinc-700/60 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <p className="text-zinc-200 font-semibold">
                Workbench Profile Signal Matrix
              </p>
              <p className="text-[11px] text-zinc-500">
                Tektronix DSO // STM32F4 // ESP32-WROOM-32E // 120Hz Serial Telemetry
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2 py-1 bg-zinc-950 border border-zinc-800 rounded text-[11px] text-emerald-400">
              SRAM: ~12ms FETCH
            </span>
            <span className="px-2 py-1 bg-zinc-950 border border-zinc-800 rounded text-[11px] text-cyan-400">
              BUS: I2C / SPI / UART
            </span>
            <span className="px-2 py-1 bg-zinc-950 border border-zinc-800 rounded text-[11px] text-zinc-400">
              STATUS: NOMINAL
            </span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-950/80">
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-white font-medium">{selectedImage.tag}</span>
                <span className="text-zinc-600">//</span>
                <span className="text-emerald-400">{selectedImage.badge}</span>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="text-zinc-400 hover:text-white p-1 rounded hover:bg-zinc-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] w-full bg-black">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-zinc-950 border-t border-zinc-800">
              <h3 className="text-lg font-bold text-white mb-1">
                {selectedImage.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {selectedImage.description}
              </p>
              <div className="mt-3 pt-3 border-t border-zinc-900 flex justify-between items-center text-[10px] font-mono text-zinc-500">
                <span>FILE: {selectedImage.src}</span>
                <span>PRESS ESC OR CLICK OUTSIDE TO CLOSE</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
