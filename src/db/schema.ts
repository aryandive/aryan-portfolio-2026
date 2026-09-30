import { pgTable, serial, varchar, text, timestamp, jsonb, pgEnum } from "drizzle-orm/pg-core";

export const categoryEnum = pgEnum("category", ["HARDWARE", "CLOUD"]);

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  category: categoryEnum("category").notNull(),
  summary: text("summary").notNull(),
  techStack: jsonb("tech_stack").$type<string[]>().notNull(),
  githubUrl: varchar("github_url", { length: 255 }),
  liveUrl: varchar("live_url", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow(),
});

export const guestbook = pgTable("guestbook", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
// THis is the changs