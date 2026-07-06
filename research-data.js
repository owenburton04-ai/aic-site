/*
 * AIC research-data.js — hand-curated content for the Research page.
 * No CMS, no build step: add an entry by pushing an object into one of the
 * arrays below, then commit + push /Website as usual.
 *
 * Brief shape (mirrors admin/config.yml's "briefs" collection):
 *   {
 *     title:       "One-line title",
 *     author:      "First Last",
 *     group:       "e.g. Investment Banking" (free text — whatever fits),
 *     date:        "2026-07-13",
 *     verdict:     "Working" | "Overhyped" | "Mixed" | "Too early to tell",
 *     summary:     "~300-word summary. Lead with the honest call.",
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

window.AIC_BRIEFS = [];

window.AIC_PAPERS = [];
