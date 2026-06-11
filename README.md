# Studio Desk

Studio Desk is a small lead-review tool for web design studios. It takes the uneven, often incomplete messages that arrive through email and website forms, pulls out the practical details, and prepares a first reply for a person to review.

The model does not decide which projects the studio should take. It structures the inquiry and drafts a response; a short set of ordinary TypeScript rules makes the recommendation visible and easy to change.

## Running it

You will need Node.js 20 or newer.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The seeded inbox works without an API key. To analyze a new inquiry, create a free Gemini API key in Google AI Studio and add it to `.env.local`:

```text
GEMINI_API_KEY=your_key_here
```

Do not paste sensitive client information into the free Gemini tier. Google may use free-tier requests to improve its products.

## How it is put together

- Next.js handles the interface and server actions.
- SQLite stores inquiries, interpretations, replies, and review status locally.
- Gemini returns a structured inquiry summary validated with Zod.
- `src/lib/lead.ts` contains the studio's qualification rules.

The sample inbox contains ten hand-written inquiries: some promising, some vague, and some plainly unsuitable. They are there to make the review flow useful before connecting the API.

## Commands

```bash
npm run dev
npm test
npm run lint
npm run build
```

## Limits

Studio Desk does not send email, authenticate users, or replace a CRM. Budget extraction is deliberately simple, and a person should check every interpretation and reply before using it.
