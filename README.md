# kuangzhiqin.github.io

A polished static personal homepage designed for direct deployment to GitHub Pages.

## Design direction

This version uses a **dark indie developer** direction:

- cleaner, product-minded structure instead of an editorial/research layout
- modern sans-led typography with mono details for a more practical voice
- dark but approachable visual system with subtle grid, glow, and terminal cues
- minimal believable content only: intro, focus, notes placeholder, and GitHub link
- lightweight motion with responsive layout and GitHub Pages-friendly plain HTML/CSS/JS

## Files

- `index.html` — page structure and site content
- `styles.css` — layout, typography, atmosphere, and responsive behavior
- `script.js` — reveal animation and live clock in the GitHub card

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
git commit -m "Refine homepage toward indie developer style"
git push -u origin main
```

## Customize the content

Edit `index.html` to change:

- the hero headline and intro copy
- the `Focus` section text
- the `Notes` placeholder text
- the GitHub URL if it changes

## Customize the style

The fastest way to tune the visual system is by editing the CSS variables at the top of `styles.css`, especially:

- `--bg`
- `--panel`
- `--text`
- `--muted`
- `--accent`
- `--accent-warm`

## Notes

- The site remains plain HTML/CSS/JS and is GitHub Pages friendly.
- It is responsive for desktop and mobile.
- Fonts are loaded from Google Fonts.
- Motion respects `prefers-reduced-motion`.
