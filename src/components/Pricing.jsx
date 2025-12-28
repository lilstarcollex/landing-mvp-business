function Tier({ tier }) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl border border-border p-6 transition duration-200 hover:-translate-y-1 hover:border-white/60 hover:bg-surfaceAlt/80 ${
        tier.highlighted ? 'bg-surface/80 shadow-subtle' : 'bg-base/70'
      }`}
    >
      {tier.highlighted && (
        <span className="absolute right-6 top-6 rounded-full border border-white/30 px-3 py-1 text-xs text-white">
          Recommended
        </span>
      )}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
        <p className="text-sm text-muted">{tier.description}</p>
      </div>
      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-3xl font-semibold text-white">{tier.price}</span>
        <span className="text-sm text-muted">self-hosted</span>
      </div>
      <ul className="mt-6 space-y-3 text-sm text-muted">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-border bg-white/5 text-xs text-white">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="h-3 w-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4.5 10.5 8 14l7.5-8" />
              </svg>
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-6">
        <a
          href="#cta"
          className={`inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
            tier.highlighted
              ? 'bg-white text-black hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.35)]'
              : 'border border-white text-white hover:bg-white hover:text-black'
          }`}
        >
          {tier.cta}
        </a>
      </div>
    </article>
  )
}

export default function Pricing({ tiers, note }) {
  return (
    <section id="pricing" className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.25em] text-muted">Pricing</p>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Straightforward, self-hosted tiers</h2>
          <p className="text-sm text-muted">{note}</p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {tiers.map((tier) => (
          <Tier key={tier.name} tier={tier} />
        ))}
      </div>
    </section>
  )
}
