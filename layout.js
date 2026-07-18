const navbarHTML = `
  <nav id="navbar">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="flex items-center justify-between h-[90px]">
        <a href="index.html" class="flex items-center transition-transform hover:scale-105">
          <img src="LOGO-WOOD.png" alt="木育玩具設計" class="logo-img h-[150px] w-auto drop-shadow-sm">
        </a>
        <div class="hidden lg:flex items-center gap-8">
          <ul class="flex items-center gap-8">
            <li><a href="director.html" class="nav-link text-body" data-en="Director">計畫主持人</a></li>
            <li><a href="partners.html" class="nav-link text-body" data-en="Partners">合作夥伴</a></li>
            <li class="relative group py-2">
              <a href="lessons.html" class="nav-link flex items-center gap-1 text-body">
                <span data-en="Lessons">分享教案</span> <i class="fa-solid fa-chevron-down text-caption transition-transform group-hover:rotate-180"></i>
              </a>
              <div class="dropdown-wrap">
                <ul class="dropdown-menu">
                  <li><a href="lesson-gyro.html" class="block px-5 py-3 text-body font-bold hover:bg-forest-100 hover:text-forest-700" data-en="Wooden Gyro">木陀螺教案</a></li>
                  <li><a href="lesson-bird.html" class="block px-5 py-3 text-body font-bold hover:bg-forest-100 hover:text-forest-700" data-en="Flying Bird">飛鳥教案</a></li>
                  <li><a href="lesson-frog.html" class="block px-5 py-3 text-body font-bold hover:bg-forest-100 hover:text-forest-700" data-en="Croaking Frog Clapper">呱呱響板教案</a></li>
                  <li><a href="lesson-cablecar.html" class="block px-5 py-3 text-body font-bold hover:bg-forest-100 hover:text-forest-700" data-en="Aerial Cable Car">高空運輸車教案</a></li>
                  <li><a href="lesson-train.html" class="block px-5 py-3 text-body font-bold hover:bg-forest-100 hover:text-forest-700" data-en="Bumpy Train">蹦蹦車教案</a></li>
                  <li class="border-t border-stone-100"><a href="lessons.html" class="block px-5 py-2.5 text-caption font-semibold text-forest-600 hover:bg-forest-100" data-en="View All Lessons →">查看全部教案 →</a></li>
                </ul>
              </div>
            </li>
            <li><a href="index.html#updates" class="nav-link text-body" data-en="Latest Updates">最新動態</a></li>
            <li><a href="contact.html" class="nav-link text-body" data-en="Contact Us">聯繫我們</a></li>
          </ul>
          <div class="lang-switcher flex items-center rounded-full overflow-hidden shadow-sm backdrop-blur-sm transition-all duration-300">
            <button class="lang-btn active px-4 py-2 text-caption font-semibold transition-colors" data-lang="zh">中</button>
            <button class="lang-btn px-4 py-2 text-caption font-semibold transition-colors" data-lang="en">EN</button>
          </div>
        </div>

        <button id="mobileToggle" class="mobile-toggle lg:hidden" aria-label="開啟選單">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <div id="mobilePanel" class="mobile-panel lg:hidden">
      <ul class="px-6 py-4 text-body font-semibold">
        <li class="border-b border-stone-200/60"><a href="director.html" class="block py-4" data-en="Director">計畫主持人</a></li>
        <li class="border-b border-stone-200/60"><a href="partners.html" class="block py-4" data-en="Partners">合作夥伴</a></li>
        <li class="border-b border-stone-200/60">
          <button id="mobileLessonsToggle" class="w-full flex items-center justify-between py-4">
            <span data-en="Lessons">分享教案</span> <i class="fa-solid fa-chevron-down text-caption transition-transform"></i>
          </button>
          <ul id="mobileLessonsSub" class="mobile-sub pl-4 pb-3 space-y-3 text-stone-500">
            <li><a href="lesson-gyro.html" class="block py-1" data-en="Wooden Gyro">木陀螺教案</a></li>
            <li><a href="lesson-bird.html" class="block py-1" data-en="Flying Bird">飛鳥教案</a></li>
            <li><a href="lesson-frog.html" class="block py-1" data-en="Croaking Frog Clapper">呱呱響板教案</a></li>
            <li><a href="lesson-cablecar.html" class="block py-1" data-en="Aerial Cable Car">高空運輸車教案</a></li>
            <li><a href="lesson-train.html" class="block py-1" data-en="Bumpy Train">蹦蹦車教案</a></li>
            <li><a href="lessons.html" class="block py-1 text-forest-600 font-semibold" data-en="View All Lessons →">查看全部教案 →</a></li>
          </ul>
        </li>
        <li class="border-b border-stone-200/60"><a href="index.html#updates" class="block py-4" data-en="Latest Updates">最新動態</a></li>
        <li><a href="contact.html" class="block py-4" data-en="Contact Us">聯繫我們</a></li>
      </ul>
    </div>
  </nav>
`;

