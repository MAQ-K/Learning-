# Notes — Home Page

## Step 2 — Direction (2026-08-17)

- Read `01-profile.md` and the Home block of `02-page-plan.md` (unchanged
  from the original Phase 1 run — user chose to skip the Phase 1
  reconfirmation pass and build with existing content as-is).
- Consulted `ui-ux-pro-max` (`--design-system`, `--domain style`,
  `--domain typography`, `--domain color`) for B2B logistics / trust-forward
  direction options. Presented 3 directions (A: Trust & Authority navy+blue,
  B: Industrial Confidence navy+amber, C: Cold Chain Blue steel+cyan).
- **Direction chosen: B — Industrial Confidence.**
  - Palette: Primary `#1E3A8A`, Secondary `#1E40AF`, Accent `#B45309`
    (amber), Background `#F8FAFC`, Destructive `#DC2626`.
  - Typography: Tajawal (headings + body, Arabic) + Source Sans 3
    (Latin/numbers).
  - Why: more visually distinct from a generic B2B SaaS look than a plain
    navy/blue direction; the amber accent nods to transport/logistics
    signage conventions.
- No existing logo/brand color reference was available to anchor to — user
  confirmed no logo file exists yet, proceed with the new palette; a real
  logo can be swapped in later without restructuring.
- Built `index.html` with all 12 Home sections from `02-page-plan.md`, in
  order: Header/Nav, Hero, Trust Stats Band, Services Overview, How It
  Works, Industries We Serve, Why Al-Ziyad, Our Fleet teaser, Coverage Area,
  FAQ, CTA Band, Footer.
- Items marked "Needs client input" in the page plan are shown as visible
  placeholder badges in the HTML (exact fleet count/years, How It Works
  steps, exact coverage cities, two FAQ answers) rather than invented
  numbers — same treatment for the fleet/hero photos, which use the
  AI-generated stock images in `images/` with a visible "placeholder photo"
  note, since no real fleet photography is available in this repo.
- Nav links to Services/Our Fleet/About Us/Contact point to the
  `pages/<slug>/index.html` paths those pages will use once built — those
  files don't exist yet, only Home was built this round.

## Ad-hoc — 21st.dev component pass (2026-08-17)

Run out of order (before Step 3/4) at user's explicit request, to try the
newly connected 21st.dev MCP. Not a full Step 5 — flagged as partial.

- Searched 21st.dev for a candidate per section (nav, hero, stats, service
  cards, how-it-works, industries, why-us, fleet gallery, FAQ, CTA, footer).
- 21st.dev's free tier caps full source retrieval at **2 components/day**
  (resets 2026-08-18 00:00 UTC) — only got real code for two:
  - **Nav**: adapted "Header Navbar" (eldoraui/header-02,
    `@karthikmudunuri`) — added the double top-rule above the mobile panel
    and a staggered fade/slide-in for the mobile nav links on open,
    reduced-motion guarded. Translated from React/Tailwind/Framer Motion to
    plain CSS keyframes + existing vanilla JS toggle.
  - **Hero**: adapted "Editorial Image Hero" (felipemenezes098/hero-07) —
    added a small accent rule above the H1 and an IntersectionObserver
    scroll-reveal (staggered fade+translateY) on the headline/lead/CTAs/
    photo-credit, reduced-motion guarded. Did not adopt the source
    component's own layout (top full-width image + separate two-column
    tagline/headline grid, serif type) since it wasn't a fit for the
    locked full-bleed photo hero and Tajawal/Source Sans + Industrial
    Confidence direction from Step 2 — pattern only (motion + rule accent),
    no verbatim code, no content changes.
  - All other sections hit the daily retrieval cap (metadata only, no
    source). User chose to proceed anyway: built the rest as **original
    code inspired by the candidate patterns' descriptions/previews**, not
    copied from any fetched source (none was available for these) —
    consistent with the project's "extract pattern, build original" rule:
    - **Trust Stats band** — pattern nod to "Bold Stats" (uilayout.contact):
      added a per-stat icon and vertical dividers between figures, subtle
      hover lift.
    - **Service cards** — pattern nod to "Feature 72" (shadcnblockscom):
      top accent bar that fills in on hover, icon swaps to filled
      primary-color circle on hover.
    - **How It Works** — pattern nod to "How It Works Steps" (7ovr): added
      a dashed connecting line between the numbered step circles (desktop
      only, hidden under 700px).
    - **Industries chips** — icon now sits in a filled circle, chip lifts
      and its border goes accent-colored on hover.
    - **Fleet gallery** — pattern nod to "Bento Grid" (lavikatiyar):
      switched the 3 equal images to an asymmetric layout (one large lead
      image + two stacked), image zoom on hover.
    - **FAQ** — pattern nod to "Accordion" (ddoemonn): rebuilt from native
      `<details>/<summary>` to a JS-driven button+panel accordion with a
      real animated height transition (CSS grid-rows trick) and
      single-open behavior; kept full ARIA (`aria-expanded`,
      `aria-controls`, `role="region"`), reduced-motion guarded. Same
      four questions/answers, same placeholder badges — no content change.
    - **CTA band** — pattern nod to "Cta 11" (shadcnblockscom): added a
      subtle radial accent-color glow behind the heading, kept all three
      existing actions (WhatsApp/phone/contact page).
    - **Footer** — pattern nod to "Footer" (sshahaider): accent-colored
      top border, underline-on-hover link treatment.
