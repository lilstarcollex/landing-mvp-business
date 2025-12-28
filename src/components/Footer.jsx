const links = [
  { label: 'Документация', href: '/docs' },
  { label: 'Статус', href: '/#top' },
  { label: 'Безопасность', href: '/#security' },
  { label: 'Условия', href: '#' },
  { label: 'Конфиденциальность', href: '#' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border/80 py-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold tracking-[0.3em] text-white">MVP VPN PRIVATE</p>
          <p className="text-sm text-muted">Плоскость управления, которой вы владеете. Поза безопасности, которой вы доверяете.</p>
          <p className="text-xs text-muted">Copyright {new Date().getFullYear()} MVP VPN PRIVATE. Все права защищены.</p>
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
