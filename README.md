# kuangzhiqin.github.io

A refined static personal homepage built for direct deployment to GitHub Pages.

## Design direction

This version uses a **cyber-tech + researcher editorial** direction:

- serif-led headline typography for a more distinctive voice
- dark atmospheric background with grid, scanline, halo, and grain layers
- asymmetrical composition with a large editorial hero and a structured information rail
- restrained motion using reveal transitions, pointer aura, and subtle hero tilt
- minimal believable content only: intro, focus, notes placeholder, and GitHub link

## Files

- `index.html` — page structure and site content
- `styles.css` — layout, typography, atmosphere, and responsive behavior
- `script.js` — reveal animation, pointer aura, hero tilt, and live clock

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
git commit -m "Redesign personal homepage"
git push -u origin main
```

## Customize the content

Edit `index.html` to change:

- the headline and intro copy
- the `Focus` panel text
- the `Notes` placeholder text
- the GitHub URL if it changes

## Customize the style

The fastest way to tune the visual system is by editing the CSS variables at the top of `styles.css`, especially:

- `--bg`
- `--panel`
- `--text`
- `--muted`
- `--accent`
- `--accent-2`

## Notes

- The site remains plain HTML/CSS/JS and is GitHub Pages friendly.
- It is responsive for desktop and mobile.
- Fonts are loaded from Google Fonts.
- Motion respects `prefers-reduced-motion`.