- No content or section structure changed anywhere — visual/motion only,
  per the project's hard rules.
- Not a formal `/step5-components` run (Steps 3-4 haven't happened yet for
  this page) — this was an out-of-order pass at the user's explicit
  request, right after connecting the 21st.dev MCP. A real Step 5 later
  should treat this as already covering component work for Home, rather
  than redoing it.

> Note: the sections above (Step 2 first pass + ad-hoc 21st.dev pass)
> describe the superseded "Industrial Confidence" navy/amber direction.
> That build was overwritten (no backup) during a Step 2 redo on
> 2026-08-17 in favor of **Deep Ocean Cold-Chain** (navy `#0B1220` +
> cyan `#0EA5E9`, Tajawal + IBM Plex Sans Arabic) — see
> `clients/al-ziyad/MANAGEMENT.md` History Log for that redo. Kept here
> as historical record only; the current `index.html` reflects the new
> direction plus the Step 3 pass below.

## Step 3 — Visual Inspiration (2026-08-17)

Researched visual references for the Deep Ocean Cold-Chain direction and
the refrigerated-logistics industry, then applied findings as direct edits
to `index.html` (no rebuild, no content/section changes).

- **[ArcBest hero pattern](https://www.blendb2b.com/blog/best-logistics-and-transportation-website-examples)**
  — dark navy hero with "a subtle topographic line pattern in the
  background, giving it texture without competing with the headline."
  Applied: a new `--route-pattern` CSS variable (two low-opacity
  crossing `repeating-linear-gradient` layers in the cyan accent,
  evoking route networks) layered behind `.hero-bg`, `.stats-band`,
  `.fleet-section`, `.cta-band`, and `.why-visual` — the dark/photo
  sections that previously read as flat solid fills or a single
  gradient. Kept opacity very low (0.035–0.055) so it reads as texture,
  not decoration.
- **[Targo Logistics Hero — DESIGN.md](https://designmd.app/library/targo-logistics-hero/)**
  — "liquid glass consultation card" treatment
  (`backdrop-filter: blur(40px) saturate(180%)`) for an info card
  floating over a photo hero. Applied (toned down): `.hero-card`
  backdrop-filter changed from `blur(6px)` to `blur(20px) saturate(160%)`,
  background opacity lowered slightly (0.72 → 0.62) and the top border
  brightened to fake a light-catching glass edge — same card, same
  content, more premium/less flat.
- **[Dribbble — Frost / Temperature Graph tags](https://dribbble.com/tags/frost)**
  ([temperature graph](https://dribbble.com/tags/temperature_graph)) —
  confirmed frosted-glass and temperature-gradient motifs are an
  established visual language for cold-chain specifically, not just
  generic freight. Applied: a new `.temp-range-bar` — a thin
  cyan-to-amber gradient bar under the hero card's "-18°C إلى 8°C"
  stat, visually representing the cooling range instead of leaving it
  as plain text. This is the one cold-chain-specific (not
  freight-generic) visual addition from this pass.
- Also applied a matching icy overlay (`figure::after`, cyan gradient,
  fades in on hover) to the `.fleet-bento` gallery images, extending the
  frost motif to the fleet photos on hover instead of only a flat zoom.
- Not applied: Targo's full-bleed video hero (no video asset exists;
  out of scope) and literal frost/ice textures over photography (tested
  the idea against the research but decided it would fight the existing
  photo-driven hero rather than support it — kept the route-pattern
  texture restrained to solid-color sections instead).
- No section, copy, or placeholder-badge content changed — visual/motion
  only, consistent with the Step 3 command's scope.

## Step 3 — Visual Inspiration, round 2 (2026-08-17)

User asked for a deeper research pass; presented 6 additional ideas in
chat with sources, then asked to apply all of them. Applied to
`index.html`, still no section/copy/placeholder-badge changes:

- **[LODISNA Transport & Logistics — Awwwards](https://www.awwwards.com/sites/lodisna-transport-logistics)**
  — award-nominated logistics site's scroll-animation approach (full
  GSAP/WebGL, too heavy for this build). Applied a restrained version
  only: explicit `transition-delay` stagger (70–280ms steps) on the
  `.reveal` children of `.stats-grid`, `.services-grid`,
  `.industries-grid`, and `.why-points`, so grid items cascade in on
  scroll instead of firing near-simultaneously. Reduced-motion media
  query updated to force `transition-delay: 0ms !important` on `.reveal`
  so the stagger fully disappears under `prefers-reduced-motion`.
- **[Glassmorphism dashboard best practices](https://uxpilot.ai/blogs/glassmorphism-ui)**
  ("frosted glass only where it matters — key cards, modals, nav — not
  full-page backgrounds") — validated the Step 3 round-1 choice to only
  glass the hero card, and extended the same treatment to
  `.site-header` (`backdrop-filter: blur(14px) saturate(160%)`,
  background opacity 0.96 → 0.86) so the two "floating over content"
  surfaces feel consistent, without adding glass anywhere else.
- **Cold-chain dashboard precedent** (Behance search surfaced "RASD
  AI-Powered Cold Chain Logistics Dashboard" — project page itself
  wasn't directly retrievable, so treated as directional confirmation
  only, not a literal source) + **[cold color palette reference](https://www.designyourway.net/blog/cold-color-palettes/)**
  ("seafoam highlights against deep navy create crisp interaction
  zones") — added a new `--color-accent-light: #7DD3FC` token used only
  on hover states (`.service-card:hover` and `.industry-chip:hover`
  border-color), leaving the base `--color-accent` untouched on CTAs and
  static accents — makes interaction states read as a distinct
  "lighter/crisper" cyan per the research, without touching the Step 2
  palette lock.
- Stats band: added a small line icon per stat (fleet/clock/pin/
  temperature-cross, matching the existing icon style used elsewhere in
  the file) inside a new `.stat-icon` chip, turning the 4 text-only
  value/label pairs into a "dashboard strip" read — no new dividers
  added beyond the existing accent side-bar, which already served that
  role once the icon was in place.
- Coverage section: replaced the `.coverage-map` text placeholder
  ("خريطة تفاعلية... تُضاف عند توفر المدن") with actual inline SVG
  country silhouettes for Egypt (filled accent cyan, labeled "نطاق
  التغطية الحالي") and Saudi Arabia (dashed outline only, labeled "سوق
  التوسع المستهدف"), side by side. Shapes are simplified/illustrative
  polygons hand-built for this pass, not survey-accurate GIS data —
  reference: [simplemaps.com free Egypt SVG](https://simplemaps.com/svg/country/eg)
  and [Saudi Arabia SVG](https://simplemaps.com/svg/country/sa) (used
  as a source pointer for accurate outlines if a pixel-accurate map is
  wanted later; not fetched/embedded directly here, since only web
  search/fetch tools were available, not a file download). This is
  still consistent with the existing "بحاجة لتأكيد العميل: المدن
  والمناطق الدقيقة" placeholder note, which stays as-is — only the dead
  text-only box was replaced, not the underlying data gap.
- **Explicitly skipped, confirmed again:** full video hero (no video
  asset; out of scope) and literal frost/ice texture overlays on
  photography (would fight the real truck photos) — same reasoning as
  round 1, no new attempt made.

## Step 4 — Best-in-Field Research (2026-08-17)

**Tooling note:** `skills/site-data-extractor/scripts/extract_site.py`
requires Python, which isn't available in this environment (`python`,
`python3`, and `py` all failed to resolve). Fell back to WebSearch +
WebFetch for structural research instead of the script's raw JSON output,
per the command's fallback allowance. No `research-raw/*.json` files were
produced this round — findings below are written directly from the
WebFetch summaries. Two attempted targets (DHL, Maersk) returned
connection errors (`ECONNRESET`) on fetch and were dropped in favor of
companies that resolved successfully.

**Companies studied** (4, global category leaders — not local Egypt/Saudi
competitors, per the command's instruction):

1. **[Lineage, Inc.](https://www.onelineage.com/)** (formerly Lineage
   Logistics) — largest cold storage network in the world.
2. **[Americold](https://www.americold.com)** — largest temperature-
   controlled warehousing operator by facility count.
3. **[KLLM Transport](https://www.kllm.com)** — one of the largest
   temperature-controlled *truckload carriers* specifically (closer
   analog to Al-Ziyad's trucking model than the two warehousing giants
   above).
4. **[Kuehne+Nagel](https://www.kuehne-nagel.com/)** — global freight
   forwarder with a dedicated Cold Chain/Perishables logistics line.

**Patterns identified and mapped to existing Home sections:**

- **Trust Stats Band** (page-plan section 3) — Americold leads its stats
  with an explicit "Our Impact, Measured" eyebrow/label before the
  numbers, and Kuehne+Nagel uses large animated count-up numbers under a
  similar framing. Applied: added a small eyebrow label ("أداؤنا بالأرقام")
  above the stats grid, using a new `.eyebrow-on-dark` modifier (existing
  `.eyebrow` class was defined in the CSS but unused anywhere in the
  markup — reused it here). Did **not** add animated count-up numbers —
  none of the 4 stats currently hold a real number (fleet count, years
  in business are still open/unconfirmed per `MANAGEMENT.md`), and
  inventing one to animate would violate the project's no-fabricated-
  numbers rule. Flagged below instead.
- **Coverage Area** (section 9) — both Americold and Kuehne+Nagel give
  their global network/coverage a prominent, mapped visualization rather
  than a text list. No new change needed here — the Step 3 round-2 work
  (real Egypt/Saudi SVG silhouettes replacing the placeholder text box)
  already anticipated this exact pattern.
- **Header/Nav, Hero, Services cards, Fleet imagery, CTA repetition**
  (sections 1, 2, 4, 8, 11) — validated against all 4 companies (sticky
  nav, dual-CTA hero, consistent-ratio service/content cards, phone
  number repeated across multiple touchpoints — KLLM repeats its number
  3+ times site-wide, matching Al-Ziyad's existing header/hero/CTA-band/
  footer repetition). No structural changes needed — current
  implementation already follows these patterns.
- **How It Works, Industries We Serve, FAQ** (sections 5, 6, 10) — none
  of the 4 studied companies feature an equivalent section prominently on
  their homepage (enterprise logistics sites skew toward case
  studies/network maps over these B2B-buyer-education patterns). Not a
  gap for Al-Ziyad specifically — these sections serve a different,
  still-valid purpose (self-qualification, objection-handling) for a
  smaller regional operator's lead-gen site. No change.

**Structural gaps flagged (not implemented — Phase 1 decision if wanted):**

1. **Case studies / quantified client outcomes.** Lineage's homepage
   leans heavily on case-study cards with specific results ("$2M in
   annual savings," "avoiding port chaos when $10M is on the line").
   Al-Ziyad has no testimonial or case-study content yet and none is
   planned in `02-page-plan.md`. Worth considering for a future page/
   section once real client outcomes exist to cite — not something to
   add now with placeholder numbers.
2. **Footer legal links + social icons.** Lineage, Americold, and
   Kuehne+Nagel all include Terms/Privacy/Cookie-policy links and social
   media icons in their footers. Al-Ziyad's footer currently has neither
   (no legal pages exist, and social profiles weren't part of the
   uploaded source material). Flagging in case the client wants a
   Privacy/Terms placeholder link or social handles added once
   available — not blocking, most B2B logistics buyers don't need this
   to convert.
3. Reinforces an existing flag rather than a new one: Kuehne+Nagel's
   animated numeric stats confirm that once fleet size/years-in-business
   are confirmed (already flagged in `MANAGEMENT.md`'s Open Questions),
   an animated count-up would be a strong, low-effort upgrade to the
   stats band built in this step.

## Section pass — Hero + Navbar (2026-08-18)

Out-of-order work at the user's direction — the start of a
section-by-section refinement walk, not a numbered workflow step (Step 5
components still hasn't run). Reference supplied by the user at
`images/inspirations-me/hero-1.jpg` (Uthao air-cargo logistics concept).

**Taken from the reference:**
- Floating **pill navbar** overlaying the hero — brand at the inline
  start, translucent rounded-pill nav in the center, single solid CTA at
  the inline end. Pill reuses the glass language already established on
  the old `.hero-card` in Step 3 (`blur(14px) saturate(160%)`).
- Left-aligned oversized headline with a short supporting line beneath,
  over a dark directional gradient wash for legibility.

**Explicitly excluded at the user's instruction:**
- Their buttons — kept the existing `.btn-primary` / `.btn-outline`
  styles unchanged.
- Their margins — the reference floats the hero as an inset rounded card;
  ours stays full-bleed, edge to edge.

**Built:**
- New `.hero-viewport` wrapper holds header + slider + stats band at
  `100dvh` (with a `100vh` fallback) so all three occupy exactly one
  screen on desktop, per the user's request. Below 860px the height lock
  is released — hero takes `82dvh` and the stats band flows underneath,
  so nothing gets compressed on phones.
- 3-slide hero carousel, cross-fading via opacity/visibility:
  1. Locked tagline "رواد في خدمات الشحن والنقل المبرد"
  2. النقل المجمد (-18°C or lower)
  3. النقل المبرد (0°C to 8°C)
  All copy lifted from `01-profile.md` §3 — no invented content, and the
  section count in `02-page-plan.md` is unchanged (still one Hero
  section, now with rotating content inside it).
- Slide backgrounds are `<img>` **placeholders**, each with an inline
  comment marking the exact `<video>` swap point (autoplay/muted/loop/
  playsinline + poster). Reused existing Pexels files; no new assets.
- Auto-advance every 6s + dots + arrows. Pauses on hover, focus, and tab
  visibility change; never starts at all under
  `prefers-reduced-motion: reduce`. Swipe support on touch.
- Arrows are RTL-correct: "previous" sits at the inline start (visually
  right) with a right-pointing chevron, "next" at the inline end.
  Swiping right advances, matching RTL reading direction.
- Header keeps its sticky behavior despite now floating: transparent over
  the hero, then JS switches it to `position: fixed` with the solid navy
  glass background once the hero viewport scrolls past, with a short
  drop-in animation. This preserves `02-page-plan.md` §1's phone-in-nav
  requirement for B2B buyers who call before filling a form.
- Mobile nav panel rewritten from inline-style mutation to a proper
  `.is-open` class toggle, and wired up with `aria-controls`.

**`.hero-card` removed, Step 3 work relocated not lost:** the old
markets/cooling-range/fleet `<dl>` card has no equivalent in the
reference layout and was never part of `02-page-plan.md`'s hero spec, so
removing it moves the page closer to the locked plan. Its
`.temp-range-bar` (the one genuinely cold-chain-specific visual from Step
3) moved into slides 2 and 3, where it now sits under the frozen and
chilled headlines with an explicit range label — a better contextual home
than the generic card it came from.

Sections 3-12 below the hero were not touched.
