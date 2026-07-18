// tailwind-config.js
// 全站共用的 Tailwind 設定：色彩、字體、字級、間距
tailwind.config = {
  theme: {
    extend: {
      // 品牌色彩（原本遺漏，導致全站 text-wood-*／bg-forest-* 等 class 完全沒作用）
      colors: {
        wood:   { 100: '#f5efe6', 400: '#a57a4e', 600: '#6a4c2d', 800: '#3d2b20' },
        forest: { 100: '#eef4ea', 300: '#cfe1a6', 400: '#98b96a', 500: '#5e8b3a', 600: '#446b2a', 700: '#2d4920' },
        cream:  { DEFAULT: '#f8f4e9', dark: '#efe7d8' },
      },
      // 字體家族（原本遺漏，font-serif／font-sans 會退回瀏覽器預設字體）
      fontFamily: {
        serif: ['"Noto Serif TC"', 'Georgia', 'serif'],
        sans:  ['"Noto Sans TC"', 'system-ui', 'sans-serif'],
      },
      // 統一字級系統：內文／卡片／小標題
      fontSize: {
        'caption': ['12px', '1.5'],
        'body':    ['16px', '1.8'],
        'sub':     ['18px', '1.6'],
        'h3':      ['20px', '1.5'],
        'h2':      ['32px', '1.4'],
        'h1':      ['46px', '1.3'],
        // 首頁大區塊用的較大字級（原本是散落各處的 text-[Npx]，統一收進來管理）
        'lead':          ['22px', '1.8'],  // 大段落內文
        'card-title':    ['28px', '1.4'],  // 動態卡片標題
        'section-title': ['42px', '1.3'],  // 各段落大標題
        'display':       ['56px', '1.2'],  // 首頁 Hero 主標
      },
      // 統一全站 LOGO 大小
      spacing: {
        'logo-h': '90px',
      },
    },
  },
};
