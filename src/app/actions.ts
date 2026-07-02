"use server";

import { db } from "@/db";
import { guestbook } from "@/db/schema";
import { revalidatePath } from "next/cache";

export async function addGuestbookEntry(formData: FormData) {
  const name = formData.get("name")?.toString();
  const message = formData.get("message")?.toString();

  if (!name || !message || name.trim() === "" || message.trim() === "") {
    throw new Error("Name and message are required.");
  }

  await db.insert(guestbook).values({
    name: name.trim(),
    message: message.trim(),
  });

  revalidatePath("/");
}
