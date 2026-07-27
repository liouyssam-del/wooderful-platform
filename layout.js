// 告訴瀏覽器不要自動翻譯這個頁面：網站已經有自己的中/英/日/德語言切換器，
// 如果瀏覽器（例如 Chrome 的「翻譯這個網頁」功能）自己動手翻譯 DOM 內容，
// 會跟這裡的語言切換器互相打架，導致快取到錯誤、機翻走味的文字。
(function () {
  document.documentElement.setAttribute('translate', 'no');
  document.documentElement.classList.add('notranslate');
  var meta = document.createElement('meta');
  meta.name = 'google';
  meta.content = 'notranslate';
  document.head.appendChild(meta);
})();

const navbarHTML = `
  <nav id="navbar">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="flex items-center justify-between h-[90px]">
        <a href="index.html" class="flex items-center transition-transform hover:scale-105">
          <img src="LOGO-WOOD.png" alt="木育玩具設計" class="logo-img h-[150px] w-auto drop-shadow-sm">
        </a>
        <div class="hidden lg:flex items-center gap-8">
          <ul class="flex items-center gap-8">
            <li><a href="director.html" class="nav-link text-body" data-en="Director" data-ja="研究代表者" data-de="Projektleiter">計畫主持人</a></li>
            <li><a href="bamboo-play.html" class="nav-link text-body" data-en="Bamboo Learning &amp; Joy" data-ja="竹育楽" data-de="Bamboo Learning &amp; Joy">竹育樂</a></li>
            <li><a href="partners.html" class="nav-link text-body" data-en="Partners" data-ja="パートナー" data-de="Partner">合作夥伴</a></li>
            <li class="relative group py-2">
              <a href="lessons.html" class="nav-link flex items-center gap-1 text-body">
                <span data-en="Lessons" data-ja="レッスン" data-de="Lektionen">分享教案</span> <i class="fa-solid fa-chevron-down text-caption transition-transform group-hover:rotate-180"></i>
              </a>
              <div class="dropdown-wrap">
                <ul class="dropdown-menu">
                  <li><a href="lesson-gyro.html" class="block px-5 py-3 text-body font-bold hover:bg-forest-100 hover:text-forest-700" data-en="Wooden Gyro" data-ja="木製ごま" data-de="Hölzerner Kreisel">木陀螺教案</a></li>
                  <li><a href="lesson-bird.html" class="block px-5 py-3 text-body font-bold hover:bg-forest-100 hover:text-forest-700" data-en="Flying Bird" data-ja="飛ぶ鳥" data-de="Fliegender Vogel">飛鳥教案</a></li>
                  <li><a href="lesson-frog.html" class="block px-5 py-3 text-body font-bold hover:bg-forest-100 hover:text-forest-700" data-en="Croaking Frog Clapper" data-ja="鳴くカエルのクラッカー" data-de="Quakender Frosch-Klapper">呱呱響板教案</a></li>
                  <li><a href="lesson-cablecar.html" class="block px-5 py-3 text-body font-bold hover:bg-forest-100 hover:text-forest-700" data-en="Aerial Cable Car" data-ja="空中ケーブルカー" data-de="Seilbahn">高空運輸車教案</a></li>
                  <li><a href="lesson-train.html" class="block px-5 py-3 text-body font-bold hover:bg-forest-100 hover:text-forest-700" data-en="Bumpy Train" data-ja="でこぼこ列車" data-de="Holpriger Zug">蹦蹦車教案</a></li>
                  <li class="border-t border-stone-100"><a href="lessons.html" class="block px-5 py-2.5 text-caption font-semibold text-forest-600 hover:bg-forest-100" data-en="View All Lessons →" data-ja="すべてのレッスンを見る →" data-de="Alle Lektionen ansehen →">查看全部教案 →</a></li>
                </ul>
              </div>
            </li>
            <li><a href="updates.html" class="nav-link text-body" data-en="Latest Updates" data-ja="最新情報" data-de="Neuigkeiten">最新動態</a></li>
            <li><a href="contact.html" class="nav-link text-body" data-en="Contact Us" data-ja="お問い合わせ" data-de="Kontakt">聯繫我們</a></li>
          </ul>
          <div class="lang-switcher-wrap relative">
            <button id="langToggleBtn" type="button" class="lang-switcher-btn flex items-center gap-1.5 rounded-full overflow-hidden shadow-sm backdrop-blur-sm transition-all duration-300 px-4 py-2 text-caption font-semibold" aria-haspopup="true" aria-expanded="false">
              <span id="langCurrentLabel">中</span> <i class="fa-solid fa-chevron-down text-[10px] transition-transform"></i>
            </button>
            <div id="langDropdown" class="lang-dropdown">
              <button type="button" class="lang-btn active" data-lang="zh">中文</button>
              <button type="button" class="lang-btn" data-lang="en">English</button>
              <button type="button" class="lang-btn" data-lang="ja">日本語</button>
              <button type="button" class="lang-btn" data-lang="de">Deutsch</button>
            </div>
          </div>
        </div>

        <button id="mobileToggle" class="mobile-toggle lg:hidden" aria-label="開啟選單">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <div id="mobilePanel" class="mobile-panel lg:hidden">
      <ul class="px-6 py-4 text-body font-semibold">
        <li class="border-b border-stone-200/60"><a href="director.html" class="block py-4" data-en="Director" data-ja="研究代表者" data-de="Projektleiter">計畫主持人</a></li>
        <li class="border-b border-stone-200/60"><a href="bamboo-play.html" class="block py-4" data-en="Bamboo Learning &amp; Joy" data-ja="竹育楽" data-de="Bamboo Learning &amp; Joy">竹育樂</a></li>
        <li class="border-b border-stone-200/60"><a href="partners.html" class="block py-4" data-en="Partners" data-ja="パートナー" data-de="Partner">合作夥伴</a></li>
        <li class="border-b border-stone-200/60">
          <button id="mobileLessonsToggle" class="w-full flex items-center justify-between py-4">
            <span data-en="Lessons" data-ja="レッスン" data-de="Lektionen">分享教案</span> <i class="fa-solid fa-chevron-down text-caption transition-transform"></i>
          </button>
          <ul id="mobileLessonsSub" class="mobile-sub pl-4 pb-3 space-y-3 text-stone-500">
            <li><a href="lesson-gyro.html" class="block py-1" data-en="Wooden Gyro" data-ja="木製ごま" data-de="Hölzerner Kreisel">木陀螺教案</a></li>
            <li><a href="lesson-bird.html" class="block py-1" data-en="Flying Bird" data-ja="飛ぶ鳥" data-de="Fliegender Vogel">飛鳥教案</a></li>
            <li><a href="lesson-frog.html" class="block py-1" data-en="Croaking Frog Clapper" data-ja="鳴くカエルのクラッカー" data-de="Quakender Frosch-Klapper">呱呱響板教案</a></li>
            <li><a href="lesson-cablecar.html" class="block py-1" data-en="Aerial Cable Car" data-ja="空中ケーブルカー" data-de="Seilbahn">高空運輸車教案</a></li>
            <li><a href="lesson-train.html" class="block py-1" data-en="Bumpy Train" data-ja="でこぼこ列車" data-de="Holpriger Zug">蹦蹦車教案</a></li>
            <li><a href="lessons.html" class="block py-1 text-forest-600 font-semibold" data-en="View All Lessons →" data-ja="すべてのレッスンを見る →" data-de="Alle Lektionen ansehen →">查看全部教案 →</a></li>
          </ul>
        </li>
        <li class="border-b border-stone-200/60"><a href="updates.html" class="block py-4" data-en="Latest Updates" data-ja="最新情報" data-de="Neuigkeiten">最新動態</a></li>
        <li><a href="contact.html" class="block py-4" data-en="Contact Us" data-ja="お問い合わせ" data-de="Kontakt">聯繫我們</a></li>
        <li class="pt-4">
          <div class="text-caption font-semibold text-stone-400 uppercase tracking-wider mb-3" data-en="Language" data-ja="言語" data-de="Sprache">語言</div>
          <div class="mobile-lang-row grid grid-cols-4 gap-2">
            <button type="button" class="lang-btn mobile-lang-btn active" data-lang="zh">中文</button>
            <button type="button" class="lang-btn mobile-lang-btn" data-lang="en">EN</button>
            <button type="button" class="lang-btn mobile-lang-btn" data-lang="ja">日本語</button>
            <button type="button" class="lang-btn mobile-lang-btn" data-lang="de">DE</button>
          </div>
        </li>
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
          <h3 class="font-bold font-serif text-sub mb-5 text-forest-300" data-en="Contact Information" data-ja="連絡先情報" data-de="Kontaktinformationen">聯繫資訊</h3>
          <p class="text-white/80 mb-3 text-body font-sans"><span data-en="Affiliation: " data-ja="所属：" data-de="Institution: ">任職學校：</span>國立臺北教育大學</p>
          <p class="text-white/80 mb-3 text-body font-sans"><span data-en="Phone: " data-ja="電話：" data-de="Telefon: ">聯絡電話：</span>0966519157</p>
          <p class="text-white/80 mb-6 text-body font-sans">E-mail：wtchang@mail.ntue.edu.tw</p>
          <div class="flex gap-5">
            <a href="https://www.facebook.com/share/g/1EfHD5RXL1/" target="_blank" rel="noopener" aria-label="Facebook">
              <i class="fa-brands fa-facebook text-[28px] text-white/50 hover:text-forest-300 cursor-pointer transition-colors"></i>
            </a>
          </div>
        </div>
        <div>
          <h3 class="font-bold font-serif text-sub mb-5 text-forest-300" data-en="Pages" data-ja="ページ" data-de="Seiten">頁面</h3>
          <div class="grid grid-cols-2 gap-x-4 gap-y-3 font-sans text-body">
            <a href="director.html" class="text-white/80 hover:text-white transition-colors" data-en="Director" data-ja="研究代表者" data-de="Projektleiter">計畫主持人</a>
            <a href="bamboo-play.html" class="text-white/80 hover:text-white transition-colors" data-en="Bamboo Learning &amp; Joy" data-ja="竹育楽" data-de="Bamboo Learning &amp; Joy">竹育樂</a>
            <a href="partners.html" class="text-white/80 hover:text-white transition-colors" data-en="Partners" data-ja="パートナー" data-de="Partner">合作夥伴</a>
            <a href="lessons.html" class="text-white/80 hover:text-white transition-colors" data-en="Lessons" data-ja="レッスン" data-de="Lektionen">分享教案</a>
            <a href="updates.html" class="text-white/80 hover:text-white transition-colors" data-en="Latest Updates" data-ja="最新情報" data-de="Neuigkeiten">最新動態</a>
            <a href="contact.html" class="text-white/80 hover:text-white transition-colors" data-en="Contact Us" data-ja="お問い合わせ" data-de="Kontakt">聯繫我們</a>
          </div>
        </div>
      </div>
      <div class="pt-6 text-center md:text-left font-sans">
        <p class="text-caption text-white/40" data-en="© Copyright - Wooderful Toy Design" data-ja="© Copyright - Wooderful Toy Design" data-de="© Copyright - Wooderful Toy Design">© Copyright - 木育玩具設計 WOODERFUL TOY DESIGN</p>
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
        <h3 class="text-h3 font-serif font-bold text-wood-800 mb-4 flex items-center gap-3"><i class="fa-solid fa-heart text-forest-600"></i> <span data-en="A Note for Parents &amp; Teachers" data-ja="保護者・先生へ" data-de="Hinweis für Eltern &amp; Lehrer">給大人的話</span></h3>
        <ul class="space-y-3 text-body text-stone-600 leading-relaxed list-disc pl-5">
          <li data-en="Time: Woodworking takes practice. Give children plenty of time to explore and finish at their own pace." data-ja="時間：木工には練習が必要です。子どもたちが自分のペースでじっくり探求し、完成できるよう十分な時間を与えてください。" data-de="Zeit: Holzarbeit erfordert Übung. Geben Sie den Kindern genügend Zeit, in ihrem eigenen Tempo zu erkunden und das Werkstück fertigzustellen.">時間：木工是一項需要長時間練習的技術，多給孩子一些時間體驗與完成作品。</li>
          <li data-en="Teaching: Ask open-ended questions and give children room to build it their own way." data-ja="指導：オープンな質問を投げかけ、子どもたちが自分なりのやり方で作れるように余地を残してあげましょう。" data-de="Unterricht: Stellen Sie offene Fragen und lassen Sie den Kindern Raum, das Projekt auf ihre eigene Weise umzusetzen.">教學：提出開放性的問題，給孩子空間，依照自己想要的方式製作。</li>
          <li data-en="Planning: Use stories or scenarios to spark imagination, so children stay curious and enjoy the process." data-ja="企画：物語や情景を使って想像力を引き出し、子どもたちの好奇心を保ちながら制作を楽しめるようにしましょう。" data-de="Planung: Nutzen Sie Geschichten oder Szenarien, um die Fantasie anzuregen, damit die Kinder neugierig bleiben und den Prozess genießen.">規劃：以故事或情境激發孩子的想像力，讓孩子產生興趣，並享受製作的過程。</li>
          <li data-en="Learning: What matters most isn&#39;t the finished piece but the trial and error along the way — it builds both craft skills and problem-solving ability." data-ja="学び：大切なのは完成品そのものではなく、試行錯誤の過程です。それが工作の技術だけでなく、問題解決の力も育みます。" data-de="Lernen: Nicht das fertige Werkstück zählt am meisten, sondern das Ausprobieren unterwegs — es fördert sowohl handwerkliches Können als auch Problemlösungsfähigkeit.">學習：最重要的不是成果，而是反覆嘗試的過程，不僅讓孩子學習木工，也提升孩子解決問題的能力。</li>
        </ul>
      </div>
      <div class="bg-white border border-stone-200/60 rounded-md p-8">
        <h3 class="text-h3 font-serif font-bold text-wood-800 mb-4 flex items-center gap-3"><i class="fa-solid fa-spray-can-sparkles text-forest-600"></i> <span data-en="Caring for Your Wooden Toy" data-ja="木製おもちゃのお手入れ方法" data-de="Pflege Ihres Holzspielzeugs">木製品的保護方式</span></h3>
        <p class="text-body text-stone-600 mb-3" data-en="We recommend oiling any wooden parts once the project is complete:" data-ja="作品が完成したら、木の部分にオイルを塗ってお手入れすることをおすすめします：" data-de="Wir empfehlen, alle Holzteile nach Fertigstellung des Projekts zu ölen:">建議完成品中，有木質的地方都能上油保養喔！以下為上油步驟：</p>
        <ol class="space-y-2 text-body text-stone-600 leading-relaxed list-decimal pl-5">
          <li data-en="Prepare two light-colored cloths and a small amount of wood wax oil or olive oil." data-ja="明るい色の布を2枚と、少量の木ワックスオイルまたはオリーブオイルを用意します。" data-de="Bereiten Sie zwei helle Tücher und etwas Holzwachsöl oder Olivenöl vor.">預備兩塊淺色棉布與少許木蠟油或橄欖油。</li>
          <li data-en="Dab a cloth with oil and apply it evenly over the surface of the wooden piece." data-ja="布にオイルを含ませ、木製品の表面に均一に塗り広げます。" data-de="Tränken Sie ein Tuch mit Öl und tragen Sie es gleichmäßig auf die Oberfläche des Holzstücks auf.">使用棉布沾塗油，均勻塗佈於木製品表面。</li>
          <li data-en="With a second cloth, buff back and forth until the surface no longer feels tacky." data-ja="もう1枚の布で、表面がべたつかなくなるまで前後にこすります。" data-de="Reiben Sie mit einem zweiten Tuch hin und her, bis sich die Oberfläche nicht mehr klebrig anfühlt.">使用另外一塊棉布，用來回的方式推油，直到表面不會有明顯的沾黏感。</li>
          <li data-en="Leave the piece in a well-ventilated spot to air-dry." data-ja="風通しの良い場所に置いて自然乾燥させます。" data-de="Lassen Sie das Stück an einem gut belüfteten Ort trocknen.">將製品置於通風處陰乾即可。</li>
        </ol>
        <p class="text-caption text-stone-400 mt-4" data-en="Contains small parts. Keep away from swallowing or inhalation risk — adult supervision is recommended." data-ja="小さな部品が含まれています。誤飲・誤嚥に注意し、大人の監督のもとでご使用ください。" data-de="Enthält Kleinteile. Verschluckungs- und Erstickungsgefahr vermeiden — Aufsicht durch Erwachsene wird empfohlen.">本產品內含小零件，小心勿吞食或吸入，建議由成人陪同監督使用。</p>
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

  // 多語系切換：每個可翻譯的元素在 HTML 裡用 data-en / data-ja / data-de 標記對應的翻譯內容，
  // 中文就是元素原本寫在檔案裡的內容，不用另外標記。
  // 選擇的語言存在 localStorage，跨頁面導覽時會記住，不用每頁重選。
  const LANG_LABELS = { zh: '中', en: 'EN', ja: '日', de: 'DE' };
  const LANG_HTML_TAG = { zh: 'zh-TW', en: 'en', ja: 'ja', de: 'de' };

  let currentLang = 'zh';

  function applyLanguage(lang) {
    if (!LANG_LABELS[lang]) lang = 'zh';
    currentLang = lang;
    document.querySelectorAll('[data-en]').forEach((el) => {
      if (el.dataset.zhCache === undefined) el.dataset.zhCache = el.innerHTML;
      if (lang === 'zh') {
        el.innerHTML = el.dataset.zhCache;
      } else {
        const translated = el.getAttribute(`data-${lang}`);
        // 若該語言尚未補上翻譯，先退回英文，最後才退回中文，避免頁面出現空白
        el.innerHTML = translated || el.getAttribute('data-en') || el.dataset.zhCache;
      }
    });
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    const currentLabel = document.getElementById('langCurrentLabel');
    if (currentLabel) currentLabel.textContent = LANG_LABELS[lang];
    document.documentElement.lang = LANG_HTML_TAG[lang] || 'zh-TW';
    try { localStorage.setItem('site-lang', lang); } catch (e) { /* 若無法使用 localStorage 就只切換當前頁面 */ }
  }

  // 修正舊 bug：director.html / updates.html / lessons.html / lesson-view.html
  // 在動態插入 CMS 資料後都會呼叫 window.applyLanguage(window.getCurrentLang())，
  // 但這兩個函式從來沒有掛到 window 上，導致呼叫時直接噴錯、新插入的內容不會套用目前語言。
  window.applyLanguage = applyLanguage;
  window.getCurrentLang = () => currentLang;

  let savedLang = 'zh';
  try { savedLang = localStorage.getItem('site-lang') || 'zh'; } catch (e) { /* 忽略 */ }
  applyLanguage(savedLang);

  // 語言選單開關（桌機版下拉選單）
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langDropdown = document.getElementById('langDropdown');
  if (langToggleBtn && langDropdown) {
    langToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = langDropdown.classList.toggle('open');
      langToggleBtn.setAttribute('aria-expanded', String(isOpen));
    });
    document.addEventListener('click', (e) => {
      if (!langDropdown.contains(e.target) && !langToggleBtn.contains(e.target)) {
        langDropdown.classList.remove('open');
        langToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-btn');
    if (!btn) return;
    applyLanguage(btn.dataset.lang);
    if (langDropdown) langDropdown.classList.remove('open');
    if (langToggleBtn) langToggleBtn.setAttribute('aria-expanded', 'false');
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