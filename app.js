/* =========================================================
   AI Knowledge Base — Static Landing Logic
   ========================================================= */

const BUY_URL =
  "https://aiknowledgebase.lemonsqueezy.com/checkout/buy/cb8e375b-a663-4f53-9776-97b54014bba0";

const I18N = {
  zh: {
    meta: {
      title: "AI Knowledge Base — 私人空間的 AI 知識庫系統",
      description: "為個人與團隊量身打造的私人 AI 知識庫系統,徹底解決文件分散、搜尋困難、權限混亂的核心痛點。",
    },
    nav: { features: "功能", pricing: "定價", deploy: "部署", policies: "條款", buy: "購買" },
    hero: {
      eyebrow: "KNOWLEDGE BASE PLATFORM",
      titleA: "將重要資料存放在 ",
      titleB: "私人空間",
      titleC: " 的 AI 知識庫系統",
      subtitle:
        "這是一套為個人與團隊量身打造的私人知識庫系統,徹底解決文件分散、搜尋困難、權限混亂及資料放雲端等核心痛點。只需上傳常見文件,即可利用 AI 對話隨時喚醒沈睡的資料。",
      buy: "Buy Now — US$30",
      secondary: "查看條款與退款政策",
      chips: ["多格式文件管理", "全文檢索 + RAG 問答", "SSE 即時串流回覆", "JWT 驗證與角色權限控管"],
    },
    description: {
      eyebrow: "01 — Product",
      title: "為團隊打造的智慧大腦",
      lead: "集中式知識管理,讓知識不僅是儲存,更能成為團隊隨手可得的資源。",
      blocks: [
        { title: "集中式知識管理", body: "支援多類別知識庫、聊天式查詢、Prompt 設定與模型管理。適合內部 SOP、客服知識、技術文件與營運規範的統一管理與快速檢索。" },
        { title: "強大的核心能力", body: "多格式文件上傳、向量化檢索、跨文件語意查詢、會話歷史、系統提示詞管理,以及 OpenAI / Anthropic / Google / AWS Bedrock 端點整合。" },
        { title: "立即可用的場景", body: "建立部門知識庫、限制可讀可寫範圍、讓同事以自然語言提問,並在同一個介面中管理模型與知識來源。" },
      ],
    },
    showcase: {
      eyebrow: "02 — In action",
      title: "看看它能做什麼",
      lead: "從語意搜尋到權限管理，核心功能一覽。",
      features: [
        { title: "語意搜尋", body: "用自然語言提問，AI 從你的文件中精準找到答案，不再靠關鍵字碰運氣。" },
        { title: "多格式文件上傳", body: "支援 PDF、Word、TXT 等格式，拖曳即可上傳，知識庫隨時擴充。" },
        { title: "多模型自由切換", body: "整合 OpenAI、Anthropic、Google、AWS Bedrock，一個介面管理所有模型。" },
        { title: "部門知識庫分類", body: "建立多個知識庫，按部門或主題分類，讓不同團隊各自管理自己的資料。" },
        { title: "角色與權限控管", body: "管理員設定誰能讀、誰能寫，資料嚴格隔離，不怕內部資訊外洩。" },
        { title: "對話歷史紀錄", body: "每次查詢自動保存，隨時回顧過去的對話，知識不因關閉視窗而消失。" },
      ],
    },
    pricing: {
      eyebrow: "03 — Pricing", title: "一次購買,長久擁有",
      planTag: "Professional License", price: "US$30", priceNote: "One-time payment",
      desc: "一次購買,取得目前版本授權與後續小版本更新。適合個人創作者與中小團隊。AI 使用費用（如 OpenAI、Anthropic）需另行向各平台申請 API Key 支付。",
      includes: ["無限知識庫與文件數量", "支援全部主流 AI 模型整合（需自備 API Key，費用由各平台另行收取）", "JWT 驗證與角色權限控管", "免費取得後續小版本更新"],
      cta: "立即購買",
    },
    deploy: {
      eyebrow: "04 — Deployment", title: "用你習慣的方式部署",
      lead: "透過Docker安裝或Zeabur安裝",
      modes: [
        { title: "Docker 自行部署", body: "收到 docker-compose.yml 後，執行 docker compose up -d，映像檔自動從 ghcr.io 下載。無需自行編譯，無需設定環境變數。AI 模型 API Key 皆可在管理介面直接填寫，任你選配。" },
        { title: "Zeabur 一鍵部署超EASY", body: "下單後取得專屬 Template 連結，點擊部署、設定網域即可上線。無需本機安裝任何環境。需自備 Zeabur 帳號（費用由 Zeabur 另行收取）。服務上線後在頁面輸入 License Key 完成授權啟用。" },
      ],
    },
    policies: {
      eyebrow: "05 — Policies", title: "服務條款與隱私政策",
      sections: [
        { title: "Terms of Service", items: [
          "本產品為軟體授權 (license),非實體商品。",
          "禁止任何非法用途、未授權轉售、逆向工程或破壞服務之行為。",
          "你應自行妥善保管帳號與授權資訊,對帳號使用行為負責。",
          "本服務按現狀提供,在法律允許範圍內不承擔間接損害責任。",
          "本服務支援免費的服務更新及優化,您只要重新安裝本服務即可取得最新版本的功能與修復。",
        ]},
        { title: "Privacy Policy", items: [
          "我們可能收集聯絡資訊 (例如 Email) 與必要的付款 / 授權識別資料。",
          "資料僅用於帳號管理、授權驗證、客戶支援與服務改善。",
          "您儲存的所有知識庫資料都保存在您個人啟動的資料庫中,我們無法查閱其內容。",
        ]},
        { title: "Refund Policy", items: [
          "數位產品購買後,原則上不提供退款。如產品上有重大瑕疵,在購買後 7 天內,您可透過下方聯繫資訊,並附上發生狀況的截圖,我們仍會同意您的退款。",
        ]},
      ],
    },
    footer: { rights: "版權所有", contact: "聯繫我們" },
  },

  en: {
    meta: {
      title: "AI Knowledge Base — Private AI knowledge platform",
      description: "A private AI knowledge base for individuals and teams. Solve scattered files, painful search and messy permissions.",
    },
    nav: { features: "Features", pricing: "Pricing", deploy: "Deploy", policies: "Policies", buy: "Buy" },
    hero: {
      eyebrow: "KNOWLEDGE BASE PLATFORM",
      titleA: "An AI knowledge base ", titleB: "in your private", titleC: " space",
      subtitle:
        "A private knowledge base built for individuals and teams. Solve scattered files, painful search, messy permissions and forced cloud storage. Upload your documents and bring sleeping data to life with AI.",
      buy: "Buy Now — US$30",
      secondary: "Terms & Refund Policy",
      chips: ["Multi-format file management", "Full-text search + RAG", "Real-time SSE streaming", "JWT auth & role-based access"],
    },
    description: {
      eyebrow: "01 — Product",
      title: "A second brain for your team",
      lead: "Centralized knowledge management — knowledge that's not just stored, but instantly accessible.",
      blocks: [
        { title: "Centralized management", body: "Multi-category knowledge bases, chat-style queries, prompt settings and model management. Perfect for SOPs, support docs, technical references and ops policies." },
        { title: "Powerful core capabilities", body: "Multi-format upload, vector search, cross-document semantic queries, conversation history, prompt management, plus OpenAI / Anthropic / Google / AWS Bedrock integrations." },
        { title: "Ready for real scenarios", body: "Build department knowledge bases, control read/write scope, let teammates ask in natural language, and manage models and sources from one interface." },
      ],
    },
    showcase: {
      eyebrow: "02 — In action",
      title: "What it can do",
      lead: "Core features at a glance — from semantic search to access control.",
      features: [
        { title: "Semantic Search", body: "Ask in plain language. The AI finds the right answer from your documents — no keyword guessing." },
        { title: "Multi-format Upload", body: "Supports PDF, Word, TXT and more. Drag, drop, and your knowledge base grows instantly." },
        { title: "Switch AI Models Freely", body: "Integrates with OpenAI, Anthropic, Google and AWS Bedrock — manage everything from one interface." },
        { title: "Department Knowledge Bases", body: "Create multiple knowledge bases by team or topic. Each department manages its own data." },
        { title: "Role-based Access Control", body: "Admins control who can read or write. Data stays isolated and secure." },
        { title: "Conversation History", body: "Every query is saved automatically. Revisit past conversations anytime — nothing gets lost." },
      ],
    },
    pricing: {
      eyebrow: "03 — Pricing", title: "Buy once, own it",
      planTag: "Professional License", price: "US$30", priceNote: "One-time payment",
      desc: "Get the current version license plus all minor updates. Made for solo creators and small-to-mid teams. AI usage fees (e.g. OpenAI, Anthropic) are billed separately by each provider.",
      includes: ["Unlimited knowledge bases & documents", "All major AI model integrations (bring your own API key — billed by each provider)", "JWT auth & role-based access control", "Free minor version updates"],
      cta: "Buy Now",
    },
    deploy: {
      eyebrow: "04 — Deployment", title: "Deploy your way",
      lead: "Install Docker. That's the only technical step.",
      modes: [
        { title: "Self-host with Docker", body: "After purchase, run docker compose up -d — the image pulls automatically from ghcr.io. No build step, no environment files. API keys for OpenAI, Anthropic, Google and more are set directly in the admin UI." },
        { title: "One-click on Zeabur", body: "After purchase, you'll receive a private Zeabur template link. Click deploy, set your domain, and you're live — no local setup required. A Zeabur account is needed (billed separately by Zeabur). Enter your License Key on the live page to activate." },
      ],
    },
    policies: {
      eyebrow: "05 — Policies", title: "Terms, Privacy & Refund",
      sections: [
        { title: "Terms of Service", items: [
          "This product is a software license, not a physical good.",
          "No illegal use, unauthorized resale, reverse engineering, or service disruption.",
          "You're responsible for safeguarding your account and license info.",
          "Service is provided as-is; we are not liable for indirect damages where the law allows.",
          "Free service updates are included — reinstall to get the latest features and fixes.",
        ]},
        { title: "Privacy Policy", items: [
          "We may collect contact info (e.g. email) and necessary payment / license identifiers.",
          "Data is only used for account management, license verification, support and improvement.",
          "All knowledge base data lives in your own database — we cannot access its contents.",
        ]},
        { title: "Refund Policy", items: [
          "Refunds are generally not offered for digital products. If a major defect occurs within 7 days of purchase, contact us with screenshots and we'll honor a refund.",
        ]},
      ],
    },
    footer: { rights: "All rights reserved", contact: "Contact" },
  },
};

