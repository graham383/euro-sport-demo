# Eurosport Tuning demo: project instructions

Static one-page design demo that follows the supplied mockup (utility bar, header, hero, fitment selector, category tiles, brand tiles, featured products, "difference" section). Everything served is in `public/` (`index.html`, `styles.css`, `site.js`, `images/`). No build step.
Hosting: Vercel project `euro-sport-demo` (live at https://euro-sport-demo.vercel.app), deployed from GitHub repo `graham383/euro-sport-demo`, branch `main`. The older `eurosport-tuning-prototype` project is a separate earlier build; do not deploy to it.

## Deploying
- Deploy ONLY by committing and pushing to `main` on GitHub. Never use base64/text uploads or any route that re-encodes images.
- Do not create another Vercel project. Never commit `.env`, tokens or credentials.

## Images (IMPORTANT)
- FULL RESOLUTION (from Graham's originals, responsive WebP q82 + AVIF q58, never enlarged): `hero` (Porsche GT3 RS, 1672x941), `road` (BMW on mountain road, difference section, 1619x971), `prod-intake` (1254x1254), `prod-brake-kit` (1254x1254), `cat-brakes` (3:2 crop of the brake photo), `cat-engine-parts` (intake kit, 1536x1024).
- STILL LOW-RESOLUTION TEMPORARY CROPS from the mockup screenshot (single small WebP, 150 to 183px wide): `cat-drivetrain`, `cat-exhaust`, `cat-exterior`, `cat-car-care`, `prod-coilovers`, `prod-exhaust-system`, `prod-intercooler`. The demo banner says so. Replace with full-resolution originals before showing this as finished.
- Unused originals Graham supplied (cars for the brand tiles, not placed yet): VW Golf R, Mercedes C63, BMW M3, Audi RS3, Porsche GT3 RS (front). Ask before changing the brand tiles, which currently use plain text names to match the mockup.
- Procedure for new originals: generate `<name>-<width>.webp` and `.avif` downward only (never upscale), give each a `<picture>` with AVIF then WebP `srcset` (`w` descriptors), accurate `sizes`, explicit `width`/`height`. Hero `fetchpriority="high"`, others lazy. Square product shots use class `sq` (circular edge fade on white cards). The build script is not in the repo, so edit `public/index.html` directly.
- Never replace an image with a smaller or recompressed copy, and never enlarge one with CSS to fake quality. Verify in a browser at 390, 820, 1440 and 1920 wide (`currentSrc`, real size vs rendered size). Full-page screenshots can miss lazy images; scroll to the section first.
- Brand tiles use plain text wordmarks, not trademarked logos.

## Content
- Products, prices, ratings and brand names are placeholders from the mockup. Keep the "design demo" banner until real data and photography are in.
- Canadian English, dollar amounts as figures, dates month-first.