const footerHTML = `
  <footer id="contact" class="pt-16 pb-8 relative overflow-hidden" style="background: linear-gradient(180deg, #4a3b32 0%, #29211a 100%); color: #fdfbf7;">
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-forest-500 to-transparent opacity-40"></div>
    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
        <div>
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-lg flex items-center justify-center bg-[#a57a4e]/30 border border-white/10"><i class="fa-solid fa-tree text-h3 text-cream"></i></div>
            <div class="leading-tight"><div class="font-serif font-bold text-h3 tracking-wide text-white">木育玩具設計</div><div class="text-caption text-white/60 tracking-widest mt-1 font-sans">WOODERFUL TOY DESIGN</div></div>
          </div>
        </div>
        <div>
          <h3 class="font-bold font-serif text-sub mb-5 text-forest-300" data-en="Contact Information">聯繫資訊</h3>
          <p class="text-white/80 mb-3 text-body font-sans"><span data-en="Affiliation: ">任職學校：</span>國立臺北教育大學</p>
          <p class="text-white/80 mb-3 text-body font-sans"><span data-en="Phone: ">聯絡電話：</span>0966519157</p>
          <p class="text-white/80 mb-6 text-body font-sans">E-mail：wtchang@mail.ntue.edu.tw</p>
          <div class="flex gap-5">
            <a href="https://www.facebook.com/share/g/1EfHD5RXL1/" target="_blank" rel="noopener" aria-label="Facebook">
              <i class="fa-brands fa-facebook text-h3 text-white/50 hover:text-forest-300 cursor-pointer transition-colors"></i>
            </a>
          </div>
        </div>
        <div>
          <h3 class="font-bold font-serif text-sub mb-5 text-forest-300" data-en="Pages">頁面</h3>
          <div class="grid grid-cols-2 gap-x-4 gap-y-3 font-sans text-body">
            <a href="director.html" class="text-white/80 hover:text-white transition-colors" data-en="Director">計畫主持人</a>
            <a href="partners.html" class="text-white/80 hover:text-white transition-colors" data-en="Partners">合作夥伴</a>
            <a href="lessons.html" class="text-white/80 hover:text-white transition-colors" data-en="Lessons">分享教案</a>
            <a href="index.html#updates" class="text-white/80 hover:text-white transition-colors" data-en="Latest Updates">最新動態</a>
            <a href="contact.html" class="text-white/80 hover:text-white transition-colors" data-en="Contact Us">聯繫我們</a>
          </div>
        </div>
      </div>
      <div class="pt-6 text-center md:text-left font-sans">
        <p class="text-caption text-white/40" data-en="© Copyright - Wooderful Toy Design">© Copyright - 木育玩具設計 WOODERFUL TOY DESIGN</p>
      </div>
    </div>
  </footer>
`;

