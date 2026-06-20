# Deploy a draft of the site (GitHub → Vercel)

Goal: get a public URL like `https://parameter-collective.vercel.app` you can text to a friend.
Time: ~10 minutes. Cost: $0.

> **Note on the application form:** the form is currently wired for *Netlify*. On **Vercel it
> won't deliver submissions yet** — fine for showing the look to a friend. To make it work on
> Vercel later, switch it to Formspree (instructions are in the comment at the top of `apply.html`,
> and in `README.md`).

> **What gets published:** only this `Website/` folder. Your `Research/`, `Design/`, etc. stay
> private on your computer — we push just the site.

---

## One-time prep
1. **GitHub account** — sign up free at https://github.com (skip if you have one).
2. **Vercel account** — you'll make this in Part B using your GitHub login.
3. **Git installed** — open Terminal and run `git --version`. If it's missing, macOS will pop up
   a prompt to install the developer tools — click Install, then continue.

---

## Part A — Put the site on GitHub

**1. Make an empty repository**
- Go to https://github.com/new
- Repository name: `parameter-collective-site`
- Public or Private both work with Vercel (Private keeps it unlisted).
- **Do NOT** check "Add a README" or ".gitignore" (we already have files).
- Click **Create repository**. Leave that page open — you'll need the URL it shows.

**2. Push the Website folder up to it**
Open Terminal and paste these one block at a time (replace `YOUR-USERNAME`):

```bash
cd "/Users/owenburton/Desktop/AI Finance Research Group Agent/Website"
git init
git add .
git commit -m "Parameter Collective — draft site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/parameter-collective-site.git
git push -u origin main
```

If the push asks you to log in: the simplest path is to install the GitHub CLI and authenticate —
`brew install gh` then `gh auth login` (follow the prompts) — then re-run the `git push` line.
(Alternatively, when prompted for a password, paste a Personal Access Token from
GitHub → Settings → Developer settings → Personal access tokens.)

Refresh your GitHub repo page — your files should now be there.

---

## Part B — Deploy on Vercel

1. Go to https://vercel.com and click **Sign Up → Continue with GitHub** (authorize it).
2. Click **Add New… → Project**.
3. Find `parameter-collective-site` in the list and click **Import**.
4. Settings:
   - **Framework Preset:** `Other`
   - **Root Directory:** leave as `./`
   - **Build & Output Settings:** leave everything default (no build command needed — it's a static site)
5. Click **Deploy** and wait ~30 seconds.
6. You'll get a live URL like `https://parameter-collective-site.vercel.app`. **That's the link to share.**

---

## Updating the site later
Edit any file in `Website/`, then in Terminal (from the Website folder):
```bash
git add .
git commit -m "describe what changed"
git push
```
Vercel sees the push and re-deploys automatically in a few seconds.

## Custom domain (optional, later)
Vercel → your project → **Settings → Domains** → add `parametercollective.com` once you own it.
(Buy it first at Namecheap/Cloudflare — and confirm it's available before committing the name to print.)

---

## Quick troubleshooting
- **`git push` keeps asking for a password** → use `gh auth login`, or a Personal Access Token instead of your password.
- **Vercel shows 404** → make sure `index.html` is at the top level of the repo (it is, since the repo *is* the Website folder).
- **The intro doesn't replay when clicking links** → that's intentional; it plays on open/refresh only.
- **Form doesn't send** → expected on Vercel until you wire Formspree (see `apply.html`).
