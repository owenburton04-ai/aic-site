# Applied Intelligence Collective — website

A self-contained static site. No build step, no framework, no dependencies to install.
HTML + CSS (fonts load from Google Fonts; one tiny inline script powers the clock).

```
Website/
  index.html            Home (editorial split hero)
  research.html         Research — the 3 lenses + 8 tracks
  apply.html            Application (native form + program-overview link)
  thanks.html           Post-submit confirmation
  program-overview.pdf  The internship program deck (linked from home + apply)
  favicon.svg           The [ AI ] mark
  styles.css            All styling (brand tokens at the top)
  intro.js              One-time opening animation (per browser session)
  admin/                Decap CMS — /admin (config.yml + index.html)
  content/              CMS content: briefs / articles / newsletter (markdown)
  images/uploads/       CMS media uploads
```

Brand: Palette B "Sky & Graphite" · Space Grotesk (headings) / Inter (body) · the [ AI ] mark,
rendered as live text so it stays sharp at any size.

---

## 1. Preview locally
Open `index.html`, or run a tiny server from this folder:
```
python3 -m http.server 8000   # then visit http://localhost:8000
```

## 2. Deploy
**Netlify** (recommended — hosting + forms + CMS in one). Full steps in `DEPLOY.md`.
Quick path: drag this `Website/` folder onto https://app.netlify.com/drop, or connect the
`aic-site` GitHub repo for auto-deploys.

## 3. The application form
Pre-wired for **Netlify Forms** — works with zero setup once on Netlify:
- Submissions: Netlify dashboard → **Forms → `application`**.
- Email alerts: Site configuration → Forms → **Form notifications**.
- Résumé file uploads are supported.

Not on Netlify (e.g. Vercel)? Switch to Formspree — see the comment at the top of the form
in `apply.html` (delete the Netlify attrs + hidden `form-name`, set `action` to your Formspree URL).

## 4. Content / CMS (Decap)
The `/admin/` route is a **Decap CMS** scaffold. Turn it on after deploying: enable Netlify
**Identity** + **Git Gateway**, invite yourself, then edit at `your-site/admin/`. See `DEPLOY.md`
Part D. Collections: Research Briefs, Articles, Newsletter. The CMS commits markdown into
`content/`; rendering that content onto the public pages is a planned next step.

## 5. Custom domain
Netlify → Domain settings. Buy the domain first (Namecheap/Cloudflare). **Confirm
`appliedintelligencecollective.com` (or your pick) is available before committing it to print.**

---

## Editing notes
- **Brand colors / fonts:** the `:root` block at the top of `styles.css`.
- **The live clock:** set to Mountain Time (`America/Denver`) — edit `timeZone` / the `' MT'`
  label in the `<script>` at the bottom of each HTML file.
- **Copy:** plain HTML — edit directly in the page files.
- **Honesty guardrail:** the Research page intentionally claims no findings yet. Don't add
  fabricated stats or interviews — publish real work once the founding cycle produces it.
