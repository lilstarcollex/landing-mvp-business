import { useState } from 'react'

const highlights = [
  {
    title: 'Чистый выделенный IP',
    description:
      'Никаких соседей и шумного трафика. Ваш адрес не попадает в блок-листы общих VPN.',
  },
  {
    title: 'Контроль и прозрачность',
    description:
      'Доступы и ключи только у вас. Настройки, шифрование и пользователи под вашим управлением.',
  },
  {
    title: 'Скорость без ограничений',
    description:
      'Подбираем конфигурацию под ваши сценарии: стриминг, работа, гейминг или удалённый доступ.',
  },
  {
    title: 'Стабильность и поддержка',
    description:
      'Файрвол, мониторинг на запуске, резервные профили и помощь в течение первого месяца.',
  },
]

const steps = [
  {
    title: 'Готовим сервер',
    points: ['Подберём VPS под бюджет', 'Привяжем домен при необходимости', 'Проверим локацию и пинги'],
  },
  {
    title: 'Ставим защиту',
    points: ['Настройка VPN и firewall', 'Установка 3x-ui и бота', 'Создание пользователей и ключей'],
  },
  {
    title: 'Передаём доступ',
    points: ['Готовые конфиги для устройств', 'Инструкция и видео', 'Тест вместе по шагам'],
  },
]

const comparisons = [
  {
    parameter: 'IP-адрес',
    subscription: 'Общий, часто в бан-листах',
    personal: 'Выделенный, чистый, только ваш',
  },
  {
    parameter: 'Приватность',
    subscription: 'Логи на стороне сервиса',
    personal: 'Логи отключены, ключи у вас',
  },
  {
    parameter: 'Скорость',
    subscription: 'Делится между пользователями',
    personal: 'Стабильная, без соседей',
  },
  {
    parameter: 'Гибкость',
    subscription: 'Ограниченные настройки',
    personal: 'Полный контроль протоколов и правил',
  },
  {
    parameter: 'Стоимость',
    subscription: 'Подписка каждый месяц',
    personal: 'Единоразовая настройка + VPS от 370 ₽/мес',
  },
]

const priceIncludes = [
  'Подбор VPS под ваши задачи',
  'Установка и настройка VPN + firewall',
  'Панель 3x-ui и управление через бота',
  'Готовые профили и инструкция для устройств',
  'Виде созвон для финальной проверки',
  'Поддержка 30 дней после запуска',
]

export default function App() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page container mx-auto px-5 sm:px-6 lg:px-8 xl:px-12">
      <header className="hero">
        <div className="badge">Без подписок и сюрпризов</div>
        <h1>Персональный VPN на вашем сервере</h1>
        <p className="lead">
          Чистый выделенный IP, скорость без соседей, прозрачные настройки. Делегируйте установку и
          получите защищённый доступ для всех ваших устройств.
        </p>
        <div className="hero-actions">
          <a className="btn primary" href="#cta">
            Получить настройку
          </a>
          <a className="btn ghost" href="#comparison">
            Сравнить варианты
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <span className="stat-value">1 день</span>
            <span className="stat-label">до готового VPN</span>
          </div>
          <div>
            <span className="stat-value">30 дней</span>
            <span className="stat-label">сопровождение после запуска</span>
          </div>
          <div>
            <span className="stat-value">0 логов</span>
            <span className="stat-label">ключи и доступы только у вас</span>
          </div>
        </div>
      </header>

      <section className="panel" id="why">
        <div className="section-head">
          <p className="eyebrow">Почему свой VPN</p>
          <h2>Приватность и скорость, которые нельзя купить подпиской</h2>
          <p className="muted">
            Общие VPN-сервисы делят ресурсы между тысячами пользователей. Персональный сервер —
            только для вас и ваших устройств.
          </p>
        </div>
        <div className="card-grid">
          {highlights.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel service">
        <div className="section-head">
          <p className="eyebrow">Что входит</p>
          <h2>Делаем под ключ и остаёмся рядом на запуске</h2>
          <p className="muted">
            Поможем выбрать VPS, настроим защиту, подготовим доступы и проверим всё вместе по шагам.
          </p>
        </div>

        <div className="service-grid">
          {steps.map((step) => (
            <div className="card step" key={step.title}>
              <div className="step-title">{step.title}</div>
              <ul>
                {step.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="panel comparison" id="comparison">
        <div className="section-head">
          <p className="eyebrow">Сравнение</p>
          <h2>Персональный VPN против подписки</h2>
          <p className="muted">Понимайте, за что платите, и что получаете на своём сервере.</p>
        </div>

        <div className="comparison-table-wrap">
          <table className="comparison-table">
            <thead>
              <tr>
                <th scope="col">Параметр</th>
                <th scope="col">Подписка/аренда</th>
                <th scope="col">Личный сервер</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row) => (
                <tr key={row.parameter}>
                  <th scope="row">{row.parameter}</th>
                  <td>{row.subscription}</td>
                  <td className="positive">{row.personal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="panel price" id="price">
        <div className="price-card">
          <div className="price-meta">
            <span className="eyebrow">Стоимость</span>
            <div className="price-value">4 500 ₽</div>
            <p className="muted">Единоразовая настройка под ключ</p>
          </div>

          <div className="price-includes">
            <h3>Включено</h3>
            <ul>
              {priceIncludes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="note">VPS оплачивается отдельно: от 370 ₽/мес в зависимости от локации.</div>
        </div>
      </section>

      <section className="panel cta" id="cta">
        <div className="cta-inner">
          <div className="cta-copy">
            <p className="eyebrow">Начнём сегодня</p>
            <h2>Оставьте контакт, обсудим детали за 10 минут</h2>
            <p className="muted">
              Расскажите, для чего нужен VPN: работа, доступ к сервисам, стриминг или что-то ещё. Мы
              подберём конфигурацию и предложим сервер.
            </p>
            <div className="cta-actions">
              <a className="btn primary" href="mailto:?subject=Персональный%20VPN&body=Хочу%20настройку%20VPN">
                Написать на email
              </a>
              <a className="btn ghost" href="#price">
                Посмотреть условия
              </a>
            </div>
          </div>

          <form className="cta-form" onSubmit={handleSubmit}>
            <label>
              Имя или ник
              <input name="name" required placeholder="Например, Анна или @nickname" />
            </label>
            <label>
              Контакт (Telegram или email)
              <input name="contact" required placeholder="@nickname или mail@example.com" />
            </label>
            <label>
              Что важно
              <textarea name="context" rows="3" placeholder="Где нужен VPN, сколько устройств, какие сервисы" />
            </label>
            {submitted ? (
              <div className="success">Готово! Мы свяжемся с вами и уточним детали.</div>
            ) : (
              <button type="submit" className="btn primary full">
                Оставить заявку
              </button>
            )}
            <p className="microcopy">Без спама. Контакты нужны только для связи по настройке.</p>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div>Персональный VPN · контроль и скорость на вашем сервере</div>
        <div className="footer-actions">
          <a href="#why">Аргументы</a>
          <a href="#comparison">Сравнение</a>
          <a href="#cta">Оставить заявку</a>
        </div>
      </footer>
    </div>
  )
}
