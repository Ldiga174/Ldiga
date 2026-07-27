export const locales = ["ru", "en", "es"] as const;
export type Locale = (typeof locales)[number];

type Project = {
  name: string;
  code: string;
  description: string;
  status: "LIVE" | "BUILDING" | "LAB";
  accent: "cyan" | "violet" | "lime" | "amber";
  href: string;
  domain: string;
  tags: readonly string[];
};

const projectBase = [
  { code: "PULSE", status: "BUILDING", accent: "lime", href: "https://bisness-pulse.vercel.app", domain: "pulse.ldiga.com", tags: ["AI", "SaaS", "Analytics"] },
  { code: "PANET", status: "BUILDING", accent: "violet", href: "https://panet.ldiga.com", domain: "panet.ldiga.com", tags: ["Agents", "Network", "Web3"] },
  { code: "VASYA", status: "LAB", accent: "cyan", href: "https://github.com/Ldiga174", domain: "vasya.ldiga.com", tags: ["Local LLM", "Ollama", "Automation"] },
  { code: "VOLT", status: "LIVE", accent: "amber", href: "https://volthash.com", domain: "volthash.com", tags: ["Mining", "Infrastructure", "Energy"] },
] as const;

const projectText: Record<Locale, Array<Pick<Project, "name" | "description">>> = {
  ru: [
    { name: "Бизнес Пульс", description: "Единый центр управления бизнесом: метрики, интеграции, задачи и ИИ-рекомендации." },
    { name: "PANet", description: "Сеть, в которой ИИ-агенты находят людей и устройства для выполнения задач в физическом мире." },
    { name: "Vasya AI", description: "Личный локальный ИИ-контур: ассистент, инфраструктура, автоматизация и собственные данные." },
    { name: "Volthash", description: "Инфраструктура и экспертиза на пересечении энергетики, вычислений и криптотехнологий." },
  ],
  en: [
    { name: "Business Pulse", description: "A unified business command center for metrics, integrations, tasks, and AI-powered recommendations." },
    { name: "PANet", description: "A network where AI agents find people and devices to complete tasks in the physical world." },
    { name: "Vasya AI", description: "A private local AI environment: assistant, infrastructure, automation, and first-party data." },
    { name: "Volthash", description: "Infrastructure and expertise at the intersection of energy, computing, and crypto technology." },
  ],
  es: [
    { name: "Business Pulse", description: "Un centro unificado para gestionar métricas, integraciones, tareas y recomendaciones impulsadas por IA." },
    { name: "PANet", description: "Una red donde los agentes de IA encuentran personas y dispositivos para ejecutar tareas en el mundo físico." },
    { name: "Vasya AI", description: "Un entorno personal de IA local: asistente, infraestructura, automatización y datos propios." },
    { name: "Volthash", description: "Infraestructura y experiencia en la intersección de energía, computación y tecnologías cripto." },
  ],
};

export function getProjects(locale: Locale): Project[] {
  return projectBase.map((project, index) => ({ ...project, ...projectText[locale][index] }));
}

