import { GoogleGenAI } from "@google/genai";
import { leadAnalysisSchema, serviceTypes } from "./lead";

const prompt = `You help a small web design studio review a new inquiry.
Extract only details that are stated or reasonably clear from the inquiry.
Use null when a detail is absent. Do not invent names, budgets, dates, or promises.
Write a calm, specific reply draft under 150 words. Ask at most three useful questions.
The studio offers marketing websites, e-commerce, redesigns, and ongoing website support.
Return serviceType as one of: ${serviceTypes.join(", ")}.`;

export async function analyzeInquiry(inquiry: string) {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("Add GEMINI_API_KEY to .env.local before analyzing a new inquiry.");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `${prompt}\n\nInquiry:\n${inquiry}`,
    config: {
      responseMimeType: "application/json",
      responseJsonSchema: {
        type: "object",
        properties: {
          contactName: { type: ["string", "null"] },
          companyName: { type: ["string", "null"] },
          email: { type: ["string", "null"] },
          serviceType: { type: "string", enum: serviceTypes },
          projectSummary: { type: "string" },
          goals: { type: "array", items: { type: "string" } },
          budget: { type: ["string", "null"] },
          budgetAmount: { type: ["number", "null"] },
          timeline: { type: ["string", "null"] },
          missingInformation: { type: "array", items: { type: "string" } },
          replyDraft: { type: "string" },
        },
        required: [
          "contactName",
          "companyName",
          "email",
          "serviceType",
          "projectSummary",
          "goals",
          "budget",
          "budgetAmount",
          "timeline",
          "missingInformation",
          "replyDraft",
        ],
      },
    },
  });

  if (!response.text) throw new Error("Gemini returned an empty response. Please try again.");
  return leadAnalysisSchema.parse(JSON.parse(response.text));
}
