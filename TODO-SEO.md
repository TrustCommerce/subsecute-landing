# Subsecute SEO TODO List

## ✅ Completed (this session)
- [x] `robots.txt` with AI bot access (GPTBot, PerplexityBot, ClaudeBot)
- [x] `sitemap.xml` with all pages
- [x] `favicon.svg` placeholder (orange "S" on brand color)
- [x] `netlify.toml` with SPA fallback, security headers, cache-control
- [x] `manifest.json` for PWA/mobile
- [x] Removed fake `aggregateRating` from structured data
- [x] Added `SoftwareApplication` schema with `featureList`, `screenshot`, `countriesSupported`
- [x] Added `Organization` schema
- [x] Added `FAQPage` schema (5 Q&As targeting Nigerian search queries)
- [x] Fixed `index.html`: `lang="en-NG"`, canonical, keywords, theme-color, geo tags
- [x] Added `og:url`, `og:site_name`, `og:locale`, `twitter:image` to static HTML
- [x] SEO-optimized title: "Virtual USD Cards for Subscriptions in Nigeria"
- [x] SEO-optimized meta description mentioning Nigeria + pain points
- [x] Fixed "IOS" → "iOS" typo
- [x] Removed dead footer links (Blog, Contact → replaced with FAQ)
- [x] Added copyright notice to footer
- [x] Added `loading="lazy"` to below-fold images
- [x] Removed unused images (iphone-mockup.png, features-section.png, phone-frame.png) — saved ~3.8MB
- [x] Font preloading with `rel="preload"`
- [x] Noscript pre-render with FAQ content for crawlers

---

## 🔴 Must Do Before Launch

### Replace placeholder favicon
- [ ] Replace `public/favicon.svg` with actual Subsecute logo icon
- [ ] Add `public/apple-touch-icon.png` (180x180px) for iOS home screen
- [ ] Add `public/icon-192.png` and `public/icon-512.png` for PWA manifest

### Add real content for Social Proof section (live mode)
- [ ] Write 3 unique testimonials (currently all identical text)
- [ ] Use real user names/photos when available

### Mobile hamburger menu
- [ ] Implement working mobile nav menu (currently the button does nothing)
- [ ] Add slide-out or dropdown with nav links + CTA

### Waitlist API integration
- [ ] Replace the `setTimeout` mock in `WaitlistForm.tsx` with actual API call
- [ ] Store emails in database or email marketing tool (Mailchimp, ConvertKit, etc.)

---

## 🟡 Do Within First Week

### Blog setup
- [ ] Create `/blog` route or separate blog subdomain
- [ ] Publish Wave 1 blog posts:
  - "How to Pay for Netflix in Nigeria in 2026 (Without Card Declines)"
  - "7 Best Virtual Dollar Cards in Nigeria for International Subscriptions"
  - "Why Nigerian Bank Cards Get Declined on International Websites"
  - "Virtual Dollar Cards Explained: Everything Nigerians Need to Know in 2026"
- [ ] Add blog links to footer navigation
- [ ] Update `sitemap.xml` with blog URLs

### Social media profiles
- [ ] Create Twitter/X account (@subsecute or similar)
- [ ] Create Instagram account
- [ ] Add social links to footer
- [ ] Add `<meta name="twitter:site" content="@subsecute" />` to index.html

### Image optimization
- [ ] Convert PNGs to WebP format (phone-screen.png, provider images, logo)
- [ ] Add explicit `width` and `height` attributes to all `<img>` tags to prevent CLS
- [ ] Resize provider logo images to actual display size (40x40px for 2x retina)

---

## 🟢 Do Within First Month

### Google Search Console
- [ ] Verify domain ownership on Google Search Console
- [ ] Submit sitemap.xml
- [ ] Request indexing for homepage
- [ ] Monitor Core Web Vitals

### Bing Webmaster Tools
- [ ] Verify domain on Bing Webmaster Tools
- [ ] Submit sitemap

### Publish Wave 2 blog posts
- [ ] "How to Pay for Spotify Premium in Nigeria from Your Naira Wallet"
- [ ] "How to Pay for ChatGPT Plus in Nigeria: A Step-by-Step Guide"
- [ ] "Subsecute vs Grey.co vs Chipper Cash: Which Is Best for Subscriptions?"
- [ ] "CBN Dollar Card Restrictions: What Changed and How Nigerians Are Adapting"

### Product Hunt launch
- [ ] Prepare Product Hunt listing
- [ ] Schedule launch day

### Backlink building
- [ ] Guest posts on TechCabal, Techpoint Africa, Nairametrics
- [ ] Get listed on fintech directories
- [ ] Create a data report on subscription spending in Nigeria (linkable content)

---

## 🔵 Ongoing (Monthly)

- [ ] Publish 2-4 blog posts per month targeting long-tail keywords
- [ ] Monitor keyword rankings via Google Search Console
- [ ] Check AI search citations (query ChatGPT/Perplexity for target queries)
- [ ] Update blog posts quarterly to keep content fresh
- [ ] Monitor Core Web Vitals and fix any regressions
- [ ] Add new FAQ items based on real customer support questions
- [ ] Update sitemap.xml when new pages are added

---

## Notes

### Target Keywords (prioritized)
1. "virtual dollar card Nigeria" — primary
2. "pay for Netflix in Nigeria" — high volume
3. "USD subscription Nigeria" — primary
4. "naira to dollar virtual card" — medium
5. "subscription payment app Nigeria" — low competition
6. "how to pay for Spotify in Nigeria" — informational
7. "best virtual card for subscriptions Nigeria" — comparison
8. "Nigerian card declined international payment" — problem-aware

### Feature Flag Reference
`.env` file controls waitlist vs live mode:
- `VITE_LAUNCH_MODE=waitlist` — shows waitlist form, FAQ section, hides testimonials
- `VITE_LAUNCH_MODE=live` — shows download CTAs, social proof, testimonials