export const translations = {
  ru: {
    metaTitle: "Родион Лебедев — AI Product Builder",
    metaDescription: "Личная цифровая экосистема Родиона Лебедева: ИИ-продукты, агенты, автоматизация и технологические проекты.",
    nav: ["Проекты", "Сеть", "Обо мне"],
    top: "LDIGA — наверх",
    location: "Челябинск · строю из интернета",
    hero: <>Превращаю идеи<br />в <span>работающие системы.</span></>,
    lead: "Я Родион Лебедев — предприниматель и AI Product Builder. Собираю ИИ-продукты, агентов и автоматизацию, которые соединяют цифровой и физический мир.",
    viewProjects: "Смотреть проекты",
    ecosystemMap: "Карта цифровой экосистемы",
    directions: "Направления работы",
    projectsIndex: "01 / ПРОЕКТЫ",
    projectsTitle: "Узлы экосистемы",
    projectsIntro: "Каждый продукт живёт самостоятельно, но остаётся частью одной системы и получает постоянный адрес в сети LDIGA.",
    architectureIndex: "02 / АРХИТЕКТУРА",
    architectureTitle: "Один домен. Целая сеть.",
    architectureIntro: "— корневой узел и цифровая подпись. Поддомены ведут к продуктам, лабораториям и временным экспериментам.",
    rootIdentity: "личность · доверие · навигация",
    experiment: "эксперименты",
    productNode: "продуктовый узел",
    aboutIndex: "03 / ОБО МНЕ",
    aboutTitle: <>Не просто пишу код.<br /><span>Собираю продукты.</span></>,
    aboutText: "Мой подход — быстро превращать гипотезу в рабочую систему, проверять её на реальных пользователях и развивать только то, что создаёт ценность. ИИ для меня — не отдельный инструмент, а новый слой инженерии и предпринимательства.",
    stack: "РАБОЧИЙ СТЕК",
    contact: "СВЯЗЬ",
    contactTitle: "Есть идея? Давай соберём.",
    contactButton: "Написать через GitHub",
    copyright: "Родион Лебедев",
    evolving: "Система развивается",
  },
  en: {
    metaTitle: "Rodion Lebedev — AI Product Builder",
    metaDescription: "Rodion Lebedev’s digital ecosystem: AI products, agents, automation, and technology ventures.",
    nav: ["Projects", "Network", "About"],
    top: "LDIGA — back to top",
    location: "Chelyabinsk · building on the internet",
    hero: <>Turning ideas<br />into <span>working systems.</span></>,
    lead: "I’m Rodion Lebedev — an entrepreneur and AI Product Builder. I create AI products, agents, and automation that connect the digital and physical worlds.",
    viewProjects: "Explore projects",
    ecosystemMap: "Digital ecosystem map",
    directions: "Areas of work",
    projectsIndex: "01 / PROJECTS",
    projectsTitle: "Ecosystem nodes",
    projectsIntro: "Each product stands on its own while remaining part of one system, with a permanent address on the LDIGA network.",
    architectureIndex: "02 / ARCHITECTURE",
    architectureTitle: "One domain. A whole network.",
    architectureIntro: "is the root node and digital signature. Subdomains lead to products, labs, and temporary experiments.",
    rootIdentity: "identity · trust · navigation",
    experiment: "experiments",
    productNode: "product node",
    aboutIndex: "03 / ABOUT",
    aboutTitle: <>I don’t just write code.<br /><span>I build products.</span></>,
    aboutText: "My approach is to turn a hypothesis into a working system fast, validate it with real users, and develop only what creates value. To me, AI is not a separate tool — it is a new layer of engineering and entrepreneurship.",
    stack: "WORKING STACK",
    contact: "CONTACT",
    contactTitle: "Have an idea? Let’s build it.",
    contactButton: "Message me on GitHub",
    copyright: "Rodion Lebedev",
    evolving: "System evolving",
  },
  es: {
    metaTitle: "Rodion Lebedev — AI Product Builder",
    metaDescription: "El ecosistema digital personal de Rodion Lebedev: productos de IA, agentes, automatización y proyectos tecnológicos.",
    nav: ["Proyectos", "Red", "Sobre mí"],
    top: "LDIGA — volver arriba",
    location: "Cheliábinsk · construyendo en internet",
    hero: <>Convierto ideas<br />en <span>sistemas que funcionan.</span></>,
    lead: "Soy Rodion Lebedev, emprendedor y AI Product Builder. Creo productos de IA, agentes y automatizaciones que conectan el mundo digital con el físico.",
    viewProjects: "Ver proyectos",
    ecosystemMap: "Mapa del ecosistema digital",
    directions: "Áreas de trabajo",
    projectsIndex: "01 / PROYECTOS",
    projectsTitle: "Nodos del ecosistema",
    projectsIntro: "Cada producto funciona de forma independiente, pero sigue siendo parte de un único sistema y tiene una dirección permanente en la red LDIGA.",
    architectureIndex: "02 / ARQUITECTURA",
    architectureTitle: "Un dominio. Toda una red.",
    architectureIntro: "es el nodo raíz y la firma digital. Los subdominios llevan a productos, laboratorios y experimentos temporales.",
    rootIdentity: "identidad · confianza · navegación",
    experiment: "experimentos",
    productNode: "nodo de producto",
    aboutIndex: "03 / SOBRE MÍ",
    aboutTitle: <>No solo escribo código.<br /><span>Construyo productos.</span></>,
    aboutText: "Mi enfoque es convertir rápidamente una hipótesis en un sistema funcional, validarla con usuarios reales y desarrollar solo aquello que crea valor. Para mí, la IA no es una herramienta aislada, sino una nueva capa de ingeniería y emprendimiento.",
    stack: "STACK DE TRABAJO",
    contact: "CONTACTO",
    contactTitle: "¿Tienes una idea? Construyámosla.",
    contactButton: "Escríbeme por GitHub",
    copyright: "Rodion Lebedev",
    evolving: "Sistema en evolución",
  },
} as const;
