import Link from "next/link";
import { NewLeadForm } from "@/components/new-lead-form";

export default function NewLeadPage() {
  return (
    <main className="narrow-shell">
      <div className="back-link">
        <Link href="/">← Back to inquiries</Link>
      </div>
      <section className="page-heading">
        <p className="eyebrow">New inquiry</p>
        <h1>Start with the message itself.</h1>
        <p className="intro">
          Paste what the prospective client sent. Missing details are useful to know; there is no
          need to tidy their message first.
        </p>
      </section>
      <NewLeadForm />
    </main>
  );
}
