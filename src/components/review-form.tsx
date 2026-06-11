"use client";

import { useFormStatus } from "react-dom";
import { saveReview } from "@/app/actions";

function ReviewButtons({ ready }: { ready: boolean }) {
  const { pending } = useFormStatus();
  return (
    <div className="review-actions">
      <button className="button button-light" name="action" value="save" disabled={pending}>
        Save draft
      </button>
      <button className="button button-dark" name="action" value="approve" disabled={pending}>
        {ready ? "Keep ready to send" : "Mark ready to send"}
      </button>
    </div>
  );
}

export function ReviewForm({
  id,
  replyDraft,
  ready,
}: {
  id: number;
  replyDraft: string;
  ready: boolean;
}) {
  return (
    <form action={saveReview} className="reply-form">
      <input type="hidden" name="id" value={id} />
      <label htmlFor="replyDraft">Reply draft</label>
      <textarea id="replyDraft" name="replyDraft" defaultValue={replyDraft} rows={14} />
      <p className="field-note">Edit this until it sounds like something you would actually send.</p>
      <ReviewButtons ready={ready} />
    </form>
  );
}
