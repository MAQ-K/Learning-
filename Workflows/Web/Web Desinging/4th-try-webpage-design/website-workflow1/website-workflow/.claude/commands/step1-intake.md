Run Step 1 of the website design workflow: Client Profile & Web Description.

1. Ask the user for the client name (used as the folder name under `clients/`,
   slugified, e.g. `katechs`, `tabqat`).
2. Ask if they have an existing website URL for this client (their current
   site, or a reference site to base intake on). This can be skipped.
3. If a URL is given:
   - Use the `site-data-extractor` skill: run
     `python skills/site-data-extractor/scripts/extract_site.py <url> --out clients/<client-name>/extracted-raw.json`
   - Read the resulting JSON and use it to pre-fill as many fields of
     `templates/01-client-intake-template.md` as it reasonably answers.
   - Still directly ask the user for anything the scrape can't infer:
     target market split (Egypt/Saudi/both), tone preference, timeline,
     technical constraints, and confirm any auto-detected colors/copy before
     treating them as final.
4. If no URL is given, ask the user through the template fields directly,
   organized by section (Business Basics, Target Market, Services, Site
   Goals, Tone & Voice, Technical Constraints, Timeline). Don't dump all
   fields as one wall of questions — group them, and let the user answer in
   batches.
5. Write the completed profile to `clients/<client-name>/01-profile.md`,
   following the structure of `templates/01-client-intake-template.md`, and
   mark the Source section (manual vs auto-extracted, with URL if used).
6. Show the user the completed profile and confirm it looks right before
   continuing to the page content plan.
7. Using the confirmed profile's services, goals, and must-have pages list,
   build the per-page content plan following
   `templates/02-page-plan-template.md`: for EVERY must-have page, think
   through what a real visitor to THIS industry/page actually needs to see
   before they'd trust the business or act — don't default to a generic
   Header/Hero/Overview/CTA/Footer skeleton. Consider industry-appropriate
   sections (trust stats, process/how-it-works, industries served,
   comparison tables, FAQ, certifications, timeline, coverage area, etc. —
   see the template for more) and include whichever genuinely fit this
   client. For every section, write both the real content (drawn from the
   client's actual services/benefits/goals, not placeholder text) AND a
   one-line reason it belongs on this page for this industry. Mark
   anything the profile doesn't have enough content for as "Needs client
   input" rather than inventing it — the section can still be structured
   and included, just flagged.
8. Write this to `clients/<client-name>/02-page-plan.md`.
9. Show the user the page plan and confirm it before continuing. Do
   not make any design/style decisions here (palette, fonts, layout look)
   — that's Phase 2 (`/step2-direction`), which reads this plan as its
   input for what each page needs to contain.
10. Create `clients/<client-name>/MANAGEMENT.md` from
    `templates/management-template.md`: fill in the Project Brief from the
    profile, build the Task Tracker table with one row per must-have page
    (all phases unchecked), add a first History Log entry noting the
    profile and page plan were created, and carry over anything marked
    "Needs client input" into Open Questions/Flags. This file is what any
    future session (this one or a different chat) reads first to
    understand this client's status — see root `CLAUDE.md`.
11. End the turn.
