import { useState } from 'react'

interface WaitlistFormProps {
  variant?: 'dark' | 'light'
}

const WAITLIST_API = 'https://api.subsecute.com/subsecute-api/v1/waitlist'

export default function WaitlistForm({ variant = 'dark' }: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch(WAITLIST_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        const data = await res.json().catch(() => null)
        setErrorMsg(data?.message || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Unable to connect. Please check your internet and try again.')
      setStatus('error')
    }
  }

  const isDark = variant === 'dark'

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#58DC00]/20">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 10L9 14L15 6" stroke="#58DC00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className={`font-outfit text-sm tracking-wide ${isDark ? 'text-white' : 'text-[#232323]'}`}>
          You&apos;re on the list! We&apos;ll notify you when we launch.
        </p>
      </div>
    )
  }

  return (
    <div className="flex w-full max-w-[440px] flex-col items-center gap-2 px-4 sm:px-0">
      <form onSubmit={handleSubmit} className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => { setEmail(e.target.value); if (status === 'error') setStatus('idle') }}
          placeholder="Enter your email"
          className={`h-12 w-full min-w-0 rounded-full px-5 text-center font-outfit text-sm outline-none transition-shadow focus:ring-2 focus:ring-[#E96D1F] sm:text-left sm:flex-1 ${
            isDark
              ? 'bg-white/10 text-white placeholder-white/50 border border-white/20'
              : 'bg-white text-[#232323] placeholder-[#ADB5BD] border border-[#DEE2E6]'
          } ${status === 'error' ? 'ring-2 ring-red-500' : ''}`}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="h-12 w-full shrink-0 rounded-full bg-[#232323] px-6 font-outfit text-sm font-medium tracking-wide text-white transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto sm:px-7"
        >
          {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
        </button>
      </form>
      {status === 'error' && (
        <p className={`font-outfit text-xs tracking-wide ${isDark ? 'text-red-400' : 'text-red-500'}`}>
          {errorMsg}
        </p>
      )}
    </div>
  )
}
