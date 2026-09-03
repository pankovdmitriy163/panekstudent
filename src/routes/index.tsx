import { createFileRoute } from "@tanstack/react-router";
import wondersHero from "@/assets/wonders-hero.jpg";
import wondersMist from "@/assets/wonders-mist.jpg";
import projectTelegram from "@/assets/project-telegram.jpg";
import projectNeuro from "@/assets/project-neuro.jpg";
import projectLaunchpro from "@/assets/project-launchpro.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Вайбкодинг — лендинги и web-продукты под ключ" },
      {
        name: "description",
        content:
          "Создаю эффективные лендинги и web-продукты через вайбкодинг: запуск за дни, а не месяцы, дизайн и код в одном потоке.",
      },
      { property: "og:title", content: "Вайбкодинг — лендинги и web-продукты под ключ" },
      {
        property: "og:description",
        content:
          "Эффективные лендинги и web-продукты через вайбкодинг. Быстро, красиво, с фокусом на конверсию.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PROJECTS: [string, string][] = [
  ["Лендинг онлайн-курса", "Запуск за 5 дней, конверсия в заявку 11%"],
  ["Сайт студии интерьеров", "Портфолио с плавной анимацией и заявкой"],
  ["Web-приложение учёта", "Дашборд, авторизация, отчёты"],
  ["Промо-страница продукта", "Сторителлинг и скролл-анимации"],
];

