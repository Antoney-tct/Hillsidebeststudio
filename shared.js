/* ══════════════════════════════════════════════
   THE HILLSIDE STUDIO — shared.js v3
   • Nav + Hamburger
   • EN / SW Language Toggle
   • Chatbot (Hilda — Claude API)
   • WhatsApp float button
   • Scroll Reveal
══════════════════════════════════════════════ */

// ── TRANSLATIONS ──────────────────────────────
const TRANSLATIONS = {
  en: {
    nav_home:      'Home',
    nav_services:  'Services',
    nav_projects:  'Projects',
    nav_portfolio: 'Portfolio',
    nav_about:     'About',
    nav_pricing:   'Pricing',
    nav_book:      'Book a Session',
    mob_book:      'Book a Session',
    hero_tag:      'Photography & Videography · Ruiru, Kenya',
    hero_h1a:      'Where Light',
    hero_h1b:      'Becomes',
    hero_h1em:     'Story',
    hero_sub:      'Elevated visual storytelling for brands, couples, and moments that deserve to be remembered forever.',
    btn_explore:   'Explore the Work',
    btn_book:      'Book a Session',
    btn_pricing:   'View Pricing',
    btn_story:     'Our Story →',
    btn_services:  'View All Services',
    btn_portfolio: 'View Full Portfolio →',
    about_label:   'Our Story',
    about_h2a:     'Crafted With',
    about_h2em:    'Intention,',
    about_h2b:     'Told With Heart',
    about_p1:      "The Hillside Studios was born from a single belief — that every image should feel as alive as the moment it captures. Nestled in Ruiru, our studio is a sanctuary for creatives, couples, and brands who want work that moves people.",
    about_p2:      "We combine a meticulous eye with a relaxed approach, so you're always at ease in front of the lens.",
    stat_years:    'Years of Work',
    stat_proj:     'Projects Done',
    stat_sat:      'Satisfaction',
    offers_label:  'What We Offer',
    offers_h2:     'Every Story Deserves a Visual',
    offers_p:      'From weddings to campaigns — we do it all with the same standard of excellence.',
    work_label:    'Recent Work',
    work_h2:       'Selected Projects',
    words_label:   'Kind Words',
    words_h2:      'What Clients Say',
    ready_label:   'Ready?',
    ready_h2:      "Let's Create Something",
    ready_h2em:    'Extraordinary',
    ready_p:       "Fill in the form and we'll respond within 24 hours. Or just chat with Hilda — she knows everything.",
    footer_copy:   '© 2025 The Hillside Studios · Ruiru, Kenya',
    chat_greeting: "Hello! I'm Hilda 👋 How can I help you today? I can answer questions about our services, pricing, or help you book a session.",
    chat_ph:       'Ask Hilda anything…',
    chat_status:   'Online now',
    sug1: 'Wedding packages', sug2: 'Pricing info', sug3: 'How to book', sug4: 'Turnaround time',
    wa_tooltip:    'Chat on WhatsApp',
    lang_toggle:   'SW',
  },
  sw: {
    nav_home:      'Nyumbani',
    nav_services:  'Huduma',
    nav_projects:  'Miradi',
    nav_portfolio: 'Kazi Yetu',
    nav_about:     'Kuhusu',
    nav_pricing:   'Bei',
    nav_book:      'Panga Kikao',
    mob_book:      'Panga Kikao',
    hero_tag:      'Upigaji Picha & Video · Ruiru, Kenya',
    hero_h1a:      'Mwanga',
    hero_h1b:      'Unakuwa',
    hero_h1em:     'Hadithi',
    hero_sub:      'Hadithi za kuona zinazoinua biashara, wapendanao, na nyakati ambazo zinastahili kukumbukwa milele.',
    btn_explore:   'Tazama Kazi Yetu',
    btn_book:      'Panga Kikao',
    btn_pricing:   'Tazama Bei',
    btn_story:     'Hadithi Yetu →',
    btn_services:  'Tazama Huduma Zote',
    btn_portfolio: 'Tazama Kazi Yote →',
    about_label:   'Hadithi Yetu',
    about_h2a:     'Ilijengwa kwa',
    about_h2em:    'Makini,',
    about_h2b:     'Inayosimuliwa kwa Moyo',
    about_p1:      "The Hillside Studios ilizaliwa kutoka imani moja — kwamba kila picha inapaswa kuhisi hai kama wakati ilionaswa. Iko Ruiru, studio yetu ni mahali salama kwa wabunifu, wapendanao, na biashara.",
    about_p2:      "Tunachanganya jicho makini na mkabala wa utulivu, ili uhisi vizuri mbele ya kamera.",
    stat_years:    'Miaka ya Kazi',
    stat_proj:     'Miradi Iliyokamilika',
    stat_sat:      'Wateja Waridhika',
    offers_label:  'Tunachotoa',
    offers_h2:     'Kila Hadithi Inastahili Kuonekana',
    offers_p:      'Kuanzia harusi hadi kampeni — tunafanya yote kwa kiwango sawa cha ubora.',
    work_label:    'Kazi ya Hivi Karibuni',
    work_h2:       'Miradi Iliyochaguliwa',
    words_label:   'Maneno Mazuri',
    words_h2:      'Wateja Wanasema Nini',
    ready_label:   'Uko Tayari?',
    ready_h2:      'Hebu Tuunde Kitu',
    ready_h2em:    'Cha Kipekee',
    ready_p:       "Jaza fomu na tutakujibu ndani ya masaa 24. Au zungumza na Hilda — anajua kila kitu.",
    footer_copy:   '© 2025 The Hillside Studios · Ruiru, Kenya',
    chat_greeting: "Habari! Mimi ni Hilda 👋 Naweza kukusaidia leo? Ninaweza kujibu maswali kuhusu huduma zetu, bei, au kukusaidia kupanga kikao.",
    chat_ph:       'Uliza Hilda chochote…',
    chat_status:   'Mtandaoni sasa',
    sug1: 'Vifurushi vya harusi', sug2: 'Maelezo ya bei', sug3: 'Jinsi ya kupanga', sug4: 'Muda wa uwasilishaji',
    wa_tooltip:    'Zungumza WhatsApp',
    lang_toggle:   'EN',
  }
};

