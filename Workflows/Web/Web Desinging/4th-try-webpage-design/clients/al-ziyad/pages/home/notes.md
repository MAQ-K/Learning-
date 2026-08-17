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
