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
    title: 'Ваш личный сервер',
    description: 'Сервер работает только на вас. Все данные принадлежат только вам.',
  },
  {
    title: 'Без ограничений',
    description: 'Никаких подписочных систем. Любое количество устройств, трафика.',
  },
  {
    title: 'Доступен для большинства платформ',
    description: 'Windows, MacOS, iOS, Linux, Android, OpenWRT, AndroidTV',
  },
  {
    title: 'Протокол на ваш выбор',
    description: 'Самые современные: VLESS TCP REALITY, Hysteria2 или классика: WireGuard, OpenVPN.',
  },
  {
    title: 'Опыт нашей команды',
    description: 'Мы изучали, пробовали, тестировали, чтобы предоставить рабочее решение.',
  },
  {
    title: 'Поддержка в течении 30 дней',
    description: 'Мы поможем, если что-то сломается или обучим вас управлять вашим VPN лично.',
  },
]

const securityChecklist = [
  'Единоличный доступ к серверу VPN',
  'Прозрачность и проверяемость кода',
  'Отсутствие статических секретов в трафике',
  'Маскировка под легитимный сетевой трафик',
  'Минимальная поверхность атаки',
  'Сквозное шифрование трафика',
]

const steps = [
  {
    title: 'Подготовка',
    description: 'Приобретение VPS, регистрация домена и подготовка окружения.',
  },
  {
    title: 'Настройка',
    description: 'Установка панели, выпуск сертификатов, создание конфигураций VPN.',
  },
  {
    title: 'Получение доступа',
    description: 'Специалист свяжется с вами и предоставит полную консультацию.',
  },
]

const pricing = [
  {
    name: 'Самостоятельный',
    price: '999 ₽',
    description: 'Если вы уже владеете инфраструктурой и вам нужна только настройка VPN.',
    features: ['Оплата сервера самостоятельно', 'Оплата за услугу разово', 'Полная настройка', 'Поддержка в течении 30 дней'],
    cta: 'Создать заявку',
  },
  {
    name: 'Полный комплект',
    price: '4499 ₽',
    description: 'Вам не нужно разбираться - мы сделаем всё за вас.',
    features: [
      'Подбор и аренда сервера',
      'Поддержка в течении 45 дней',
      'Гибкая настройка под ваши нужды',
      'Полная документация по использованию',
    ],
    cta: 'Связаться с нами',
    highlighted: true,
  },
]

const faqs = [
  {
    question: 'Как происходит настройка?',
    answer: 'Тариф "Самостоятельный": Вы предоставляете нам доступ к VPS, мы настраиваем VPN, проводим консультацию и помогаем сменить пароль от сервера. Тариф "Полный комплект": Подбираем необходимый набор технологий с учётом ваших потребностей, принимает оплату, сразу после оплаты в течении 24 часов, мы подбираем и арендуем сервер, приобретаем доменное имя, делаем полную настройку. Далее полная консультация и поддежка в течении 45 дней.',
  },
  {
    question: 'Что нужно для тарифа "Самостоятельный"?',
    answer: 'Обязательно: Виртуальный или выделенный сервер в нужной вам юрисдикции с доступом по SSH, доменное имя с DNS записью на этот сервер. Опционально: ТОКЕН БОТА в телеграме, для настройки админ панели прямо в телеграме.',
  },
  {
    question: 'Что требуется для тарифа "Полный комплект"?',
    answer: 'Только связаться с нами и обсудить ваши потребности. Всё остальное мы сделаем за вас.',
  },
  {
    question: 'Зачем нужен личный VPN?',
    answer: 'Подписка предоставляет доступ к VPN-сервису, который используется совместно с другими пользователями. Личный VPN разворачивается в вашем облаке или на вашем сервере, и все данные остаются под вашим контролем. Вы сами решаете, кто и как получает доступ к вашему интернет-трафику.',
  },
  {
    question: 'Если у меня уже есть сервер, могу ли я заказать только настройку?',
    answer: 'Тариф "Самостоятельный" предназначен именно для таких случаев. Вы предоставляете нам доступ к вашему серверу, и мы настраиваем VPN согласно вашим требованиям.',
  },
  {
    question: 'Хватит ли этого VPN для работы с корпоративными ресурсами?',
    answer: 'Всё зависит от ваших требований и мощностей сервера. Мы поможем подобрать оптимальную конфигурацию и настроить VPN так, чтобы он соответствовал вашим нуждам.',
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
        <Hero trustLine="Создано для приватности и удобства." />
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
