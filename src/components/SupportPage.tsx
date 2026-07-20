import { Helmet } from 'react-helmet-async'
import Navbar from './Navbar'
import Footer from './Footer'

const HELP_TOPICS = [
  'Billing and payments',
  'Managing your subscriptions and bills',
  'Your account and access'
] as const

export default function SupportPage() {
  return (
    <>
      <Helmet>
        <title>Support — Subsecute</title>
        <meta
          name="description"
          content="Need a hand with Subsecute? Email support@subsecute.com for help with billing, subscriptions, and your account. We reply within 1–2 business days."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://subsecute.com/support" />
        <meta property="og:title" content="Support — Subsecute" />
        <meta
          property="og:description"
          content="Need a hand with Subsecute? Email support@subsecute.com for help with billing, subscriptions, and your account."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://subsecute.com/support" />
      </Helmet>

      <div className="flex min-h-screen flex-col bg-[#FFFEEC] font-neue-power">
        <div className="px-4 pt-5 lg:px-[100px]">
          <Navbar />
        </div>

        <main className="flex-1 py-16 lg:py-20">
          <div className="mx-auto max-w-[800px] px-4">
            <div className="mb-10 text-center lg:mb-14">
              <span className="font-outfit text-sm font-medium tracking-wide text-[#E96D1F]">
                SUPPORT
              </span>
              <h1 className="mt-2 font-neue-power text-3xl font-bold leading-[1.2em] tracking-normal text-[#232323] sm:text-4xl lg:text-[48px]">
                Support
              </h1>
              <p className="mt-4 font-outfit text-sm tracking-wide text-[#6C757D] sm:text-base">
                Need a hand with Subsecute? We&rsquo;re here to help.
              </p>
            </div>

            <div className="rounded-2xl border border-[#DEE2E6] bg-white p-6 sm:p-8">
              <h2 className="font-outfit text-base font-medium tracking-wide text-[#232323] sm:text-lg">
                Contact us
              </h2>
              <p className="mt-3 font-outfit text-sm leading-[1.6em] tracking-wide text-[#6C757D] sm:text-base">
                The fastest way to reach us is email. Write to{' '}
                <a
                  href="mailto:support@subsecute.com"
                  className="font-medium text-[#E96D1F] transition-opacity hover:opacity-80"
                >
                  support@subsecute.com
                </a>{' '}
                and we&rsquo;ll get back to you within 1&ndash;2 business days.
              </p>

              <h2 className="mt-8 font-outfit text-base font-medium tracking-wide text-[#232323] sm:text-lg">
                What we can help with
              </h2>
              <ul role="list" className="mt-3 flex flex-col gap-2">
                {HELP_TOPICS.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-center gap-3 font-outfit text-sm leading-[1.6em] tracking-wide text-[#6C757D] sm:text-base"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#E96D1F]"
                      aria-hidden="true"
                    />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-10 text-center font-outfit text-xs tracking-wide text-[#6C757D]">
              Subsecute is a product of TrustCommerce Resources Ltd (RC 7131175).
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
