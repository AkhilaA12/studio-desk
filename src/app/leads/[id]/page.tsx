import Link from "next/link";
import { notFound } from "next/navigation";
import { ReviewForm } from "@/components/review-form";
import { getLead } from "@/lib/db";

export const dynamic = "force-dynamic";

function Detail({ label, value }: { label: string; value: string | null }) {
  return (
    <div className="detail">
      <span>{label}</span>
      <strong className={!value ? "muted" : ""}>{value || "Not mentioned"}</strong>
    </div>
  );
}

export default async function LeadPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const lead = getLead(Number(id));
  if (!lead) notFound();

  const goals = JSON.parse(lead.goals ?? "[]") as string[];
  const missing = JSON.parse(lead.missingInformation ?? "[]") as string[];

  return (
    <main className="page-shell">
      <div className="back-link">
        <Link href="/">← Back to inquiries</Link>
      </div>

      <section className="review-heading">
        <div>
          <p className="eyebrow">{lead.source}</p>
          <h1>{lead.companyName ?? lead.contactName ?? "Unnamed inquiry"}</h1>
          <p className="intro">{lead.projectSummary}</p>
        </div>
        <div
          className={`recommendation recommendation-${(lead.recommendation ?? "review")
            .toLowerCase()
            .replaceAll(" ", "-")}`}
        >
          <span>Suggested next step</span>
          <strong>{lead.recommendation}</strong>
          <p>{lead.recommendationReason}</p>
        </div>
      </section>

      <div className="review-grid">
        <section>
          <div className="section-title">
            <h2>What they sent</h2>
            <span>Original message</span>
          </div>
          <blockquote className="inquiry">{lead.inquiry}</blockquote>

          <div className="section-title details-heading">
            <h2>Project brief</h2>
            <span>Check against the message</span>
          </div>
          <div className="details-grid">
            <Detail label="Contact" value={lead.contactName} />
            <Detail label="Email" value={lead.email} />
            <Detail label="Service" value={lead.serviceType} />
            <Detail label="Budget" value={lead.budget} />
            <Detail label="Timing" value={lead.timeline} />
          </div>

          {goals.length > 0 && (
            <div className="brief-list">
              <span>What they want to achieve</span>
              <ul>{goals.map((goal) => <li key={goal}>{goal}</li>)}</ul>
            </div>
          )}

          {missing.length > 0 && (
            <div className="brief-list missing-list">
              <span>Still worth asking</span>
              <ul>{missing.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          )}
        </section>

        <aside className="paper reply-panel">
          <div className="section-title">
            <h2>Prepare a reply</h2>
            <span>{lead.status}</span>
          </div>
          <ReviewForm
            id={lead.id}
            replyDraft={lead.replyDraft ?? ""}
            ready={lead.status === "Ready to send"}
          />
        </aside>
      </div>
    </main>
  );
}
