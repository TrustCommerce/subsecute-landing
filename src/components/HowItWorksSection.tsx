const STEPS = [
  {
    number: '01',
    title: 'Download & sign up',
    description:
      'Create your account, link your naira debit card. Your wallet is funded and ready in under 60 seconds.'
  },
  {
    number: '02',
    title: 'Create a subscription',
    description:
      "Name your sub, set the amount and billing cycle. A virtual USD card is instantly generated and ready for you to use on the provider's platform."
  },
  {
    number: '03',
    title: 'Copy the card, use it',
    description:
      'Copy the card details and enter them on Netflix, Spotify, or wherever. Your subscription is now live and linked.'
  },
  {
    number: '04',
    title: 'It handles itself',
    description:
      'Subsecute reminds you before each renewal and auto-funds the card from your naira wallet. No failed charges. Ever.'
  }
] as const

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="bg-white py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-4 lg:px-0">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-4 lg:max-w-[461px]">
            <span className="font-outfit text-sm font-medium tracking-wide text-[#E96D1F]">
              HOW SUBSECUTE WORKS
            </span>
            <h2
              id="how-it-works-heading"
              className="font-neue-power text-3xl font-bold leading-[1.2em] tracking-normal text-[#232323] sm:text-4xl lg:text-[48px]"
            >
              Up and running in under 5 minutes
            </h2>
          </div>
          <p className="font-outfit text-base leading-[1.5em] tracking-wide text-[#232323] lg:max-w-[370px]">
            Set it up once. Subsecute handles every renewal from there; funding,
            reminders, the whole thing!
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {STEPS.map((step, index) => (
            <article
              key={step.number}
              className={`flex flex-col gap-3 ${
                index < STEPS.length - 1
                  ? 'lg:border-r lg:border-[#CED4DA] lg:pr-8'
                  : ''
              } ${index > 0 ? 'lg:pl-8' : ''}`}
            >
              <span className="font-outfit text-base font-semibold tracking-wide text-[#E96D1F]">
                {step.number}
              </span>
              <h3 className="font-outfit text-lg font-semibold leading-[1.2em] tracking-wide text-[#232323] lg:text-xl">
                {step.title}
              </h3>
              <p className="font-outfit text-sm leading-[1.5em] tracking-wide text-[#6C757D]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
