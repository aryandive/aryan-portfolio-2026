import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { projects } from '../src/db/schema';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

async function main() {
  const result = await db.insert(projects).values({
    title: 'SyncFlowState',
    slug: 'syncflowstate',
    category: 'CLOUD',
    summary: 'A custom real-time state synchronization layer over raw WebSockets, engineered to handle 120Hz sensor data streams from ESP32 devices with sub-15ms latency.',
    techStack: ['Rust', 'WebSockets', 'ESP32', 'TypeScript', 'Next.js'],
    githubUrl: 'https://github.com/aryandive/WorkStation',
    liveUrl: null,
  }).onConflictDoNothing();

  console.log('Done. Rows inserted:', result.rowCount ?? 0);
}

main().catch(console.error);
