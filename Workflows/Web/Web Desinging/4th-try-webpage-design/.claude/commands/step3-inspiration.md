Run Step 3 of the website design workflow: Visual Inspiration — edits the
page's HTML file.

## Working file

`clients/<client-name>/pages/<page-slug>/index.html` (same page being worked
on since Step 2). If it doesn't exist, tell the user to run `/step2-direction`
for this page first and stop.

## 1. Research inspiration

Using the palette/style/typography already in the HTML file, search the web
(Pinterest, Dribbble, Behance, general image search) for visual references
matching this direction and the client's industry — hero layout treatments,
photography style, texture/pattern ideas, section compositions.

Do not reproduce or embed copyrighted images directly. Reference/link to
sources and describe in your own words what's useful about each one.

## 2. Edit the HTML file directly

Apply what's useful from the research as real edits to
`clients/<client-name>/pages/<page-slug>/index.html` — for example:
- Adjust the hero section's layout/composition based on a strong reference
- Refine imagery placeholders (aspect ratios, positioning) to match the
  photography style found
- Add texture/gradient/background treatments that fit the palette
- Improve visual hierarchy in a section that reads flat

Edit the existing file in place — don't regenerate it from scratch and don't
lose what Step 2 already built. Keep RTL handling intact if applicable.

## 3. Log sources

Keep a short running log of what was referenced and why, at
`clients/<client-name>/pages/<page-slug>/notes.md` (append a "Step 3 —
Visual Inspiration" section: source links + what was applied). This is just
a lightweight record, not the deliverable — the HTML file is the deliverable.

## 4. Confirm

Show the user what changed and confirm before ending the turn. Update
`clients/<client-name>/MANAGEMENT.md`: check the "P3 Inspiration" box for
this page, add a History Log entry, update "Currently in progress". Do not
proceed to Step 4 automatically.
