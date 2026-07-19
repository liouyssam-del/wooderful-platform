# 「最新動態」內容管理後台 — 設定與測試說明

## 這次做了什麼

把「最新動態」從你手刻的靜態卡片，改成「範本 + 資料」的架構：
- 每一則動態現在是 `templates/updates/` 資料夾底下的一個檔案（例如 `2026-06-forest-sustainability-trial.md`），裡面只有標題、日期、內文（中/英/日/德）這些欄位，沒有任何 HTML 排版
- `templates/updates.njk` 是「樣板」，負責把所有動態檔案讀出來，套用跟現在一模一樣的卡片樣式，組成 `updates.html`
- `admin/` 資料夾是給教授用的後台介面（Decap CMS），登入後看到的是填表單的畫面，不是程式碼

**重要：這次改造只動到「最新動態」這一頁，其他頁面（首頁、計畫主持人、教案、合作夥伴等）完全沒有變動，之後會用同樣的方式逐步加進來。**

## ⚠️ 我沒辦法在這裡實際跑起來測試

我這邊的工作環境沒有對外網路，沒辦法執行 `npm install` 去下載 Eleventy 套件，所以這份設定是我依照 Eleventy 和 Decap CMS 的標準寫法手動寫出來的，語法我已經仔細檢查過，但沒辦法在我這邊實際建置一次確認 100% 沒問題。

不過 **Netlify 的建置環境本身是有網路的**，所以只要照下面步驟部署上去，Netlify 那邊會自己下載套件、執行建置——真正的測試會發生在那個時候。因為這次改動只影響 `updates.html` 這一個頁面，就算建置出狀況，也不會波及其他頁面，风险算是可控的。

如果你想更保守一點，可以先用 Netlify 的「分支預覽」（deploy preview）部署到一個測試網址確認沒問題，再合併到正式站。

## 部署步驟

1. 把這次给你的檔案，依照原本的資料夾結構放進你的 GitHub repo：
   - `package.json`、`.eleventy.js`、`netlify.toml` 放在 repo 最外層（跟現有的 `index.html` 同一層）
   - `templates/` 整個資料夾放進 repo 最外層
   - `admin/` 整個資料夾放進 repo 最外層
   - **注意**：如果你的 repo 已經有 `netlify.toml`，要跟這次的內容合併，不要直接覆蓋掉舊的設定
2. VS Code Source Control → 儲存並 Sync Changes
3. Netlify 會自動抓到新的 commit，這次因為多了 `package.json`，Netlify 會自動先跑 `npm install` 再跑 `npm run build`（這在 `netlify.toml` 裡設定好了），大約會比平常部署多花 30 秒到 1 分鐘
4. 部署完成後，到 `你的網址/updates.html` 確認畫面跟原本一樣，三則動態都還在

## 開啟後台登入功能（讓教授能真的登入編輯）

Decap CMS 需要「Netlify Identity」+「Git Gateway」這兩個功能，這是在 Netlify 網站的後台設定，不是程式碼，需要你手動點幾下：

1. 登入 Netlify → 選你的網站 → 左側選單找到 **Identity**
2. 點 **Enable Identity**
3. 進到 Identity 頁面後，找到 **Services** → **Git Gateway** → 點 **Enable Git Gateway**（這一步會需要你用 GitHub 帳號授權一次）
4. 回到 Identity 頁面，點 **Invite users**，輸入教授的 email，他會收到一封邀請信
5. 教授點信裡的連結，設定密碼後，就可以到 `你的網址/admin/` 登入後台了

## 教授之後怎麼新增一則動態

1. 到 `你的網址/admin/` 登入
2. 左側選單點「最新動態」
3. 點右上角「New 最新動態」（或類似字樣）
4. 填標題、日期、內容（中文一定要填，英/日/德文可以先留白，我之後可以幫忙補上）
5. 點「Publish」發布，網站會自動重新部署，大約 1-2 分鐘後 `updates.html` 就會出現新的一則

## 下一步

確認這一頁運作順利之後，我會用同樣的模式，接著把「計畫主持人」跟「教案」也改造成範本化架構，讓教授能透過同一個後台編輯內容、甚至（教案的部分）新增全新的教案頁面。
