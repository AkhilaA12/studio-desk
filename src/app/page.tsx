import Link from "next/link";
import { getLeads } from "@/lib/db";

export const dynamic = "force-dynamic";

const recommendationClass: Record<string, string> = {
  Pursue: "tag-green",
  "Ask for details": "tag-amber",
  Decline: "tag-neutral",
};

export default function InboxPage() {
  const leads = getLeads();
  const openCount = leads.filter((lead) => lead.status !== "Ready to send").length;
  const pursueCount = leads.filter((lead) => lead.recommendation === "Pursue").length;
  const detailsCount = leads.filter((lead) => lead.recommendation === "Ask for details").length;

  return (
    <main className="page-shell">
      <section className="page-heading">
        <div>
          <p className="eyebrow">Wednesday, 10 June · Inquiry desk</p>
          <h1>What came in.</h1>
          <p className="intro">
            Review the details, decide what fits, and send a reply that sounds like you.
          </p>
        </div>
      </section>

      <section className="inbox-stats" aria-label="Inbox summary">
        <div className="stat-card stat-primary"><span>Needs a look</span><strong>{openCount}</strong><small>open inquiries</small></div>
        <div className="stat-card"><span>Worth a call</span><strong>{pursueCount}</strong><small>good-fit projects</small></div>
        <div className="stat-card"><span>Needs context</span><strong>{detailsCount}</strong><small>replies need questions</small></div>
        <Link href="/new" className="add-card"><span>+</span><strong>Add inquiry</strong><small>Paste a message</small></Link>
      </section>

      <div className="list-heading">
        <h2>Recent inquiries</h2>
        <span>{leads.length} total</span>
      </div>
      <section className="lead-list" aria-label="Lead inbox">
        {leads.map((lead) => (
          <Link href={`/leads/${lead.id}`} className="lead-row" key={lead.id}>
            <div className="lead-person">
              <span className="avatar">{(lead.companyName ?? lead.contactName ?? "?").charAt(0)}</span>
              <div>
                <strong>{lead.companyName ?? lead.contactName ?? "Unnamed inquiry"}</strong>
                <span>{lead.contactName && lead.companyName ? `${lead.contactName} · ${lead.source}` : lead.source}</span>
              </div>
            </div>
            <div className="lead-summary">
              <strong>{lead.serviceType ?? "Needs review"}</strong>
              <span>{lead.projectSummary ?? lead.inquiry}</span>
            </div>
            <div className="lead-budget">
              <strong>{lead.budget ?? "Budget unknown"}</strong>
              <span>{lead.timeline ?? "No date given"}</span>
            </div>
            <div className="lead-state">
              <span className={`tag ${recommendationClass[lead.recommendation ?? ""] ?? "tag-neutral"}`}>
                {lead.recommendation ?? "Unread"}
              </span>
              <small>Open →</small>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
