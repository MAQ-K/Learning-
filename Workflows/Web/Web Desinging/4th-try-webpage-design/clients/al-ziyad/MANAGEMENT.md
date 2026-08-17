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

**Currently in progress:** Home page — Phase 2 (Direction) done, plus an
ad-hoc full-page 21st.dev component pass (see below, run out of order).
Awaiting `/step3-inspiration` next. Other pages not started (only Home is
in scope for now).

---

## History Log

- **Ad-hoc — 21st.dev component pass (Home, 2026-08-17):** Run out of
  pipeline order at user's request, right after connecting the 21st.dev
  MCP. 21st's free tier caps source retrieval at 2 components/day (reset
  2026-08-18 00:00 UTC) — got real code for Nav ("Header Navbar",
  eldoraui/header-02) and Hero ("Editorial Image Hero",
  felipemenezes098/hero-07), adapted from React/Tailwind to plain HTML/CSS/
  vanilla JS. Once the cap hit, user chose to keep going: the remaining
  ~8 sections (stats, service cards, how-it-works, industries, fleet
  gallery, FAQ, CTA, footer) were rebuilt as original code inspired by
  each candidate's name/description/preview only (no source was ever
  fetched for these) — FAQ went from native `<details>` to a proper
  JS accordion with real animated height + full ARIA. All
  reduced-motion guarded. No content/structure changes anywhere. Full
  section-by-section breakdown in `pages/home/notes.md`. Effectively
  covers Home's component work — a later `/step5-components` run for this
  page should build on this rather than redo it.
- **Phase 2 — Direction (Home, 2026-08-17):** Skipped the planned Phase 1
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
