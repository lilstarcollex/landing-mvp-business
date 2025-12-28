import { useState } from 'react'
import { Link } from 'react-router-dom'

const links = [
  { label: 'Возможности', href: '/#features' },
  { label: 'Безопасность', href: '/#security' },
  { label: 'Цены', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Документация', to: '/docs' },
]

function NavLink({ label, href, to, onClick }) {
  const baseClass =
    'text-sm text-muted transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
  if (to) {
    return (
      <Link to={to} onClick={onClick} className={baseClass}>
        {label}
      </Link>
    )
  }
  return (
    <a href={href} onClick={onClick} className={baseClass}>
      {label}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 w-full border-b border-border/80 bg-base/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8 md:py-5">
        <Link
          to="/"
          className="text-xs font-semibold tracking-[0.3em] text-white transition hover:text-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          MVP VPN PRIVATE
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink key={link.label} {...link} />
          ))}
          <a
            href="/#cta"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition duration-150 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:translate-y-0"
          >
            Развернуть
          </a>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href="/#cta"
            className="rounded-full bg-white px-3 py-2 text-xs font-semibold uppercase tracking-wide text-black transition duration-150 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Старт
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
          <div className="space-y-3 border-t border-border/80 px-6 py-4">
            {links.map((link) => (
              <div key={link.label} className="flex justify-between">
                <NavLink {...link} onClick={() => setOpen(false)} />
                <span aria-hidden className="h-px flex-1 translate-y-3 border-b border-dashed border-border/60" />
              </div>
            ))}
            <a
              href="/#cta"
              onClick={() => setOpen(false)}
              className="block w-full rounded-full border border-white px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Развернуть
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
