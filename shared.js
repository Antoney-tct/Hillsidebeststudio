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
    hero_tag:      'Photography & Videography · Kayole , Bee-center , Nairobi  Kenya',
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
    about_h2b:     'Narrated With Heart',
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
    footer_copy:   '© 2026 The Hillside Studios · , Kenya',
    // Page-specific chatbot greetings
    chat_greet_default:  "Hello! I'm Hilda 👋 How can I help you today? I can answer questions about our services, pricing, or help you book a session.",
    chat_greet_services: "Hi! I can tell you more about any of our services or help you book. What are you looking for?",
    chat_greet_about:    "Want to know more about our team or the studio's story? Ask me anything!",
    chat_greet_portfolio:"See something you love? I can help you book a similar session or answer questions about our work.",
    chat_greet_pricing:  "Questions about our pricing? I can help you find the right package for your budget and needs.",
    chat_greet_contact:  "Need help with the form? I can help you pick the right package or answer any question before you send! 😊",
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
    hero_tag:      'Upigaji Picha & Video · Kayole , Bee-center , Nairobi  Kenya',
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
    footer_copy:   '© 2026 The Hillside Studios · Nairobi, Kenya',
    // Page-specific chatbot greetings (Swahili)
    chat_greet_default:  "Habari! Mimi ni Hilda 👋 Naweza kukusaidiaje leo? Ninaweza kujibu maswali kuhusu huduma, bei, au kukusaidia kupanga kikao.",
    chat_greet_services: "Habari! Naweza kukupa maelezo zaidi kuhusu huduma zetu. Unatafuta nini hasa?",
    chat_greet_about:    "Unataka kujua zaidi kuhusu timu yetu au hadithi ya studio? Niulize chochote!",
    chat_greet_portfolio:"Umeona kitu unachopenda? Naweza kukusaidia kupanga kikao kama hicho au kujibu maswali kuhusu kazi zetu.",
    chat_greet_pricing:  "Maswali kuhusu bei? Naweza kukusaidia kupata kifurushi kinachofaa bajeti na mahitaji yako.",
    chat_greet_contact:  "Unahitaji msaada na fomu? Naweza kukusaidia kuchagua kifurushi sahihi au kujibu swali lolote kabla ya kutuma! 😊",
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

