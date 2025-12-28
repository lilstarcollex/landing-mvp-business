export default function Steps({ steps }) {
  return (
    <section id="steps" className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.25em] text-muted">Как это работает</p>
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">От подготовки до подключения</h2>
        <p className="text-sm text-muted">Три понятных шага, чтобы запуститься без сюрпризов.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {steps.map((step, index) => (
          <article
            key={step.title}
            className="relative rounded-2xl border border-border bg-base/70 p-6 transition duration-200 hover:-translate-y-1 hover:border-white/50 hover:bg-surface/80"
          >
            <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/5 text-sm font-semibold text-white">
              {index + 1}
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{step.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
