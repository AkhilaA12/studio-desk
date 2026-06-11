"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { analyzeInquiry } from "@/lib/gemini";
import { getDatabase, saveAnalysis } from "@/lib/db";
import { leads } from "@/lib/schema";

export type AnalyzeState = { error?: string };

export async function createLead(
  _state: AnalyzeState,
  formData: FormData,
): Promise<AnalyzeState> {
  const inquiry = String(formData.get("inquiry") ?? "").trim();
  const source = String(formData.get("source") ?? "Email");

  if (inquiry.length < 30) {
    return { error: "Add a little more of the inquiry before analyzing it." };
  }

  try {
    const analysis = await analyzeInquiry(inquiry);
    const id = saveAnalysis(source, inquiry, analysis);
    redirect(`/leads/${id}`);
  } catch (error) {
    if (error instanceof Error && error.message === "NEXT_REDIRECT") throw error;
    return {
      error: error instanceof Error ? error.message : "The inquiry could not be analyzed.",
    };
  }
}

export async function saveReview(formData: FormData) {
  const id = Number(formData.get("id"));
  const replyDraft = String(formData.get("replyDraft") ?? "").trim();
  const action = String(formData.get("action"));

  if (!id || !replyDraft) return;

  getDatabase()
    .update(leads)
    .set({
      replyDraft,
      status: action === "approve" ? "Ready to send" : "In review",
      updatedAt: new Date().toISOString(),
    })
    .where(eq(leads.id, id))
    .run();

  revalidatePath("/");
  revalidatePath(`/leads/${id}`);
  if (action === "approve") redirect("/");
}
