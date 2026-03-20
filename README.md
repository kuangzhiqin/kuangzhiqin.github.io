# kuangzhiqin.github.io

A lightweight static personal site designed for direct deployment to GitHub Pages.

## Files

- `index.html` — site structure and content
- `styles.css` — visual design, layout, typography, and animations
- `script.js` — reveal motion, cursor glow, and live clock

## Deploy to GitHub Pages

This project is built with plain HTML/CSS/JS, so no build step is required.

### Option 1: User site repository (`kuangzhiqin.github.io`)

If your GitHub repository is named exactly `kuangzhiqin.github.io`, GitHub will publish it as a user site.

1. Create a GitHub repository named `kuangzhiqin.github.io`.
2. Upload the contents of this folder to the root of that repository.
3. Commit and push to the default branch (`main` is typical).
4. Open the repository on GitHub.
5. Go to **Settings → Pages**.
6. Under **Build and deployment**, set:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main`
   - **Folder**: `/ (root)`
7. Save the settings.
8. After GitHub finishes publishing, your site should be available at:
   - `https://kuangzhiqin.github.io`

### Option 2: Push with Git locally

```bash
cd kuangzhiqin.github.io
git init
git branch -M main
git remote add origin git@github.com:kuangzhiqin/kuangzhiqin.github.io.git
git add .
git commit -m "Initial personal site"
git push -u origin main
```

Then enable GitHub Pages in repository settings if needed.

## Customize the content

### Change the intro text

Edit `index.html` and update:

- The main headline inside `<h1>`
- The introduction paragraph with class `.lead`
- The text in the `Focus` and `Notes` panels

### Change the GitHub link

Search for:

- `https://github.com/kuangzhiqin`
- `github.com/kuangzhiqin`

Replace those values with your actual GitHub profile URL if it changes.

### Change the visual style

Edit `styles.css` and start with the `:root` variables near the top:

- `--bg`
- `--panel`
- `--text`
- `--muted`
- `--accent`
- `--accent-2`

These control most of the site colors and mood.

### Remove or replace the live clock

If you do not want the footer clock:

1. Remove `<span id="clock"></span>` from `index.html`
2. Remove the clock-related code from `script.js`

## Notes

- The site is responsive and works well on desktop and mobile.
- Fonts are loaded from Google Fonts.
- No framework, package manager, or build pipeline is needed.
