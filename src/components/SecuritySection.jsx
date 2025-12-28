function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-3 text-sm text-muted">
      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/40 bg-white/5 text-white">
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
      <span>{children}</span>
    </li>
  )
}

export default function SecuritySection({ checklist }) {
  return (
    <section id="security" className="grid gap-10 rounded-3xl border border-border bg-surface/80 p-8 shadow-subtle md:grid-cols-2">
      <div className="space-y-5">
        <p className="text-xs uppercase tracking-[0.25em] text-muted">Безопасность</p>
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          Шифрование, управление ключами и контроль админов из коробки.
        </h2>
        <p className="text-base leading-relaxed text-muted">
          Границы доверия остаются внутри вашей сети. Каждый туннель, сертификат и действие администратора — в аудите.
          Ключи хранятся там, где вы решите: KMS, HSM или ваш сейф. Админ-доступ ограничен RBAC и короткоживущими
          токенами, чтобы поддерживать принцип наименьших привилегий во всех средах.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-base/60 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Шифрование</p>
            <p className="mt-2 text-lg font-semibold text-white">TLS 1.3 + WireGuard</p>
          </div>
          <div className="rounded-2xl border border-border bg-base/60 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Контроль</p>
            <p className="mt-2 text-lg font-semibold text-white">Изоляция админ-плоскости</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-base/70 p-6">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Чек-лист безопасности</p>
            <p className="mt-1 text-sm text-muted">Операционные контроли, которые ждут команды</p>
          </div>
          <span className="rounded-full border border-white/30 px-3 py-1 text-xs text-white/80">6 пунктов</span>
        </div>
        <ul className="mt-5 space-y-3">
          {checklist.map((item) => (
            <CheckItem key={item}>{item}</CheckItem>
          ))}
        </ul>
      </div>
    </section>
  )
}
