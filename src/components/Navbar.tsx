import { IS_WAITLIST } from '../config'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' }
] as const

export default function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="mx-auto flex max-w-[1240px] items-center justify-between rounded-xl border border-[#DEE2E6] px-5 py-2.5"
    >
      <a href="/" aria-label="Subsecute home">
        <img
          src="/images/landing/logo.png"
          alt="Subsecute logo"
          className="h-8 w-auto"
        />
      </a>

      {/* Desktop nav */}
      <div className="hidden items-center gap-4 md:flex">
        <ul className="flex items-center" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-2 font-outfit text-sm tracking-wide text-[#232323] transition-colors hover:text-[#E96D1F]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#download"
          className="rounded-full bg-[#E96D1F] px-5 py-2 font-outfit text-sm font-medium tracking-wide text-white transition-opacity hover:opacity-90"
        >
          {IS_WAITLIST ? 'Join Waitlist' : 'Get the App'}
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="flex flex-col gap-1.5 md:hidden"
        aria-label="Open menu"
      >
        <span className="block h-0.5 w-6 bg-[#232323]" />
        <span className="block h-0.5 w-6 bg-[#232323]" />
        <span className="block h-0.5 w-6 bg-[#232323]" />
      </button>
    </nav>
  )
}
