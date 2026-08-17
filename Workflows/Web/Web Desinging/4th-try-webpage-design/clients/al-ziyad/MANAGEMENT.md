# Management — Al-Ziyad Company

Last updated: Phase 1 (`/step1-intake`, run manually via walkthrough)

---

## Project Brief

- **Client:** شركة الزياد للنقل المبرد / Al-Ziyad Company for Refrigerated Transport
- **Industry:** Refrigerated transport & logistics (frozen, chilled, dry)
- **Market:** Egypt (primary) + Saudi Arabia (expansion target)
- **RTL requirement:** Bilingual, Arabic-first
- **Primary goal:** Generate leads/quote requests, showcase services, build credibility
- **Deadline:** Not yet specified
- **Full profile:** `01-profile.md`
- **Page content plan:** `02-page-plan.md`

---

## Task Tracker

| Page | P2 Direction | P3 Inspiration | P4 Best-in-Field | P5 Components | P6 Pencil (final) |
|---|---|---|---|---|---|
| Home | ☑ | ☐ | ☐ | ☐ | ☐ |
| Services | ☐ | ☐ | ☐ | ☐ | ☐ |
| Our Fleet | ☐ | ☐ | ☐ | ☐ | ☐ |
| About Us | ☐ | ☐ | ☐ | ☐ | ☐ |
| Contact | ☐ | ☐ | ☐ | ☐ | ☐ |

**Currently in progress:** Home page — Phase 2 (Direction) redone
(2026-08-17, second pass) with a new direction, replacing the prior
"Industrial Confidence" build and the ad-hoc 21st.dev component pass
that sat on top of it (both superseded, not preserved — user chose
overwrite with no backup). Awaiting `/step3-inspiration` next. Other
pages not started (only Home is in scope for now).

---

## History Log

- **Phase 2 — Direction REDO (Home, 2026-08-17):** User asked to redo
  Phase 2 from scratch and to consult all available UI/design skills
  (`ui-ux-pro-max`, `frontend-ui-ux-omo`, `design-taste-frontend`,
  `ui-styling`, `premium-frontend-ui`) rather than just the default
  `ui-ux-pro-max`. Queried `ui-ux-pro-max` design-system + color +
  typography domains for B2B refrigerated logistics; applied
  `design-taste-frontend`'s anti-slop rules (accent-lock discipline,
  no default AI-blue-SaaS palette, layout-family variety, no em-dashes,
  reduced-motion guarding) on top of it. Presented 3 new direction
  options, deliberately different from the prior "Industrial Confidence"
  pick: Steel & Signal Orange, Deep Ocean Cold-Chain, Slate & Amber
  Freight. User picked **Deep Ocean Cold-Chain** (near-black navy
  `#0B1220` + icy cyan accent `#0EA5E9`, evokes refrigeration directly).
  Typography: Tajawal (display) + IBM Plex Sans Arabic (body), both with
  Latin subsets for bilingual numbers/EN strings. Rebuilt
  `clients/al-ziyad/pages/home/index.html` from scratch with this
  direction, all 12 sections from `02-page-plan.md`, varied layout
  families per section (dark stats band, bento fleet gallery, asymmetric
  split "Why Al-Ziyad", accordion FAQ) to avoid repetitive AI-slop
  rhythm. The prior build (Industrial Confidence navy/amber + the
  ad-hoc 21st.dev Nav/Hero component pass) was overwritten with no
  backup per explicit user choice — that 21st.dev sourcing work is gone
  and would need to be redone in a future `/step5-components` pass.
- **Ad-hoc — 21st.dev component pass (Home, 2026-08-17, SUPERSEDED):**
  Original entry preserved for history only; the resulting code no
  longer exists in `index.html` after the Phase 2 redo above. Ran out of
  pipeline order right after connecting the 21st.dev MCP; got real code
  for Nav and Hero (2/day free-tier cap), rebuilt ~8 more sections from
  candidate names/descriptions only. See `pages/home/notes.md` for the
  original breakdown (also stale relative to the current file).
- **Phase 2 — Direction, first pass (Home, 2026-08-17, SUPERSEDED):** Skipped the planned Phase 1
  reconfirmation pass (user chose to proceed with existing profile/page-plan
  as-is). Queried `ui-ux-pro-max` for B2B logistics direction options;
  presented 3 (Trust & Authority navy/blue, Industrial Confidence
  navy/amber, Cold Chain Blue steel/cyan). User picked **Industrial
  Confidence** (navy `#1E3A8A` + amber `#B45309` accent, Tajawal + Source
  Sans 3). No existing logo/brand colors were available to anchor to — user
  confirmed proceeding without one. Built `clients/al-ziyad/pages/home/index.html`
  with all 12 sections from `02-page-plan.md`. Fleet/hero images use the
  AI-generated stock photos in `images/` with a visible placeholder note,
  since no real fleet photography exists in this repo.
- **Phase 1 (manual walkthrough):** Profile and 5-page content plan created
  from uploaded fleet photos + 3 source documents (About Us copy, bilingual
  service articles). Market resolved as Egypt + Saudi Arabia (user
  confirmed, resolving a conflict between Arabic docs saying "Kingdom" and
  Egyptian truck plates). Page structure locked: Home, Services (single
  page, 3 sections), Our Fleet, About Us, Contact (simple form, no
  multi-step).

- **Photos — Pexels swap (Home, 2026-08-17):** User provided a Pexels API
  key and asked to use real stock photography instead of the AI-generated
  placeholder truck images. Downloaded 5 licensed (free, no attribution
  required) photos into `images/pexels/`, resized/compressed for web
  (78% JPEG quality, capped at 1200-1920px wide): hero background
  (`hero-27099094.jpg`), 3 fleet-gallery bento images (`fleet-loading-
  27099093.jpg`, `fleet-dock-5876475.jpg`, `fleet-highway-39000647.jpg`),
  and the "Why Al-Ziyad" side visual (`why-9309636.jpg`). These are
  generic stock trucks, not Al-Ziyad's actual fleet, so alt text and the
  Fleet-teaser section copy were kept honest ("صورة توضيحية" /
  illustrative) with a placeholder-note flag, since `02-page-plan.md`'s
  rationale for that section specifically bets on REAL fleet photos as a
  differentiator over competitors' stock imagery. Swap for real client
  fleet photos once available. Old AI-generated images in `images/`
  (root) are untouched and still available if needed elsewhere.

---

## Open Questions / Flags

- Fleet size (exact count) and per-unit specs — not given, needed for
  Our Fleet page's Fleet Specs section
- Founding year / years of experience as a specific number — source docs
  only say "long-standing experience"
- Main competitors — not yet provided (relevant for Phase 4)
- Deadline, hosting/deployment target — not yet specified
- "MED TRANS S.A." branding appears on some trailers alongside "ELZYAD" —
  unclear if related entity, prior name, or partner; not used anywhere in
  the page plan, but worth clarifying before final Pencil build in case it
  needs mentioning
- 21st.dev component pass for Home is only 2/~10 sections done (Nav, Hero)
  — free-tier retrieval cap hit. Candidates already identified for the
  rest (Stats: "Bold Stats"; Services: "Feature 72"; How It Works: "How It
  Works Steps"; Fleet gallery: "Bento Grid"; FAQ: "Accordion"
  (ddoemonn); CTA: "Cta 11"; Footer: "Footer" (sshahaider)) — resume after
  2026-08-18 00:00 UTC reset, or during a proper `/step5-components` run
