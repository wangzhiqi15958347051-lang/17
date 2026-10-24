import { useState } from 'react'
import { ArrowUpRight, ArrowDown, Menu, X, MoveUpRight, Asterisk } from 'lucide-react'

const projects = [
  { no:'01', name:'FORM / FUTURE', type:'品牌视觉 · 艺术指导', year:'2026', image:'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1600&q=85', className:'project-wide' },
  { no:'02', name:'OBJECT STUDIES', type:'AI 视觉 · 产品探索', year:'2025', image:'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1100&q=85' },
  { no:'03', name:'NEW PERSPECTIVE', type:'数字体验 · 视觉系统', year:'2025', image:'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1100&q=85' }
]
const capabilities = [
  { n:'01', title:'Brand Identity', cn:'品牌视觉设计', desc:'从策略概念到完整视觉识别，建立鲜明且具有长期价值的品牌语言。' },
  { n:'02', title:'AI Creative', cn:'AI 创意设计', desc:'将生成式 AI 融入创意流程，探索新的视觉叙事与设计可能性。' },
  { n:'03', title:'Visual Direction', cn:'视觉艺术指导', desc:'通过构图、材质、动态与细节，构建一致且具有辨识度的视觉体验。' },
  { n:'04', title:'Digital Experience', cn:'数字体验设计', desc:'结合审美与交互逻辑，创造清晰、直觉且富有表现力的数字界面。' }
]
const email = 'hello@example.com' // TODO: replace with your real email
function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)
  return <div className="site">
    <header className="header wrap">
      <a href="#home" className="logo" onClick={close}>WZQ<span>®</span></a>
      <nav className={menuOpen?'nav open':'nav'} aria-label="主导航">
        <a href="#about" onClick={close}>关于我 <sup>01</sup></a><a href="#work" onClick={close}>精选项目 <sup>02</sup></a><a href="#expertise" onClick={close}>专业能力 <sup>03</sup></a><a href="#contact" onClick={close}>联系我 <sup>04</sup></a>
      </nav>
      <a className="header-cta" href={'mailto:'+email}>LET'S TALK <ArrowUpRight size={15}/></a>
      <button className="menu-button" aria-label={menuOpen?'关闭菜单':'打开菜单'} aria-expanded={menuOpen} onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
    </header>
    <main>
      <section className="hero" id="home">
        <div className="hero-orb" aria-hidden="true"><div className="orb-core"/></div>
        <div className="hero-grain" aria-hidden="true"/>
        <div className="wrap hero-content">
          <div className="eyebrow"><span className="status-dot"/> INDEPENDENT CREATIVE DESIGNER <span className="eyebrow-line"/></div>
          <h1>DESIGN<br/><span className="outline">BEYOND</span><br/>BOUNDARIES<span className="period">.</span></h1>
          <div className="hero-bottom"><p>视觉设计师 / AI 设计师 / 品牌设计师<br/><span>用前瞻性的视觉语言，创造超越预期的设计体验。</span></p><a href="#work" className="round-link" aria-label="浏览作品"><ArrowDown size={24}/></a></div>
        </div>
        <div className="hero-side">PORTFOLIO — 2026 &nbsp; / &nbsp; SCROLL TO EXPLORE</div>
      </section>
      <section className="about section wrap" id="about">
        <div className="section-label"><span>01 / ABOUT ME</span><span>认识我 — WHO I AM</span></div>
        <div className="about-grid">
          <div className="about-photo"><img src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1100&q=85" alt="抽象建筑与光影，个人照片占位图"/><span className="photo-caption">A DIFFERENT POINT OF VIEW ↗</span></div>
          <div className="about-copy"><div className="mini-tag"><Asterisk size={17}/> A LITTLE ABOUT ME</div><h2>创造有温度的<br/><em>未来视觉。</em></h2><p className="about-lead">你好，我是一名专注于视觉、品牌与 AI 创意的独立设计师。</p><p>我相信好的设计不止于形式，而是以清晰的想法、敏锐的审美与新技术的探索，连接品牌与人。持续尝试不同媒介，让每一次创作都成为新的表达。</p><div className="stats"><div><strong>03<span>+</span></strong><small>核心创意领域</small></div><div><strong>∞</strong><small>探索的可能性</small></div><div><strong>01</strong><small>独立设计视角</small></div></div><a href={'mailto:'+email} className="text-link">开启合作对话 <ArrowUpRight size={19}/></a></div>
        </div>
      </section>
      <section className="work section" id="work"><div className="wrap"><div className="section-label"><span>02 / SELECTED WORK</span><span>作品精选 — 2025 / 2026</span></div><div className="section-heading"><h2>SELECTED<br/><em>WORKS.</em></h2><p>一系列关于品牌、视觉和未来表达的探索。<br/>以下为首版展示占位项目，后续替换为真实作品。</p></div><div className="project-grid">{projects.map(p=><article className={'project '+(p.className||'')} key={p.no}><div className="project-image"><img src={p.image} alt={p.name+' 项目占位图片'} loading="lazy"/><span className="project-index">{p.no} / 03</span><span className="project-arrow"><MoveUpRight size={24}/></span></div><div className="project-meta"><div><h3>{p.name}</h3><span>{p.type}</span></div><span>{p.year}</span></div></article>)}</div></div></section>
      <section className="expertise section wrap" id="expertise"><div className="section-label"><span>03 / EXPERTISE</span><span>专业能力 — WHAT I DO</span></div><div className="section-heading"><h2>WHAT I<br/><em>DO BEST.</em></h2><p>跨越设计与技术的边界，<br/>让策略、创意与执行形成完整的表达。</p></div><div className="capabilities">{capabilities.map(c=><div className="capability" key={c.n}><span className="cap-num">{c.n} /</span><div><h3>{c.title}</h3><span className="cap-cn">{c.cn}</span></div><p>{c.desc}</p><ArrowUpRight className="cap-arrow" size={22}/></div>)}</div></section>
      <section className="contact" id="contact"><div className="wrap contact-inner"><div className="section-label"><span>04 / CONTACT</span><span>下一次合作，从这里开始</span></div><div className="contact-body"><span className="mini-tag"><span className="status-dot"/> AVAILABLE FOR SELECT PROJECTS</span><h2>HAVE AN<br/><em>IDEA?</em></h2><a className="contact-link" href={'mailto:'+email}>LET'S CREATE <ArrowUpRight size={40}/></a></div><footer><a className="logo" href="#home">WZQ<span>®</span></a><span>© {new Date().getFullYear()} WZQ. ALL RIGHTS RESERVED.</span><a href="#home">BACK TO TOP ↑</a></footer></div></section>
    </main>
  </div>
}
export default App
