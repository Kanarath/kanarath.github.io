// Kanarath · portfolio
const EN = {
  'skip': 'Skip to content',
  'nav.exp': 'experience', 'nav.proj': 'projects', 'nav.certs': 'certs', 'nav.contact': 'contact',
  'hero.kicker': 'PENTEST // AI SECURITY // APPLIED AI',
  'hero.lead': 'Junior pentester and ISO 27001 consultant. <em>I bring AI into companies</em> and train AI Red Teaming every day with my own academy: AI RONIN.',
  'stat.jrpt': 'certified', 'stat.missions': 'AI RONIN missions', 'stat.osint': 'OSINT tools',
  'hero.cv': 'DOWNLOAD CV', 'hero.proj': 'SEE PROJECTS',
  'h.profile': 'Profile',
  'p.1': 'I come from many places: networks, development, video games, customer service and teaching in China. Today I work in cybersecurity: I have done web and network pentesting following OWASP, I implement ISO 27001 end to end and I bring generative AI into companies so they work better.',
  'p.2': 'I learn by building. When I want to master something, I design a gamified course and use it every day. That is how <a href="#ai-ronin">AI RONIN</a> (AI Engineering and AI Security) and <a href="#proyectos">RoninShell</a> (pentesting) were born.',
  'p.3': 'I am looking for a role in <strong>pentesting, offensive security or AI Security</strong>, remote or hybrid.',
  'f.lang': 'Languages', 'f.langv': 'Native Spanish and Catalan · English C1 · Chinese HSK 3',
  'f.loc': 'Location', 'f.locv': 'Mataró (Barcelona) · remote or hybrid',
  'f.focus': 'Focus', 'f.focusv': 'Pentesting · AI Red Teaming · Applied AI',
  'h.exp': 'Experience',
  'e1.when': 'Sep 2026 — present', 'e1.role': 'Cybersecurity Consultant and Technical Auditor',
  'e1.a': 'End-to-end ISO/IEC 27001 implementation for clients: beyond the documentation, I train the team so they understand the system and are ready for the audit.',
  'e1.b': 'Generative AI rollout for a client: Claude skills that manage their documentation and generate reports.',
  'e1.c': 'Technical support in a phishing simulation campaign.',
  'e1.d': 'ISO 9001, 14001, 45001 and 27001 audits.',
  'e2.when': 'Oct 2025 — Dec 2025', 'e2.role': 'Pentester / Cybersecurity Analyst (internship)',
  'e2.a': 'Web application pentesting following OWASP and internal and external network assessments, using AI to help identify attack vectors.',
  'e2.b': 'Zabbix monitoring: tuned alerts and dashboards to reduce false positives.',
  'e2.c': 'Diagnosed VPN tunnel failures, which led to a network upgrade that stabilised remote connectivity.',
  'e2.d': 'Phishing and social engineering awareness training.',
  'e3.role': 'Before cybersecurity', 'e3.org': 'Customer service, sales, teaching and video games',
  'e3.a': 'Customer service and sales at Mandarina Duck (La Roca Village) and Movistar Prosegur Alarmas.',
  'e3.b': 'Spanish and English teacher in Barcelona and China.',
  'e3.c': 'Game design in Unity (personal projects).',
  'ar.k': 'AI ENGINEERING AND AI SECURITY ACADEMY',
  'ar.lead': 'I don’t just use AI: I learn to build it, attack it and defend it.',
  'ar.p': 'AI RONIN is an interactive academy built in Godot 4 with real labs in Python and local models. I designed and directed it, with AI-assisted development (Claude Code), and I use it daily as a student.',
  'ar.c1': 'RAG and agent security', 'ar.btn': 'VIEW ON GITHUB',
  'ar.t1': 'ML and LLM fundamentals', 'ar.t2': 'attacks and defences: prompts, RAG, agents',
  'ar.t3': 'red team method and reporting', 'ar.t4': 'adversarial ML and AI Ops',
  'ar.t5': 'final AI Red Team Assessment', 'ar.t6': 'missions · CTF mode',
  'h.proj': 'Projects',
  'pr.rs': 'Pentesting simulator with a simulated Linux terminal: network recon, authorised web assessment and evidence-based reporting.',
  'pr.os': 'Five open-source tools: Sock_Spy (simulated profiles for training), Guardian_Spy (OPSEC and isolated browsing), Dioptra_Spy and Pin_Grid_Spy (geolocation and EXIF on a map) and Visual_Case_Spy.',
  'pr.pa': 'Modular web pentesting course (web, authentication, cloud, Azure, Android…) to study and review.',
  'pr.lt': 'LEARNING BY PLAYING', 'pr.lh': 'More academies of my own',
  'pr.lp': 'I apply the same method to everything: mechatronics (Taller de Inventor), robotics (RoboLab), Japanese (Kendo Nihongo) and 3D modelling (Forja Mecha).',
  'h.certs': 'Certifications', 'verify': 'verify',
  'c.bootcamp': 'Cybersecurity Bootcamp', 'c.events': 'Events and CTFs',
  'h.stack': 'Stack', 's.off': 'Offensive security', 's.ai': 'Applied AI', 's.grc': 'Standards and networks', 's.code': 'Code',
  'h.contact': 'Contact', 'ct.lead': 'Got a pentesting or AI Security role? Let’s talk.', 'ct.cv': 'CV (PDF)'
};
const CV = { es: 'cv/Gerard-Montero-CV-ES.pdf', en: 'cv/Gerard-Montero-CV-EN.pdf' };

const nodes = [...document.querySelectorAll('[data-i18n]')];
nodes.forEach(n => { n.dataset.es = n.innerHTML; });
const langBtn = document.getElementById('lang');

function setLang(lang) {
  document.documentElement.lang = lang;
  nodes.forEach(n => {
    const k = n.dataset.i18n;
    n.innerHTML = lang === 'en' && EN[k] ? EN[k] : n.dataset.es;
  });
  document.querySelectorAll('[data-i18n-href="cv"]').forEach(a => { a.href = CV[lang]; });
  langBtn.textContent = lang === 'en' ? 'ES' : 'EN';
  langBtn.setAttribute('aria-label', lang === 'en' ? 'Cambiar idioma a español' : 'Change language to English');
  try { localStorage.setItem('lang', lang); } catch (e) { /* sin almacenamiento */ }
}

let saved = null;
try { saved = localStorage.getItem('lang'); } catch (e) { /* sin almacenamiento */ }
const param = new URLSearchParams(location.search).get('lang');
const browser = (navigator.language || 'es').slice(0, 2);
const initial = param || saved || (['es', 'ca'].includes(browser) ? 'es' : 'en');
if (initial === 'en') setLang('en');
langBtn.addEventListener('click', () => setLang(document.documentElement.lang === 'en' ? 'es' : 'en'));

// Menú móvil
const burger = document.querySelector('.burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(open));
});
menu.addEventListener('click', e => {
  if (e.target.tagName === 'A') { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
});

// Aparición suave de las secciones
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
  }), { threshold: 0, rootMargin: '0px 0px -10% 0px' });
  const secs = document.querySelectorAll('.section');
  secs.forEach(s => { s.classList.add('reveal'); io.observe(s); });
  // Red de seguridad: si el observador no llega a dispararse, se muestra todo igualmente
  setTimeout(() => secs.forEach(s => s.classList.add('in')), 2500);
}

console.log('%c[GM-01] KANARATH // ONLINE ', 'color:#e0312b;background:#0b0b0c;font-weight:bold;padding:4px 8px');
console.log('Si estás leyendo esto, hablemos: gerard.montero.s@gmail.com');
