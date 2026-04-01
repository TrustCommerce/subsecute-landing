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
    <h1>Automate Your Subscriptions and Bills in Nigeria — Virtual USD Cards and Recurring Bill Pay for Netflix, Spotify, DSTV, Airtime, Data, and Power</h1>
    <p>Subsecute is a recurring payment automation app for Nigerians. Pay for Netflix, Spotify, ChatGPT, and 50+ international subscriptions with dedicated virtual USD cards funded from your Naira wallet. Auto-pay your airtime, data bundles, DSTV, GOtv, and power bills every month. Cancel any subscription in one tap. Share plans with family and friends.</p>

    <h2>What is Subsecute?</h2>
    <p>One card per subscription. One app for every bill. Zero missed payments. From Netflix and Spotify to your airtime, data, DSTV, and power — Subsecute automates it all. One virtual card per subscription. Automatic bill payments. Everything renews on time, every time.</p>
    <ul>
      <li>One card per subscription — Each subscription gets its own virtual USD card. Cancel one without touching the rest.</li>
      <li>Auto-pay your bills — Airtime, data, power, cable — set it once, it renews every month.</li>
      <li>Auto-funded before renewal — Your wallet funds each card automatically before the charge hits. No failed payments.</li>
    </ul>

    <h2>Built around how you actually pay</h2>
    <ul>
      <li>Every payment in one dashboard — Netflix, Spotify, DSTV, airtime, power — see what's active, what's due, and what you've spent.</li>
      <li>Full visibility into what you spend — Per-sub breakdowns, trends, and history.</li>
      <li>Custom reminders — Choose how far in advance you get notified; 1 day, 3 days, or 7.</li>
      <li>Create a plan for your team, friends, or family — Pay for your family's or team's subscriptions from one account.</li>
      <li>Share a gift link — They pay. It lands on your subscription balance. No bank transfer.</li>
    </ul>

    <h2>How It Works</h2>
    <ol>
      <li>Download and sign up — Create your account, link your debit card. Your wallet is ready in under 60 seconds.</li>
      <li>Add your subscriptions and bills — Add Netflix, Spotify, or any subscription. Set up recurring airtime, data, power, and cable payments.</li>
      <li>We handle the rest — Each subscription gets a virtual USD card. Bills pay on schedule. Everything auto-funds from your wallet.</li>
      <li>Cancel anything, anytime — Freeze or kill any subscription with one tap. Pause a bill. You're always in control.</li>
    </ol>

    <h2>Frequently Asked Questions</h2>
    <dl>
      <dt>How do I pay for Netflix in Nigeria without my card being declined?</dt>
      <dd>Subsecute creates a dedicated virtual USD card for your Netflix subscription, funded automatically from your Naira wallet. Unlike Nigerian bank cards that often get declined, Subsecute cards work reliably across 50+ subscription providers.</dd>
      <dt>What is Subsecute?</dt>
      <dd>Subsecute is a recurring payment automation app built for Nigerians. It gives you a unique virtual USD card for each subscription (Netflix, Spotify, ChatGPT, Figma, etc.) and auto-pays your bills — airtime, data, power, and cable — all from one wallet.</dd>
      <dt>Can I auto-pay my airtime, data, and DSTV through Subsecute?</dt>
      <dd>Yes. Set up recurring payments for airtime, data bundles, power, and cable TV (DSTV, GOtv, Showmax). Pick the amount and schedule, and Subsecute handles it automatically every month.</dd>
      <dt>Can someone abroad manage bills for family in Nigeria?</dt>
      <dd>Yes. Create a plan, add family members, and set up their airtime, data, and cable to renew automatically. You see every payment in your dashboard.</dd>
      <dt>How is Subsecute different from Grey.co or Chipper Cash?</dt>
      <dd>Unlike general-purpose dollar cards, Subsecute is purpose-built for recurring payments. Each subscription gets its own dedicated card, auto-funded before renewal, with reminders and spend tracking. Plus, Subsecute handles local bill payments — airtime, data, power, and cable.</dd>
      <dt>What subscriptions and bills does Subsecute support?</dt>
      <dd>Subsecute works with 50+ providers including Netflix, Spotify, Apple Music, YouTube Premium, ChatGPT Plus, Figma, Canva, Adobe Creative Cloud, and more. For bills, you can automate airtime, data, power, and cable TV.</dd>
      <dt>How long does it take to set up Subsecute?</dt>
      <dd>Under 5 minutes. Download the app, sign up, link your debit card, add your subscriptions and bills, and everything starts running on autopilot.</dd>
    </dl>

    <footer>
      <p>Subsecute — Every recurring payment, on autopilot. Virtual USD cards for subscriptions. Automatic bill pay for airtime, data, power, and cable.</p>
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
