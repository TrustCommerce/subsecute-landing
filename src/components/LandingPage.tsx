import { Helmet } from 'react-helmet-async'
import { IS_WAITLIST } from '../config'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import FeaturesSection from './FeaturesSection'
import HowItWorksSection from './HowItWorksSection'
import DownloadSection from './DownloadSection'
import SocialProofSection from './SocialProofSection'
import FAQSection from './FAQSection'
import Footer from './Footer'

const APP_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Subsecute',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'iOS, Android',
  description:
    'Subscription management app for Nigerians. Create, fund, and manage every USD subscription with virtual cards auto-funded from your Naira wallet. Supports Netflix, Spotify, ChatGPT, and 50+ providers.',
  url: 'https://subsecute.com',
  author: { '@type': 'Organization', name: 'Subsecute' },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/PreOrder'
  },
  featureList: [
    'Dedicated virtual USD card per subscription',
    'Auto-funding from Naira wallet',
    'Subscription renewal reminders',
    'Spending analytics and tracking',
    'Family and team subscription plans',
    'Shareable funding links'
  ],
  screenshot: 'https://subsecute.com/images/landing/phone-screen.png',
  countriesSupported: 'NG'
}

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Subsecute',
  url: 'https://subsecute.com',
  logo: 'https://subsecute.com/images/landing/logo.png',
  description:
    'Subscription management app for Nigerians. Virtual USD cards auto-funded from your Naira wallet.',
  foundingLocation: { '@type': 'Place', name: 'Nigeria' },
  areaServed: { '@type': 'Country', name: 'Nigeria' },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@subsecute.com',
    contactType: 'customer service'
  }
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I pay for Netflix in Nigeria without my card being declined?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Subsecute creates a dedicated virtual USD card for your Netflix subscription, funded automatically from your Naira wallet. Unlike Nigerian bank cards that get declined due to CBN FX limits, Subsecute cards have a 99%+ payment success rate across 50+ subscription providers.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is Subsecute?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Subsecute is a subscription management app built for Nigerians. It gives you a unique virtual USD card for each subscription (Netflix, Spotify, ChatGPT, Figma, etc.) and auto-funds each card from your Naira wallet before renewal day.'
      }
    },
    {
      '@type': 'Question',
      name: 'How is Subsecute different from Grey.co or Chipper Cash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Unlike general-purpose dollar cards, Subsecute is purpose-built for subscriptions. Each subscription gets its own dedicated card, auto-funded before renewal, with reminders and spend tracking. You never have to manually top up or worry about a failed charge."
      }
    },
    {
      '@type': 'Question',
      name: 'What subscriptions does Subsecute support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Subsecute works with 50+ providers including Netflix, Spotify, Apple Music, YouTube Premium, ChatGPT Plus, Figma, Canva, Adobe Creative Cloud, Amazon Prime, and more.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long does it take to set up Subsecute?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Under 5 minutes. Download the app, sign up, link your Naira debit card, create a subscription, and copy the generated USD card details to your provider's payment page."
      }
    }
  ]
}

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>Subsecute — Your subscriptions, managed properly</title>
        <meta
          name="description"
          content="One app to create, fund, and manage every USD subscription. Virtual USD cards auto-funded from your Naira card or wallet. 50+ providers supported. Download on iOS and Android."
        />
        <meta
          name="keywords"
          content="subscription management, USD virtual card, naira to dollar, Netflix subscription Nigeria, Spotify Nigeria, subscription payment, auto-renew subscription, virtual dollar card"
        />
        <link rel="canonical" href="https://subsecute.com" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Subsecute — Your subscriptions, managed properly"
        />
        <meta
          property="og:description"
          content="One app to create, fund, and manage every USD subscription. Virtual cards auto-funded from your Naira wallet."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://subsecute.com" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dwambnh2n/image/upload/v1774920431/Screenshot_2026-03-31_at_2.26.31_AM_amvubi.png"
        />
        <meta property="og:site_name" content="Subsecute" />
        <meta property="og:locale" content="en_NG" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Subsecute — Your subscriptions, managed properly"
        />
        <meta
          name="twitter:description"
          content="One app to create, fund, and manage every USD subscription. Virtual cards auto-funded from your Naira wallet."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dwambnh2n/image/upload/v1774920431/Screenshot_2026-03-31_at_2.26.31_AM_amvubi.png"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(APP_SCHEMA)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(ORG_SCHEMA)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(FAQ_SCHEMA)}
        </script>
      </Helmet>

      <main className="font-neue-power">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <HowItWorksSection />
        <DownloadSection />
        {IS_WAITLIST ? <FAQSection /> : <SocialProofSection />}
        <Footer />
      </main>
    </>
  )
}
