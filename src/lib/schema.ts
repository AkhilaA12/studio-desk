import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const leads = sqliteTable("leads", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  source: text("source").notNull(),
  inquiry: text("inquiry").notNull(),
  status: text("status").notNull().default("New"),
  contactName: text("contact_name"),
  companyName: text("company_name"),
  email: text("email"),
  serviceType: text("service_type"),
  projectSummary: text("project_summary"),
  goals: text("goals"),
  budget: text("budget"),
  budgetAmount: integer("budget_amount"),
  timeline: text("timeline"),
  missingInformation: text("missing_information"),
  recommendation: text("recommendation"),
  recommendationReason: text("recommendation_reason"),
  replyDraft: text("reply_draft"),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull(),
});
