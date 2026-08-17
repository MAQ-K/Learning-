Run Step 6 of the website design workflow: Pencil AI Build — turns the
Steps 2-5 draft HTML into a polished final page, then hands off to the next
page.

## Working file

`clients/<client-name>/pages/<page-slug>/index.html` — the draft built
through Steps 2-5. If it doesn't exist, tell the user to run the earlier
steps for this page first and stop.

## 0. Prerequisites

- Pencil desktop app must be running, with "Agents & MCP" → Claude Code CLI
  toggle enabled in its settings. If you can't reach a Pencil MCP tool, tell
  the user to check this and stop rather than faking output.
- A `.pen` file for this client should exist (e.g.
  `clients/<client-name>/design.pen`). If not, ask the user to create one in
  Pencil first.

## 1. Bring the draft into Pencil

Create/target a frame in the `.pen` file named after this page (e.g.
`Home Frame`). Send a prompt to the Pencil MCP server that:
- References the draft HTML's actual structure, sections, and copy (read
  the file and summarize its content/sections in the prompt — don't just
  say "use the html file", describe what's in it)
- States the confirmed palette/typography/style from Step 2
- Picks the closest built-in Pencil kit (Shadcn UI, Lunaris, Halo, Nitro,
  etc.) to the established direction as a visual foundation
- Explicitly states the RTL requirement if applicable — Pencil does not
  assume RTL, so this must be spelled out every time (nav on the right,
  right-aligned text, mirrored icons/carousels)
- Ends with an explicit instruction to use the Pencil MCP server

Let this frame finish generating before doing anything else.

## 2. Client checkpoint

Tell the user to review the frame directly in Pencil and make any manual
tweaks there (spacing, copy, image swaps). Do not proceed until they
confirm the page is approved.

## 3. Generate final code, overwrite the draft

Once approved, generate final HTML/CSS/JS (or the client's actual tech
stack, e.g. a React component, per `01-profile.md`) from the `.pen` file's
JSON structure, and write it to
`clients/<client-name>/pages/<page-slug>/index.html`, overwriting the Steps
2-5 draft with this polished final version. Preserve RTL exactly as built
(dir="rtl", right-aligned text, mirrored icons) — don't default to LTR.

If the client's real project has its own source folder (outside
`clients/`), ask the user whether to also copy/integrate the final file
there now, or leave it staged in `clients/<client-name>/pages/<page-slug>/`
for them to move manually.

## 4. Log and wrap up

Append a "Step 6 — Pencil Build" section to
`clients/<client-name>/pages/<page-slug>/notes.md`: kit used, manual
adjustments made in Pencil, where the final file ended up.

## 5. Move to the next page

Update `clients/<client-name>/MANAGEMENT.md`: check the "P6 Pencil (final)"
box for this page — this marks the page fully done — add a History Log
entry (kit used, where final file landed), and update "Currently in
progress" to reflect the next page or "none — awaiting next command" if
none was named yet.

This page is done. Ask the user which page to work on next (check
`01-profile.md`'s must-have pages list for what's left). When they name the
next page, tell them to run `/step2-direction` again — each page runs
through Steps 2-6 independently, reusing the same client profile from
Step 1 but building its own HTML file from scratch through the same process.