/* ---------------- Icons (inline SVG) ---------------- */
const ICONS = {
  database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/></svg>',
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3z"/><path d="M19 14l.7 1.8L21.5 16.5l-1.8.7L19 19l-.7-1.8L16.5 16.5l1.8-.7L19 14z"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  container: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 7.7v8.6a2 2 0 0 1-1 1.74l-7 4a2 2 0 0 1-2 0l-7-4A2 2 0 0 1 4 16.3V7.7A2 2 0 0 1 5 5.96l7-4a2 2 0 0 1 2 0l7 4A2 2 0 0 1 22 7.7z"/><path d="M10 22V12"/><path d="M14 22V12"/><path d="M2 7l10 5 10-5"/></svg>',
  zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
};

const DESC_ICONS = ['database', 'sparkles', 'users'];
const FEATURE_ICONS = ['search', 'file', 'sparkles', 'database', 'lock', 'clock'];
const DEPLOY_ICONS = ['container', 'zap'];

/* ---------------- State ---------------- */
let lang = 'zh';

/* ---------------- Render functions ---------------- */
function renderAll() {
  const t = I18N[lang];
  document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-Hant' : 'en');
  document.documentElement.setAttribute('data-lang', lang);
  document.title = t.meta.title;

  // Bind all data-i18n text nodes
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const path = el.getAttribute('data-i18n');
    const val = path.split('.').reduce((o, k) => (o ? o[k] : null), t);
    if (val == null) return;
    if (el.hasAttribute('data-i18n-attr')) {
      el.setAttribute(el.getAttribute('data-i18n-attr'), val);
    } else {
      el.textContent = val;
    }
  });

  // Hero buy URLs
  document.getElementById('hero-buy').href = BUY_URL;
  document.getElementById('pricing-buy').href = BUY_URL;
  document.querySelector('.nav-buy').href = BUY_URL;

  // Hero chips
  const chipsEl = document.getElementById('hero-chips');
  chipsEl.innerHTML = t.hero.chips.map((c) => `<span class="chip">${escape(c)}</span>`).join('');

  // Description blocks
  const descEl = document.getElementById('desc-grid');
  descEl.innerHTML = t.description.blocks
    .map((b, i) => cardHtml(b, i, DESC_ICONS[i], false))
    .join('');

  // Deploy modes
  const depEl = document.getElementById('deploy-grid');
  depEl.innerHTML = t.deploy.modes
    .map((m, i) => cardHtml(m, i, DEPLOY_ICONS[i], true))
    .join('');

  // Pricing description + list
  document.querySelector('.pricing-desc').textContent = t.pricing.desc;
  document.getElementById('pricing-list').innerHTML = t.pricing.includes
    .map((it) => `<li><span class="check">${ICONS.check}</span><span>${escape(it)}</span></li>`)
    .join('');

  // Policies accordion
  const accEl = document.getElementById('policies-accordion');
  accEl.innerHTML = t.policies.sections
    .map(
      (s, i) => `
      <div class="acc-item" data-acc="${i}">
        <button class="acc-trigger" type="button" aria-expanded="false">
          <span class="left"><span class="num">0${i + 1}</span>${escape(s.title)}</span>
          <span class="acc-chevron">${ICONS.chevron}</span>
        </button>
        <div class="acc-content"><div><ul>${s.items.map((it) => `<li><span>${escape(it)}</span></li>`).join('')}</ul></div></div>
      </div>`
    )
    .join('');
  bindAccordion();

  // Features
  renderFeatures();

  // Re-arm reveal animations on language change (so they re-trigger if needed)
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

