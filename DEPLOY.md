# Deploy the site — GitHub → Netlify

Goal: a public URL like `https://aic-site.netlify.app` you can share — with the **application
form working** and the **/admin CMS ready to turn on**. ~15 minutes, free.

> **Why Netlify:** the apply form is already wired for Netlify Forms (submissions just work,
> no backend), and the Decap CMS at `/admin/` uses Netlify Identity + Git Gateway. One host
> covers hosting + applications + content editing.

> **What gets published:** only this `Website/` folder. Your `Research/`, `Design/`, etc.
> stay private on your computer.

---

## Part A — Commit the site to GitHub
The repo isn't on a current remote yet. Open the macOS **Terminal** and paste:
```bash
cd "$HOME/Desktop/Applied Intelligence Collective/Website"   # adjust if the folder lives elsewhere
git add .
git commit -m "Applied Intelligence Collective — site + CMS scaffold"
```
Then make a repo at https://github.com/new named **aic-site** (don't add a README/.gitignore),
and push (replace `<user>`):
```bash
git remote set-url origin https://github.com/<user>/aic-site.git   # or: git remote add origin ...
git branch -M main
git push -u origin main
```
If the push asks you to log in, install the GitHub CLI (https://cli.github.com), run
`gh auth login`, then re-run the push.

## Part B — Deploy on Netlify
1. Go to https://app.netlify.com → **Add new site → Import an existing project → GitHub**.
2. Pick **aic-site**. Build command: *none*. Publish directory: `.` (the repo is the site).
3. **Deploy.** You get a live `https://<name>.netlify.app` URL — that's your link to share.

## Part C — Turn on applications (Netlify Forms)
Already wired — just confirm:
- Submit a test application on the live site.
- It appears in Netlify → your site → **Forms → `application`**.
- Add email alerts: **Site configuration → Forms → Form notifications → Email**.

## Part D — Turn on the CMS (Decap at /admin)
1. Netlify → **Identity → Enable Identity**.
2. Identity → **Registration: Invite only** (so only your team can edit).
3. Identity → **Services → Enable Git Gateway**.
4. Add the Identity widget to the **public site** so invite links work — paste this before
   `</body>` in `index.html` (one time):
   ```html
   <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
   <script>
     if (window.netlifyIdentity) {
       window.netlifyIdentity.on("init", function (u) {
         if (!u) window.netlifyIdentity.on("login", function () { document.location.href = "/admin/"; });
       });
     }
   </script>
   ```
5. Identity → **Invite users** → invite yourself. Accept the email, set a password.
6. Visit `https://<your-site>/admin/` and log in. You can now create Briefs, Articles, and
   Newsletter issues — they commit straight to GitHub and redeploy automatically.

> **Note:** the CMS writes markdown into `content/`. The public pages don't render that content
> yet — wiring briefs onto the site (a small build step or a briefs page) is a planned next step.

## Updating the site later
Edit any file in `Website/`, then:
```bash
git add . && git commit -m "describe change" && git push
```
Netlify redeploys in seconds.

## Custom domain (optional)
Netlify → **Domain settings → Add domain**. Buy it first at Namecheap/Cloudflare — and confirm
`appliedintelligencecollective.com` (or your pick) is available before committing it to print.

## Troubleshooting
- **Form doesn't show in Netlify** → it must exist in the deployed HTML (it does); redeploy and submit once.
- **`/admin` won't log in** → Identity + Git Gateway must both be enabled, and you must accept an invite.
- **Push asks for a password** → use `gh auth login` or a Personal Access Token.
- **Intro doesn't replay** → intentional; it plays once per browser session.
