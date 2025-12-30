export default function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-white/[0.06] via-surface/70 to-base/80 p-10 shadow-subtle"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_35%)] opacity-60" />
      <div className="relative space-y-4">
        <p className="text-xs uppercase tracking-[0.25em] text-muted">Готовы защитить свои данные?</p>
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Ваш личный VPN. Любые решения только за вами!</h2>
        <p className="max-w-2xl text-sm text-muted">
          В течении 24 часов вы получите настроенный VPN. Полные инструкции по его использованию. Поддержку в течении месяца, по любым вопросам.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="/#top"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black transition duration-150 hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Оставить заявку в боте
          </a>
          <a
            href="/#pricing"
            className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Смотреть тарифы
          </a>
        </div>
      </div>
    </section>
  )
}
