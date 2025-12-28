export default function FeatureGrid({ features }) {
  return (
    <section id="features" className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.25em] text-muted">Features</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Built for control and clarity</h2>
          <span className="text-sm text-muted">Everything is single-tenant, logged, and configurable.</span>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface/80 p-6 transition duration-200 hover:-translate-y-1 hover:border-white/50 hover:bg-surfaceAlt/90 focus-within:border-white/60"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="relative space-y-3">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white/5 text-sm font-semibold text-white transition group-hover:border-white/60 group-hover:bg-white/10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-2 w-2"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="12" r="12" />
                  </svg>
                </span>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted">{feature.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