let currentLang = localStorage.getItem('hs_lang') || 'en';

function applyTranslations(lang) {
  const T = TRANSLATIONS[lang];
  document.documentElement.lang = lang;
  // Nav links
  const navLinks = document.querySelectorAll('.nav-links li a');
  const keys = ['nav_home','nav_services','nav_projects','nav_portfolio','nav_about','nav_pricing'];
  navLinks.forEach((a, i) => { if (keys[i]) a.textContent = T[keys[i]]; });
  // Nav CTA
  document.querySelectorAll('.nav-cta').forEach(el => el.textContent = T.nav_book);
  // Mobile menu links
  const mobLinks = document.querySelectorAll('.mobile-menu a:not(.mob-cta)');
  mobLinks.forEach((a, i) => { if (keys[i]) a.textContent = T[keys[i]]; });
  document.querySelectorAll('.mob-cta').forEach(el => el.textContent = T.mob_book);
  // Lang toggle button label
  document.querySelectorAll('.lang-toggle').forEach(btn => btn.textContent = T.lang_toggle);
  // WhatsApp tooltip
  const wa = document.getElementById('waTooltip');
  if (wa) wa.textContent = T.wa_tooltip;
  // Chatbot
  const chatPh = document.getElementById('chatInput');
  if (chatPh) chatPh.placeholder = T.chat_ph;
  const chatStatus = document.querySelector('.chat-header-status');
  if (chatStatus) chatStatus.textContent = T.chat_status;
  // Suggestions
  const sugs = document.querySelectorAll('.chat-suggestion');
  const sugKeys = ['sug1','sug2','sug3','sug4'];
  sugs.forEach((s, i) => { if (sugKeys[i]) s.textContent = T[sugKeys[i]]; });
  // Homepage dynamic text (data-i18n attributes)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (T[key] !== undefined) el.textContent = T[key];
  });
}

function toggleLang() {
  currentLang = currentLang === 'en' ? 'sw' : 'en';
  localStorage.setItem('hs_lang', currentLang);
  applyTranslations(currentLang);
}

// ── NAV INIT ─────────────────────────────────
function initNav(solidNav) {
  const navbar = document.getElementById('navbar');
  if (solidNav) navbar.classList.add('solid');
  window.addEventListener('scroll', () => {
    if (!solidNav) navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Hamburger
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Lang toggle buttons
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.addEventListener('click', toggleLang);
  });

  // Apply saved language
  applyTranslations(currentLang);
}

// ── SCROLL REVEAL ─────────────────────────────
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

