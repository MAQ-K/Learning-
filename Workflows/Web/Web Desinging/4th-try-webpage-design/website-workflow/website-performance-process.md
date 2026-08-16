# Website Performance Optimization Process
### For HTML / CSS / JS Template-Based Projects

A general, repeatable pipeline to take any standard HTML/CSS/JS website from template-default to high-performance. Applicable to most client projects (KaTechs, Madar Randa, etc.).

---

## 1. Baseline Audit (Before Touching Anything)

- Run **Lighthouse** (Chrome DevTools), **PageSpeed Insights**, and **WebPageTest** (test from a Riyadh/Cairo node if that's the target traffic).
- Record baseline metrics: **LCP, CLS, INP, TBT, TTFB** — needed to prove improvement to the client.
- Check the Network tab: total payload size, number of requests, and the waterfall (what blocks what).

---

## 2. HTML

- Remove unused markup, comments, and dead sections left over from the template.
- Fix semantic structure (single `h1`, proper landmarks) — helps SEO and parsing speed.
- Add `width` / `height` (or `aspect-ratio`) on every `img` / `video` to prevent CLS.
- Preload critical resources: `<link rel="preload">` for hero image/font, `rel="preconnect"` for third-party domains (Google Fonts, analytics, CDNs).
- Defer non-critical embeds (maps, YouTube) — load on scroll/interaction instead of on page load.

---

## 3. CSS

- Purge unused CSS. Templates often ship full frameworks (Bootstrap, full icon sets) when the page uses ~10% of it — use PurgeCSS or strip manually.
- Inline critical above-the-fold CSS in `<head>`, load the rest asynchronously (`media="print" onload="this.media='all'"` trick or a small loader script).
- Minify and combine CSS files — but don't over-concatenate if it delays first paint (split critical vs. non-critical).
- Avoid `@import` in CSS (blocks in sequence) — use `<link>` tags instead.
- Cut expensive selectors and unnecessary `box-shadow` / `filter` / backdrop-blur heavy effects if they hurt paint time on mobile.

---

## 4. JavaScript

- Audit every third-party script (chat widgets, trackers, sliders) — remove anything not earning its weight.
- Split: critical JS inline/early, everything else `defer` or `async`.
- Replace heavy libraries with vanilla JS where reasonable (e.g., jQuery used for one thing, full carousel library for 3 slides).
- Minify and tree-shake if using a bundler (esbuild/vite are lightweight to drop into a plain template).
- Lazy-load JS for below-the-fold interactive components (accordions, modals, galleries) — init only when visible/needed.
- Remove `console.log`s and dead code paths left from template boilerplate.

---

## 5. Images (Usually the Biggest Win)

- Convert all images to **WebP/AVIF**.
- Serve responsive sizes via `srcset` / `sizes` — don't ship a 2000px hero image to a 375px phone.
- Lazy-load all offscreen images: `loading="lazy"`.
- Compress aggressively (TinyPNG, Squoosh) even after format conversion.
- Handle the LCP/hero image separately: preload it, do **not** lazy-load it.

---

## 6. Fonts

- Self-host fonts instead of using Google Fonts CDN when possible (removes an extra DNS/connection round-trip).
- Subset fonts to used characters — critical for Arabic + Latin dual-language sites (don't ship full glyph sets for both).
- Use `font-display: swap` to avoid invisible text during load.
- Limit to 2 font families and a few weights max — templates often load 6+ unused weights.

---

## 7. Server / Hosting (cPanel Context)

- Enable Gzip/Brotli compression at the server level.
- Set proper cache headers (`Cache-Control`, `Expires`) for static assets — long cache duration with hashed filenames for cache-busting.
- Enable HTTP/2 (most cPanel hosts support it — confirm it's active).
- Use a CDN (Cloudflare free tier is sufficient for most client sites) — significant win when the origin server isn't geographically close to users (Saudi/Egypt traffic).
- Minimize redirect chains (www → non-www, http → https should be a single hop).

---

## 8. Re-Test and Lock In

- Re-run Lighthouse / WebPageTest and compare against the baseline from Step 1.
- Set a performance budget (e.g., total page weight < 1.5MB, JS < 300KB) so future edits don't silently regress it.
- Document this checklist as a repeatable process for every new client project.

---

## Quick Reference Checklist

| Area | Key Actions |
|---|---|
| HTML | Clean markup, img dimensions, preload/preconnect |
| CSS | Purge unused, critical CSS inline, minify |
| JS | Remove unused libs, defer/async, lazy-load components |
| Images | WebP/AVIF, responsive srcset, lazy-load, compress |
| Fonts | Self-host, subset, font-display swap, limit weights |
| Server | Gzip/Brotli, cache headers, HTTP/2, CDN |
| Verify | Re-test, compare to baseline, set performance budget |