// 教案頁共用區塊：給大人的話 + 木製品保養方式（來源：前言.pdf 通用教案手冊）
// 只有頁面裡有 id="lesson-notes-container" 的容器才會被填入，不影響其他頁面
const lessonNotesHTML = `
  <section class="max-w-4xl mx-auto px-6 lg:px-0 mt-4 mb-20 reveal fade-up">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-white border border-stone-200/60 rounded-md p-8">
        <h3 class="text-h3 font-serif font-bold text-wood-800 mb-4 flex items-center gap-3"><i class="fa-solid fa-heart text-forest-600"></i> <span data-en="A Note for Parents &amp; Teachers">給大人的話</span></h3>
        <ul class="space-y-3 text-body text-stone-600 leading-relaxed list-disc pl-5">
          <li data-en="Time: Woodworking takes practice. Give children plenty of time to explore and finish at their own pace.">時間：木工是一項需要長時間練習的技術，多給孩子一些時間體驗與完成作品。</li>
          <li data-en="Teaching: Ask open-ended questions and give children room to build it their own way.">教學：提出開放性的問題，給孩子空間，依照自己想要的方式製作。</li>
          <li data-en="Planning: Use stories or scenarios to spark imagination, so children stay curious and enjoy the process.">規劃：以故事或情境激發孩子的想像力，讓孩子產生興趣，並享受製作的過程。</li>
          <li data-en="Learning: What matters most isn&#39;t the finished piece but the trial and error along the way — it builds both craft skills and problem-solving ability.">學習：最重要的不是成果，而是反覆嘗試的過程，不僅讓孩子學習木工，也提升孩子解決問題的能力。</li>
        </ul>
      </div>
      <div class="bg-white border border-stone-200/60 rounded-md p-8">
        <h3 class="text-h3 font-serif font-bold text-wood-800 mb-4 flex items-center gap-3"><i class="fa-solid fa-spray-can-sparkles text-forest-600"></i> <span data-en="Caring for Your Wooden Toy">木製品的保護方式</span></h3>
        <p class="text-body text-stone-600 mb-3" data-en="We recommend oiling any wooden parts once the project is complete:">建議完成品中，有木質的地方都能上油保養喔！以下為上油步驟：</p>
        <ol class="space-y-2 text-body text-stone-600 leading-relaxed list-decimal pl-5">
          <li data-en="Prepare two light-colored cloths and a small amount of wood wax oil or olive oil.">預備兩塊淺色棉布與少許木蠟油或橄欖油。</li>
          <li data-en="Dab a cloth with oil and apply it evenly over the surface of the wooden piece.">使用棉布沾塗油，均勻塗佈於木製品表面。</li>
          <li data-en="With a second cloth, buff back and forth until the surface no longer feels tacky.">使用另外一塊棉布，用來回的方式推油，直到表面不會有明顯的沾黏感。</li>
          <li data-en="Leave the piece in a well-ventilated spot to air-dry.">將製品置於通風處陰乾即可。</li>
        </ol>
        <p class="text-caption text-stone-400 mt-4" data-en="Contains small parts. Keep away from swallowing or inhalation risk — adult supervision is recommended.">本產品內含小零件，小心勿吞食或吸入，建議由成人陪同監督使用。</p>
      </div>
    </div>
  </section>
`;

