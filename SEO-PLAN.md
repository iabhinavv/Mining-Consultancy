# Amrev Consulting Group — content and SEO plan

Written 27 October 2026. This is the reasoning behind the pages in this folder.

---

## 1. What the competitor audit found

Five Ghanaian and pan-African firms selling into the same buyer were audited.

| Competitor | Position | Mining page? | Weakness you can take |
|---|---|---|---|
| **Prime Chartered Accountants** (pca-gh.com) | Ghanaian generalist, ICAG-licensed, 10 industry pages | Yes, ~80 words | Mining page is a stub. Generic "royalty audits, expenditure tracking, tax compliance" with no rates, no dates, no method. FAQ answers don't match the questions. |
| **Nyansa Africa** | "Foreign companies operating in Ghana", 15 years, GRA relationships | No | Strong avatar and 9 named testimonials, but **not mining-specific**, and its insights stop at 2023. Nothing on the 2026 royalty regime. |
| **WTS Nobisfields** | Ghana tax/legal, WTS Global member | Publishes on it | Publishes the regulatory news well, but sells legal and tax advisory, not finance-function work. |
| **Elixir Audits / RDK / De Rigglets** | Ghanaian audit + tax | Thin or none | Audit-firm framing. Fixed fees, partner-led, but no mining depth. |
| **Big Four (GT, PwC, Deloitte)** | Global, deep | Yes | Price, speed, and the work is delegated down. |

**The gap.** Nobody in the Ghanaian market owns *mining group finance across jurisdictions*. The local firms are generalists with a mining tab; the specialists are either lawyers or Big Four. And **not one competitor page covers the 2026 fiscal changes in a form a finance director can act on**, even though those changes are the single biggest thing on their desk this year.

That gap is the whole strategy.

### A constraint that shapes everything
Every Ghanaian competitor leads with **ICAG licensing**. Amrev cannot claim that and must not imply it. So the site deliberately avoids audit-firm framing: *audit readiness*, never *audit*; *finance and tax advisory*, never *statutory opinion*. This is stated plainly in the FAQ on the home page, which converts a weakness into a credibility signal.

---

## 2. The ranking opportunity: Ghana's 2026 fiscal reset

Four things changed in Ghana in 2026, and the regulator ran its first mining audit in a decade. Every fact below is sourced and cited on-page.

| Change | Detail | In force |
|---|---|---|
| **Sliding-scale royalty** (L.I. 2517) | Flat 5% abolished. Gold: 5% below $2,000/oz, rising to **12% above $4,500/oz**. Lithium: 5–12% by spodumene price. | 10 Mar 2026 |
| **Growth & Sustainability Levy cut** | Gold mining GSL **3% → 1%** | 31 Mar 2026 |
| **Mandatory e-invoicing** | All VAT-registered businesses. Non-onboarding = automatic VAT registration suspension. | 1 Jul 2026 |
| **GRA ITAS** | New tax administration platform replaces the Taxpayer's Portal and GITMIS | Sep 2026 rollout |
| **Minerals Commission audit** | Physical + financial audit. 10 years of production logs, 3 years of financial records, all permits. | Nov 2025 – Jun 2026 |

Why this matters for SEO: these are **high-intent, low-competition, time-sensitive** queries. The Minerals Commission's own fiscal regime page still shows the old flat 5% table. Nyansa's insights stop in 2023. A genuinely current, well-structured page can rank quickly because the competing pages are stale.

Why it matters for sales: a mining finance director reading this in late 2026 is about to close their **first full financial year under the new regime**. That is real urgency with a real date, not an invented countdown.

---

## 3. Page architecture — 15 pages

Flat `.html` files at the repository root. No build step, no subfolders, so GitHub Pages serves it as-is and no relative path can break.

### Tier 1 — Money pages (what people buy)

| Page | Primary keyword | Supporting keywords | Job |
|---|---|---|---|
| `index.html` | mining finance consultants Ghana | mining CFO services Africa, mining financial advisory Ghana | The offer, the proof, the route to a call |
| `tax-royalty-compliance.html` | mining royalty compliance Ghana | Ghana mineral royalty rate 2026, mining tax advisory Ghana, L.I. 2517 | Highest-intent service |
| `group-consolidation.html` | mining group consolidation | audit readiness mining companies, multi-entity consolidation Africa | Second-highest value |
| `cash-flow-forecasting.html` | 13-week cash flow forecast mining | mining working capital, commodity price stress test | Captures a well-searched finance term |
| `internal-audit-risk.html` | internal audit mining companies | mining risk framework, audit committee reporting | Retainer-shaped work |
| `procurement-cost-review.html` | mining procurement cost reduction | mining supply chain savings, mine spend analysis | The differentiated service |
| `transaction-support.html` | mining financial due diligence Africa | quality of earnings mining, mining M&A advisory | Highest ticket |

### Tier 2 — Country pages (where they are)

| Page | Primary keyword | Why it earns its place |
|---|---|---|
| `ghana-mining-finance.html` | mining finance Ghana | The beachhead. Carries the full 2026 fiscal change register. |
| `south-africa-mining-finance.html` | mining tax South Africa | Real, distinct substance: MPRRA royalty formula, refined/unrefined classification, s36(7F) ring-fencing, carbon tax at R308/t. |

**Deliberately not built:** Tanzania and Zambia pages. Two thin country pages would dilute the site and risk a doorway-page pattern. They are listed as "by arrangement" until there is real substance to write.

### Tier 3 — Conversion and trust

