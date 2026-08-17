Run Step 4 of the website design workflow: Best-in-Field Pattern Research —
edits the page's HTML file.

## Working file

`clients/<client-name>/pages/<page-slug>/index.html` (same page since Steps
2-3). If it doesn't exist, tell the user to run the earlier steps for this
page first and stop.

## Hard rule: never copy source code from another site

Viewing a page's source (or its structure via `site-data-extractor`) is
fine. Reproducing a company's actual HTML/CSS/JS — their specific
implementation, however it was obtained — is copyright infringement, and
for large, well-known companies specifically it's also the fastest way to
create real legal exposure for a client. This step extracts and describes
PATTERNS in plain English, then builds an ORIGINAL implementation of that
pattern. It never pastes or closely mirrors another site's actual code.

## Hard rule: content/structure is locked from Phase 1

`02-page-plan.md` already decided this page's sections and content. This
step does not add, remove, or reorder sections. If research surfaces a
section this page is clearly missing, note it as a flag for the user's
decision — don't silently add it, since that overrides Phase 1's plan.

## 1. Identify the best-in-field companies to study

Read `clients/<client-name>/01-profile.md` for the industry. Web-search for
the biggest, most well-regarded companies globally in this field (not just
local Egypt/Saudi competitors — the goal is best practice from category
leaders, wherever they're based). Aim for 3-5.

## 2. Extract structural patterns, not code

For each company, use `site-data-extractor` to pull structural signals
(nav pattern, section order, what exists on the equivalent page type):
```bash
python skills/site-data-extractor/scripts/extract_site.py <url> --out clients/<client-name>/pages/<page-slug>/research-raw/<name>.json
```
From that plus a normal look at the page, describe each notable pattern in
your own words — e.g. "sticky nav that condenses on scroll," "pricing page
leads with the mid-tier as the recommended option," "hero uses one bold
headline with no subtext." Also note RTL handling if the site is
Arabic/bilingual.

## 3. Map patterns to this page's existing sections

For each useful pattern, match it to one of the sections already defined
in `02-page-plan.md` for this page — never a new section.

## 4. Edit the HTML file directly, with an original implementation

Apply the pattern as real CSS/markup edits to
`clients/<client-name>/pages/<page-slug>/index.html`, built from scratch to
achieve the same UX idea — your own code, not theirs. Preserve RTL if
required. Skip anything that would require closely mirroring a specific
site's exact copy, layout code, or visual assets.

## 5. Flag gaps, don't fix them silently

If research reveals this page is clearly missing something structural that
category leaders all have, tell the user about it as a suggestion — don't
add it to the HTML. That's a Phase 1 decision if they want it.

## 6. Log findings

Append a "Step 4 — Best-in-Field Research" section to
`clients/<client-name>/pages/<page-slug>/notes.md`: companies studied,
patterns applied and where, any structural gaps flagged for the user.

## 7. Confirm

Show the user what changed and confirm before ending the turn. Update
`clients/<client-name>/MANAGEMENT.md`: check the "P4 Best-in-Field" box for
this page, add a History Log entry (companies studied, patterns applied),
add any flagged gaps to Open Questions/Flags, update "Currently in
progress". Do not proceed to Step 5 automatically.
