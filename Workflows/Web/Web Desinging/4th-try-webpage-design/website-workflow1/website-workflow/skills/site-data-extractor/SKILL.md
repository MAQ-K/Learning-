---
name: site-data-extractor
description: Extracts structured data (title, meta description, headings, nav links, contact info, detected colors, language/RTL signal, image alt text) from an existing website URL to pre-fill the Step 1 client intake template. Use this whenever the user gives an existing website URL for a client (their current site, a competitor, or a reference site) and wants its content, structure, or branding pulled out automatically instead of typed manually. Trigger on phrases like "pull data from their old site", "extract from this URL", "use their current site", or any /step1-intake run where a URL is supplied.
---

# Site Data Extractor

Pulls raw structural and content data from a live website so it can feed
Step 1 of the client website workflow without manual re-typing.

## When to use

- The client has an existing site you're rebuilding/redesigning
- You want a quick content/structure inventory of a competitor site (also
  useful later for Step 4, competitor analysis — same script, different use)

## How to use

Run the extractor script with the target URL:

```bash
python skills/site-data-extractor/scripts/extract_site.py <url> --out clients/<client-name>/extracted-raw.json
```

The script fetches the page and writes a JSON file containing:

- `title`, `meta_description`, `lang_attr` (use this to check `ar`/RTL)
- `headings`: list of h1/h2 text found
- `nav_links`: link text + href from the main nav if detectable
- `contact`: any emails/phone numbers found via regex
- `images`: src + alt text for images (useful for spotting a logo, product shots)
- `inline_colors`: hex color codes found in inline styles or `<style>` blocks
  (rough signal only — always verify visually before treating as brand colors)
- `raw_text_sample`: first ~2000 characters of visible body text, for tone/voice reading

## After extraction

1. Open the JSON output and read through it.
2. Fill in `clients/<client-name>/01-profile.md` (copy from
   `templates/01-client-intake-template.md`) using the extracted data where it
   answers a field — e.g. `meta_description` often maps to the site goal/tone,
   `nav_links` maps to must-have pages, `inline_colors` is a starting hint for
   existing brand colors (confirm with the client, don't assume it's final).
3. Anything the script can't infer (target market, tone preference, timeline,
   technical constraints) still needs to be asked directly — don't guess these.
4. Mark the profile's Source section as auto-extracted and note the URL used.

## Notes

- This is a best-effort scrape, not a design audit. Colors and structure
  pulled here are hints to speed up intake, not final brand truth — always
  confirm with the client before basing real design decisions on them.
- If the site blocks scraping (403, JS-only rendering with no content in raw
  HTML), tell the user and fall back to manual intake instead of guessing.
- Respect robots.txt and only use this on sites the client owns or public
  competitor sites for research purposes — not for scraping private/gated content.
