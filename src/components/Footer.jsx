const links = [
  { label: 'Docs', href: '#faq' },
  { label: 'Status', href: '#top' },
  { label: 'Security', href: '#security' },
  { label: 'Terms', href: '#' },
  { label: 'Privacy', href: '#' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border/80 py-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold tracking-[0.3em] text-white">SELF-HOSTED MVP VPN</p>
          <p className="text-sm text-muted">Control plane you own. Security posture you trust.</p>
          <p className="text-xs text-muted">Copyright {new Date().getFullYear()} Self-Hosted MVP VPN. All rights reserved.</p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm text-muted">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
