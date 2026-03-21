# kuangzhiqin.github.io

A polished static personal homepage designed for direct deployment to GitHub Pages.

## Design direction

This pass keeps the existing warm neutral palette, but shifts the page architecture toward a calmer portfolio-home layout:

- light top navigation with compact utility actions
- large split hero with text on the left and a visual panel on the right
- short intro band to bridge the hero into the page body
- stacked card-style overview section for focus, working style, notes, and GitHub
- refined minimal motion and plain HTML/CSS/JS only

## Files

- `index.html` — page structure and content
- `styles.css` — layout, typography, atmosphere, and responsive behavior
- `script.js` — reveal animation, live clock, footer year, and mobile nav toggle

## Deploy to GitHub Pages

No build step is required.

### Option 1: User site repository (`kuangzhiqin.github.io`)

1. Create a GitHub repository named `kuangzhiqin.github.io`.
2. Upload this folder's contents to the repository root.
3. Commit and push to the default branch.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main`
   - **Folder**: `/ (root)`
6. Save.
7. The site should publish at:
   - `https://kuangzhiqin.github.io`

### Option 2: Push with Git locally

```bash
cd kuangzhiqin.github.io
git init
git branch -M main
git remote add origin git@github.com:kuangzhiqin/kuangzhiqin.github.io.git
git add .
git commit -m "Restructure homepage toward a calmer portfolio layout"
git push -u origin main
```

## Customize the content

Edit `index.html` to change:

- the hero headline and subtitle
- the overview card copy
- the GitHub URL if it changes

## Customize the style

The fastest way to tune the visual system is by editing the CSS variables at the top of `styles.css`, especially:

- `--bg`
- `--bg-deep`
- `--surface`
- `--ink`
- `--muted`
- `--accent`

## Notes

- The site remains plain HTML/CSS/JS and GitHub Pages friendly.
- It is responsive for desktop and mobile.
- Fonts are loaded from Google Fonts.
- Motion respects `prefers-reduced-motion`.
