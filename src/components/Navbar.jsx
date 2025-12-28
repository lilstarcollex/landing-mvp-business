import { useState } from 'react'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Security', href: '#security' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

function NavLink({ label, href, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-sm text-muted transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      {label}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-base/85 backdrop-blur">
      <div className="flex items-center justify-between py-4 md:py-5">
        <a
          href="#top"
          className="text-xs font-semibold tracking-[0.3em] text-white transition hover:text-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          SELF-HOSTED MVP VPN
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
          <a
            href="#cta"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition duration-150 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:translate-y-0"
          >
            Deploy Now
          </a>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href="#cta"
            className="rounded-full bg-white px-3 py-2 text-xs font-semibold uppercase tracking-wide text-black transition duration-150 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Deploy
          </a>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/70 text-white transition hover:border-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div className="md:hidden">
          <div className="space-y-3 border-t border-border/80 py-4">
            {links.map((link) => (
              <div key={link.href} className="flex justify-between">
                <NavLink {...link} onClick={() => setOpen(false)} />
                <span aria-hidden className="h-px flex-1 translate-y-3 border-b border-dashed border-border/60" />
              </div>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="block w-full rounded-full border border-white px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Deploy Now
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