function cardHtml(b, i, iconKey, large) {
  return `
    <div class="card ${large ? 'card-lg' : ''} reveal" style="animation-delay:${0.1 * i}s">
      <span class="card-top-line"></span>
      <span class="card-glow"></span>
      <span class="ico-wrap">${ICONS[iconKey] || ''}</span>
      <div class="card-divider"><span class="card-num">0${i + 1}</span><span class="line"></span></div>
      <h3 class="card-title">${escape(b.title)}</h3>
      <p class="card-body">${escape(b.body)}</p>
    </div>`;
}

function renderFeatures() {
  const t = I18N[lang].showcase;
  const el = document.getElementById('features-grid');
  el.innerHTML = t.features
    .map((f, i) => cardHtml(f, i, FEATURE_ICONS[i], false))
    .join('');
  el.querySelectorAll('.reveal').forEach((e) => observer.observe(e));
}

/* ---------------- Accordion ---------------- */
function bindAccordion() {
  document.querySelectorAll('.acc-item').forEach((item) => {
    const trigger = item.querySelector('.acc-trigger');
    trigger.addEventListener('click', () => {
      const open = item.classList.toggle('open');
      trigger.setAttribute('aria-expanded', String(open));
    });
  });
}

/* ---------------- Reveal on scroll ---------------- */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

/* ---------------- Helpers ---------------- */
function escape(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

/* ---------------- Boot ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('footer-year').textContent = new Date().getFullYear();

  // Lang switch
  document.querySelectorAll('.lang-switch button').forEach((btn) => {
    btn.addEventListener('click', () => {
      lang = btn.dataset.lang;
      document.querySelectorAll('.lang-switch button').forEach((b) => b.classList.toggle('active', b === btn));
      renderAll();
    });
  });

  renderAll();
});
