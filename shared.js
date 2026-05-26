// ── NAV INIT ──
function initNav(solidNav) {
  const navbar = document.getElementById('navbar');
  if (solidNav) navbar.classList.add('solid');
  window.addEventListener('scroll', () => {
    if (!solidNav) navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
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

// ── SCROLL REVEAL ──
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

// ── CHATBOT ──
const BOT_RESPONSES = [
  {
    keys: ['wedding', 'ruracio', 'marriage', 'bride', 'groom'],
    text: "We love weddings! 🥂 Our Signature wedding package starts at KES 75,000, which includes full-day coverage and an engagement shoot. We're very familiar with traditional ceremonies like Ruracios too! Would you like to check our Pricing page for more details?"
  },
  {
    keys: ['price', 'cost', 'how much', 'kes', 'pricing', 'package'],
    text: "Our photography packages start from KES 35,000 for essentials and portraits. For weddings, our bundles start at KES 75,000. You can find the full breakdown of all our photo and video packages on our Pricing page! ✨"
  },
  {
    keys: ['location', 'where', 'place', 'address', 'ruiru', 'kiambu', 'office'],
    text: "The Hillside Studio is based in the beautiful hills of Ruiru, Kiambu County. 🇰🇪 We are easily accessible from Nairobi via the Thika Superhighway, near landmarks like Tatu City. We also travel all over Kenya for shoots!"
  },
  {
    keys: ['book', 'contact', 'appointment', 'reserve', 'hire', 'phone', 'whatsapp', 'email'],
    text: "Ready to create some magic? 📸 You can book a session by filling out the form on our Contact page, or reach us directly via WhatsApp at +254 700 000 000. We usually respond within 24 hours!"
  },
  {
    keys: ['portfolio', 'work', 'samples', 'photos', 'videos', 'gallery'],
    text: "You can view our latest projects, from cinematic wedding films to brand campaigns, on our Portfolio page. Is there a specific style of photography you are interested in?"
  },
  {
    keys: ['hello', 'hi', 'hey', 'jambo', 'habari'],
    text: "Hello! I'm Hilda, your Hillside Studio assistant. ✨ I'm here to help you with pricing, booking, or any questions about our services. What's on your mind today?"
  },
  {
    keys: ['discount', 'budget', 'offer', 'deal', 'cheaper', 'negotiate'],
    text: "We value transparency and excellence! While our prices are fixed to ensure we provide the best quality for every client, we do offer flexible payment plans for our larger packages. We also have the 'Essential' package for smaller budgets! ✨"
  }
];

function initChatbot() {
  const bubble = document.getElementById('chatBubble');
  const win = document.getElementById('chatWindow');
  const closeBtn = document.getElementById('chatClose');
  const clearBtn = document.getElementById('chatClear');
  const input = document.getElementById('chatInput');
  const sendBtn = document.getElementById('chatSend');
  const msgs = document.getElementById('chatMsgs');
  const suggestBox = document.getElementById('chatSuggestions');
  const notif = document.getElementById('chatNotif');
  let open = false;

  // Show notif after 4s to draw attention
  setTimeout(() => { 
    if (notif && !open) {
      notif.style.display = 'block'; 
      bubble.classList.add('attention');
    }
  }, 4000);

  bubble.addEventListener('click', () => {
    open = !open;
    win.classList.toggle('open', open);
    bubble.classList.remove('attention');
    if (notif) notif.style.display = 'none';
    if (open) setTimeout(() => input.focus(), 350);
  });
  closeBtn.addEventListener('click', () => { open = false; win.classList.remove('open'); });

  clearBtn.addEventListener('click', () => {
    localStorage.removeItem('hilda_chat_history');
    localStorage.removeItem('hilda_user_name');
    msgs.innerHTML = '<div class="msg bot">Chat history cleared. ✨ How else can I help you?</div>';
    if (suggestBox) suggestBox.style.display = 'flex';
  });

  // Load History from Local Storage
  const saved = JSON.parse(localStorage.getItem('hilda_chat_history') || '[]');
  if (saved.length > 0) {
    msgs.innerHTML = ''; // Replace page-specific welcome with actual history
    saved.forEach(m => addMsg(m.text, m.role, false));
  }

  document.querySelectorAll('.chat-suggestion').forEach(btn => {
    btn.addEventListener('click', () => {
      sendMsg(btn.textContent.trim());
      if (suggestBox) suggestBox.style.display = 'none';
    });
  });

  sendBtn.addEventListener('click', fire);
  input.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) fire(); });

  function fire() {
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    sendMsg(text);
  }

  function addMsg(text, role, save = true) {
    if (suggestBox) suggestBox.style.display = 'none';
    const div = document.createElement('div');
    div.className = `msg ${role}`;
    div.textContent = text;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;

    if (save) {
      const history = JSON.parse(localStorage.getItem('hilda_chat_history') || '[]');
      history.push({ text, role });
      localStorage.setItem('hilda_chat_history', JSON.stringify(history));
    }
    return div;
  }

  function addTyping() {
    const div = document.createElement('div');
    div.className = 'msg bot typing';
    div.innerHTML = 'Hilda is typing<span class="typing-dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></span>';
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
    return div;
  }

  function getLevenshtein(a, b) {
    const matrix = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
    for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
    for (let j = 0; j <= b.length; j++) matrix[0][j] = j;
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        matrix[i][j] = a[i - 1] === b[j - 1] 
          ? matrix[i - 1][j - 1] 
          : Math.min(matrix[i - 1][j] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j - 1] + 1);
      }
    }
    return matrix[a.length][b.length];
  }

  async function sendMsg(text) {
    addMsg(text, 'user');

    const typing = addTyping();

    // Simulate network delay for a natural feel
    setTimeout(() => { // Increased delay to 1500ms for better animation visibility
      const input = text.toLowerCase();

      // Name recognition logic
      const nameMatch = text.match(/(?:my name is|i'm|i am|call me) ([a-z]+)/i);
      if (nameMatch) {
        const capName = nameMatch[1].charAt(0).toUpperCase() + nameMatch[1].slice(1).toLowerCase();
        localStorage.setItem('hilda_user_name', capName);
      }
      const userName = localStorage.getItem('hilda_user_name');

      let foundMatch = false;
      let response = "That's a great question! I'm not quite sure about that specific detail, but our team definitely is. Why not reach out to us at hello@hillsidestudio.co.ke or via WhatsApp at +254 700 000 000? 😊";

      // Find matching response
      for (const item of BOT_RESPONSES) {
        if (item.keys.some(key => input.includes(key))) {
          response = item.text;
          foundMatch = true;
          break;
        }
      }

      // "Did you mean...?" logic if no direct match and not just a name intro
      if (!foundMatch && !nameMatch) {
        let closestKey = null, minDistance = 3;
        const words = input.replace(/[?.!,]/g, '').split(' ');
        for (const word of words) {
          if (word.length < 3) continue;
          for (const item of BOT_RESPONSES) {
            for (const key of item.keys) {
              const d = getLevenshtein(word, key);
              if (d > 0 && d < minDistance) { minDistance = d; closestKey = key; }
            }
          }
        }
        if (closestKey) response = `I didn't quite catch that. Did you mean something about "${closestKey}"? ✨`;
      }

      // Personalize the response
      if (nameMatch) {
        response = `Nice to meet you, ${userName}! ✨ ` + (foundMatch ? response : "How can I help you with your photography or videography needs today?");
      } else if (userName) {
        response = `${userName}, ` + response.charAt(0).toLowerCase() + response.slice(1);
      }

      typing.remove();
      addMsg(response, 'bot');
    }, 1500);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initChatbot();
});
