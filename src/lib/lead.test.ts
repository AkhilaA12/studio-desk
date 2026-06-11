import { describe, expect, it } from "vitest";
import { leadAnalysisSchema, qualifyLead, type LeadAnalysis } from "./lead";

const suitableLead: LeadAnalysis = {
  contactName: "Maya",
  companyName: "Field Notes Coffee",
  email: "maya@example.com",
  serviceType: "Website redesign",
  projectSummary: "Redesign a small hospitality website.",
  goals: ["Make catering enquiries easier"],
  budget: "£8,000",
  budgetAmount: 8000,
  timeline: "September",
  missingInformation: [],
  replyDraft: "Hi Maya, thanks for getting in touch.",
};

describe("lead analysis schema", () => {
  it("accepts a complete structured analysis", () => {
    expect(leadAnalysisSchema.parse(suitableLead)).toEqual(suitableLead);
  });

  it("rejects unsupported service labels", () => {
    expect(() => leadAnalysisSchema.parse({ ...suitableLead, serviceType: "Brand strategy" })).toThrow();
  });
});

describe("qualifyLead", () => {
  it("pursues a suitable lead", () => {
    expect(qualifyLead(suitableLead).recommendation).toBe("Pursue");
  });

  it("asks for details when the budget is missing", () => {
    expect(
      qualifyLead({ ...suitableLead, budget: null, budgetAmount: null }).recommendation,
    ).toBe("Ask for details");
  });

  it("declines projects below the studio minimum", () => {
    expect(qualifyLead({ ...suitableLead, budget: "£500", budgetAmount: 500 }).recommendation).toBe(
      "Decline",
    );
  });

  it("declines work outside the studio services", () => {
    expect(qualifyLead({ ...suitableLead, serviceType: "Other" }).recommendation).toBe("Decline");
  });
});
