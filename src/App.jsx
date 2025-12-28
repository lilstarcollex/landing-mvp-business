import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import SecuritySection from './components/SecuritySection'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import FAQAccordion from './components/FAQAccordion'
import CTA from './components/CTA'
import Footer from './components/Footer'

const features = [
  {
    title: 'Однотенантность по умолчанию',
    description: 'Выделенный контур управления для каждой команды. Никакого общего состояния или соседства.',
  },
  {
    title: 'Готов к Zero Trust',
    description: 'Короткоживущие сертификаты, учёт posture устройств и доступ по идентичности.',
  },
  {
    title: 'Удобен для IaC',
    description: 'Все политики и туннели в коде. Поддержка GitOps и декларативных конфигов.',
  },
  {
    title: 'Аудит логов',
    description: 'Неизменяемые журналы с управлением ретенцией и экспортом.',
  },
  {
    title: 'Ролевой доступ',
    description: 'Гранулярный RBAC для админов, операторов и аудиторов с ограничением зон.',
  },
  {
    title: 'Предсказуемые затраты',
    description: 'Самостоятельный хостинг без тарификации за гигабайты и сюрпризов по трафику.',
  },
]

const securityChecklist = [
  'Ротация ключей и сертификатов',
  'Роли по принципу наименьших привилегий',
  'Логи, защищённые от подмены',
  'Опционально аппаратные ключи',
  'Разрешённые и запрещённые IP списки',
  'Изолированная админ-плоскость',
]

const steps = [
  {
    title: 'Подготовка',
    description: 'Разворачивайте плоскость управления в облаке или on-prem за минуты.',
  },
  {
    title: 'Настройка',
    description: 'Пушьте политики, роли и маршруты через код. Без дрейфа и сюрпризов.',
  },
  {
    title: 'Подключение',
    description: 'Подключайте устройства и сервисы с подписанными профилями и контролем posture.',
  },
]

const pricing = [
  {
    name: 'Команда',
    price: 'От GBP X/мес',
    description: 'Для команд, которым нужен безопасный, аудируемый VPN без лишних расходов.',
    features: ['До 50 аккаунтов', 'Готовность к SSO и SCIM', 'Автобэкапы', 'Поддержка по email'],
    cta: 'Развернуть Команду',
  },
  {
    name: 'Enterprise',
    price: 'От GBP X/мес',
    description: 'Для регулируемых сред с углублёнными контролями и сопровождением.',
    features: [
      'Неограниченные аккаунты',
      'Продвинутые сетевые паттерны',
      'Дедицированная линия поддержки',
      'Онбординг и hardening воркшоп',
    ],
    cta: 'Связаться с нами',
    highlighted: true,
  },
]

const faqs = [
  {
    question: 'Как происходит развёртывание?',
    answer: 'Используйте Helm chart или Terraform модуль для установки в ваш Kubernetes кластер или на виртуальные машины.',
  },
  {
    question: 'Каковы инфраструктурные требования?',
    answer: 'Небольшой контур управления (2–3 узла), исходящий интернет для обновлений и доступ к вашему IdP.',
  },
  {
    question: 'Готово ли к требованиям комплаенса?',
    answer: 'Аудит, RBAC и неизменяемость конфигов помогают соответствовать SOC2 и ISO-процессам по умолчанию.',
  },
  {
    question: 'Как проводятся обновления?',
    answer: 'Версионированные и обратимые обновления с префлайт-проверками. Можно откатиться без простоя.',
  },
  {
    question: 'Какая поддержка включена?',
    answer: 'Команда — поддержка в рабочие часы; Enterprise — 24/7 SLA и персональный Success-инженер.',
  },
  {
    question: 'Можно ли мигрировать с существующего VPN?',
    answer: 'Да. Импортируйте маршруты и пользователей, поднимите параллельные туннели и переключайтесь поэтапно.',
  },
]

