import { IS_WAITLIST } from '../config'
import Navbar from './Navbar'
import WaitlistForm from './WaitlistForm'

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative h-[713px] overflow-hidden bg-[#FFFEEC] sm:h-[813px] md:h-[855px] lg:h-[972px]"
    >
      {/* Orange blur */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#E96D1F] opacity-30 lg:h-[516px] lg:w-[825px]"
        style={{ filter: 'blur(252px)' }}
        aria-hidden="true"
      />

      {/* Navbar */}
      <div className="px-4 pt-5 lg:px-[100px]">
        <Navbar />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex flex-col items-center px-4 pt-8 lg:pt-16">
        {/* Provider pill */}
        <div className="mb-5 flex items-center gap-2 rounded-full border border-[#DEE2E6] bg-white/50 px-3 py-1.5 backdrop-blur-[124px] lg:mb-6">
          <div className="flex items-center -space-x-1.5">
            <img
              src="/images/landing/provider-1.png"
              alt=""
              className="h-5 w-5 rounded-full object-cover ring-2 ring-white"
            />
            <img
              src="/images/landing/provider-2.png"
              alt=""
              className="h-5 w-5 rounded-full object-cover ring-2 ring-white"
            />
            <img
              src="/images/landing/provider-3.png"
              alt=""
              className="h-5 w-5 rounded-full object-cover ring-2 ring-white"
            />
          </div>
          <span className="font-outfit text-xs tracking-wide text-[#6C757D] sm:text-sm">
            50+ Subscription providers
          </span>
        </div>

        {/* Heading */}
        <h1
          id="hero-heading"
          className="max-w-[822px] text-center font-neue-power leading-[1.15] tracking-normal text-[#232323]"
        >
          <span className="text-4xl font-bold sm:text-[40px] md:text-[49px] lg:text-[71px]">
            Your subscriptions,
          </span>
          <br />
          <span className="text-4xl font-normal sm:text-[40px] md:text-[49px] lg:text-[71px]">
            managed{' '}
          </span>
          <span className="relative inline-block text-4xl font-bold text-[#E96D1F] sm:text-[40px] md:text-[49px] lg:text-[71px]">
            properly.
            <svg
              className="absolute -bottom-1 left-0 w-full sm:-bottom-2"
              viewBox="0 0 400 16"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M2 10C20 5,40 14,60 9C80 4,100 14,120 9C140 4,160 14,180 9C200 4,220 14,240 9C260 4,280 14,300 9C320 4,340 14,360 9C380 4,395 10,398 9"
                stroke="#E96D1F"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 max-w-[540px] text-center font-outfit text-sm leading-[1.6em] tracking-wide text-[#6C757D] sm:text-base lg:mt-5 lg:text-lg">
          One app to create, fund, and manage every subscription. USD Virtual
          card generated and auto funded from your Naira card or wallet for each
          subscription.
        </p>

        {/* CTA — switches based on launch mode */}
        <div className="mt-6">
          {IS_WAITLIST ? (
            <WaitlistForm variant="light" />
          ) : (
            <a
              href="#download"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#232323] px-7 font-outfit text-base font-medium tracking-wide text-white transition-opacity hover:opacity-90 lg:h-[52px] lg:px-8"
            >
              Get Started
            </a>
          )}
        </div>

        {/* Phone mockup */}
        <div className="relative mx-auto mt-8 w-full max-w-[265px] sm:max-w-[311px] md:max-w-[354px] lg:mt-10 lg:max-w-[398px]">
          <div className="relative rounded-[2.5rem] bg-[#1a1a1a] p-2.5 shadow-[0_32px_68px_rgba(17,17,15,0.22)]">
            <img
              src="/images/landing/phone-screen.png"
              alt="Subsecute app showing wallet balance of ₦150,187.87, active subscriptions, and monthly spend"
              className="w-full rounded-[2rem]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
