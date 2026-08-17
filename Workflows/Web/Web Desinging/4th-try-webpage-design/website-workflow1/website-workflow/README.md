# Website Design Workflow — Claude Code Project

A 6-phase pipeline for designing client websites, one page at a time. Each
phase is its own slash command/prompt — you review the result before
running the next one, rather than getting one giant output from a single
prompt.

## The 6 phases, in short

| Phase | Command | What it does | Locks/edits |
|---|---|---|---|
| 1 | `/step1-intake` | Client profile + a full page-by-page content plan (what sections each page needs, and the real content for each) | Writes `01-profile.md` + `02-page-plan.md` — **content/structure is locked here** |
| 2 | `/step2-direction` | Picks a style/palette/typography via the `ui-ux-pro-max` skill; builds the first HTML draft for one page, using exactly the sections/content from Phase 1 | Creates `pages/<page>/index.html` |
| 3 | `/step3-inspiration` | Visual refinement pass — hero composition, imagery treatment, texture — from Pinterest/Dribbble/Behance references matching the locked style | Edits the same `index.html` |
| 4 | `/step4-competitors` | Studies the biggest, best-in-field companies globally; extracts UX **patterns** in plain English and rebuilds them as original code — never copies another site's actual source | Edits the same `index.html` |
| 5 | `/step5-components` | Swaps in polished, specific components (nav, pricing cards, testimonials, etc.) from libraries like shadcn/ui, 21st.dev, Aceternity UI, with RTL adaptations | Edits the same `index.html` |
| 6 | `/step6-pencil` | Final visual polish in the Pencil app, then generates and overwrites `index.html` with the finished version; then asks which page to build next | Overwrites `index.html`, appends `notes.md` |

**Two hard rules that hold the whole thing together:**
- **Content and section structure are decided once, in Phase 1, and never changed after.** Phases 2-6 only change how a page looks, never what it contains or what sections it has. If research in Phase 4 surfaces a genuinely missing section, it gets flagged to you — never auto-added.
- **No copying another site's actual code.** Phases 4 and 5 study patterns and licensed component libraries, then build original implementations — not verbatim lifts, especially not from large companies with legal teams.

## Multi-session continuity (MANAGEMENT.md)

If you work on a client across multiple chats/sessions, `CLAUDE.md` at the
project root is auto-loaded by Claude Code into every session's context.
It tells any new session to read `clients/<name>/MANAGEMENT.md` first —
a per-client status file with:

- **Project Brief** — quick facts (industry, market, RTL, goal, deadline)
- **Task Tracker** — a table of every page × every phase, checked off as
  completed, so a new session instantly knows what's done and what's next
- **History Log** — short entries per phase run, newest first
- **Open Questions/Flags** — anything surfaced but not yet resolved (e.g.
  a Phase 4 gap flag, or a Phase 1 "Needs client input" item)

Phase 1 creates this file; every phase after updates it (checks off its
box, adds a history entry). You never have to maintain it by hand — just
read it when starting a new session on a client you've worked on before.

## Setup

1. Copy the **contents** of this folder into your project root — not the
   outer `website-workflow/` folder itself. Claude Code looks for
   `.claude/commands/` relative to wherever you launch `claude` from, so
   `.claude/` has to sit at your project's root.
2. Run `claude` from inside that folder.
3. Install the Python dependency used by the site extractor once:
   ```
   pip install requests beautifulsoup4 --break-system-packages
   ```
4. For Phase 6 (Pencil): install the Pencil desktop app, then in Pencil's
   Settings → "Agents & MCP", enable the Claude Code CLI toggle. Create a
   `.pen` file for the client before running `/step6-pencil`.

## Manual usage

Start a new client (once per client, not per page):

```
/step1-intake
```

This writes `clients/<name>/01-profile.md` and
`clients/<name>/02-page-plan.md`. Review both — this is the one point where
getting things wrong costs the most downstream, since everything after this
is locked to what's decided here.

Then build pages ONE AT A TIME, running Phases 2-6 in order for each page:

```
/step2-direction    -> creates clients/<name>/pages/<page>/index.html
/step3-inspiration  -> edits it (visual refinement)
/step4-competitors  -> edits it (best-in-field patterns, no code copying)
/step5-components   -> edits it (specific components + RTL)
/step6-pencil       -> polishes in Pencil, overwrites index.html with final
                        version, then asks which page to build next
```

A running log of what each phase did/why lives alongside the page at
`clients/<name>/pages/<page>/notes.md`.

## Automated intake (form → Phase 1+2 → wait for review)

Two ways to skip manually answering Phase 1's questions:

**Option A — Express endpoint (simplest, self-contained):**
`forms/client-intake-form.html` POSTs to `/api/intake`, handled by
`server/intake-endpoint.js` (mount it in your existing Express app). Each
submission saves to `clients/<slug>/incoming-form.json`. When one arrives,
run `/new-submission` — it auto-builds the profile, the full page plan, and
a Home page draft, then stops for your review.

**Option B — n8n (goes further: no manual trigger needed):**
See `automation/README.md`. n8n receives the form, saves the submission,
and runs `/new-submission` headlessly via `claude -p` — so Phase 1+2 finish
and you just get notified it's ready to review, without running anything
yourself. Requires n8n self-hosted on the same machine as this project
(so the `claude` CLI is available to it).

Either way, `/new-submission` stops after Phase 1+2 — Phases 3-6 still run
one command at a time, same as manual usage.

## Folder structure

```
website-workflow/
├── CLAUDE.md                          -> auto-loaded context, points sessions at MANAGEMENT.md
├── .claude/
│   ├── commands/                     -> 7 commands (6 phases + new-submission)
│   └── skills/ui-ux-pro-max/         -> style/palette/typography skill (Phase 2)
├── forms/client-intake-form.html      -> bilingual customer-facing intake form
├── server/intake-endpoint.js          -> Express receiver (Option A)
├── automation/
│   ├── n8n-intake-workflow.json       -> importable n8n workflow (Option B)
│   └── README.md                      -> n8n setup instructions
├── skills/site-data-extractor/        -> scraper used by Phase 1 + Phase 4
├── templates/
│   ├── 01-client-intake-template.md   -> Phase 1 profile structure
│   ├── 02-page-plan-template.md       -> Phase 1 page-content-plan structure
│   └── management-template.md         -> MANAGEMENT.md structure
└── clients/<name>/
    ├── incoming-form.json             -> raw form submission, if used
    ├── 01-profile.md                  -> Phase 1 output
    ├── 02-page-plan.md                -> Phase 1 output — locks content/structure
    ├── MANAGEMENT.md                  -> brief + task tracker + history, read first
    └── pages/<page-slug>/
        ├── index.html                 -> the actual deliverable, built Phases 2-6
        └── notes.md                   -> detailed running log per phase
```