function Laptop() {
  return (
    <div className="float-soft w-full max-w-[420px]">
      <div className="rounded-2xl border border-white/10 bg-ink-2/80 p-2 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)] backdrop-blur-xl">
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br from-ink-2 to-ink">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--violet)_35%,transparent),transparent_60%)]" />
          <div className="relative flex h-full flex-col gap-2 p-4 sm:p-5">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-white/25" />
              <span className="h-2 w-2 rounded-full bg-white/25" />
              <span className="h-2 w-2 rounded-full bg-white/25" />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-2">
              {PROJECTS.slice(0, 2).map(([t, d]) => (
                <div
                  key={t}
                  className="rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2 backdrop-blur"
                >
                  <p className="text-[0.72rem] font-bold leading-tight text-white">{t}</p>
                  <p className="mt-1 text-[0.65rem] leading-snug text-white/60">{d}</p>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-1 inline-flex items-center justify-center rounded-xl bg-violet px-4 py-2 text-[0.72rem] font-bold text-white shadow-[var(--shadow-violet)] transition-transform duration-200 hover:scale-[1.03]"
            >
              Связаться
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto h-2 w-[86%] rounded-b-2xl bg-white/10" />
      <div className="mx-auto h-1 w-[64%] rounded-b-xl bg-white/5" />
    </div>
  );
}

function Phone() {
  return (
    <div className="float-soft w-full max-w-[240px] [animation-delay:1.5s]">
      <div className="rounded-[2.5rem] border border-white/12 bg-ink-2/80 p-2.5 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)] backdrop-blur-xl">
        <div className="relative aspect-[9/19] overflow-hidden rounded-[2rem] bg-gradient-to-b from-ink-2 to-ink">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,color-mix(in_oklab,var(--amber)_30%,transparent),transparent_60%)]" />
          <div className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/20" />
          <div className="relative flex h-full flex-col justify-center gap-3 p-4">
            {PROJECTS.slice(2).map(([t, d]) => (
              <div
                key={t}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur"
              >
                <p className="text-[0.78rem] font-bold leading-tight text-white">{t}</p>
                <p className="mt-1 text-[0.68rem] leading-snug text-white/60">{d}</p>
              </div>
            ))}
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-2xl bg-amber px-4 py-2.5 text-[0.78rem] font-bold text-ink shadow-[var(--shadow-amber)] transition-transform duration-200 hover:scale-[1.03]"
            >
              Посмотреть проекты
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


function Index() {
  return (
    <main className="relative overflow-hidden bg-ink">
      {/* HERO */}
      <section className="relative min-h-screen">
        <img
          src={wondersHero}
          alt="Чудеса света в туманной ночной дымке"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,color-mix(in_oklab,var(--ink)_85%,transparent)_70%,var(--ink)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-ink" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center gap-10 px-5 py-20 sm:px-8 lg:flex-row lg:justify-between lg:gap-8">
          <div className="order-2 hidden w-full justify-center lg:order-1 lg:flex lg:w-[28%]">
            <Laptop />
          </div>

          <div className="order-1 w-full max-w-2xl text-center lg:order-2 lg:w-[44%]">
            <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 backdrop-blur">
              #вайбкодинг
            </span>
            <h1 className="mt-6 text-3xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              Эффективные лендинги и{" "}
              <span className="text-glow-amber">web-продукты</span> через вайбкодинг
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Превращаю идею в работающий продукт за дни, а не месяцы. Дизайн, код и смыслы
              собираются в одном потоке — вы получаете страницу, которая выглядит дорого и
              приносит заявки с первого дня.
            </p>
          </div>

          <div className="order-3 flex w-full justify-center lg:w-[24%]">
            <Phone />
          </div>

          <div className="order-4 flex w-full justify-center lg:hidden">
            <Laptop />
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="relative -mt-24 bg-gradient-to-b from-ink via-ink-2/60 to-ink px-5 py-28 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold sm:text-4xl">
            Почему это работает
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Скорость",
                d: "Первый рабочий прототип — за 48 часов. Правки видны сразу, без бесконечных согласований.",
              },
              {
                t: "Конверсия",
                d: "Структура строится вокруг одного действия: смыслы, оффер и путь к заявке.",
              },
              {
                t: "Качество",
                d: "Чистый код, адаптив, скорость загрузки и SEO — не опция, а база.",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur transition-colors hover:border-amber/40"
              >
                <h3 className="text-lg font-bold text-glow-amber">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section
        id="projects"
        className="relative bg-gradient-to-b from-ink via-ink-2/60 to-ink px-5 py-28 sm:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold sm:text-4xl">
            Избранные проекты
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Бот новостей в Telegram",
                d: "Бот для персонализированного контента: подбирает новости под интересы пользователя и присылает дайджест.",
                tags: ["Telegram Bot API", "Node.js", "OpenAI", "PostgreSQL"],
                img: projectTelegram,
              },
              {
                t: "НейроАналитик",
                d: "AI-сервис для анализа данных: превращает сырые метрики в понятные выводы и прогнозы за минуты.",
                tags: ["Python", "FastAPI", "LLM", "React"],
                img: projectNeuro,
              },
              {
                t: "LaunchPro",
                d: "Лендинг для продукта: структура под запуск, скролл-сторителлинг и конверсия в заявку.",
                tags: ["TanStack Start", "Tailwind", "Vite", "SEO"],
                img: projectLaunchpro,
              },
            ].map((p) => (
              <div
                key={p.t}
                className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur transition-colors hover:border-amber/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.t}
                    width={1280}
                    height={800}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,color-mix(in_oklab,var(--violet)_30%,transparent),transparent_60%)]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                </div>
                {/* content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-glow-amber">{p.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{p.d}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.7rem] font-medium text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative bg-gradient-to-b from-ink via-ink-2/70 to-ink px-5 py-32 sm:px-8"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold sm:text-4xl">Обсудим ваш проект?</h2>
          <p className="mt-4 text-white/65">
            Расскажите задачу — предложу структуру и сроки в течение дня.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#229ED9] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(34,158,217,0.7)] transition-transform duration-200 hover:scale-[1.03]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden="true">
                <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71l-4.15-3.06-1.99 1.94c-.23.23-.42.42-.84.42z" />
              </svg>
              Написать в Telegram
            </a>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/15 bg-white px-6 py-3.5 text-sm font-semibold text-[#1f1f1f] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.4)] transition-transform duration-200 hover:scale-[1.03]"
            >
              <svg viewBox="0 0 48 48" className="h-5 w-5 shrink-0" aria-hidden="true">
                <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.16 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
              </svg>
              Связаться через @mail
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
