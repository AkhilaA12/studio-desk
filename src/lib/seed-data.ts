import type { LeadAnalysis } from "./lead";

export type SeedLead = {
  source: "Website form" | "Email";
  inquiry: string;
  analysis: LeadAnalysis;
};

export const seedLeads: SeedLead[] = [
  {
    source: "Website form",
    inquiry:
      "Hi, I'm Maya from Field Notes Coffee. We have three shops around Bristol and our current Squarespace site no longer reflects us. We'd like a warmer, easier-to-update site with a page for each shop and better catering enquiries. We can spend around £8–10k and hope to launch before our new shop opens in September. maya@fieldnotescoffee.co.uk",
    analysis: {
      contactName: "Maya",
      companyName: "Field Notes Coffee",
      email: "maya@fieldnotescoffee.co.uk",
      serviceType: "Website redesign",
      projectSummary: "Redesign a coffee shop group's Squarespace website before a new location opens.",
      goals: ["Reflect the brand more warmly", "Improve catering enquiries", "Make updates easier"],
      budget: "£8,000–£10,000",
      budgetAmount: 10000,
      timeline: "Before September",
      missingInformation: [],
      replyDraft:
        "Hi Maya,\n\nThanks for sharing the plans for Field Notes Coffee. A warmer site with clearer shop pages and a simpler catering enquiry path sounds like a strong fit for us.\n\nYour budget and September launch give us a useful starting point. I’d love to learn a little more about what feels limiting in the current Squarespace setup and whether you already have photography for the new shop.\n\nWould you be open to a 30-minute call next week to talk through the redesign?\n\nBest,\nNora",
    },
  },
];
