export type Project = {
  name: string; code: string; description: string;
  status: "LIVE" | "BUILDING" | "LAB";
  accent: "cyan" | "violet" | "lime" | "amber";
  href: string; domain: string; tags: string[];
};

export const projects: Project[] = [
  {name:"Бизнес Пульс",code:"PULSE",description:"Единый центр управления бизнесом: метрики, интеграции, задачи и ИИ-рекомендации.",status:"BUILDING",accent:"lime",href:"https://bisness-pulse.vercel.app",domain:"pulse.ldiga.com",tags:["AI","SaaS","Analytics"]},
  {name:"PANet",code:"PANET",description:"Сеть, в которой ИИ-агенты находят людей и устройства для выполнения задач в физическом мире.",status:"BUILDING",accent:"violet",href:"https://panet.ldiga.com",domain:"panet.ldiga.com",tags:["Agents","Network","Web3"]},
  {name:"Vasya AI",code:"VASYA",description:"Личный локальный ИИ-контур: ассистент, инфраструктура, автоматизация и собственные данные.",status:"LAB",accent:"cyan",href:"https://github.com/Ldiga174",domain:"vasya.ldiga.com",tags:["Local LLM","Ollama","Automation"]},
  {name:"Volthash",code:"VOLT",description:"Инфраструктура и экспертиза на пересечении энергетики, вычислений и криптотехнологий.",status:"LIVE",accent:"amber",href:"https://volthash.com",domain:"volthash.com",tags:["Mining","Infrastructure","Energy"]}
];
