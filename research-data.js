/*
 * AIC research-data.js — hand-curated content for the Research page.
 * No CMS, no build step: add an entry by pushing an object into one of the
 * arrays below, then commit + push /Website as usual.
 *
 * Brief shape:
 *   {
 *     title:       "One-line title",
 *     author:      "First Last",
 *     group:       "e.g. Investment Banking" (free text — whatever fits),
 *     date:        "2026-07-20",
 *     takeaway:    "2-4 word honest-call tag (e.g. 'Accelerator, not threat')",
 *     summary:     "~150-word summary. Lead with the honest call.",
 *     sourcesNote: "Optional — who you spoke to / what you cited."
 *   }
 *
 * Paper shape:
 *   {
 *     title:    "Final paper title",
 *     author:   "First Last",
 *     group:    "e.g. Corporate Finance",
 *     date:     "2026-08-31",
 *     abstract: "One or two sentence abstract.",
 *     link:     "path/or/url/to/paper.pdf"   (optional — omit until it's posted)
 *   }
 */

window.AIC_BRIEFS = [
  {
    title: "Opportunity for AI in Investment Banking Workflows",
    author: "Luke Green",
    group: "Investment Banking",
    date: "2026-07-20",
    takeaway: "Execution shrinks, judgment grows",
    summary: "Junior banking is dominated by mechanical execution: analysts spend roughly 50% of their time formatting pitchbooks and 30% on admin, leaving only 20% for modeling and valuation. Generative AI and data-linking tools are dismantling that bottleneck across three workflows: automated slide formatting and Excel-to-PowerPoint linking, LLM extraction of key metrics and risk factors from 100-page CIMs in minutes, and automated spread-loading. That frees analysts for complex modeling like debt-priority waterfalls and DCF sensitivities, where automation potential drops to 10 to 15% and human judgment stays indispensable. The net effect: AI compresses an analyst's desk-ready ramp-up time and shifts the training focus away from Excel shortcuts toward workflow-native prompting, AI error-auditing, and financial validation. Junior bankers have to become strategic auditors earlier in their careers.",
    sourcesNote: "Mergers & Inquisitions; McKinsey, economic potential of generative AI; Upslide."
  },
  {
    title: "How Investment Banks Are Using AI Today",
    author: "Isaac Bates",
    group: "Investment Banking",
    date: "2026-07-20",
    takeaway: "Adoption clusters early",
    summary: "AI adoption across banking and private equity is not symmetric across the deal process. Deloitte's 2025 GenAI-in-M&A study found 86% of organizations had incorporated generative AI into M&A workflows, 65% within the past year, and among adopters 88% invested at least $1M. But usage concentrates early: 40% use it for strategy and market assessment and 35% for target identification and due diligence, while only 32% reach valuation, execution, and post-deal integration, reflecting AI's strength at searching, summarizing, and drafting. JPMorgan is rolling AI tools across its global investment-banking business to synthesize information and prepare materials faster, and banks are moving toward agentic AI (KPMG: projected 2026 AI spend up to $177M, with 47% piloting agents). For now AI augments research and drafting while bankers keep valuation judgment, client advice, negotiation, and final execution.",
    sourcesNote: "Deloitte 2025 GenAI in M&A; Reuters (JPMorgan; Dimon); KPMG Q1 2026 AI Pulse."
  },
  {
    title: "The AI Adoption Ladder",
    author: "David Morgan",
    group: "Investment Banking",
    date: "2026-07-19",
    takeaway: "Everywhere and rare at once",
    summary: "Two credible 2025 studies measured GenAI use in M&A and landed about four times apart. Deloitte (1,000 US corporate and PE leaders) found 86% have integrated GenAI into their M&A workflows; Bain (300-plus global practitioners) found 21%. Neither is wrong. The gap is definitional: Deloitte counts any usage, from proofreading an email to rebuilding a diligence process, while Bain measures consistent practice. Picture adoption as a ladder with three rungs: a first touch, regular use, and a rebuilt process. Deloitte counts everyone on the ladder (86%); Bain, in effect, starts counting at regular use (21%). Read together, the surveys say AI adoption in M&A is everywhere and rare at once: nearly every firm has touched the tools, but few have rebuilt around them, and the pace is accelerating (Bain's February 2026 follow-up put adoption at about 45%). The binding caveat: it is all self-reported.",
    sourcesNote: "Deloitte 2025 M&A Generative AI study; Bain M&A and GenAI reports (2025 to 2026)."
  },
  {
    title: "Does AI Genuinely Earn Its Spot in Valuation Modeling?",
    author: "Jake Sheen",
    group: "Investment Banking",
    date: "2026-07-19",
    takeaway: "Fast to 60%, not to done",
    summary: "The productivity claims for AI valuation tools are aggressive: one tool advertises a full DCF in eight minutes, and Deloitte projects a 27 to 35% front-office productivity lift across the top 14 global banks. But Wall Street Prep's 2026 benchmark, which graded four leading tools (Shortcut, Claude, Copilot, ChatGPT) building a three-statement Apple model on the same rubric used for analyst trainees, found speed was the only category where AI beat a top analyst. On data accuracy the tools made subtle historical errors; on structure they showed broken circularity and plugged balance sheets. The best tool scored 5.9 overall against 9.4 for a top analyst. The adoption gains are real in the grunt work, comps, spreading, formula linking, taking a build from zero to about 60% (Rogo across 250-plus institutions; McKinsey cites a brief cut from nine hours to thirty minutes). The unsolved gap is between a quick first draft and a trustworthy final model.",
    sourcesNote: "Wall Street Prep 2026; Deloitte; McKinsey; vendor disclosures."
  },
  {
    title: "Judgment Is the Job AI Hasn't Taken",
    author: "Dallin Parker",
    group: "Corporate Finance",
    date: "2026-07-19",
    takeaway: "Accelerator, not deskilling",
    summary: "An interview with a Microsoft Treasury analyst, paired with a Microsoft and Carnegie Mellon study, points the same way. Her day is full of AI: Copilot, ChatGPT, and the Excel and Power BI assistants handle first drafts, formulas, and market commentary. What they do not touch is validating numbers, reconciling data, or judging portfolio and risk questions. She catches their mistakes because she built her instincts before the tools got good; her worry is the analysts coming in behind her, who may not. The CHI 2025 study frames it as GenAI moving the work rather than removing it: from gathering to verifying, from solving to integrating, from doing to stewarding. The early read: for people who already have judgment, AI is an accelerator, not a deskilling threat. The open risk is whether firms can still build that judgment in analysts who start with AI on day one.",
    sourcesNote: "Author interview (Microsoft Treasury analyst), July 2026; Lee et al., CHI 2025 (Microsoft Research and Carnegie Mellon)."
  },
  {
    title: "AI Augments, It Doesn't Replace",
    author: "Jacob Aland",
    group: "Corporate Finance",
    date: "2026-07-20",
    takeaway: "Value in collaboration",
    summary: "The research asks how leading corporate finance teams use AI to augment human decision-making, and where human-AI collaboration creates the most value. Two early interviews, at Greystar and PakEnergy, support the thesis that AI reshapes rather than replaces. At Greystar, AI processes large data sets, supports underwriting analysis, and assists reporting, but human expertise and relationship-building stay essential in relationship-driven commercial real estate. At PakEnergy, AI tools integrated with enterprise systems automate reporting and data aggregation that used to be manual, freeing professionals to analyze results, though interviewees stressed that users must still understand the underlying data to validate outputs and catch when AI conclusions are wrong. Preliminary but consistent: the greatest value comes when AI enhances human capability rather than substituting for it, and the key finance skill may shift from producing analysis to evaluating and applying AI-generated insight.",
    sourcesNote: "Author interviews (Greystar; PakEnergy), July 2026."
  },
  {
    title: "What Determines AI Adoption Success in Corporate Finance",
    author: "Taylor Wilkinson",
    group: "Corporate Finance",
    date: "2026-07-22",
    takeaway: "Culture over technology",
    summary: "Does a finance team's success with AI come from the technology itself or from organizational factors like data quality and culture? This week's secondary research points clearly to organization. Adoption is widespread but results are not: Gartner's 2025 survey found 59% of finance functions use AI, yet growth has flattened; insightsoftware's 2025 CFO survey found 58% call AI essential while only 39% feel confident using it, a training-and-trust problem, not a features problem. McKinsey's 2025 workplace research names leadership, not the technology and not employee resistance, as the single largest barrier. Teams that succeed have clean, governed data, leadership that owns the rollout, and a start in high-volume, rules-based work; teams that stall have fragmented data, uncommitted leadership, and AI layered onto unchanged processes. Working conclusion: organizational readiness matters considerably more than the technology, with interviews in the coming weeks to test whether practitioners ever name the technology itself as the real constraint.",
    sourcesNote: "Gartner 2025 AI in Finance; McKinsey, AI in the Workplace 2025; insightsoftware 2025 CFO survey. Corporate Finance team research."
  },
  {
    title: "Machines Handle Process, People Handle Relationships",
    author: "Daniel Roe",
    group: "Corporate Finance",
    date: "2026-07-21",
    takeaway: "Redrawing the job",
    summary: "AI creates value in finance as embedded workflow infrastructure while human roles concentrate around judgment, relationships, and presence. The market is not eliminating finance professionals so much as redrawing what they are hired to do. The hiring signal is stark: by 2026, 53% of hiring managers prefer AI fluency over deep domain expertise, 43% of FP&A postings now require AI or ML skills (up from 33%), and AI-related accountant roles surged 67% year over year. Yet 59% of organizations report a bad AI hire, exposing a gap between the applied capability firms need and what interviews actually detect. An interview with a practitioner at Jump AI illustrates applied capability: AI fluency is a core hiring criterion, and AI's most concrete win is unglamorous, automating reimbursement routing and approval chains, though it is overhyped as a replacement for human presence. The winning model is a division of labor: machines handle process, people handle relationships.",
    sourcesNote: "Author interview (Jump AI), July 2026; 2026 finance hiring-market data. Corporate Finance team research."
  },
  {
    title: "How AI Is Reshaping Real Estate Deal Sourcing",
    author: "Mckray Briggs",
    group: "Real Estate",
    date: "2026-07-20",
    takeaway: "Catches what humans miss",
    summary: "Deal sourcing in real estate has long leaned on broker relationships, MLS feeds, and hours of manual comp review, which meant strong-ROI opportunities got missed simply for lack of bandwidth. Talking with industry professionals, one theme kept surfacing: AI's biggest value is not replacing judgment, it is catching what humans miss. A logistics analyst at a large real estate firm described AI as most useful for gathering and reviewing large volumes of deal data so nothing in a lease or contract slips through; another shared how AI caught a contract error that manual review had missed, which ultimately protected revenue. The author is building an AI agent (with Claude Code) that pulls real market data, average days on market, listings per zip code over 12 months, and how many actually sold, to flag high-risk, low-reward deals early. The bigger picture: AI is making acquisitions more accurate and detail-driven, not just faster.",
    sourcesNote: "Author interviews with real estate acquisition professionals, July 2026."
  },
  {
    title: "Where AI Actually Lives in Hedge Funds",
    author: "Kyler Robinson",
    group: "Wealth Management & Investing",
    date: "2026-07-21",
    takeaway: "Two different games",
    summary: "AI in hedge funds is not one story, it is two. At systematic shops like Two Sigma, DE Shaw, and Man Group's AHL, AI largely is the investment process: machine-learning models ingest price data, alternative data, and macro signals, then generate and size trades with minimal daily human input, and the analyst's job shifts from picking stocks to building, testing, and monitoring the models that pick them. At discretionary long/short funds it shows up earlier in the pipeline, summarizing earnings calls, flagging filing anomalies, screening names, while the final call still sits with a portfolio manager. That split matters for anyone breaking in: learn AI means model-building on one side and faster, differentiated thesis-generation on the other. Surveys (Preqin, EY) show adoption accelerating on both sides but unevenly. The open question: as AI processes alternative data at scale, does the edge concentrate at systematic shops already built for it, or level the field for smaller discretionary funds?",
    sourcesNote: "Preqin; EY Global Alternative Fund Survey."
  },
  {
    title: "Robo vs. Human: Where Automation Actually Wins",
    author: "Matt Sheen",
    group: "Wealth Management & Investing",
    date: "2026-07-22",
    takeaway: "Economics, not quality",
    summary: "When does AI-driven portfolio management beat human advisory, and when is it simply a cheaper way to access the same thing? The market splits three ways, but only two endure. Pure-robo advisors (Betterment, Wealthfront, Schwab Intelligent Portfolios) run construction, rebalancing, and tax-loss harvesting algorithmically, often under 0.25% of assets with little to no minimum. Traditional human advisory stays relationship-driven and pricier, roughly 1.0 to 1.25% of assets, with minimums that often exclude smaller investors. The third category, hybrid, was supposed to be the best of both, but it is being shut down (Schwab by early 2026; JPMorgan, UBS, and U.S. Bank exited similar tiers). The reason is not poor client outcomes, it is that human advice does not scale like software. The market is not rejecting the idea of blending AI and human judgment, it is rejecting the economics of delivering it at scale. Early pattern to test: robo wins on cost and disciplined consistency, while human value concentrates in complex, high-net-worth situations.",
    sourcesNote: "Provider fee disclosures; industry robo-advisory reporting."
  },
  {
    title: "Building a 14-Agent AI Equity-Research Workflow",
    author: "Diego Cerecer",
    group: "Wealth Management & Investing",
    date: "2026-07-21",
    takeaway: "Workflow beats one model",
    summary: "The week moved from using AI conceptually to building a structured equity-research workflow, and the lesson was that professional research needs far more than asking a model to analyze a stock. Using Claude, the author built a simulated research firm of 14 specialized agents (market scanner, data collector, filing reader, earnings-call analyst, valuation analyst, devil's advocate, risk officer, CIO, and more), each with a defined mission, required inputs, confidence disclosure, and handoff, under shared rules to prioritize evidence over opinion, disclose uncertainty, and refuse a recommendation when evidence is thin. Tested on an energy company and then cross-checked with a second model (Perplexity), the setup showed AI is strong at business understanding and structured skepticism but weakest at converting qualitative judgment into valuation assumptions, exactly where human review matters most. Main finding: AI's value in equity research comes less from one model's isolated call than from a controlled workflow where specialized agents divide the work, challenge each other, and pass through independent verification.",
    sourcesNote: "Author's multi-agent build cross-checked with a second model, July 2026. Methodology research, not investment advice."
  }
];

window.AIC_PAPERS = [];
