// ══════════════════════════════════════════════════════════
//  icons.js — SVG icon library + shared utilities
// ══════════════════════════════════════════════════════════

const IC = {
  book:    (c,s)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><path d="M4 4h7a2 2 0 0 1 2 2v13a1.5 1.5 0 0 0-1.5-1.5H4V4z" stroke="${c}" stroke-width="1.5" stroke-linejoin="round"/><path d="M20 4h-7a2 2 0 0 0-2 2v13a1.5 1.5 0 0 1 1.5-1.5H20V4z" stroke="${c}" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
  shield:  (c,s)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 6v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V6L12 2z" stroke="${c}" stroke-width="1.5" stroke-linejoin="round" fill="none"/><path d="M9 12l2 2 4-4" stroke="${c}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  trophy:  (c,s)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><path d="M8 2h8v9a4 4 0 0 1-8 0V2z" stroke="${c}" stroke-width="1.5"/><path d="M8 5H4a2 2 0 0 0 0 4h4M16 5h4a2 2 0 0 1 0 4h-4M12 11v4M8 19h8" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  chart:   (c,s)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><rect x="3" y="12" width="4" height="9" rx="1" fill="${c}" opacity=".3"/><rect x="10" y="7" width="4" height="14" rx="1" fill="${c}" opacity=".6"/><rect x="17" y="3" width="4" height="18" rx="1" fill="${c}"/><path d="M3 21h18" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  teacher: (c,s)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="13" rx="2" stroke="${c}" stroke-width="1.5"/><path d="M8 21h8M12 16v5M7 8h10M7 11h6" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  users:   (c,s)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3.5" stroke="${c}" stroke-width="1.5"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/><circle cx="17" cy="8" r="3" stroke="${c}" stroke-width="1.3" fill="none"/><path d="M21 20c0-3-2-5.5-4.5-5.5" stroke="${c}" stroke-width="1.3" stroke-linecap="round"/></svg>`,
  rocket:  (c,s)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><path d="M12 2C9 5 7 9 7 13a5 5 0 0 0 10 0c0-4-2-8-5-11z" stroke="${c}" stroke-width="1.5" stroke-linejoin="round"/><path d="M7 13c-2 0-4 2-4 4h4M17 13c2 0 4 2 4 4h-4" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/><circle cx="12" cy="11" r="1.5" fill="${c}"/></svg>`,
  att:     (c,s)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="${c}" stroke-width="1.5"/><path d="M3 9h18M8 2v4M16 2v4M8 14l2 2 4-4" stroke="${c}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  chk:     (c,s)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="${c}"/><path d="M7.5 12l3 3 6-6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  xmk:     (c,s)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="${c}"/><path d="M9 9l6 6M15 9l-6 6" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>`,
  dash:    (c,s)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="${c}" stroke-width="1.5" opacity=".3"/><path d="M8 12h8" stroke="${c}" stroke-width="2" stroke-linecap="round" opacity=".4"/></svg>`,
  cal:     (c,s)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="16" rx="2.5" stroke="${c}" stroke-width="1.5"/><path d="M3 10h18M8 3v4M16 3v4" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/><circle cx="8" cy="15" r="1" fill="${c}"/><circle cx="12" cy="15" r="1" fill="${c}"/><circle cx="16" cy="15" r="1" fill="${c}"/></svg>`,
  clk:     (c,s)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="${c}" stroke-width="1.5"/><path d="M12 7v5l3 3" stroke="${c}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  loc:     (c,s)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="${c}" stroke-width="1.5"/><circle cx="12" cy="9" r="2.5" stroke="${c}" stroke-width="1.5"/></svg>`,
  seat:    (c,s)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><path d="M6 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2M4 10h16v2a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6v-2z" stroke="${c}" stroke-width="1.5"/><path d="M10 22v-4M14 22v-4" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  free:    (c,s)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><rect x="2" y="6" width="20" height="14" rx="2" stroke="${c}" stroke-width="1.5"/><path d="M2 10h20" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  info:    (c,s)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="${c}" stroke-width="1.5"/><path d="M12 8v.5M12 11v5" stroke="${c}" stroke-width="2" stroke-linecap="round"/></svg>`,
  warn:    (c,s)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><path d="M12 3L2 20h20L12 3z" stroke="${c}" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 10v4M12 17v.5" stroke="${c}" stroke-width="2" stroke-linecap="round"/></svg>`,
  lang:    (c,s)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="${c}" stroke-width="1.5"/><path d="M3 9h18M3 15h18M12 3C10 7 9 10 9 12s1 5 3 9M12 3c2 4 3 7 3 9s-1 5-3 9" stroke="${c}" stroke-width="1.3" stroke-linecap="round"/></svg>`,
  eye:     (c,s)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><path d="M1 12C1 12 5 5 12 5s11 7 11 7-4 7-11 7S1 12 1 12z" stroke="${c}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="3" stroke="${c}" stroke-width="1.5"/></svg>`,
  eyeOff:  (c,s)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19M1 1l22 22" stroke="${c}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  logout:  (c,s)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" stroke="${c}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  plus:    (c,s)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="${c}" stroke-width="1.5"/><path d="M12 8v8M8 12h8" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  save:    (c,s)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" stroke="${c}" stroke-width="1.5" stroke-linejoin="round"/><path d="M17 21v-8H7v8M7 3v5h8" stroke="${c}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};

const ICON_KEYS = ['book','shield','trophy','chart','teacher','users','rocket','att'];
const COLORS = ["#2d7d6f","#7ab648","#7a5af8","#d97706","#e05252","#0891b2","#059669"];

