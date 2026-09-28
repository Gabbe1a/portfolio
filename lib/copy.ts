import type { Locale } from "./projects";

export const copy = {
  ru: {
    htmlLang: "ru",
    wordmark: "Табунщиков",
    nameLine1: "Михаил",
    nameLine2: "Табунщиков",
    role: "Full-stack разработчик · сайты, магазины, CRM и SEO",
    intro:
      "Лендинги, сайты и магазины, которые можно открыть и показать клиенту. Плюс CRM, SEO-статьи и автоматизация для блогеров и бизнеса — Make, боты, контент-пайплайны.",
    cta: "Написать",
    nav: { work: "Работы", about: "Обо мне", contact: "Контакт" },
    workKicker: "Избранные работы",
    workLead: "Семь проектов первой волны. Карточка открывает кейс, кнопка — живой сайт.",
    visit: "Посетить сайт",
    aboutTitle: "Обо мне",
    about:
      "Собираю публичные сайты целиком: лендинг, магазин, клинику или личный бренд. Туда же подключаю CRM и поисковые статьи. Отдельно автоматизирую рутину блогера и бизнеса — автопостинг, боты, генерация контента в Cursor.",
    skillsTitle: "Чем занимаюсь",
    skills: [
      {
        title: "Сайты и лендинги",
        text: "Страницы с понятным оффером, которые можно отдать клиенту уже сейчас.",
      },
      {
        title: "Магазины",
        text: "Витрины и бренды с каталогом, а не одностраничник ради галочки.",
      },
      {
        title: "CRM",
        text: "Заявки не теряются: сайт связан с тем, где команда реально работает.",
      },
      {
        title: "SEO-статьи",
        text: "Тексты под поиск, когда сайту нужен не только первый экран.",
      },
      {
        title: "Автоматизация и AI",
        text: "Make, боты и контент-пайплайны для блогеров и бизнеса.",
      },
    ],
    contactTitle: "Контакт",
    contactLead: "Коротко в Telegram — отвечаю там.",
    links: {
      telegram: "Написать в Telegram",
      channel: "Канал",
      instagram: "Instagram",
      youtube: "YouTube",
    },
    caseSoon: "Макет кейса — скоро",
    back: "Все работы",
    status: { preview: "превью", live: "в эфире" },
    tags: {
      landing: "лендинг",
      product: "продукт",
      b2c: "b2c",
      ecommerce: "магазин",
      brand: "бренд",
      clinic: "клиника",
      service: "услуга",
      "local-business": "локальный бизнес",
      barbershop: "барбершоп",
      "personal-brand": "личный бренд",
      coaching: "менторство",
    } as Record<string, string>,
    metaTitle: "Михаил Табунщиков",
    metaDescription:
      "Full-stack разработчик: сайты, магазины, CRM, SEO и автоматизация.",
  },
  en: {
    htmlLang: "en",
    wordmark: "Tabunshchikov",
    nameLine1: "Mikhail",
    nameLine2: "Tabunshchikov",
    role: "Full-stack developer · websites, stores, CRM & SEO",
    intro:
      "Landings, websites and stores you can open and show a client. Plus CRM, SEO articles and automation for creators and businesses — Make, bots, content pipelines.",
    cta: "Message",
    nav: { work: "Work", about: "About", contact: "Contact" },
    workKicker: "Selected work",
    workLead: "Seven projects in the first wave. The row opens the case, the button opens the live site.",
    visit: "Visit site",
    aboutTitle: "About",
    about:
      "I ship public sites end to end: a landing, a store, a clinic or a personal brand. CRM and search articles sit on the same stack. I also automate the busywork of creators and businesses — auto-posting, bots, content pipelines in Cursor.",
    skillsTitle: "What I do",
    skills: [
      {
        title: "Websites and landings",
        text: "Pages with a clear offer, ready to hand to a client.",
      },
      {
        title: "Stores",
        text: "Storefronts and brands with a catalog, not a placeholder page.",
      },
      {
        title: "CRM",
        text: "Leads land where the team already works.",
      },
      {
        title: "SEO articles",
        text: "Search writing when a site needs more than a hero.",
      },
      {
        title: "Automation and AI",
        text: "Make, bots and content pipelines for creators and businesses.",
      },
    ],
    contactTitle: "Contact",
    contactLead: "Telegram is the short path. I reply there.",
    links: {
      telegram: "Message on Telegram",
      channel: "Channel",
      instagram: "Instagram",
      youtube: "YouTube",
    },
    caseSoon: "Case layout — coming soon",
    back: "All work",
    status: { preview: "preview", live: "live" },
    tags: {
      landing: "landing",
      product: "product",
      b2c: "b2c",
      ecommerce: "store",
      brand: "brand",
      clinic: "clinic",
      service: "service",
      "local-business": "local business",
      barbershop: "barbershop",
      "personal-brand": "personal brand",
      coaching: "mentorship",
    } as Record<string, string>,
    metaTitle: "Mikhail Tabunshchikov",
    metaDescription:
      "Full-stack developer: websites, stores, CRM, SEO and automation.",
  },
} as const;

export function t(locale: Locale) {
  return copy[locale];
}
