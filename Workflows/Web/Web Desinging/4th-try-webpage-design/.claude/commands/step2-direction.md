Run Step 2 of the website design workflow: UI/UX Direction — creates the
working HTML file for one page.

## Working unit: one page at a time

This workflow builds ONE page's HTML file at a time through Steps 2-6, then
moves to the next page. Ask the user which page they're working on if not
already clear (e.g. Home, Services, Pricing, Our Work, Contact — should
match a "must-have page" from `clients/<client-name>/01-profile.md`).

Slugify the page name (e.g. "Our Work" -> `our-work`). The working file for
this page is:
`clients/<client-name>/pages/<page-slug>/index.html`

If it already exists, ask the user whether they want to start this page over
or they meant a different page — don't silently overwrite existing work.

## 1. Read inputs

If `clients/<client-name>/MANAGEMENT.md` exists, read it first for quick
context (task tracker, recent history, open flags) before diving into the
detailed files below.

Read `clients/<client-name>/01-profile.md` and
`clients/<client-name>/02-page-plan.md`. If either is missing, tell the
user to run `/step1-intake` first and stop.

Find this page's block in `02-page-plan.md` — this is the authoritative
source for what sections this page needs and what content goes in each.
Do not invent or reorder sections; if something in the plan is marked
"Needs client input", leave a clearly marked placeholder rather than
making up content.

## 2. Pick direction

Consult the `ui-ux-pro-max` skill (`.claude/skills/ui-ux-pro-max/`) using its
search scripts (`scripts/search.py`, `scripts/core.py`) to query styles,
color palettes, and font pairings matching the client's industry/tone. Read
`references/quick-reference.md` for baseline accessibility/UX rules to bake
in from the start (contrast, touch targets, etc.).

Propose 2-3 direction options (style name, palette with hex values and
roles, font pairing — including Arabic-compatible fonts like IBM Plex Sans
Arabic/Cairo/Tajawal if RTL is required). Ask the user to pick one.

## 3. Build the initial HTML file

Once a direction is chosen, write a real, working `index.html` for this page
at `clients/<client-name>/pages/<page-slug>/index.html`:
- Single self-contained file (inline `<style>` block is fine at this stage —
  it gets refined/split later during actual build, not during this design
  workflow)
- Apply the chosen palette, typography, and `dir="rtl"` / RTL-aware CSS if
  the profile requires it (right-aligned text, mirrored layout)
- Build exactly the sections listed for this page in `02-page-plan.md`, in
  the order given, using the real content specified there — not generic
  placeholder copy, and not sections invented on the spot
- This is a starting draft — Steps 3-5 will edit this same file, not
  replace it

## 4. Confirm

Show the user a summary of what was built and confirm before ending the
turn. Update `clients/<client-name>/MANAGEMENT.md`: check the "P2
Direction" box for this page in the Task Tracker, add a History Log entry
(direction chosen + why), update "Currently in progress". Do not proceed
to Step 3 (`/step3-inspiration`) automatically.
