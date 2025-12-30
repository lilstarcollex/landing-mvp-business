function HeroStat({ label, value }) {
  return (
    <div className="rounded-xl border border-border/80 bg-surface/80 px-4 py-3">
      <p className="text-xs uppercase tracking-[0.2em] text-muted">{label}</p>
      <p className="mt-2 text-lg font-semibold text-white">{value}</p>
    </div>
  )
}

export default function Hero({ trustLine }) {
  return (
    <section id="top" className="relative pt-6 md:pt-8">
      <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-border bg-surface/70 px-4 py-2 text-xs uppercase tracking-[0.25em] text-muted">
            Минимум действий — максимум контроля
          </div>
          <div className="space-y-5">
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
              Ваш личный VPN. Только ваш!
            </h1>
            <p className="max-w-2xl text-base text-muted sm:text-lg">
              Ваш личный VPN. Все данные остаются под вашим контролем. Никакой интернет цензуры. Никаких сливов данных. Только вы решаете, кто и как получает доступ к вашему интернет-трафику.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="/#cta"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black transition duration-150 hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:translate-y-0"
            >
              Оставить заявку
            </a>
            <a
              href="/#faq"
              className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition duration-150 hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Смотреть FAQ
            </a>
          </div>
          <p className="text-sm text-muted">{trustLine}</p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -translate-x-4 translate-y-4 rounded-3xl border border-white/5 opacity-70 blur-3xl" aria-hidden />
          <div className="relative space-y-4 rounded-3xl border border-border bg-surface/80 p-6 shadow-subtle">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted">Развёртывание</p>
                <p className="mt-1 text-lg font-semibold text-white">MVP VPN PRIVATE</p>
              </div>
              <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">Готово</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <HeroStat label="Как управлять?" value="Панель управления и бот" />
              <HeroStat label="Предсказуемость" value="Пока работает сервер" />
              <HeroStat label="Доступ" value="Только в ваших руках" />
              <HeroStat label="Протоколы" value="Классика и современные" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