// ── Shared render helpers ─────────────────────────────────
const bdg = (txt,clr,ic='') =>
  `<span class="badge" style="background:${clr}18;color:${clr};border:1px solid ${clr}30;">${ic}${txt}</span>`;

const stBdg = s => {
  const map = {
    [TRANSLATIONS.ar.statusActive]:'#7ab648',
    [TRANSLATIONS.en.statusActive]:'#7ab648',
    [TRANSLATIONS.ar.statusUpcoming]:'#2d7d6f',
    [TRANSLATIONS.en.statusUpcoming]:'#2d7d6f',
  };
  const c = map[s] || '#7a9e98';
  return bdg(s,c);
};

const statCard = (ic,lb,val,clr) =>
  `<div class="stat-card"><div class="stat-icon" style="background:${clr}15;">${IC[ic](clr,21)}</div><div class="stat-value" style="color:${clr};">${val}</div><div class="stat-label">${lb}</div></div>`;

const ciBox = (c,n,s) =>
  `<div style="width:${s}px;height:${s}px;border-radius:${Math.round(s*.27)}px;background:${c}15;border:1px solid ${c}25;display:flex;align-items:center;justify-content:center;">${(IC[n]||IC.book)(c,Math.round(s*.55))}</div>`;

// ── Notify helper ─────────────────────────────────────────
function notify(msg, type='s') {
  const el = document.getElementById('notif');
  if (!el) return;
  el.style.display = 'flex';
  el.style.background = type === 'e' ? '#e05252' : '#2d7d6f';
  el.innerHTML = (type === 'e' ? IC.xmk('white',18) : IC.chk('white',18)) + ' ' + msg;
  clearTimeout(window._nt);
  window._nt = setTimeout(() => { el.style.display = 'none'; }, 3500);
}

// ── Loading overlay ───────────────────────────────────────
function setLoad(v) {
  const el = document.getElementById('loading');
  if (el) el.classList.toggle('hidden', !v);
}

// ── Page switcher ─────────────────────────────────────────
function showPg(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
  window.scrollTo(0,0);
}

// ── Password toggle ───────────────────────────────────────
function togglePw(inputId, btnId) {
  const inp = document.getElementById(inputId);
  const btn = document.getElementById(btnId);
  if (!inp || !btn) return;
  const show = inp.type === 'password';
  inp.type = show ? 'text' : 'password';
  btn.innerHTML = show ? IC.eyeOff('var(--text-muted)',17) : IC.eye('var(--text-muted)',17);
}

// ── Language switcher button HTML ─────────────────────────
function langBtn() {
  return `<button class="btn btn-ghost btn-sm lang-btn" onclick="toggleLang()" title="Switch Language" style="gap:5px;">
    ${IC.lang('var(--text-muted)',14)}
    <span>${t('langLabel')}</span>
  </button>`;
}

// ── Logo SVG ──────────────────────────────────────────────
const LOGO_SVG_SM = `<svg viewBox="0 0 48 44" fill="none" width="22" height="20"><path d="M10 8C10 8 6 8 6 13C6 19 12 22 16 22C19.5 22 21 20 23 18" stroke="white" stroke-width="2.4" stroke-linecap="round"/><path d="M23 18C25 16 27 14 30 14C34 14 37 17 37 21C37 25 34 28 30 28C26 28 24 25 23 23C22 25 20 28 16 28C12 28 9 25 9 21C9 17 12 14 16 14C19 14 21 16 23 18Z" stroke="white" stroke-width="2" fill="none"/><rect x="21" y="17" width="2.5" height="8" rx="1.2" fill="#7ab648"/><circle cx="10" cy="8" r="2" fill="white"/></svg>`;

const LOGO_SVG_LG = `<svg viewBox="0 0 48 44" fill="none" width="44" height="40"><path d="M10 8C10 8 6 8 6 13C6 19 12 22 16 22C19.5 22 21 20 23 18" stroke="white" stroke-width="2.4" stroke-linecap="round"/><path d="M23 18C25 16 27 14 30 14C34 14 37 17 37 21C37 25 34 28 30 28C26 28 24 25 23 23C22 25 20 28 16 28C12 28 9 25 9 21C9 17 12 14 16 14C19 14 21 16 23 18Z" stroke="white" stroke-width="2" fill="none"/><rect x="21" y="17" width="2.5" height="8" rx="1.2" fill="#7ab648"/><rect x="25" y="17" width="2.5" height="8" rx="1.2" fill="#7ab648" opacity=".7"/><circle cx="10" cy="8" r="2" fill="white"/><circle cx="23" cy="35" r="4" stroke="white" stroke-width="2" fill="none"/><path d="M23 31L23 28" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>`;

function logoHtml(size='sm', onclick='') {
  const svg = size === 'lg' ? LOGO_SVG_LG : LOGO_SVG_SM;
  return `<div class="logo-wrap" ${onclick?`onclick="${onclick}"`:''}><div class="logo-box">${svg}</div><div class="logo-title" data-i="appName"></div><div class="logo-sub" data-i="appSub"></div></div>`;
}

// ── Apply i18n to DOM ─────────────────────────────────────
function applyI18n() {
  document.querySelectorAll('[data-i]').forEach(el => {
    const key = el.getAttribute('data-i');
    if (key) el.textContent = t(key);
  });
  // Update dir
  document.documentElement.dir = LANG === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = LANG;
  // Update lang buttons
  document.querySelectorAll('.lang-btn span').forEach(s => s.textContent = t('langLabel'));
}
