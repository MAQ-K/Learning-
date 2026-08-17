#!/usr/bin/env python3
"""
Site Data Extractor
Pulls structural/content data from a live site to pre-fill Step 1 of the
website design workflow. Best-effort only — always confirm with the client
before treating extracted colors/copy as final.

Usage:
    python extract_site.py <url> --out <output.json>
"""

import argparse
import json
import re
import sys

import requests
from bs4 import BeautifulSoup

HEX_COLOR_RE = re.compile(r"#(?:[0-9a-fA-F]{3}){1,2}\b")
EMAIL_RE = re.compile(r"[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+")
PHONE_RE = re.compile(r"\+?\d[\d\s().-]{7,}\d")

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/120.0 Safari/537.36"
    )
}


def fetch(url: str) -> str:
    resp = requests.get(url, headers=HEADERS, timeout=15)
    resp.raise_for_status()
    return resp.text


def extract(url: str, html: str) -> dict:
    soup = BeautifulSoup(html, "html.parser")

    title = soup.title.string.strip() if soup.title and soup.title.string else None

    meta_desc = None
    meta_tag = soup.find("meta", attrs={"name": "description"})
    if meta_tag and meta_tag.get("content"):
        meta_desc = meta_tag["content"].strip()

    lang_attr = None
    html_tag = soup.find("html")
    if html_tag:
        lang_attr = html_tag.get("lang") or html_tag.get("dir")

    headings = []
    for tag in soup.find_all(["h1", "h2"]):
        text = tag.get_text(strip=True)
        if text:
            headings.append({"tag": tag.name, "text": text})

    nav_links = []
    nav = soup.find("nav") or soup.find(attrs={"role": "navigation"})
    if nav:
        for a in nav.find_all("a"):
            text = a.get_text(strip=True)
            href = a.get("href")
            if text:
                nav_links.append({"text": text, "href": href})

    body_text = soup.get_text(separator=" ", strip=True)
    emails = sorted(set(EMAIL_RE.findall(body_text)))
    phones = sorted(set(PHONE_RE.findall(body_text)))[:5]

    images = []
    for img in soup.find_all("img")[:30]:
        images.append({"src": img.get("src"), "alt": img.get("alt")})

    inline_colors = sorted(set(HEX_COLOR_RE.findall(html)))[:20]

    raw_text_sample = body_text[:2000]

    return {
        "url": url,
        "title": title,
        "meta_description": meta_desc,
        "lang_attr": lang_attr,
        "headings": headings[:20],
        "nav_links": nav_links[:20],
        "contact": {"emails": emails, "phones": phones},
        "images": images,
        "inline_colors": inline_colors,
        "raw_text_sample": raw_text_sample,
    }


def main():
    parser = argparse.ArgumentParser(description="Extract structured data from a website URL.")
    parser.add_argument("url", help="Target URL, e.g. https://example.com")
    parser.add_argument("--out", required=True, help="Path to write the JSON output")
    args = parser.parse_args()

    try:
        html = fetch(args.url)
    except requests.RequestException as e:
        print(f"Failed to fetch {args.url}: {e}", file=sys.stderr)
        sys.exit(1)

    data = extract(args.url, html)

    with open(args.out, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f"Extracted data written to {args.out}")


if __name__ == "__main__":
    main()