| Page | Job |
|---|---|
| `fiscal-exposure-review.html` | The offer page. One engagement, one price logic, one guarantee, one CTA. |
| `about.html` | E-E-A-T. A real named person, real experience, and an honest statement of what Amrev is not. |
| `contact.html` | NAP consistency, LocalBusiness schema, every contact route. |

### Tier 4 — Content (how they find you)

| Page | Primary keyword | Type |
|---|---|---|
| `insights.html` | — | Hub |
| `ghana-mining-fiscal-changes-2026.html` | Ghana mining tax changes 2026 | Cornerstone. The lead magnet. |
| `south-africa-mining-royalty-classification.html` | refined vs unrefined mineral royalty | Cornerstone |

---

## 4. Keyword strategy

**An honest limitation:** there is no Google Search Console, no Ahrefs and no DataForSEO key on this machine, so there are **no search-volume numbers here**. These keywords were chosen from live SERP inspection — who currently ranks, how strong they are, and how stale their content is. Treat them as a starting hypothesis to be corrected with real data once the site is live and Search Console is connected.

**Three tiers of intent:**

1. **Transactional** — "mining tax consultant Ghana", "mining finance advisory Accra". Low volume, highest value. Owned by the service and country pages.
2. **Informational, high-commercial** — "Ghana mineral royalty rate 2026", "sliding scale royalty gold Ghana", "refined vs unrefined royalty South Africa". This is the volume, and it is where the competition is weakest. Owned by the insights articles.
3. **Branded** — "Amrev Consulting Group". Nothing yet. Will build.

**What is deliberately avoided:** "mining audit Ghana" as a target. It is ambiguous, it attracts people wanting a statutory audit Amrev cannot provide, and it would waste the click. The site targets *audit readiness* instead.

---

## 5. Technical SEO shipped with this build

- **Unique title and meta description** per page, every title under 60 characters where possible
- **One `<h1>` per page**, headings in order, no level skipped
- **Canonical URL** on every page (placeholder domain — see README)
- **Schema.org JSON-LD:** `ProfessionalService` with NAP, `Person` for the founder, `BreadcrumbList` on inner pages, `Article` on insights, `Service` on service pages
- **`sitemap.xml`** listing all 15 pages, and **`robots.txt`** pointing to it
- **`llms.txt`** so AI search engines get a clean summary (ChatGPT, Perplexity, AI Overviews)
- **Breadcrumbs** on every inner page, matching the schema
- **Internal linking:** every service page links to both country pages, the offer page and two siblings. The offer page is reachable within one click from everywhere.
- **No FAQPage schema.** Google retired FAQ rich results for all sites on 7 May 2026, so it would add markup weight for no SERP gain. The FAQs stay as plain, readable HTML, which is what AI search engines quote from anyway.

---

## 6. How the copy is built (Hormozi)

### Value equation
> Value = (Dream outcome × Perceived likelihood) ÷ (Time delay × Effort)

Competitors all compete on the top half ("expert advice", "tailored solutions"). This site competes on the **bottom half**, which is harder to copy:

- **Time delay** — findings in 21 days, first call is 30 minutes, fee quoted after one call
- **Effort and sacrifice** — "we work from documents you already produce: trial balance, royalty returns, bank statements. No system access. No new reporting from your team." This is the single strongest line on the site, because it removes the real reason finance directors delay.

### The offer (named with M-A-G-I-C)
**The 21-Day Mining Fiscal Exposure Review**
- *Magnetic reason why*: Ghana's 2026 fiscal reset
- *Avatar*: mining groups reporting in more than one country
- *Goal*: know your exposure
- *Interval*: 21 days
- *Container*: Review

### Guarantee (your choice: fixed scope, fixed fee, fixed date)
> "Scope and fee are agreed in writing before we start. Findings are delivered on the agreed date, or you don't pay the final instalment."

Result, timeframe, **and a consequence** — which is what makes it a guarantee rather than a reassurance.

### Give before you ask
The fiscal change register is published in full, ungated. No email wall. The ask is the call. This is also the SEO play: the thing that earns the ranking is the same thing that proves competence.

### What was deliberately left out
- No scarcity or countdown. Fake scarcity in B2B finance destroys credibility, and real capacity numbers are yours to set.
- No prices. Fees are quoted after the call, as before.
- No testimonials, client names, logos or case studies — there are none yet. Inventing them would be fraud and would not survive one reference check.

---

## 7. What has to happen before this ranks

Ranking is not a property of the pages alone.

1. **Buy the domain and set the canonical URLs.** Currently a placeholder.
2. **Connect Google Search Console**, submit the sitemap, then replace the keyword guesses in §4 with real query data.
3. **Create a Google Business Profile** for the Accra address. For a local service business this is the largest single ranking factor, and no amount of on-page work substitutes for it.
4. **Get the first citations:** Ghana Chamber of Mines, local directories, LinkedIn company page. Consistent NAP everywhere — exactly "201, Blohum Rd, Accra, Ghana" and "+233 25 731 9254".
5. **Publish on a cadence.** Two stale articles rank worse than none. Ghana's fiscal calendar gives an obvious rhythm: budget, GRA practice notes, royalty threshold movements.
6. **Verify the credentials** in `about.html`. E-E-A-T is a real ranking input, and unverifiable claims are a liability well beyond SEO.

### How to tell if this is failing
- **30 days:** pages not indexed in Search Console → technical problem, check canonicals and robots.
- **90 days:** indexed but zero impressions for "Ghana mining royalty" terms → content isn't matching intent, rewrite to the questions in the Search Console query report.
- **180 days:** impressions but no clicks → titles and meta descriptions are wrong, not the content.
- **Any time:** clicks but no calls booked → the offer is wrong, not the traffic. Hormozi's rule applies: the offer is bad, not you.