function initChatbot() {
  // Get page-specific greeting
  function getGreeting(lang) {
    const T = TRANSLATIONS[lang];
    const path = window.location.pathname.split('/').pop();
    if (path.startsWith('services')) return T.chat_greet_services;
    if (path.startsWith('about')) return T.chat_greet_about;
    if (path.startsWith('portfolio') || path.startsWith('projects')) return T.chat_greet_portfolio;
    if (path.startsWith('pricing')) return T.chat_greet_pricing;
    if (path.startsWith('contact')) return T.chat_greet_contact;
    return T.chat_greet_default;
  }

  // New Keyword-based response engine
  const RESPONSES = {
    en: {
      default: "I'm sorry, I'm not sure how to answer that. I can help with questions about our services, pricing, and booking process. How can I assist?",
      greeting: "Hello there! How can I help you today?",
      pricing: "We have packages for every need! Our popular 'Signature' wedding photography is KES 75,000. For a full breakdown of all our packages, please <a href='pricing.html' style='color: var(--accent-light);'>check out our pricing page</a>.",
      services: "We offer Wedding & Portrait Photography, Cinematic Videography, Brand & Commercial shoots, and Event Coverage. Is there a specific service you're interested in?",
      wedding: "For weddings, our most popular photo package is the 'Signature' at KES 75,000. You can <a href='pricing.html' style='color: var(--accent-light);'>see all packages here</a> or <a href='contact.html' style='color: var(--accent-light);'>contact us</a> to get a custom quote!",
      booking: "Booking is simple! We require a 30% deposit to secure your date. The best way to start is by filling out the form on our contact page. I can guide you there if you like!",
      contact: "Of course! You can email us at <a href='mailto:hello@hillsidestudio.co.ke'>hello@hillsidestudio.co.ke</a><button class='copy-btn' data-copy='hello@hillsidestudio.co.ke'>Copy</button> or call/WhatsApp at +254 713 775 528.",
      turnaround: "Our standard turnaround is 14–21 days for photos and 21–35 days for films. We also offer a 'Rush Delivery' add-on if you need your content sooner!",
      payment: "We accept M-Pesa, bank transfers, and card payments. For packages over KES 75,000, we can also arrange a payment plan. We require a 30% deposit to secure your booking.",
      thanks: "You're very welcome! Is there anything else I can help you with?",
    },
    sw: {
      default: "Samahani, sielewi swali lako. Ninaweza kukusaidia na maswali kuhusu huduma, bei, na jinsi ya kupanga kikao. Nikusaidieje?",
      greeting: "Habari! Nikusaidieje leo?",
      pricing: "Tuna vifurushi mbalimbali! Kifurushi chetu maarufu cha harusi 'Signature' ni KES 75,000, na filamu ya 'Cinematic' ni KES 85,000. Tuna pia vifurushi vya pamoja! Unaweza kuona maelezo yote kwenye ukurasa wetu wa bei.",
      services: "Tunatoa huduma za Upigaji Picha za Harusi na Picha za Kawaida, Filamu za Sinema, Picha za Biashara, na Matukio. Je, kuna huduma maalum unayopenda?",
      wedding: "Kwa harusi, kifurushi chetu maarufu cha picha ni 'Signature' kwa KES 75,000. Unaweza <a href='pricing.html' style='color: var(--accent-light);'>kuona vifurushi vyote hapa</a> au <a href='contact.html' style='color: var(--accent-light);'>wasiliana nasi</a> kupata bei maalum!",
      booking: "Ni rahisi kupanga kikao! Tunahitaji malipo ya awali ya 30% ili kuhifadhi tarehe yako. Njia bora ya kuanza ni kujaza fomu kwenye ukurasa wetu wa mawasiliano.",
      contact: "Bila shaka! Unaweza kututumia barua pepe kwa <a href='mailto:hello@hillsidestudio.co.ke'>hello@hillsidestudio.co.ke</a><button class='copy-btn' data-copy='hello@hillsidestudio.co.ke'>Nakili</button> au piga simu/WhatsApp kwa +254 713 775 528.",
      turnaround: "Muda wetu wa kawaida wa kuwasilisha kazi ni siku 14–21 kwa picha na siku 21–35 kwa filamu. Pia tunatoa huduma ya 'Rush Delivery' ikiwa unahitaji kazi yako mapema!",
      payment: "Tunakubali malipo kwa M-Pesa, uhamisho wa benki, na kadi. Kwa vifurushi vya zaidi ya KES 75,000, tunaweza kupanga mpango wa malipo. Tunahitaji malipo ya awali ya 30% ili kuhifadhi nafasi yako.",
      thanks: "Karibu sana! Kuna jambo lingine naweza kukusaidia nalo?",
    }
  };

  const PACKAGES = [
    { name: 'Essential Photography', name_sw: 'Picha (Essential)', price: 35000, image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&q=80' },
    { name: 'Short Film', name_sw: 'Filamu Fupi', price: 45000, image: 'https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?w=400&q=80' },
    { name: 'Signature Photography', name_sw: 'Picha (Signature)', price: 75000, image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&q=80' },
    { name: 'Cinematic Videography', name_sw: 'Filamu (Cinematic)', price: 85000, image: 'https://images.unsplash.com/photo-1579038773867-044c48829161?w=400&q=80' },
    { name: 'Commercial Campaign', name_sw: 'Kampeni ya Kibiashara', price: 95000, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
    { name: 'Classic Bundle', name_sw: 'Kifurushi (Classic)', price: 110000, image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400&q=80' },
    { name: 'Premium Bundle', name_sw: 'Kifurushi (Premium)', price: 145000, image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&q=80' },
  ];

  const linkToPricing = (lang) => lang === 'sw'
    ? "<a href='pricing.html' style='color: var(--accent-light);'>tazama ukurasa wetu wa bei</a>"
    : "<a href='pricing.html' style='color: var(--accent-light);'>check out our pricing page</a>";

  function getBotResponse(text) {
    const lang = currentLang;
    const r = RESPONSES[lang];
    const t = text.toLowerCase();
    if (t.match(/hello|hi|habari/)) return r.greeting;
    if (t.match(/price|pricing|cost|how much|bei|gharama/)) return r.pricing;
    if (t.match(/wedding|harusi/)) return r.wedding;
    if (t.match(/book|booking|panga/)) return r.booking;
    if (t.match(/service|offer|huduma/)) return r.services;
    if (t.match(/contact|phone|email|location|wapi/)) return r.contact;
    if (t.match(/turnaround|how long|how fast|muda gani/)) return r.turnaround;
    if (t.match(/payment|pay|deposit|malipo/)) return r.payment;
    if (t.match(/thank|asante/)) return r.thanks;

    // Budget detection logic
    const budgetMatch = t.match(/(\d[\d,.]*k?)/);
    if (budgetMatch && budgetMatch[1]) {
        let budgetStr = budgetMatch[1].replace(/,/g, '');
        let budget = 0;
        if (budgetStr.endsWith('k')) {
            budget = parseFloat(budgetStr) * 1000;
        } else {
            budget = parseFloat(budgetStr);
        }

        if (budget > 30000) { // Only trigger for reasonable budget amounts
            const affordable = PACKAGES.filter(p => p.price <= budget).sort((a, b) => b.price - a.price);
            if (affordable.length > 0) {
                const bestPackage = affordable[0];
                const pkgName = lang === 'sw' ? bestPackage.name_sw : bestPackage.name;
                const responseText = lang === 'sw'
                    ? `Kwa bajeti ya KES ${budget.toLocaleString()}, kifurushi cha '${pkgName}' kwa KES ${bestPackage.price.toLocaleString()} kinaweza kukufaa! Unaweza ${linkToPricing(lang)} kwa maelezo zaidi.`
                    : `With a budget of KES ${budget.toLocaleString()}, our '${pkgName}' package at KES ${bestPackage.price.toLocaleString()} would be a great fit! You can ${linkToPricing(lang)} for more details.`;
                if (lang === 'sw') {
                    return `<img src="${bestPackage.image}" class="msg-img" alt="${pkgName}"><p>${responseText}</p>`;                }                return `<img src="${bestPackage.image}" class="msg-img" alt="${pkgName}"><p>${responseText}</p>`;
            } else {
                 if (lang === 'sw') return `Asante kwa kushiriki bajeti yako. Kifurushi chetu cha bei nafuu huanza KES 35,000. Tafadhali ${linkToPricing(lang)} kuona chaguo zote.`;
                 return `Thanks for sharing your budget. Our packages start at KES 35,000. Please ${linkToPricing(lang)} to see all the options.`;
            }
        }
    }

    return r.default;
  }

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

  // Set initial greeting message
  const initialGreeting = getGreeting(currentLang); // Use innerHTML to render links
  if (msgs.querySelector('.msg.bot')) msgs.querySelector('.msg.bot').innerHTML = initialGreeting;

  // Show notification dot after 5s
  setTimeout(() => { if (!isOpen && notif) notif.style.display = 'block'; }, 5000);

  // Proactively open on the pricing page after a delay
  const currentPage = window.location.pathname.split('/').pop();
  if (currentPage.startsWith('pricing')) {
    setTimeout(() => {
      if (!isOpen) { // Only open if user hasn't already
        bubble.click();
      }
    }, 2500); // 2.5-second delay

    // Add a one-time event listener to close the chat on scroll
    const handlePricingScroll = () => {
      if (isOpen && window.scrollY > 150) { // If user scrolls down 150px
        win.classList.remove('open');
        isOpen = false;
        window.removeEventListener('scroll', handlePricingScroll); // Clean up listener
      }
    };
    window.addEventListener('scroll', handlePricingScroll);
  }

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
    div.innerHTML = text; // Use innerHTML to render links

    // Add copy-to-clipboard functionality for any copy buttons in the message
    const copyBtn = div.querySelector('.copy-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        if (copyBtn.classList.contains('copied')) return; // Prevent multiple clicks
        const originalText = copyBtn.textContent;
        navigator.clipboard.writeText(copyBtn.dataset.copy).then(() => {
          copyBtn.textContent = 'Copied!';
          copyBtn.classList.add('copied');
          // Reset the button state after the animation finishes
          setTimeout(() => { copyBtn.textContent = originalText; copyBtn.classList.remove('copied'); }, 2000);
        }).catch(err => {
          console.error('Failed to copy text: ', err);
          copyBtn.textContent = 'Error';
        });
      });
    }

    // Add lightbox functionality for chatbot images
    const msgImg = div.querySelector('.msg-img');
    if (msgImg) {
      msgImg.addEventListener('click', () => {
        // Use the global lightbox function
        openLightbox({
          src: msgImg.src,
          caption: msgImg.alt,
          tag: 'Package Suggestion'
        });
      });
    }


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

  function sendMsg(text) {
    addMsg(text, 'user');
    const typing = addTyping();

    // Simulate a short delay for a more natural feel
    setTimeout(() => {
      const reply = getBotResponse(text);
      typing.remove();
      addMsg(reply, 'bot');
    }, 700 + Math.random() * 400);
  }
}

// ── SCROLL REVEAL ─────────────────────────────
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

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

// ── LIGHTBOX (Global) ─────────────────────────
let lightbox, lbImg, lbCaption, lbTag, lbClose, lbPrev, lbNext;

function initLightbox() {
  lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  lbImg = document.getElementById('lbImg');
  lbCaption = document.getElementById('lbCaption');
  lbTag = document.getElementById('lbTag');
  lbClose = document.getElementById('lbClose');
  lbPrev = document.getElementById('lbPrev');
  lbNext = document.getElementById('lbNext');

  lbClose.addEventListener('click', () => lightbox.classList.remove('open'));
  lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.classList.remove('open'); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') lightbox.classList.remove('open'); });
}

function openLightbox({ src, caption, tag, showNav = false }) {
  if (!lightbox) return;

  lbImg.src = src;
  lbCaption.textContent = caption || '';
  lbTag.textContent = tag || '';

  // Hide nav buttons if not part of a gallery
  if (lbPrev && lbNext) {
    lbPrev.style.display = showNav ? 'block' : 'none';
    lbNext.style.display = showNav ? 'block' : 'none';
  }

  lightbox.classList.add('open');
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
  initLightbox();
  initWhatsApp();
  initOutsideTap();

  // Auto-scroller for videos
  document.querySelectorAll('.v-scroll').forEach(scroller => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const scrollerInner = scroller.querySelector('.v-scroll-inner');
    if (!scrollerInner) return;
    const items = Array.from(scrollerInner.children);
    items.forEach(item => {
      const clone = item.cloneNode(true);
      clone.setAttribute('aria-hidden', true);
      scrollerInner.appendChild(clone);
    });
    scrollerInner.addEventListener('touchstart', () => scrollerInner.style.animationPlayState = 'paused', { passive: true });
    scrollerInner.addEventListener('touchend', () => scrollerInner.style.animationPlayState = 'running', { passive: true });
  });
});