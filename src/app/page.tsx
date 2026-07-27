import { projects } from "@/data/projects";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <div className="noise" />
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="LDIGA — наверх"><span className="brand-mark">L</span><span>LDIGA</span></a>
        <nav aria-label="Основная навигация"><a href="#projects">Проекты</a><a href="#network">Сеть</a><a href="#about">Обо мне</a></nav>
        <a className="nav-link" href="https://github.com/Ldiga174" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" />Челябинск · строю из интернета</div>
          <h1>Превращаю идеи<br />в <span>работающие системы.</span></h1>
          <p className="lead">Я Родион Лебедев — предприниматель и AI Product Builder. Собираю ИИ-продукты, агентов и автоматизацию, которые соединяют цифровой и физический мир.</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">Смотреть проекты <span>↓</span></a>
            <a className="button ghost" href="https://github.com/Ldiga174" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          </div>
        </div>
        <div className="network-visual" aria-label="Карта цифровой экосистемы">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="core"><span className="core-code">ROOT</span><strong>RL</strong><small>ldiga.com</small></div>
          <div className="satellite satellite-a"><span />PANet</div>
          <div className="satellite satellite-b"><span />Pulse</div>
          <div className="satellite satellite-c"><span />Vasya</div>
          <div className="satellite satellite-d"><span />Volthash</div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Направления работы"><div><span>AI PRODUCTS</span><i /><span>AGENT SYSTEMS</span><i /><span>BUSINESS AUTOMATION</span><i /><span>LOCAL AI</span><i /><span>RAPID MVP</span></div></section>

      <section className="section shell" id="projects">
        <div className="section-heading"><div><span className="section-index">01 / ПРОЕКТЫ</span><h2>Узлы экосистемы</h2></div><p>Каждый продукт живёт самостоятельно, но остаётся частью одной системы и получает постоянный адрес в сети LDIGA.</p></div>
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
        <div className="section-heading"><div><span className="section-index">02 / АРХИТЕКТУРА</span><h2>Один домен. Целая сеть.</h2></div><p><code>ldiga.com</code> — корневой узел и цифровая подпись. Поддомены ведут к продуктам, лабораториям и временным экспериментам.</p></div>
        <div className="domain-map">
          <div className="domain-root"><span>ROOT DOMAIN</span><strong>ldiga.com</strong><small>личность · доверие · навигация</small></div>
          <div className="domain-line" />
          <div className="domain-children">
            {["pulse","panet","vasya","lab"].map((domain,index)=><div className="domain-node" key={domain}><span>0{index+1}</span><strong>{domain}.ldiga.com</strong><small>{index===3?"эксперименты":"продуктовый узел"}</small></div>)}
          </div>
        </div>
      </section>

      <section className="section shell about" id="about">
        <div className="about-card"><span className="section-index">03 / ОБО МНЕ</span><h2>Не просто пишу код.<br /><span>Собираю продукты.</span></h2><p>Мой подход — быстро превращать гипотезу в рабочую систему, проверять её на реальных пользователях и развивать только то, что создаёт ценность. ИИ для меня — не отдельный инструмент, а новый слой инженерии и предпринимательства.</p></div>
        <div className="stack"><span className="section-index">РАБОЧИЙ СТЕК</span>
          {[["OpenAI / Codex","AI ENGINEERING"],["Next.js / Vercel","PRODUCT"],["Supabase / PostgreSQL","DATA"],["Ollama / Linux","LOCAL AI"],["GitHub / MCP","AUTOMATION"]].map(([name,group])=><div className="stack-row" key={name}><strong>{name}</strong><span>{group}</span></div>)}
        </div>
      </section>

      <section className="contact shell"><div><span className="section-index">СВЯЗЬ</span><h2>Есть идея? Давай соберём.</h2></div><a className="button primary" href="https://github.com/Ldiga174" target="_blank" rel="noreferrer">Написать через GitHub <Arrow /></a></section>
      <footer className="footer shell"><div className="brand"><span className="brand-mark">L</span><span>LDIGA</span></div><p>© {new Date().getFullYear()} Родион Лебедев</p><p className="footer-status"><span className="status-dot" /> Система развивается</p></footer>
    </main>
  );
}
