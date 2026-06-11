import { z } from "zod";

export const serviceTypes = [
  "Marketing website",
  "E-commerce",
  "Website redesign",
  "Ongoing support",
  "Other",
] as const;

export const leadAnalysisSchema = z.object({
  contactName: z.string().nullable(),
  companyName: z.string().nullable(),
  email: z.string().nullable(),
  serviceType: z.enum(serviceTypes),
  projectSummary: z.string(),
  goals: z.array(z.string()),
  budget: z.string().nullable(),
  budgetAmount: z.number().nullable(),
  timeline: z.string().nullable(),
  missingInformation: z.array(z.string()),
  replyDraft: z.string(),
});

export type LeadAnalysis = z.infer<typeof leadAnalysisSchema>;
export type Recommendation = "Pursue" | "Ask for details" | "Decline";
export type LeadStatus = "New" | "In review" | "Ready to send";

export type Qualification = {
  recommendation: Recommendation;
  reason: string;
};

const supportedServices = new Set([
  "Marketing website",
  "E-commerce",
  "Website redesign",
  "Ongoing support",
]);

export function qualifyLead(analysis: LeadAnalysis): Qualification {
  if (analysis.serviceType === "Other") {
    return {
      recommendation: "Decline",
      reason: "The request falls outside the studio's website services.",
    };
  }

  if (analysis.budgetAmount !== null && analysis.budgetAmount < 3000) {
    return {
      recommendation: "Decline",
      reason: "The stated budget is below the studio's $3,000 project minimum.",
    };
  }

  if (
    !supportedServices.has(analysis.serviceType) ||
    analysis.missingInformation.length >= 2 ||
    analysis.budgetAmount === null
  ) {
    return {
      recommendation: "Ask for details",
      reason: "A few practical details are needed before deciding whether to book a call.",
    };
  }

  return {
    recommendation: "Pursue",
    reason: "The service, budget, and project outline appear to fit the studio.",
  };
}
