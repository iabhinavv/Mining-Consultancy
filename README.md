# Amrev Consulting Group

Static 17-page site selling mining finance and tax advisory to mining groups in Ghana and South Africa. No backend and no build step. Analytics and advertising tags are consent-gated (see below) and load nothing until the visitor agrees. Published with GitHub Pages at <https://iabhinavv.github.io/Mining-Consultancy/>.

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
| `privacy.html`, `terms.html` | Privacy & cookie policy, terms of use |
| `consent.js` | Consent banner and Google Consent Mode v2 gating |
| `styles.css` | Shared stylesheet — one file, all pages |
| `site.js` | Shared behaviour — menu, counters, reveals |
| `sitemap.xml`, `robots.txt`, `llms.txt` | Crawl and AI-search files |
| `founder.jpg` | Portrait, 720px, 92KB |

Contact details in use: phone and WhatsApp `+233 25 731 9254`, email `experimentsav@gmail.com` (temporary), office 201, Blohum Rd, Accra, Ghana, Calendly `https://calendly.com/experimentsav/30min`.

## Before you run a single ad — read this

The site now has a **privacy and cookie policy** (`privacy.html`), **terms of use** (`terms.html`) and a working **consent banner** (`consent.js`). None of it is legal advice, and none of it is finished until you do the following.

### 1. Register with Ghana's Data Protection Commission — this is not optional
The Data Protection Act, 2012 (Act 843) requires data controllers to register with the DPC. Section 56 makes it an **offence to process personal data without registering**, punishable by a fine of up to 250 penalty units, up to two years' imprisonment, or both. Section 97(1) gives a controller established after the Act **20 days from commencement of business** to register, and registration is renewed every two years.

Running Google Ads and a Meta pixel means processing personal data. Register first. `privacy.html` has a `[DPC REGISTRATION NUMBER]` placeholder waiting for the number.

### 2. Have a lawyer review both documents
They are drafted against the actual sources — Act 843, POPIA and its amended Regulations in force 17 April 2025, the Meta Business Tools Terms and Google's EU user consent policy — and each file carries an HTML comment saying it is unreviewed. A Ghanaian lawyer should review both; add a South African one if you take SA clients.

### 3. Add your tag IDs
Open `consent.js` and fill in:

```js
var GOOGLE_TAG_ID = '';   // 'AW-...' for Google Ads, or 'G-...' for GA4
var META_PIXEL_ID = '';   // your pixel ID
```

Until these are set the banner still works and records choices — it just has no tags to load. **Do not paste the pixel snippet into the pages directly.** It would fire before consent and breach both Meta's terms and the consent rules below.

### How the consent mechanism works
- Google Consent Mode v2 defaults are set to **denied** before any tag can run (`ad_storage`, `ad_user_data`, `ad_personalization`, `analytics_storage`).
- Nothing loads until the visitor chooses. Reject, or ignore the banner, and Google and Meta tags never execute.
- Choices are granular: analytics and advertising are separate.
- The choice is stored with an ISO timestamp and a policy version, which is your record that consent was given. Bump `POLICY_VERSION` in `consent.js` when the cookie policy changes and everyone is asked again.
- It re-asks after 180 days.
- "Cookie settings" in the footer of every page reopens the banner, so withdrawing is as easy as consenting.

### What the law and the platforms require, and where it is handled
| Requirement | Source | Where |
|---|---|---|
| Prominent notice that third parties including Meta use pixels to collect data and target ads | Meta Business Tools Terms | `privacy.html` §4 |
| Tell users how to opt out, and link a mechanism (aboutads.info, youronlinechoices.eu) | Meta Business Tools Terms | `privacy.html` §4 |
| Verifiable consent before Meta cookies are stored | Meta Business Tools Terms | `consent.js` |
| Consent collected and signalled to Google via Consent Mode v2 for EEA/UK/Swiss traffic | Google EU user consent policy | `consent.js` |
| Disclose which third parties receive user data | Google EU user consent policy | `privacy.html` §6 |
| Lawful basis for online identifiers; cookie notice | Act 843; POPIA | `privacy.html` §3, §5 |
| Opt-in for electronic direct marketing; opt-out is not consent | POPIA s.69 + 2025 Regulations | `privacy.html` §10 |
| Site content is information, not advice; no client relationship | — | `terms.html` §2 |

### Two things worth knowing
- **Google Fonts already sends Google your visitors' IP addresses**, before any cookie choice, because the fonts load from Google's servers. This is disclosed in `privacy.html` §3. If you would rather it didn't happen, self-host the two font files and I can make that change.
- **Never send Meta financial data.** Meta's terms prohibit sending Business Tool Data based on "health information, financial information, consumer report information, or other categories of sensitive information". You advise on clients' finances. Keep pixel events to page views and the booking click — never anything about a client's position.

### Still open
- A certified Consent Management Platform. Google does not require advertisers to use one, so this hand-built Consent Mode v2 implementation is acceptable by Google's own wording. If EEA traffic becomes significant, a certified CMP is the lower-risk option.
- South Africa: if you take SA clients, appoint and register an Information Officer with the Information Regulator.

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
