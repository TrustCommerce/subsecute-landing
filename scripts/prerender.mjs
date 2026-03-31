/**
 * Static pre-render script.
 *
 * Instead of using a headless browser, this injects key SEO content
 * directly into the dist/index.html as a <noscript> fallback and
 * hidden content that crawlers can read.
 *
 * This gives crawlers the essential text content without needing
 * to execute JavaScript, while users still get the full SPA experience.
 */

import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

const DIST = resolve('dist')
const indexPath = resolve(DIST, 'index.html')

// All the key SEO content crawlers need to see
const SEO_CONTENT = `
<noscript>
  <div>
    <h1>Your subscriptions, managed properly — Virtual USD Cards for Nigerians</h1>
    <p>One app to create, fund, and manage every USD subscription. USD Virtual card generated and auto funded from your Naira card or wallet for each subscription. 50+ subscription providers supported.</p>

    <h2>What is Subsecute?</h2>
    <p>The subscription infrastructure Nigerians actually needed. Paying for subscriptions in USD shouldn't mean constant payment failures, shared dollar cards, and card terminations. Subsecute gives every single subscription its own dedicated virtual USD card, funded automatically from your naira wallet, renewed on time, every time.</p>
    <ul>
      <li>All subscriptions in one place — Track, manage and control every sub independently</li>
      <li>One dedicated USD card per subscription</li>
      <li>Auto-funded before renewal — Your naira card or wallet funds each subscription automatically</li>
    </ul>
    <p>60%+ of Nigerian international card payments fail due to bank limits and FX restrictions. Average monthly foreign subscription spend: $15-30 per Nigerian user. 99%+ payment success rate across 50+ supported providers.</p>

    <h2>Built around how you actually subscribe</h2>
    <ul>
      <li>Every subscription in one dashboard — Netflix, Spotify, ChatGPT, Figma; add them all. See what's active, what's due, and what you've spent.</li>
      <li>Full visibility into what you spend — Per-sub breakdowns, trends, and history.</li>
      <li>Custom reminders — Choose how far in advance you get notified; 1 day, 3 days, or 7.</li>
      <li>Create a plan for your team, friends, or family — Build a subscription plan and invite members.</li>
      <li>Ask anyone to fund your sub — Generate a link. Someone pays. It lands on your subscription balance.</li>
    </ul>

    <h2>How Subsecute Works</h2>
    <ol>
      <li>Download and sign up — Create your account, link your naira debit card. Ready in under 60 seconds.</li>
      <li>Create a subscription — Name your sub, set the amount and billing cycle. A virtual USD card is instantly generated.</li>
      <li>Copy the card, use it — Copy the card details and enter them on Netflix, Spotify, or wherever.</li>
      <li>It handles itself — Subsecute reminds you before each renewal and auto-funds the card from your naira wallet.</li>
    </ol>

    <h2>Frequently Asked Questions</h2>
    <dl>
      <dt>How do I pay for Netflix in Nigeria without my card being declined?</dt>
      <dd>Subsecute creates a dedicated virtual USD card for your Netflix subscription, funded automatically from your Naira wallet. Unlike Nigerian bank cards that get declined due to CBN FX limits, Subsecute cards have a 99%+ payment success rate across 50+ subscription providers.</dd>
      <dt>What is Subsecute?</dt>
      <dd>Subsecute is a subscription management app built for Nigerians. It gives you a unique virtual USD card for each subscription (Netflix, Spotify, ChatGPT, Figma, etc.) and auto-funds each card from your Naira wallet before renewal day.</dd>
      <dt>How does Subsecute convert Naira to USD for my subscriptions?</dt>
      <dd>When you fund your Subsecute wallet with Naira, the app handles the conversion at competitive rates. Each subscription gets its own USD virtual card that is automatically topped up before your renewal date.</dd>
      <dt>Is Subsecute safe and licensed?</dt>
      <dd>Yes. Subsecute operates in compliance with Nigerian financial regulations through partnerships with CBN-licensed entities.</dd>
      <dt>How is Subsecute different from Grey.co or Chipper Cash?</dt>
      <dd>Unlike general-purpose dollar cards, Subsecute is purpose-built for subscriptions. Each subscription gets its own dedicated card, auto-funded before renewal, with reminders and spend tracking.</dd>
      <dt>What subscriptions does Subsecute support?</dt>
      <dd>Subsecute works with 50+ providers including Netflix, Spotify, Apple Music, YouTube Premium, ChatGPT Plus, Figma, Canva, Adobe Creative Cloud, Amazon Prime, and more.</dd>
      <dt>How long does it take to set up Subsecute?</dt>
      <dd>Under 5 minutes. Download the app, sign up, link your Naira debit card, create a subscription, and copy the generated USD card details to your provider's payment page.</dd>
      <dt>Can I use Subsecute for family or team subscription plans?</dt>
      <dd>Yes. Subsecute lets you create plans where you invite family members or teammates. Each person picks their subscriptions, and all charges flow back to the plan owner.</dd>
    </dl>

    <footer>
      <p>Subsecute — Subscribe without the surprises. Virtual USD cards for your subscriptions, funded automatically from your naira wallet.</p>
      <nav>
        <a href="/privacy-policy.html">Privacy Policy</a>
        <a href="/terms-of-service.html">Terms of Service</a>
      </nav>
    </footer>
  </div>
</noscript>`

try {
  let html = readFileSync(indexPath, 'utf-8')

  // Insert SEO content just after <div id="root"></div>
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root"></div>${SEO_CONTENT}`
  )

  writeFileSync(indexPath, html)
  console.log(`✓ Pre-rendered SEO content injected into index.html (${(html.length / 1024).toFixed(1)}KB)`)
} catch (err) {
  console.log(`⚠ Pre-render failed: ${err.message}`)
}
