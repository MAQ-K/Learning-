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
