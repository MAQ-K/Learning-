Run the automated intake pipeline: turns a customer's submitted form into a
completed profile, a full page-by-page content plan, AND a Step 2 initial
HTML draft for the Home page, automatically, then STOPS for review. This
replaces manually running `/step1-intake` with Q&A when a form submission
already has the answers.

## 1. Find the submission

Ask the user for the client slug if not given, or look in `clients/` for the
most recently modified `incoming-form.json` (check file mtimes) and confirm
with the user that this is the right submission before proceeding.

Read `clients/<slug>/incoming-form.json`.

## 2. Phase 1 — build the profile (auto, no Q&A)

Map the form's fields into `templates/01-client-intake-template.md`'s
structure and write `clients/<slug>/01-profile.md`:
- `company_name_ar` / `company_name_en` -> Business Basics
- `industry`, `history` -> Business Basics
- `market` checkboxes -> Target Market
- `competitors` -> Target Market
- `services` (free text) -> Services / Products — split into a clean list,
  keep the client's stated benefit phrasing rather than rewriting it
- `primary_goal`, `pages` checkboxes, `existing_content` -> Site Goals
- `tone`, `fixed_phrases` -> Tone & Voice
- `rtl_requirement`, `integrations` -> Technical Constraints
- `deadline` -> Timeline
- Mark the Source section: "Auto-submitted via intake form,
  <received_at timestamp>"

Do not ask the user clarifying questions at this stage unless a required
field is genuinely missing or contradictory (e.g. no industry given at
all) — in that case, ask only about what's missing, then continue.

## 3. Phase 1 (continued) — build the page content plan (auto)

Using the profile just built, generate the per-page content plan following
`templates/02-page-plan-template.md`: for EVERY must-have page selected in
the form, think through industry-appropriate sections rather than a
generic Header/Hero/Overview/CTA/Footer skeleton (trust stats,
how-it-works, industries served, comparison tables, FAQ, certifications,
coverage area, etc. — see the template). For every section, write the real
content (drawn from the client's actual services/goals/benefits) AND a
one-line reason it belongs on this page for this industry. Mark anything
without enough source content as "Needs client input" rather than
inventing it — still include the section, structured, if it's genuinely
valuable once filled in. Write to `clients/<slug>/02-page-plan.md`.

## 4. Phase 2 — build the first page draft (auto)

Immediately continue into Step 2's process for the Home page (or the first
page listed in the form's `pages` field if Home wasn't selected):
- Read this page's block from `02-page-plan.md` just written — this
  defines exactly which sections to build and what content goes in each,
  don't invent or reorder them
- Consult the `ui-ux-pro-max` skill for style/palette/typography matching
  the industry and tone from the profile
- Pick ONE direction yourself (don't stop to ask — this is the automated
  phase) but choose conservatively: something that clearly fits the
  industry/tone/RTL requirement rather than an experimental pick
- Build `clients/<slug>/pages/home/index.html` with that direction applied
  and exactly the sections/content from the page plan, following the same
  structure/quality bar as the manual `/step2-direction` command — real
  HTML, RTL-aware if required

## 5. Create the management file

Create `clients/<slug>/MANAGEMENT.md` from `templates/management-template.md`:
Project Brief from the profile, Task Tracker with one row per must-have
page (check "P2 Direction" for Home since Phase 2 just ran, leave the rest
unchecked), a History Log entry covering both Phase 1 and Phase 2 since
they ran together here, and any "Needs client input" items carried into
Open Questions/Flags.

## 6. Stop for review

After the management file is written, STOP. Do not run Step 3
(`/step3-inspiration`) or any further step automatically. Summarize for
the user:
- The profile that was generated (flag anything you had to infer or guess)
- The page content plan generated for all pages, not just Home
- The direction you picked for Home and why
- Where the HTML draft is
- That this is Phase 1+2 complete, awaiting their review before Step 3
  onward continues as normal, one command at a time
