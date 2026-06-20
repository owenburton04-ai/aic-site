# Parameter Collective — website

A self-contained static site. No build step, no framework, no dependencies to install.
Just HTML + CSS (fonts load from Google Fonts; one tiny inline script powers the clock).

```
Website/
  index.html      Home
  research.html   Research (coming soon)
  apply.html      Application (native form)
  thanks.html     Post-submit confirmation
  styles.css      All styling (brand tokens at the top)
```

Brand: Palette B "Sky & Graphite" · Space Grotesk (headings) / Inter (body) · the [P] mark,
rendered as live text so it stays razor-sharp at any size.

---

## 1. Preview locally
Open `index.html` in a browser, or run a tiny local server from this folder:
```
python3 -m http.server 8000
```
then visit http://localhost:8000

## 2. Deploy (recommended: Netlify — free, drag-and-drop, forms built in)
1. Go to https://app.netlify.com/drop
2. Drag the **Website** folder onto the page. It's live in seconds on a `*.netlify.app` URL.
3. To update later, drag the folder again (or connect a GitHub repo for auto-deploys).

## 3. The application form
The form is pre-wired for **Netlify Forms**, so once deployed to Netlify it works with zero setup:
- Submissions appear in your Netlify dashboard → **Forms** → `application`.
- Turn on email alerts: Site settings → Forms → **Form notifications** → add your email.
- File uploads (résumés) are supported and stored with each submission.

**Deploying somewhere other than Netlify (e.g. Vercel)?** Netlify Forms won't work there.
Switch to Formspree (free tier) — see the comment block at the top of the form in `apply.html`:
delete the three Netlify attributes + the hidden `form-name` input, then set
`action="https://formspree.io/f/YOUR_FORM_ID"`.

## 4. Custom domain
After deploying, add your domain in Netlify → Domain settings. Buy the domain first
(Namecheap/Cloudflare ~$10–12/yr). **Verify `parametercollective.com` is available before
you commit the name to print/handles.**

---

## Editing notes
- **Brand colors / fonts:** the `:root` block at the top of `styles.css`.
- **The live clock** (bottom of each page, in the hero on home): set for Mountain Time
  (`America/Denver`). To change, edit `timeZone` and the `' MT'` label in the `<script>`
  at the bottom of each HTML file.
- **Copy:** all text is plain HTML — edit directly in the page files.
- **Honesty guardrail:** the Research page intentionally claims no findings yet. Don't add
  fabricated stats or interviews — update it with real work once the founding cycle produces it.
# parameter-collective-site