const docsSections = [
  {
    id: 'overview',
    title: 'Обзор решения',
    body: 'MVP VPN PRIVATE — самостоятельная плоскость управления VPN. Она разворачивается в вашем периметре, хранит ключи там, где вы решаете, и даёт предсказуемые операции без тарификации за трафик.',
  },
  {
    id: 'requirements',
    title: 'Минимальные требования',
    list: [
      '2–3 узла для control plane (Kubernetes или VM), доступных друг другу по внутренней сети.',
      'Исходящий интернет для обновлений образов и зависимостей.',
      'Доступ к IdP (OIDC/SAML) для подключения SSO и управления ролями.',
      'DNS-запись для панели администрирования и API.',
    ],
  },
  {
    id: 'quickstart',
    title: 'Быстрый старт',
    steps: [
      'Подготовьте namespace/кластер и примените Helm chart или Terraform модуль.',
      'Подключите IdP и настройте группы/роли (RBAC).',
      'Задайте политики туннелей и маршруты как код и закоммитьте в git.',
      'Включите аудит и экспорт логов в вашу SIEM.',
      'Выдайте подписанные профили пользователям и сервисам.',
      'Проверьте posture и включите ротацию ключей.',
    ],
  },
  {
    id: 'infrastructure',
    title: 'Инфраструктура и сеть',
    body: 'Control plane изолирован, использует внутренние адреса и может быть вынесен в отдельный проект/аккаунт. Поддерживаются отдельные дата-планы для географий и сегментов, а также split-tunnel сценарии.',
  },
  {
    id: 'security',
    title: 'Безопасность и аудит',
    list: [
      'TLS 1.3 + WireGuard, опционально аппаратные ключи для админов.',
      'Логи неизменяемые, с экспортом в SIEM и настраиваемой ретенцией.',
      'Доступ админов ограничен ролями и короткоживущими токенами.',
      'IP allow/deny списки для сервисов и админ-панели.',
    ],
  },
  {
    id: 'support',
    title: 'Поддержка и обновления',
    body: 'Командный тариф включает поддержку в рабочие часы и рекомендации по обновлениям. Enterprise получает 24/7 SLA, выделенный контакт и сопровождение при релизах и миграциях.',
  },
]

function PageShell({ children }) {
  return (
    <div className="relative mx-auto max-w-6xl px-6 pb-16 md:px-8">
      {children}
      <Footer />
    </div>
  )
}

function LandingPage() {
  return (
    <PageShell>
      <main className="space-y-24 pb-12 pt-12 md:space-y-28 md:pt-16">
        <Hero trustLine="Создано для команд, которые держат прод в своих руках." />
        <FeatureGrid features={features} />
        <SecuritySection checklist={securityChecklist} />
        <Steps steps={steps} />
        <Pricing tiers={pricing} note="Самостоятельный хостинг. Никаких сюрпризов за гигабайты." />
        <FAQAccordion faqs={faqs} />
        <CTA />
      </main>
    </PageShell>
  )
}

function DocsPage() {
  return (
    <PageShell>
      <section className="pb-12 pt-12 md:pt-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-muted">Документация</p>
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">Быстрый старт и эксплуатация</h1>
            <p className="max-w-2xl text-base text-muted">
              Всё, что нужно для развертывания MVP VPN PRIVATE, подключения IdP, настройки ролей и безопасной работы в
              продакшене.
            </p>
          </div>
          <div className="w-full max-w-sm rounded-2xl border border-border bg-base/70 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Быстрый переход</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {docsSections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 space-y-8">
          {docsSections.map((section) => (
            <article
              key={section.id}
              id={section.id}
              className="rounded-2xl border border-border bg-surface/80 p-6 shadow-subtle"
            >
              <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              {section.body ? <p className="mt-3 text-sm leading-relaxed text-muted">{section.body}</p> : null}
              {section.list ? (
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {section.list.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-white/60" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.steps ? (
                <ol className="mt-4 space-y-2 text-sm text-muted">
                  {section.steps.map((item, index) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-border bg-white/5 text-xs text-white">
                        {index + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-base text-text">
        <div className="relative isolate overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(248,250,252,0.05),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(248,250,252,0.05),transparent_28%),radial-gradient(circle_at_40%_70%,rgba(248,250,252,0.04),transparent_25%)] opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent" />
          </div>

          <div className="relative">
            <Navbar />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/docs" element={<DocsPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
