import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

async function main() {
  console.log("🌱 Seeding database...");
  
  await db.insert(schema.projects).values([
    {
      title: "ESP32 Aquarium Water Quality Monitor",
      slug: "esp32-aquarium-monitor",
      category: "HARDWARE",
      summary: "Embedded C++ system for real-time water quality monitoring and automated chemical dosing.",
      techStack: ["C++", "ESP32", "FreeRTOS", "IoT"],
    },
    {
      title: "SyncFlowState",
      slug: "syncflowstate",
      category: "CLOUD",
      summary: "A comprehensive SaaS productivity suite designed for deep work state management.",
      techStack: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "Redis"],
    },
    {
      title: "Youtube Visualizer",
      slug: "youtube-visualizer",
      category: "CLOUD",
      summary: "YouTube Transcriber & Visualizer A comprehensive tool to turn long YouTube videos into structured, actionable insights.",
      techStack: ["Next.js", "Javascript", "PostgreSQL", "Tailwind"],
    },
    {
      title: "Agri-AI",
      slug: "agri-ai",
      category: "CLOUD",
      summary: "Agricultural artificial intelligence platform made for Hackathon",
      techStack: ["Python", "FastAPI", "Next.js"],
    }
  ]).onConflictDoNothing({ target: schema.projects.slug });

  console.log("✅ Seeding complete.");
}

main().catch(console.error);