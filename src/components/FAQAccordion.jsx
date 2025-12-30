import { useState } from 'react'

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="rounded-2xl border border-border bg-base/70">
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-base"
        >
          <span>{faq.question}</span>
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition group-hover:border-white/60"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className={`h-4 w-4 transition ${isOpen ? 'rotate-45' : ''}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M10 4v12M4 10h12" />
            </svg>
          </span>
        </button>
      </h3>
      {isOpen ? (
        <div className="border-t border-border px-4 py-3 text-sm leading-relaxed text-white/80">{faq.answer}</div>
      ) : null}
    </div>
  )
}

export default function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="space-y-6">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.25em] text-muted">FAQ</p>
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Ответы на часто задаваемые вопросы</h2>
        <p className="text-sm text-muted">Для дополнительной консультации напишите в поддержку</p>
      </div>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <FAQItem
            key={faq.question}
            faq={faq}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>
    </section>
  )
}
