# Eurosport Tuning demo: project instructions

Static one-page design demo that follows the supplied mockup (utility bar, header, hero, fitment selector, category tiles, brand tiles, featured products, "difference" section). Everything served is in `public/` (`index.html`, `styles.css`, `site.js`, `images/`). No build step.
Hosting: Vercel project `euro-sport-demo` (live at https://euro-sport-demo.vercel.app), deployed from GitHub repo `graham383/euro-sport-demo`, branch `main`. The older `eurosport-tuning-prototype` project is a separate earlier build; do not deploy to it.

## Deploying
- Deploy ONLY by committing and pushing to `main` on GitHub. Never use base64/text uploads or any route that re-encodes images.
- Do not create another Vercel project. Never commit `.env`, tokens or credentials.

## Images (IMPORTANT)
- CURRENT PHOTOS ARE LOW-RESOLUTION TEMPORARY CROPS from the mockup screenshot (hero 555px wide, category tiles about 150px, products about 183px, engine 468px). The demo banner says so. They must be replaced with full-resolution originals before this is shown as finished.
- When originals arrive: generate `<name>-<width>.webp` and `.avif` (WebP q82, AVIF q58) downward only, never upscale, then give each image a `<picture>` with AVIF then WebP `srcset` (`w` descriptors), accurate `sizes`, and explicit `width`/`height`. Hero stays `fetchpriority="high"`, others lazy. Keep file names: hero, engine, cat-brakes, cat-engine-parts, cat-drivetrain, cat-exhaust, cat-exterior, cat-car-care, prod-intake, prod-brake-kit, prod-coilovers, prod-exhaust-system, prod-intercooler.
- Never replace an image with a smaller or recompressed copy, and never enlarge one with CSS to fake quality. Verify in a browser at 390, 820, 1440 and 1920 wide (`currentSrc`, real size vs rendered size).
- Brand tiles use plain text wordmarks, not trademarked logos.

## Content
- Products, prices, ratings and brand names are placeholders from the mockup. Keep the "design demo" banner until real data and photography are in.
- Canadian English, dollar amounts as figures, dates month-first.
