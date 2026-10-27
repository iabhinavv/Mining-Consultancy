# Amrev Consulting Group

Static 15-page site selling mining finance and tax advisory to mining groups in Ghana and South Africa. No backend, no build step, no trackers. Published with GitHub Pages at <https://iabhinavv.github.io/Mining-Consultancy/>.

The reasoning behind the page structure, keywords and copy is in **[SEO-PLAN.md](SEO-PLAN.md)**. Read that first.

## Files

| File | What it is |
|---|---|
| `index.html` | Home |
| `fiscal-exposure-review.html` | The offer page — the 21-Day Review |
| `tax-royalty-compliance.html` … `transaction-support.html` | Six service pages |
| `ghana-mining-finance.html`, `south-africa-mining-finance.html` | Country pages |
| `ghana-mining-fiscal-changes-2026.html`, `south-africa-mining-royalty-classification.html` | Cornerstone articles |
| `insights.html`, `about.html`, `contact.html` | Hub and trust pages |
| `styles.css` | Shared stylesheet — one file, all pages |
| `site.js` | Shared behaviour — menu, counters, reveals |
| `sitemap.xml`, `robots.txt`, `llms.txt` | Crawl and AI-search files |
| `founder.jpg` | Portrait, 720px, 92KB |

Contact details in use: phone and WhatsApp `+233 25 731 9254`, email `experimentsav@gmail.com` (temporary), office 201, Blohum Rd, Accra, Ghana, Calendly `https://calendly.com/experimentsav/30min`.

## Decisions that need you

### 1. Verify the credentials — do this first
Every line in the credentials list in `about.html` is marked `VERIFY` in the source. They are paraphrased from your own business plan and have **not** been independently checked. Specifically: the HSBC role description, the IIM Rohtak internal audit work, and the private equity certification. Overstating any of them is a bigger risk than understating it, and E-E-A-T is a real ranking input.

The site deliberately never calls you a Chartered Accountant and never implies ICAG licensing. Several pages say plainly that Amrev is not a licensed audit firm. Keep it that way.

### 2. The guarantee is now a commercial promise
You chose: *"Scope and fee agreed in writing before we start. Findings delivered on the agreed date, or you don't pay the final instalment."* It appears on the home page, the offer page and the about page. It binds you. If you want it softer, change it in those three places.

### 3. Two markets are claimed as active
Ghana and South Africa, on your instruction. Tanzania and Zambia are now described as "by arrangement" rather than active. If you cannot currently take a South African engagement, say so and I will narrow it.

### 4. Dashboard figures are sample data
The hero dashboard uses invented numbers. They are labelled "Sample data" in three places on the page and an FAQ answer says so explicitly. Keep those labels until you have real anonymised results.

## Still to do

| Item | Where |
|---|---|
| Buy a domain, then find-replace `https://iabhinavv.github.io/Mining-Consultancy` across all `.html`, `sitemap.xml`, `robots.txt` | Everywhere |
| Google Form link | `contact.html` and `index.html` — search `GOOGLE FORM`, paste the link, delete `hidden` |
| Replace the temporary Gmail address with a domain address | All pages |
| Google Search Console — verify, submit `sitemap.xml` | External |
| Google Business Profile for the Accra address | External — biggest single local ranking factor |
| Ghana Chamber of Mines listing, LinkedIn company page | External |

## Publish

The repo is already connected to GitHub Pages. To update:

```bash
git add -A && git commit -m "your message" && git push
```

Changes appear at <https://iabhinavv.github.io/Mining-Consultancy/> within a minute or two.

## Working on it locally

Open `index.html` in a browser. Everything is relative paths, so it works from the file system — though `sitemap.xml` and the canonical tags assume the published URL.
