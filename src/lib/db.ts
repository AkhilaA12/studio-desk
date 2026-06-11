import Database from "better-sqlite3";
import { desc, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { qualifyLead, type LeadAnalysis } from "./lead";
import { leads } from "./schema";
import { seedLeads } from "./seed-data";

let sqlite: Database.Database | null = null;
let database: ReturnType<typeof drizzle> | null = null;

export function getDatabase() {
  if (database) return database;

  sqlite = new Database("studio-desk-local.db");
  sqlite.pragma("busy_timeout = 5000");
  sqlite.exec(`
    CREATE TABLE IF NOT EXISTS leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      source TEXT NOT NULL,
      inquiry TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'New',
      contact_name TEXT,
      company_name TEXT,
      email TEXT,
      service_type TEXT,
      project_summary TEXT,
      goals TEXT,
      budget TEXT,
      budget_amount INTEGER,
      timeline TEXT,
      missing_information TEXT,
      recommendation TEXT,
      recommendation_reason TEXT,
      reply_draft TEXT,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    )
  `);
  database = drizzle(sqlite);
  return database;
}

export function seedDatabase() {
  const database = getDatabase();
  const sqlite = database.$client;
  const count = sqlite.prepare("SELECT COUNT(*) as count FROM leads").get() as { count: number };
  if (count.count > 0) return;

  const insert = sqlite.prepare(`
    INSERT INTO leads (
      source, inquiry, status, contact_name, company_name, email, service_type,
      project_summary, goals, budget, budget_amount, timeline, missing_information,
      recommendation, recommendation_reason, reply_draft, created_at, updated_at
    ) VALUES (
      @source, @inquiry, 'New', @contactName, @companyName, @email, @serviceType,
      @projectSummary, @goals, @budget, @budgetAmount, @timeline, @missingInformation,
      @recommendation, @recommendationReason, @replyDraft, @createdAt, @updatedAt
    )
  `);

  const now = new Date();
  const seedAll = sqlite.transaction(() => {
    seedLeads.forEach((lead, index) => {
      const qualification = qualifyLead(lead.analysis);
      const createdAt = new Date(now.getTime() - index * 3_600_000 * 7).toISOString();
      insert.run({
        ...lead,
        ...lead.analysis,
        goals: JSON.stringify(lead.analysis.goals),
        missingInformation: JSON.stringify(lead.analysis.missingInformation),
        recommendation: qualification.recommendation,
        recommendationReason: qualification.reason,
        createdAt,
        updatedAt: createdAt,
      });
    });
  });
  seedAll();
}

export function getLeads() {
  seedDatabase();
  return getDatabase().select().from(leads).orderBy(desc(leads.createdAt)).all();
}

export function getLead(id: number) {
  seedDatabase();
  return getDatabase().select().from(leads).where(eq(leads.id, id)).get();
}

export function saveAnalysis(source: string, inquiry: string, analysis: LeadAnalysis) {
  const qualification = qualifyLead(analysis);
  const now = new Date().toISOString();
  const result = getDatabase()
    .insert(leads)
    .values({
      source,
      inquiry,
      status: "In review",
      ...analysis,
      goals: JSON.stringify(analysis.goals),
      missingInformation: JSON.stringify(analysis.missingInformation),
      recommendation: qualification.recommendation,
      recommendationReason: qualification.reason,
      createdAt: now,
      updatedAt: now,
    })
    .run();
  return Number(result.lastInsertRowid);
}
