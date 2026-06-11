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
  {
    source: "Email",
    inquiry:
      "Hello — we need a website for a small architecture practice. Nothing enormous, probably work/about/contact and a journal later. We care a lot about the project photography. Not sure what a sensible budget is yet. Could someone tell me how you normally work? — Tom",
    analysis: {
      contactName: "Tom",
      companyName: null,
      email: null,
      serviceType: "Marketing website",
      projectSummary: "Create a portfolio-led website for a small architecture practice.",
      goals: ["Present project photography well", "Add a journal later"],
      budget: null,
      budgetAmount: null,
      timeline: null,
      missingInformation: ["Budget range", "Preferred launch timing", "Practice name and contact email"],
      replyDraft:
        "Hi Tom,\n\nThanks for getting in touch. A focused site built around strong project photography sounds well suited to the kind of work we do.\n\nWe usually begin with a short discovery phase, then move through structure, visual design, and development together. To point you toward the right approach, could you share the practice name, your rough budget range, and whether there is a date you would like the first version live?\n\nBest,\nNora",
    },
  },
  {
    source: "Website form",
    inquiry:
      "Need a Shopify store for our handmade lamps. About 35 products to start, UK shipping only. Brand and product photos are finished. Budget is £14,000 and we'd like to be taking orders by mid October. I'm Lena, founder of Common Glow. lena@commonglow.co",
    analysis: {
      contactName: "Lena",
      companyName: "Common Glow",
      email: "lena@commonglow.co",
      serviceType: "E-commerce",
      projectSummary: "Build a Shopify store for a handmade lighting brand with about 35 products.",
      goals: ["Begin taking online orders", "Present the finished brand and product photography"],
      budget: "£14,000",
      budgetAmount: 14000,
      timeline: "Mid October",
      missingInformation: [],
      replyDraft:
        "Hi Lena,\n\nCommon Glow sounds like a lovely project. A 35-product Shopify store with the brand and photography already prepared is a clear fit for us, and the October timing looks workable from here.\n\nI’d be interested to hear how the products vary, and whether customers will need options such as finishes, cable lengths, or made-to-order lead times.\n\nCould we arrange a short call next week to walk through the range and launch plan?\n\nBest,\nNora",
    },
  },
  {
    source: "Email",
    inquiry:
      "Can you make me an app like Airbnb but for music rehearsal rooms? Need iOS Android and web. I have £1500, would like it done this month. Cheers, Jay",
    analysis: {
      contactName: "Jay",
      companyName: null,
      email: null,
      serviceType: "Other",
      projectSummary: "Build a multi-platform marketplace app for booking music rehearsal rooms.",
      goals: ["Launch on iOS, Android, and web"],
      budget: "£1,500",
      budgetAmount: 1500,
      timeline: "This month",
      missingInformation: ["Contact email"],
      replyDraft:
        "Hi Jay,\n\nThanks for thinking of us. We focus on websites for established small businesses rather than multi-platform marketplace apps, so we would not be the right team for this build.\n\nYou may be better served by a product studio that specialises in mobile applications and marketplace platforms.\n\nBest,\nNora",
    },
  },
  {
    source: "Website form",
    inquiry:
      "Our charity site is difficult for volunteers to update and donation information gets buried. We'd like help making it clearer. We don't know yet whether that means a redesign or just fixing the current WordPress site. Contact: Ruth, Harbour Street Pantry, ruth@harbourstreet.org",
    analysis: {
      contactName: "Ruth",
      companyName: "Harbour Street Pantry",
      email: "ruth@harbourstreet.org",
      serviceType: "Website redesign",
      projectSummary: "Improve a charity's WordPress site so volunteers can update it and donation information is easier to find.",
      goals: ["Make volunteer updates easier", "Make donation information clearer"],
      budget: null,
      budgetAmount: null,
      timeline: null,
      missingInformation: ["Budget range", "Preferred timing"],
      replyDraft:
        "Hi Ruth,\n\nThanks for explaining what is getting in the way on the Harbour Street Pantry site. Making donation information easier to find and giving volunteers a calmer editing experience are both problems we can help untangle.\n\nBefore recommending a redesign, we would want to look at the current WordPress setup. Could you share your rough budget range and whether there is a particular date or campaign shaping the timing?\n\nBest,\nNora",
    },
  },
  {
    source: "Email",
    inquiry:
      "Hi there, our restaurant website is pretty tired and terrible on phones. We'd like new menus, private dining enquiries and gift vouchers. £6k-ish. Ideally live in 10 weeks. Amira at Kin & Pine, amira@kinandpine.com",
    analysis: {
      contactName: "Amira",
      companyName: "Kin & Pine",
      email: "amira@kinandpine.com",
      serviceType: "Website redesign",
      projectSummary: "Redesign a restaurant website with mobile-friendly menus, private dining enquiries, and gift vouchers.",
      goals: ["Improve mobile experience", "Support private dining enquiries", "Sell gift vouchers"],
      budget: "Around £6,000",
      budgetAmount: 6000,
      timeline: "Within 10 weeks",
      missingInformation: [],
      replyDraft:
        "Hi Amira,\n\nThanks for getting in touch. A clearer mobile experience, easier menu updates, and a better route for private dining enquiries would make a meaningful difference for Kin & Pine.\n\nThe outline, budget, and ten-week timing all look sensible from here. I’d like to understand how you currently manage menus and gift vouchers before suggesting an approach.\n\nWould you have time for a short introductory call next week?\n\nBest,\nNora",
    },
  },
  {
    source: "Website form",
    inquiry:
      "I run a one-person consultancy and need a simple landing page by Friday. I can provide the words. Budget £500.",
    analysis: {
      contactName: null,
      companyName: null,
      email: null,
      serviceType: "Marketing website",
      projectSummary: "Create a simple landing page for an independent consultant.",
      goals: ["Publish a basic online presence"],
      budget: "£500",
      budgetAmount: 500,
      timeline: "By Friday",
      missingInformation: ["Name", "Contact email"],
      replyDraft:
        "Hello,\n\nThanks for getting in touch. We would not be the right fit for this project, as our website engagements begin at £3,000 and usually involve a longer design process.\n\nFor a single page on this timeline, a well-made template through Squarespace or Framer may be the most practical route.\n\nBest,\nNora",
    },
  },
  {
    source: "Email",
    inquiry:
      "We launched our Webflow site last year and mostly like it, but need someone reliable for small changes each month and occasional new campaign pages. Is that something you take on? Priya, Northbank Learning",
    analysis: {
      contactName: "Priya",
      companyName: "Northbank Learning",
      email: null,
      serviceType: "Ongoing support",
      projectSummary: "Provide monthly Webflow support and build occasional campaign pages.",
      goals: ["Handle recurring site changes", "Build campaign pages when needed"],
      budget: null,
      budgetAmount: null,
      timeline: null,
      missingInformation: ["Expected monthly workload", "Budget range", "Contact email"],
      replyDraft:
        "Hi Priya,\n\nThanks for reaching out. We do take on a small number of ongoing Webflow support relationships, particularly where the existing site is working well and the team needs dependable help around it.\n\nCould you share roughly how many changes tend to come up in a typical month, the likely frequency of campaign pages, and the budget you have set aside for support?\n\nBest,\nNora",
    },
  },
  {
    source: "Website form",
    inquiry:
      "Looking for SEO services and daily social media posts for my gym. Need guaranteed first page Google results.",
    analysis: {
      contactName: null,
      companyName: null,
      email: null,
      serviceType: "Other",
      projectSummary: "Provide SEO and daily social media management for a gym.",
      goals: ["Reach the first page of Google", "Publish daily social posts"],
      budget: null,
      budgetAmount: null,
      timeline: null,
      missingInformation: ["Name", "Company name", "Contact email", "Budget"],
      replyDraft:
        "Hello,\n\nThanks for getting in touch. We specialise in website design and development rather than ongoing SEO and social media management, so we would not be the right team for this request.\n\nIt would be worth speaking with a marketing agency that focuses on local search and ongoing content.\n\nBest,\nNora",
    },
  },
  {
    source: "Email",
    inquiry:
      "Hi, we're opening a neighbourhood bakery in November and need our first proper website. Mainly the story, opening hours, wholesale info, and a way to collect celebration cake enquiries. We have a visual identity underway. Budget around £5–7k. Mei and Daniel, Soft Morning Bakery. hello@softmorningbakery.com",
    analysis: {
      contactName: "Mei and Daniel",
      companyName: "Soft Morning Bakery",
      email: "hello@softmorningbakery.com",
      serviceType: "Marketing website",
      projectSummary: "Create the first website for a neighbourhood bakery opening in November.",
      goals: ["Introduce the bakery", "Share wholesale information", "Collect celebration cake enquiries"],
      budget: "£5,000–£7,000",
      budgetAmount: 7000,
      timeline: "Before November opening",
      missingInformation: [],
      replyDraft:
        "Hi Mei and Daniel,\n\nSoft Morning Bakery sounds like a wonderful project. A focused first site covering your story, wholesale offering, and celebration cake enquiries is very much in our wheelhouse.\n\nThe November opening and budget range give us a good frame to work within. It would be helpful to hear when the visual identity is expected to be ready and whether you are planning a photography shoot.\n\nWould you be available for a short call next week?\n\nBest,\nNora",
    },
  },
];