document.addEventListener("DOMContentLoaded", () => {
  const navContainer = document.getElementById("nav-container");
  if (navContainer) navContainer.innerHTML = navbarHTML;

  const footerContainer = document.getElementById("footer-container");
  if (footerContainer) footerContainer.innerHTML = footerHTML;

  const lessonNotesContainer = document.getElementById("lesson-notes-container");
  if (lessonNotesContainer) lessonNotesContainer.innerHTML = lessonNotesHTML;

  // 中英文切換：每個可翻譯的元素在 HTML 裡用 data-en="英文內容" 標記，
  // 中文就是元素原本寫在檔案裡的內容，不用另外標記。
  // 選擇的語言存在 localStorage，跨頁面導覽時會記住，不用每頁重選。
  function applyLanguage(lang) {
    document.querySelectorAll('[data-en]').forEach((el) => {
      if (el.dataset.zhCache === undefined) el.dataset.zhCache = el.innerHTML;
      el.innerHTML = lang === 'en' ? el.getAttribute('data-en') : el.dataset.zhCache;
    });
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-TW';
    try { localStorage.setItem('site-lang', lang); } catch (e) { /* 若無法使用 localStorage 就只切換當前頁面 */ }
  }

  let savedLang = 'zh';
  try { savedLang = localStorage.getItem('site-lang') || 'zh'; } catch (e) { /* 忽略 */ }
  applyLanguage(savedLang);

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-btn');
    if (!btn) return;
    applyLanguage(btn.dataset.lang);
  });

  // 頁面切換淡出動畫：攔截站內連結，淡出後才真正跳轉
  // 注意：無論淡出動畫是否順利播放完畢，setTimeout 都會照常跳轉頁面，
  // 不會因為動畫卡住就讓頁面永遠打不開。
  document.addEventListener('click', (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const link = e.target.closest('a');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:') ||
        link.target === '_blank' || link.hasAttribute('download')) return;
    e.preventDefault();
    document.body.style.opacity = '0';
    setTimeout(() => { window.location.href = href; }, 250);
  });

  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => { navbar.classList.toggle('scrolled', window.scrollY > 40); }, { passive: true });
  }

  // 手機版漢堡選單開關
  const mobileToggle = document.getElementById('mobileToggle');
  const mobilePanel = document.getElementById('mobilePanel');
  if (mobileToggle && mobilePanel) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('open');
      mobilePanel.classList.toggle('open');
    });
  }

  // 手機版「分享教案」子選單展開/收合
  const mobileLessonsToggle = document.getElementById('mobileLessonsToggle');
  const mobileLessonsSub = document.getElementById('mobileLessonsSub');
  if (mobileLessonsToggle && mobileLessonsSub) {
    mobileLessonsToggle.addEventListener('click', () => {
      mobileLessonsSub.classList.toggle('open');
      mobileLessonsToggle.querySelector('i').classList.toggle('rotate-180');
    });
  }

  // 雙向捲動淡入淡出：預設一律可見（安全），JS 只是持續微調透明度/位移，
  // 不會有「JS 沒跑完內容就整個消失」的風險，最暗也只會淡到 0.15，不會完全消失
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    let fadeTicking = false;
    function updateFade() {
      const vh = window.innerHeight;
      reveals.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return; // 離畫面太遠先不算，省效能
        const elCenter = r.top + r.height / 2;
        const dist = Math.abs(elCenter - vh / 2) / (vh / 2 + r.height / 2 + 1);
        // 曲線改用 dist 的次方，讓元素在畫面中段時停留在接近全不透明的區間，
        // 只有真的靠近畫面上下邊緣才會明顯變淡；同時把「淡到最透明」的下限
        // 從 0.15 提高到 0.5，避免看起來像是整塊消失
        const opacity = Math.max(0.7, 1 - Math.pow(dist, 1.8) * 0.6);
        const shift = (elCenter - vh / 2) * 0.02;
        el.style.opacity = opacity.toFixed(2);
        el.style.transform = `translateY(${shift.toFixed(1)}px)`;
      });
      fadeTicking = false;
    }
    window.addEventListener('scroll', () => {
      if (!fadeTicking) { requestAnimationFrame(updateFade); fadeTicking = true; }
    }, { passive: true });
    window.addEventListener('resize', updateFade);
    updateFade();
  }

  // 按鈕磁吸＋漣漪互動：只針對明顯是「按鈕」的連結／按鈕元素（有底色/邊框+圓角+內距的），
  // 不影響導覽列、麵包屑這類純文字連結
  const isButtonLike = (el) => {
    const cls = el.className || '';
    if (typeof cls !== 'string') return false;
    const hasRounded = /rounded-(sm|md|lg|xl|2xl|full)/.test(cls);
    const hasPadding = /py-\d/.test(cls);
    return hasRounded && hasPadding;
  };
  document.querySelectorAll('main a, main button, .lesson-cta').forEach((btn) => {
    if (!isButtonLike(btn)) return;
    btn.classList.add('magnetic-btn');
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${(x * 0.15).toFixed(1)}px, ${(y * 0.15).toFixed(1)}px)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    btn.addEventListener('click', (e) => {
      const ripple = document.createElement('span');
      const r = btn.getBoundingClientRect();
      ripple.className = 'magnetic-ripple';
      ripple.style.left = (e.clientX - r.left - 8) + 'px';
      ripple.style.top = (e.clientY - r.top - 8) + 'px';
      btn.appendChild(ripple);
      requestAnimationFrame(() => {
        ripple.style.transform = 'scale(14)';
        ripple.style.opacity = '0';
      });
      setTimeout(() => ripple.remove(), 650);
    });
  });

  // 數字滾動計數動畫：進入畫面時由 0 跳動到目標數字
  const counters = document.querySelectorAll('.counter');
  if (counters.length) {
    const animateCounter = (el) => {
      const target = parseInt(el.dataset.countTo, 10) || 0;
      const duration = 1400;
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      }
      requestAnimationFrame(tick);
    };
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.4 });
    counters.forEach(c => counterObserver.observe(c));
  }

  // 捲動森林漸層背景（全站共用）：從頁首米白，經葉綠、林綠，過渡到中景森林綠
  // 色階刻意不推到太深，避免跟本來就是深色的文字（如表格內文）對比不足
  const forestStops = [
    [0.00, [252, 251, 247]],
    [0.25, [244, 247, 235]],
    [0.50, [231, 240, 213]],
    [0.75, [213, 229, 188]],
    [1.00, [190, 213, 157]],
  ];
  function forestColorAt(f) {
    for (let i = 0; i < forestStops.length - 1; i++) {
      const [f0, c0] = forestStops[i];
      const [f1, c1] = forestStops[i + 1];
      if (f >= f0 && f <= f1) {
        const t = (f - f0) / (f1 - f0);
        return [
          c0[0] + (c1[0] - c0[0]) * t,
          c0[1] + (c1[1] - c0[1]) * t,
          c0[2] + (c1[2] - c0[2]) * t,
        ];
      }
    }
    return forestStops[forestStops.length - 1][1];
  }
  let scrollFraction = 0;
  function computeScrollFraction() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    scrollFraction = scrollable > 0 ? Math.max(0, Math.min(1, window.scrollY / scrollable)) : 0;
  }
  // 呼吸律動：用 sine 波在色彩明度上疊加緩慢起伏（約 7 秒一個週期），讓背景有流動的活氣而非死板漸層
  function breatheLoop(timeMs) {
    const [r, g, b] = forestColorAt(scrollFraction);
    const breathe = Math.sin(timeMs / 3500) * 4.5;
    const shift = (v) => Math.max(0, Math.min(255, Math.round(v + breathe)));
    document.body.style.backgroundColor = `rgb(${shift(r)}, ${shift(g)}, ${shift(b)})`;
    requestAnimationFrame(breatheLoop);
  }
  window.addEventListener('scroll', computeScrollFraction, { passive: true });
  computeScrollFraction();
  requestAnimationFrame(breatheLoop);
});

// bfcache 修復：從瀏覽器上一頁/下一頁按鈕返回時，頁面是從快取直接還原顯示，
// 不會重新觸發 DOMContentLoaded，如果上面的頁面切換淡出動畫把 opacity 設成 0，
// 快取還原時就會卡在全透明、畫面一片空白。這裡強制在每次頁面顯示時把 opacity 復原。
window.addEventListener('pageshow', () => {
  document.body.style.opacity = '1';
});