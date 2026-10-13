#!/usr/bin/env node
/*
 * 把 data/lessons/ 底下每一份獨立的教案 JSON 檔案，彙整成前端實際在讀的
 * data/lessons-extra.json（{ "items": [...] } 格式）。
 *
 * 為什麼需要這支腳本：
 * 後台 CMS 已經改成「每份教案存成自己獨立的檔案」（data/lessons/<slug>.json），
 * 這樣老師跟學生助理同時編輯不同教案時，不會因為搶改同一個大檔案而卡住、
 * 衝突。但網站前台（lessons.html、layout.js 下拉選單、lesson-view.html、
 * lesson-viewer.html）一直以來都是直接 fetch 單一一份彙整好的
 * data/lessons-extra.json，為了不用去改前台任何程式碼，這支腳本負責在
 * 每次有教案發佈後，自動把 data/lessons/ 底下所有檔案重新彙整回那份
 * 前台在讀的 data/lessons-extra.json。
 *
 * 這支腳本本身不會被手動執行，是透過
 * .github/workflows/build-lessons-index.yml 這個 GitHub Action，
 * 在 data/lessons/** 有變動並且推送到 main 分支時自動觸發、自動 commit
 * 回去，整個過程不需要人工介入，Cloudflare Pages 偵測到新 commit 後
 * 就會照常自動部署最新版本。
 */

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const LESSONS_DIR = path.join(REPO_ROOT, 'data', 'lessons');
const OUTPUT_FILE = path.join(REPO_ROOT, 'data', 'lessons-extra.json');

function readLessonFiles() {
  if (!fs.existsSync(LESSONS_DIR)) {
    console.error(`[build-lessons-index] 找不到資料夾：${LESSONS_DIR}`);
    process.exit(1);
  }

  const files = fs
    .readdirSync(LESSONS_DIR)
    .filter((name) => name.endsWith('.json'))
    .sort();

  const items = [];
  const errors = [];

  for (const file of files) {
    const fullPath = path.join(LESSONS_DIR, file);
    let raw;
    try {
      raw = fs.readFileSync(fullPath, 'utf8');
    } catch (e) {
      errors.push(`${file}：讀取失敗 - ${e.message}`);
      continue;
    }

    let data;
    try {
      data = JSON.parse(raw);
    } catch (e) {
      errors.push(`${file}：不是合法的 JSON - ${e.message}`);
      continue;
    }

    if (!data || typeof data !== 'object' || Array.isArray(data)) {
      errors.push(`${file}：內容格式不是物件，略過`);
      continue;
    }

    if (!data.slug) {
      // 保險：檔名本身通常就是 slug，CMS 正常存檔一定會有這個欄位，
      // 這裡只是避免手動誤改檔案漏填時整個 build 噴掉。
      data.slug = path.basename(file, '.json');
      errors.push(`${file}：內容缺少 slug 欄位，已自動補上檔名當作 slug`);
    }

    if (!data.title_zh) {
      errors.push(`${file}：缺少 title_zh（教案名稱），仍會收錄，但前台顯示可能是空的`);
    }

    if (!data.sort_date) {
      errors.push(`${file}：缺少 sort_date（排序日期），已略過，不納入彙整結果`);
      continue;
    }

    items.push(data);
  }

  if (errors.length) {
    console.warn('[build-lessons-index] 發現以下問題（已盡量處理，不會中斷流程）：');
    errors.forEach((msg) => console.warn('  - ' + msg));
  }

  return items;
}

function main() {
  const items = readLessonFiles();

  // 跟前台原本的排序邏輯一致：依 sort_date 新到舊。
  // （前台 lessons.html / layout.js 其實自己也會再排序一次，這裡排序
  // 主要是讓輸出的 JSON 檔案本身順序穩定、好讀、好比對 git diff。）
  items.sort((a, b) => new Date(b.sort_date) - new Date(a.sort_date));

  const output = { items };
  const json = JSON.stringify(output, null, 2) + '\n';

  fs.writeFileSync(OUTPUT_FILE, json, 'utf8');

  console.log(`[build-lessons-index] 完成：共彙整 ${items.length} 份教案 → ${path.relative(REPO_ROOT, OUTPUT_FILE)}`);
  items.forEach((it) => {
    console.log(`  - ${it.sort_date}  ${it.title_zh || '(未命名)'}  (${it.slug})`);
  });
}

main();