// ── CHATBOT (Hilda) ──────────────────────────
const SYSTEM_PROMPT = `You are Hilda, the warm and knowledgeable studio assistant for The Hillside Studio — a premium photography and videography studio based in Ruiru, Kiambu County, Kenya. You speak both English and Swahili. Detect the language the client writes in and always reply in the same language.

Your role is to help clients with services, pricing, booking, and availability. Be friendly, concise, professional. Short paragraphs only — no bullet points. Always end with a helpful next step.

SERVICES:
- Wedding & Portrait Photography
- Cinematic Videography (highlight films, full ceremony, brand films)
- Brand & Commercial Photography (campaigns, lookbooks, product, e-commerce)
- Corporate & Event Coverage (conferences, launches, gala dinners)
- Drone aerial footage (add-on)

PHOTOGRAPHY PACKAGES:
- Essential: KES 35,000 — portraits/headshots, 3 hrs, 60 edited images, 14-day delivery
- Signature: KES 75,000 — full day 8hrs, 2 photographers, 300+ images, engagement session, 21-day delivery
- Bespoke: Custom — multi-day, destination, unlimited images

VIDEOGRAPHY PACKAGES:
- Short Film: KES 45,000 — 4hrs, 2–3 min highlight film, 1080p, 21-day delivery
- Cinematic: KES 85,000 — full day, 5–7 min film, 4K + drone, colour grade, 35-day delivery
- Production: Custom — brand films, documentaries, multi-day

PHOTO + VIDEO BUNDLES:
- Classic Bundle: KES 110,000
- Premium Bundle: KES 145,000 (full day, cinematic film, 300+ images, drone, engagement session)
- Ultimate: Custom

ADD-ONS: Drone KES 15,000 · Rush delivery KES 8,000 · Printed album KES 18,000 · Extra hour KES 8,000 · Second shooter KES 12,000 · Social reels KES 10,000

BOOKING: 30% deposit to secure a date. Balance due 7 days before. Payment plans for packages above KES 75,000.
TURNAROUND: Photos 14–21 days. Films 21–35 days. Rush available.
CONTACT: hello@hillsidestudio.co.ke · +254 700 000 000 · WhatsApp available.
LOCATION: Ruiru, Kiambu County. Travel across Kenya; international by arrangement.
STUDIO HOURS: Mon–Fri 8am–6pm · Sat 9am–4pm · Sun by appointment.

In Swahili responses, be warm and use natural Kenyan Swahili. Keep responses under 90 words unless the question genuinely requires more.`;

function initChatbot() {
  const bubble  = document.getElementById('chatBubble');
  const win     = document.getElementById('chatWindow');
  const closeBtn= document.getElementById('chatClose');
  const input   = document.getElementById('chatInput');
  const sendBtn = document.getElementById('chatSend');
  const msgs    = document.getElementById('chatMsgs');
  const sugBox  = document.getElementById('chatSuggestions');
  const notif   = document.getElementById('chatNotif');
  if (!bubble) return;

  let history = [];
  let isOpen  = false;

  // Show notification dot after 5s
  setTimeout(() => { if (!isOpen && notif) notif.style.display = 'block'; }, 5000);

  bubble.addEventListener('click', () => {
    isOpen = !isOpen;
    win.classList.toggle('open', isOpen);
    if (notif) notif.style.display = 'none';
    if (isOpen) setTimeout(() => input && input.focus(), 340);
  });
  if (closeBtn) closeBtn.addEventListener('click', () => { isOpen = false; win.classList.remove('open'); });

  // Suggestions
  document.querySelectorAll('.chat-suggestion').forEach(btn => {
    btn.addEventListener('click', () => {
      sendMsg(btn.textContent.trim());
      if (sugBox) sugBox.style.display = 'none';
    });
  });

  if (sendBtn) sendBtn.addEventListener('click', fire);
  if (input) input.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); fire(); } });

  function fire() {
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    sendMsg(text);
  }

  function addMsg(text, role) {
    if (sugBox) sugBox.style.display = 'none';
    const div = document.createElement('div');
    div.className = `msg ${role}`;
    div.textContent = text;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function addTyping() {
    const div = document.createElement('div');
    div.className = 'msg bot typing';
    div.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
    return div;
  }

  async function sendMsg(text) {
    addMsg(text, 'user');
    history.push({ role: 'user', content: text });
    const typing = addTyping();
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 400,
          system: SYSTEM_PROMPT,
          messages: history
        })
      });
      const data = await res.json();
      const reply = data.content?.[0]?.text || (currentLang === 'sw'
        ? 'Samahani, kuna tatizo. Tafadhali wasiliana nasi: hello@hillsidestudios.co.ke'
        : "Sorry, I'm having trouble connecting. Please email hello@hillsidestudios.co.ke");
      typing.remove();
      addMsg(reply, 'bot');
      history.push({ role: 'assistant', content: reply });
    } catch {
      typing.remove();
      addMsg(currentLang === 'sw'
        ? 'Samahani, kuna tatizo la muunganiko. Piga simu: +254 713 775 528'
        : 'Connection issue — please call +254 713 775 528 or WhatsApp us.',
        'bot');
    }
  }
}

// ── WHATSAPP BUTTON ───────────────────────────
function initWhatsApp() {
  const wa = document.getElementById('waBtn');
  if (!wa) return;
  wa.addEventListener('click', () => {
    const msg = currentLang === 'sw'
      ? 'Habari! Ningependa kupata maelezo kuhusu huduma za The Hillside Studios.'
      : 'Hello! I\'d like to enquire about The Hillside Studios\'s services.';
    const number = '254713755528';
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(msg)}`, '_blank');
  });
}

// ── CLOSE CHATBOT ON OUTSIDE TAP ─────────────
function initOutsideTap() {
  document.addEventListener('click', e => {
    const win    = document.getElementById('chatWindow');
    const bubble = document.getElementById('chatBubble');
    if (win && win.classList.contains('open') && !win.contains(e.target) && !bubble.contains(e.target)) {
      win.classList.remove('open');
    }
  });
}

// ── BOOT ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initChatbot();
  initWhatsApp();
  initOutsideTap();
});