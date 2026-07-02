import fs from "fs";
import path from "path";
import matter from "gray-matter";

const notesDirectory = path.join(process.cwd(), "src", "content", "notes");

export type NoteMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

export function getNoteSlugs() {
  if (!fs.existsSync(notesDirectory)) {
    return [];
  }
  return fs.readdirSync(notesDirectory).filter((file) => file.endsWith(".mdx"));
}

export function getNoteBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(notesDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    meta: {
      ...data,
      title: data.title || "Untitled",
      date: data.date || "1970-01-01",
      summary: data.summary || "",
    } as NoteMeta,
    content,
  };
}

export function getAllNotes(): NoteMeta[] {
  const slugs = getNoteSlugs();
  const notes = slugs
    .map((slug) => getNoteBySlug(slug).meta)
    .sort((note1, note2) => (note1.date > note2.date ? -1 : 1));
  return notes;
}
