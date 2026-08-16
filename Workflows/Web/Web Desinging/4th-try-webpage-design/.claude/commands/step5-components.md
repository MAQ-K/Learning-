Run Step 5 of the website design workflow: Component & Motion Inspiration —
edits the page's HTML file.

## Working file

`clients/<client-name>/pages/<page-slug>/index.html` (same page since Steps
2-4). If it doesn't exist, tell the user to run the earlier steps for this
page first and stop.

## 1. Identify components needed

Look at the current HTML and identify which sections would benefit from a
more polished, specific component pattern rather than the rough version
built in Step 2 (e.g. the nav, hero, pricing cards, testimonials, gallery,
contact form, footer — whichever apply to this page type). Only refine
sections already defined in `02-page-plan.md` — don't add new ones.

## 2. Research components

Search component libraries and inspiration sources (21st.dev, shadcn/ui,
Aceternity UI, Tailwind UI, Dribbble/Behance for motion) for 1-3 candidates
per section that fit the style established in Steps 2-3. For each, note
what makes it fit and any RTL adaptation needed (mirrored layout,
right-aligned text, reversed carousel direction). Confirm each library's
license permits reuse before copying its code — most listed here are
open-source, but verify rather than assume.

## 3. Edit the HTML file directly

Implement the chosen component patterns as real edits to
`clients/<client-name>/pages/<page-slug>/index.html` — actual markup/CSS
(and minimal JS if a component needs it, e.g. a carousel or accordion), not
just a description. Apply RTL adaptations inline as you build each
component, don't leave them as a TODO.

## 4. Log choices

Append a "Step 5 — Components" section to
`clients/<client-name>/pages/<page-slug>/notes.md`: which components were
sourced from where, and what RTL adaptation was applied to each.

## 5. Confirm

Show the user what changed and confirm before ending the turn. Tell them
this page's HTML is now feature-complete at the draft level and ready for
`/step6-pencil` to polish visually. Update
`clients/<client-name>/MANAGEMENT.md`: check the "P5 Components" box for
this page, add a History Log entry, update "Currently in progress". Do not
proceed automatically.
