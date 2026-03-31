import React, { useEffect, useState, useRef } from 'react'
import { IS_WAITLIST } from '../config'

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.4 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])
  return inView
}

function useCountUp(target: number, duration: number, active: boolean, delay: number) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    const timeout = setTimeout(() => {
      const start = performance.now()
      function tick(now: number) {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setValue(Math.round(eased * target))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, delay)
    return () => clearTimeout(timeout)
  }, [active, target, duration, delay])
  return value
}

// Each stat has its own animation config
const ANIMATED_STATS = [
  {
    targets: [60],
    format: (vals: number[]) => `${vals[0]}%+`,
    label: 'Of Nigerian international card payments fail due to bank limits and FX restrictions',
    delay: 0
  },
  {
    targets: [15, 30],
    format: (vals: number[]) => `$${vals[0]}-${vals[1]}`,
    label: 'Average monthly foreign subscription spend per Nigerian user',
    delay: 200
  },
  {
    targets: [5],
    format: (vals: number[]) => `${vals[0]} min`,
    label: 'From download to your first active, auto-renewing subscription',
    delay: 400
  },
  {
    targets: [99],
    format: (vals: number[]) => `${vals[0]}%+`,
    label: 'Payment success rate across 50+ supported providers',
    delay: 600
  }
] as const

function AnimatedStat({
  stat,
  active
}: {
  stat: (typeof ANIMATED_STATS)[number]
  active: boolean
}) {
  const values = stat.targets.map((t, i) =>
    useCountUp(t, 1200, active, stat.delay + i * 100)
  )

  return (
    <div className="flex flex-col">
      <span className="font-neue-power text-3xl font-bold leading-[1.2em] tracking-tight text-[#E96D1F] sm:text-4xl lg:text-[48px]">
        {stat.format(values)}
      </span>
      <span className="font-outfit text-xs leading-[1.5em] tracking-wide text-[#6C757D]">
        {stat.label}
      </span>
    </div>
  )
}

const FEATURES = [
  {
    icon: '/images/landing/about-icon-1.svg',
    title: 'All subscriptions in one place',
    description: 'Track manage and control every sub independently'
  },
  {
    icon: '/images/landing/about-icon-2.svg',
    title: 'One dedicated USD card per subscription',
    description: 'Track manage and control every sub independently'
  },
  {
    icon: '/images/landing/about-icon-3.svg',
    title: 'Auto-funded before renewal',
    description:
      'Your naira card or wallet funds each subscription automatically'
  }
] as const

const STATS = [
  {
    value: '60%+',
    label: 'Of Nigerian international card payments fail due to bank limits and FX restrictions'
  },
  {
    value: '$15-30',
    label: 'Average monthly foreign subscription spend per Nigerian user'
  },
  {
    value: '5 min',
    label: 'From download to your first active, auto-renewing subscription'
  },
  {
    value: '99%+',
    label: 'Payment success rate across 50+ supported providers'
  }
] as const

export default function AboutSection() {
  const statsRef = useRef<HTMLDivElement>(null)
  const statsInView = useInView(statsRef)

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-[#141414] py-20 lg:py-24"
    >
      <div className="mx-auto flex max-w-[1240px] flex-col gap-14 px-4 lg:flex-row lg:gap-12 lg:px-0">
        {/* Left column */}
        <div className="flex flex-col gap-10 lg:max-w-[612px] lg:gap-12">
          {/* Text */}
          <div className="flex flex-col gap-4">
            <span className="font-outfit text-sm font-medium leading-[1.2em] tracking-wide text-[#E96D1F]">
              WHAT IS SUBSECUTE?
            </span>
            <h2
              id="about-heading"
              className="font-outfit text-3xl leading-[1.2em] text-white sm:text-4xl lg:text-[48px]"
            >
              The subscription infrastructure{' '}
              <span className="text-[#E96D1F]">Nigerians</span> actually needed.
            </h2>
            <p className="font-outfit text-sm leading-[1.5em] tracking-wide text-[#CED4DA] sm:text-base">
              Paying for subscription in USD shouldn&apos;t mean constant
              payment failures, shared dollar cards, and card terminations.
              Subsecute gives every single subscription its own dedicated
              virtual USD card, funded automatically from your naira wallet,
              renewed on time, every time.
            </p>
          </div>

          {/* Feature cards */}
          <div className="flex flex-col gap-3">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="flex items-center gap-3 rounded-xl border border-[rgba(233,109,31,0.1)] bg-[#202020] p-3"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[rgba(233,109,31,0.1)]">
                  <img
                    src={feature.icon}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="h-8 w-8"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-outfit text-sm font-medium leading-[1.5em] tracking-wide text-white sm:text-base">
                    {feature.title}
                  </h3>
                  <p className="font-outfit text-xs leading-[1.5em] tracking-wide text-[#6C757D] sm:text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — Stats + Testimonial */}
        <div ref={statsRef} className="flex flex-1 flex-col gap-6 rounded-3xl bg-[#1D1D1D] p-6 sm:p-8 lg:gap-8 lg:p-10">
          {/* Stats grid */}
          <div className="border-b border-[#2F2F2F] pb-8">
            <div className="grid grid-cols-2 gap-x-4 gap-y-8">
              {ANIMATED_STATS.map((stat) => (
                <AnimatedStat key={stat.label} stat={stat} active={statsInView} />
              ))}
            </div>
          </div>

          {/* Testimonial — only in live mode */}
          {!IS_WAITLIST && (
            <div className="flex flex-col gap-3">
              <blockquote className="font-outfit text-sm leading-[1.5em] tracking-wide text-white">
                &ldquo;I haven&apos;t thought about my subscriptions since I
                switched to Subsecute. It just works, every single month.&rdquo;
              </blockquote>
              <div className="flex items-center gap-2 py-1">
                <img
                  src="/images/landing/testimonial-avatar.png"
                  alt=""
                  loading="lazy"
                  className="h-6 w-6 rounded-full object-cover"
                />
                <cite className="font-outfit text-xs not-italic leading-[1.5em] tracking-wide text-[#6C757D]">
                  Adaeze K.
                </cite>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
