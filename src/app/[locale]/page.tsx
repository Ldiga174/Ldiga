import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";
import { getProjects, locales, translations, type Locale } from "@/data/i18n";

const Arrow = () => <span aria-hidden="true">↗</span>;
const domains = ["pulse", "panet", "vasya", "lab"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: value } = await params;
  if (!locales.includes(value as Locale)) return {};
  const locale = value as Locale;
  const t = translations[locale];
  const path = `/${locale}`;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical: path,
      languages: { "ru-RU": "/ru", "en": "/en", "es": "/es", "x-default": "/en" },
    },
    openGraph: {
      title: t.metaTitle,
      description: t.metaDescription,
      url: path,
      siteName: "LDIGA",
      locale: locale === "ru" ? "ru_RU" : locale === "es" ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

export default async function LocalizedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  if (!locales.includes(value as Locale)) notFound();
  const locale = value as Locale;
  const t = translations[locale];
  const projects = getProjects(locale);

  return (
    <main>
      <script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang=${JSON.stringify(locale)}` }} />
      <div className="noise" />
      <header className="nav shell">
        <a className="brand" href="#top" aria-label={t.top}><span className="brand-mark">L</span><span>LDIGA</span></a>
        <nav aria-label="Navigation"><a href="#projects">{t.nav[0]}</a><a href="#network">{t.nav[1]}</a><a href="#about">{t.nav[2]}</a></nav>
        <div className="nav-actions">
          <LanguageSwitcher locale={locale} />
          <a className="nav-link" href="https://github.com/Ldiga174" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
        </div>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" />{t.location}</div>
          <h1>{t.hero}</h1>
          <p className="lead">{t.lead}</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">{t.viewProjects} <span>↓</span></a>
            <a className="button ghost" href="https://github.com/Ldiga174" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          </div>
        </div>
        <div className="network-visual" aria-label={t.ecosystemMap}>
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="core"><span className="core-code">ROOT</span><strong>RL</strong><small>ldiga.com</small></div>
          <div className="satellite satellite-a"><span />PANet</div>
          <div className="satellite satellite-b"><span />Pulse</div>
          <div className="satellite satellite-c"><span />Vasya</div>
          <div className="satellite satellite-d"><span />Volthash</div>
        </div>
      </section>

      <section className="signal-strip" aria-label={t.directions}><div><span>AI PRODUCTS</span><i /><span>AGENT SYSTEMS</span><i /><span>BUSINESS AUTOMATION</span><i /><span>LOCAL AI</span><i /><span>RAPID MVP</span></div></section>

      <section className="section shell" id="projects">
        <div className="section-heading"><div><span className="section-index">{t.projectsIndex}</span><h2>{t.projectsTitle}</h2></div><p>{t.projectsIntro}</p></div>
        <div className="project-grid">
          {projects.map((project,index)=>(
            <a className={`project-card ${project.accent}`} href={project.href} target="_blank" rel="noreferrer" key={project.code}>
              <div className="project-top"><span className="project-number">{String(index+1).padStart(2,"0")}</span><span className="project-status">{project.status}</span></div>
              <div className="project-main"><span className="project-code">{project.code}</span><h3>{project.name}</h3><p>{project.description}</p></div>
              <div className="tag-list">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
              <div className="project-domain"><span>{project.domain}</span><Arrow /></div>
            </a>
          ))}
        </div>
      </section>

      <section className="section shell" id="network">
        <div className="section-heading"><div><span className="section-index">{t.architectureIndex}</span><h2>{t.architectureTitle}</h2></div><p><code>ldiga.com</code> {t.architectureIntro}</p></div>
        <div className="domain-map">
          <div className="domain-root"><span>ROOT DOMAIN</span><strong>ldiga.com</strong><small>{t.rootIdentity}</small></div>
          <div className="domain-line" />
          <div className="domain-children">
            {domains.map((domain,index)=><div className="domain-node" key={domain}><span>0{index+1}</span><strong>{domain}.ldiga.com</strong><small>{index===3?t.experiment:t.productNode}</small></div>)}
          </div>
        </div>
      </section>

      <section className="section shell about" id="about">
        <div className="portrait">
          <Image src="/rodion.jpg" alt="Rodion Lebedev" fill sizes="(max-width: 900px) 100vw, 38vw" />
          <div className="portrait-label"><span>RODION LEBEDEV</span><small>FOUNDER / BUILDER</small></div>
        </div>
        <div className="about-content">
          <div className="about-card"><span className="section-index">{t.aboutIndex}</span><h2>{t.aboutTitle}</h2><p>{t.aboutText}</p></div>
          <div className="stack"><span className="section-index">{t.stack}</span>
            {[["OpenAI / Codex","AI ENGINEERING"],["Next.js / Vercel","PRODUCT"],["Supabase / PostgreSQL","DATA"],["Ollama / Linux","LOCAL AI"],["GitHub / MCP","AUTOMATION"]].map(([name,group])=><div className="stack-row" key={name}><strong>{name}</strong><span>{group}</span></div>)}
          </div>
        </div>
      </section>

      <section className="contact shell"><div><span className="section-index">{t.contact}</span><h2>{t.contactTitle}</h2></div><a className="button primary" href="https://github.com/Ldiga174" target="_blank" rel="noreferrer">{t.contactButton} <Arrow /></a></section>
      <footer className="footer shell"><div className="brand"><span className="brand-mark">L</span><span>LDIGA</span></div><p>© {new Date().getFullYear()} {t.copyright}</p><p className="footer-status"><span className="status-dot" /> {t.evolving}</p></footer>
    </main>
  );
}
