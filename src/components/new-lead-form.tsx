"use client";

import { useActionState } from "react";
import { createLead } from "@/app/actions";

export function NewLeadForm() {
  const [state, action, pending] = useActionState(createLead, {});

  return (
    <form action={action} className="paper form-stack">
      <div>
        <label htmlFor="source">Where did it arrive?</label>
        <select id="source" name="source" defaultValue="Email">
          <option>Email</option>
          <option>Website form</option>
        </select>
      </div>

      <div>
        <label htmlFor="inquiry">Client inquiry</label>
        <textarea
          id="inquiry"
          name="inquiry"
          rows={14}
          placeholder="Paste the full message here, including any name or contact details they shared."
          required
        />
        <p className="field-note">
          Studio Desk will pull out the practical details and prepare a first reply. You will review
          both before anything is marked ready.
        </p>
      </div>

      {state.error && <p className="form-error">{state.error}</p>}

      <button className="button button-dark button-wide" disabled={pending}>
        {pending ? "Reading inquiry…" : "Review inquiry"}
      </button>
    </form>
  );
}
