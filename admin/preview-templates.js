/* 自訂 Decap CMS 後台的「即時預覽」樣式，讓右側預覽長得接近網站實際顯示的樣子，
   而不是單純條列欄位名稱與內容。這個檔案只影響後台編輯畫面，不影響網站前台。 */

var h = window.h;
var createClass = window.createClass;

/* ── 最新動態：預覽卡片，模擬 updates.html 的 .activity-card 樣式 ── */
var UpdatesExtraPreview = createClass({
  render: function () {
    var entry = this.props.entry;
    var data = entry.get('data');

    var categoryLabels = {
      intl: '國際交流',
      wood: '木育玩具開發與推廣',
      bamboo: '竹育樂',
      industry: '產學合作計畫成果',
    };

    // 資料依分類分成 4 組獨立清單（intl / wood / bamboo / industry），這裡攤平成一個陣列，
    // 並補回 category 方便沿用底下既有的卡片渲染邏輯。
    var items = [];
    ['intl', 'wood', 'bamboo', 'industry'].forEach(function (cat) {
      var list = data && data.get(cat);
      if (list && list.size) {
        list.forEach(function (item) {
          items.push({ category: cat, item: item });
        });
      }
    });

    if (items.length === 0) {
      return h('div', { style: { padding: '24px', fontFamily: 'sans-serif', color: '#999' } }, '目前沒有任何項目');
    }

    var cards = items.map(function (entryPair, i) {
      var category = entryPair.category;
      var item = entryPair.item;
      var dateLabel = item.get('date_label') || '';
      var titleZh = item.get('title_zh') || '（尚未填寫標題）';
      var descZh = item.get('desc_zh') || '';
      var images = item.get('images'); // 圖片清單（新格式，每張可加說明）
      var legacyImage = item.get('image'); // 舊格式：單張圖片欄位（相容用）

      return h(
        'div',
        {
          key: i,
          style: {
            background: '#fff',
            border: '1px solid #e7e2d8',
            borderRadius: '14px',
            padding: '20px 24px',
            marginBottom: '18px',
            fontFamily: '"Noto Sans TC", sans-serif',
          },
        },
        h(
          'div',
          {
            style: {
              display: 'inline-block',
              fontSize: '13px',
              fontWeight: 700,
              color: '#2d4920',
              background: '#dcebc9',
              borderRadius: '9999px',
              padding: '3px 14px',
              marginBottom: '10px',
            },
          },
          dateLabel + (category ? '　·　' + (categoryLabels[category] || category) : '')
        ),
        h(
          'h3',
          {
            style: {
              fontFamily: '"Noto Serif TC", serif',
              fontWeight: 700,
              fontSize: '20px',
              color: '#3d2b20',
              margin: '0 0 8px 0',
            },
          },
          titleZh
        ),
        descZh
          ? h(
              'p',
              { style: { fontSize: '15px', color: '#5c5449', lineHeight: 1.7, margin: '0 0 12px 0' } },
              descZh
            )
          : null,
        images && images.size
          ? h(
              'div',
              { style: { display: 'flex', flexWrap: 'wrap', gap: '12px' } },
              images.toArray().map(function (img, idx) {
                var src = img.get ? img.get('src') : '';
                var caption = img.get ? img.get('caption') : '';
                if (!src) return null;
                return h(
                  'div',
                  { key: idx, style: { width: '160px' } },
                  h('img', {
                    src: src,
                    style: { width: '100%', maxHeight: '160px', objectFit: 'contain', borderRadius: '8px', border: '1px solid #e7e2d8', background: '#f4f1ea', padding: '6px', boxSizing: 'border-box' },
                  }),
                  caption ? h('div', { style: { fontSize: '12px', color: '#7d7164', marginTop: '4px' } }, caption) : null
                );
              })
            )
          : legacyImage
          ? h('img', {
              src: legacyImage,
              style: { maxWidth: '100%', maxHeight: '220px', borderRadius: '8px', border: '1px solid #e7e2d8' },
            })
          : null
      );
    });

    return h(
      'div',
      { style: { padding: '24px', background: '#fbf9f5' } },
      h('p', { style: { fontSize: '12px', color: '#a8998a', marginBottom: '16px' } }, '（預覽樣式僅供參考，實際網站排版可能略有差異）'),
      cards
    );
  },
});

CMS.registerPreviewTemplate('updates_extra', UpdatesExtraPreview);

/* ── 分享教案：預覽卡片，模擬 lessons.html 的教案卡片樣式 ── */
var LessonsExtraPreview = createClass({
  render: function () {
    var entry = this.props.entry;
    var items = entry.getIn(['data', 'items']);
    if (!items || items.size === 0) {
      return h('div', { style: { padding: '24px', fontFamily: 'sans-serif', color: '#999' } }, '目前沒有任何教案');
    }

    var cards = items.map(function (item, i) {
      var titleZh = item.get('title_zh') || '（尚未填寫教案名稱）';
      var summaryZh = item.get('summary_zh') || '';
      var grade = item.get('grade') || '';
      var duration = item.get('duration') || '';
      var lessonType = item.get('type') || 'html'; // 教案呈現方式：html（完整教案頁，預設）／images（PNG 圖片頁）
      var images = item.get('images'); // 圖片清單（活動花絮照片），第一張當作縮圖
      var pageImages = item.get('page_images'); // PNG 圖片頁專用：教案內容本身的頁面截圖
      var legacyImage = item.get('image'); // 舊格式：單張圖片欄位（相容用）
      var coverImage = (images && images.size && images.get(0).get('src'))
        || (pageImages && pageImages.size && pageImages.get(0).get('src'))
        || legacyImage || '';
      var materials = item.get('materials');
      var steps = item.get('steps');

      return h(
        'div',
        {
          key: i,
          style: {
            background: '#fff',
            border: '1px solid #e7e2d8',
            borderRadius: '14px',
            padding: '24px',
            marginBottom: '18px',
            fontFamily: '"Noto Sans TC", sans-serif',
            textAlign: 'center',
          },
        },
        coverImage
          ? h('img', {
              src: coverImage,
              style: { width: '80px', height: '80px', objectFit: 'cover', borderRadius: '9999px', margin: '0 auto 12px auto', display: 'block' },
            })
          : null,
        lessonType === 'images'
          ? h(
              'div',
              {
                style: {
                  display: 'inline-block', fontSize: '12px', fontWeight: 700, color: '#6a4c2d',
                  background: '#f5efe6', borderRadius: '9999px', padding: '3px 14px', marginBottom: '8px', marginRight: '6px',
                },
              },
              'PNG 圖片頁' + (pageImages && pageImages.size > 1 ? '（共 ' + pageImages.size + ' 頁）' : '')
            )
          : null,
        h(
          'div',
          {
            style: {
              display: 'inline-block',
              fontSize: '12px',
              fontWeight: 700,
              color: '#5e8b3a',
              background: '#eef4ea',
              borderRadius: '9999px',
              padding: '3px 14px',
              marginBottom: '10px',
            },
          },
          'STEAM 教案'
        ),
        h(
          'h3',
          { style: { fontFamily: '"Noto Serif TC", serif', fontWeight: 700, fontSize: '20px', color: '#3d2b20', margin: '0 0 8px 0' } },
          titleZh
        ),
        summaryZh ? h('p', { style: { fontSize: '14px', color: '#5c5449', lineHeight: 1.6, margin: '0 0 10px 0' } }, summaryZh) : null,
        h('p', { style: { fontSize: '13px', color: '#8c8072' } }, [grade, duration].filter(Boolean).join('　·　')),
        images && images.size > 1
          ? h(
              'div',
              { style: { display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginTop: '10px' } },
              images.toArray().slice(1).map(function (img, idx) {
                var src = img.get ? img.get('src') : '';
                var caption = img.get ? img.get('caption') : '';
                if (!src) return null;
                return h(
                  'div',
                  { key: idx, style: { width: '70px' } },
                  h('img', { src: src, style: { width: '100%', height: '70px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #e7e2d8' } }),
                  caption ? h('div', { style: { fontSize: '11px', color: '#8c8072', marginTop: '2px' } }, caption) : null
                );
              })
            )
          : null,
        pageImages && pageImages.size > 1
          ? h(
              'div',
              { style: { display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginTop: '10px' } },
              pageImages.toArray().map(function (img, idx) {
                var src = img.get ? img.get('src') : '';
                if (!src) return null;
                return h(
                  'div',
                  { key: idx, style: { width: '56px', height: '56px', border: idx === 0 ? '2px solid #446b2a' : '1px solid #e7e2d8', borderRadius: '6px', overflow: 'hidden' } },
                  h('img', { src: src, style: { width: '100%', height: '100%', objectFit: 'cover' } })
                );
              })
            )
          : null,
        materials && materials.size
          ? h(
              'div',
              { style: { textAlign: 'left', marginTop: '14px', fontSize: '13px', color: '#5c5449' } },
              h('strong', {}, '材料：'),
              materials.toArray().join('、')
            )
          : null,
        steps && steps.size
          ? h(
              'div',
              { style: { textAlign: 'left', marginTop: '10px', fontSize: '13px', color: '#5c5449' } },
              h('strong', {}, '步驟：'),
              h(
                'ol',
                { style: { margin: '4px 0 0 0', paddingLeft: '20px' } },
                steps.toArray().map(function (s, idx) { return h('li', { key: idx }, s); })
              )
            )
          : null
      );
    });

    return h(
      'div',
      { style: { padding: '24px', background: '#fbf9f5' } },
      h('p', { style: { fontSize: '12px', color: '#a8998a', marginBottom: '16px' } }, '（預覽樣式僅供參考，實際網站排版可能略有差異）'),
      cards.toArray()
    );
  },
});

CMS.registerPreviewTemplate('lessons_extra', LessonsExtraPreview);

/* ── 「計畫主持人（頁面內容）」：原本 8 個分頁整合成一份大檔案，現在已經拆成 8 個各自獨立的檔案
   （director-header.json／director-honors.json／director-education.json／director-exchange.json／
   director-projects-extra.json／director-teaching.json／director-publications.json／director-thesis.json），
   每個檔案各自一個 registerPreviewTemplate，name 要用這個檔案自己的 name（例如 director_header），
   不是外層 collection 的 name（director_profile）。 */

var previewWrap = { padding: '24px', background: '#fbf9f5', fontFamily: '"Noto Sans TC", sans-serif' };
var previewNote = h('p', { style: { fontSize: '12px', color: '#a8998a', marginBottom: '16px' } }, '（預覽樣式僅供參考，實際網站排版可能略有差異）');
var sectionHeading = function (text) {
  return h('h3', { style: { fontSize: '17px', fontWeight: 700, color: '#446B2A', margin: '28px 0 12px 0', borderTop: '1px solid #e7e2d8', paddingTop: '20px' } }, text);
};

/* ── 「榮譽」：已從「計畫主持人」大表單獨立出來的一份清單 ── */
var DirectorHonorsPreview = createClass({
  render: function () {
    var entry = this.props.entry;
    var items = entry.getIn(['data', 'items']);
    return h(
      'div',
      { style: previewWrap },
      previewNote,
      sectionHeading('② 榮譽'),
      items && items.size
        ? h('ul', { style: { margin: 0, paddingLeft: '20px' } }, items.toArray().map(function (item, i) {
            return h('li', { key: i, style: { fontSize: '14px', color: '#3d2b20', marginBottom: '10px', lineHeight: 1.7 } }, item.get('text_zh') || '（尚未填寫）');
          }))
        : h('div', { style: { color: '#999', fontSize: '13px' } }, '目前沒有任何項目')
    );
  },
});
CMS.registerPreviewTemplate('director_honors', DirectorHonorsPreview);

var cellStyle = { padding: '10px 14px', fontSize: '14px', color: '#3d2b20', textAlign: 'left' };

/* ── ① 頁首職稱 ── */
var DirectorHeaderPreview = createClass({
  render: function () {
    var header = this.props.entry.get('data');
    var affiliation = (header && header.get('affiliation_zh')) || '（尚未填寫單位）';
    var position = (header && header.get('position_zh')) || '（尚未填寫現職）';
    return h(
      'div',
      { style: previewWrap },
      previewNote,
      sectionHeading('① 頁首職稱'),
      h('div', { style: { background: '#eef4ea', borderRadius: '12px', padding: '20px 24px' } },
        h('p', { style: { fontSize: '15px', color: '#3d2b20', margin: '0 0 8px 0' } }, affiliation),
        h('p', { style: { fontSize: '15px', color: '#3d2b20', margin: 0 } }, position)
      )
    );
  },
});
CMS.registerPreviewTemplate('director_header', DirectorHeaderPreview);

/* ── ③ 主要學歷 ── */
var DirectorEducationPreview = createClass({
  render: function () {
    var education = this.props.entry.get('data');
    var eduRows = education && education.get('rows');
    var eduNote = education && education.get('note_zh');
    return h(
      'div',
      { style: previewWrap },
      previewNote,
      sectionHeading('③ 主要學歷'),
      eduRows && eduRows.size
        ? eduRows.toArray().map(function (row, i) {
            var lines = row.get('lines');
            return h('div', { key: i, style: { marginBottom: '14px' } },
              h('div', { style: { fontSize: '13px', fontWeight: 700, color: '#5e8b3a', marginBottom: '4px' } }, row.get('period') || ''),
              lines && lines.size
                ? lines.toArray().map(function (line, j) {
                    return h('p', { key: j, style: { fontSize: '14px', color: '#3d2b20', margin: '0 0 2px 0' } }, line.get('zh') || '');
                  })
                : null
            );
          })
        : h('div', { style: { color: '#999', fontSize: '13px' } }, '目前沒有任何項目'),
      eduNote ? h('p', { style: { fontSize: '13px', color: '#7d7164', marginTop: '12px' } }, eduNote) : null
    );
  },
});
CMS.registerPreviewTemplate('director_education', DirectorEducationPreview);

/* ── ④ 國際交流 ── */
var DirectorExchangePreview = createClass({
  render: function () {
    var exchange = this.props.entry.get('data');
    var exchangeItems = exchange && exchange.get('items');
    return h(
      'div',
      { style: previewWrap },
      previewNote,
      sectionHeading('④ 國際交流'),
      exchangeItems && exchangeItems.size
        ? exchangeItems.toArray().map(function (item, i) {
            return h('div', { key: i, style: { marginBottom: '14px' } },
              h('div', { style: { fontSize: '13px', fontWeight: 700, color: '#5e8b3a', marginBottom: '4px' } }, item.get('period') || ''),
              h('p', { style: { fontSize: '14px', color: '#3d2b20', margin: 0 } }, item.get('desc_zh') || '（尚未填寫）')
            );
          })
        : h('div', { style: { color: '#999', fontSize: '13px' } }, '目前沒有任何項目')
    );
  },
});
CMS.registerPreviewTemplate('director_exchange', DirectorExchangePreview);

/* ── ⑤ 研究計畫（國科會研究計畫 / 產學合作計畫） ── */
var DirectorResearchProjectsPreview = createClass({
  render: function () {
    var researchProjects = this.props.entry.get('data');
    var projectTableLabels = { nstc: '國科會研究計畫', industry: '產學合作計畫' };
    var projectItems = researchProjects && researchProjects.get('items');
    return h(
      'div',
      { style: previewWrap },
      previewNote,
      sectionHeading('⑤ 研究計畫'),
      projectItems && projectItems.size
        ? h('table', { style: { width: '100%', borderCollapse: 'collapse', background: '#fff', border: '1px solid #e7e2d8', borderRadius: '8px' } },
            h('thead', {}, h('tr', { style: { background: '#f4f1ea', borderBottom: '2px solid #e7e2d8' } },
              h('th', { style: cellStyle }, '民國年'),
              h('th', { style: cellStyle }, '學門'),
              h('th', { style: cellStyle }, '計畫名稱'),
              h('th', { style: cellStyle }, '起迄／狀態'),
              h('th', { style: cellStyle }, '表格分類')
            )),
            h('tbody', {}, projectItems.toArray().map(function (item, i) {
              return h('tr', { key: i, style: { borderBottom: '1px solid #e7e2d8' } },
                h('td', { style: cellStyle }, item.get('year_roc') || ''),
                h('td', { style: cellStyle }, item.get('field_zh') || ''),
                h('td', { style: cellStyle }, item.get('title_zh') || '（尚未填寫）'),
                h('td', { style: cellStyle }, item.get('duration_zh') || ''),
                h('td', { style: Object.assign({}, cellStyle, { color: '#5e8b3a', fontWeight: 600 }) }, projectTableLabels[item.get('table')] || item.get('table') || '')
              );
            }))
          )
        : h('div', { style: { color: '#999', fontSize: '13px' } }, '目前沒有任何項目')
    );
  },
});
CMS.registerPreviewTemplate('director_research_projects', DirectorResearchProjectsPreview);

/* ── ⑥ 教學暨設計實務經歷 ── */
function renderPeriodList(list) {
  if (!list || list.size === 0) return h('div', { style: { color: '#999', fontSize: '13px' } }, '（尚未填寫）');
  return list.toArray().map(function (item, i) {
    return h('div', { key: i, style: { marginBottom: '10px' } },
      h('div', { style: { fontSize: '13px', fontWeight: 700, color: '#5e8b3a', marginBottom: '2px' } }, item.get('period') || ''),
      h('p', { style: { fontSize: '14px', color: '#3d2b20', margin: 0 } }, item.get('desc_zh') || '')
    );
  });
}
var DirectorTeachingPreview = createClass({
  render: function () {
    var teaching = this.props.entry.get('data');
    return h(
      'div',
      { style: previewWrap },
      previewNote,
      sectionHeading('⑥ 教學暨設計實務經歷'),
      h('h4', { style: { fontSize: '15px', color: '#3d2b20', margin: '0 0 8px 0' } }, '【教學】'),
      renderPeriodList(teaching && teaching.get('teaching')),
      h('h4', { style: { fontSize: '15px', color: '#3d2b20', margin: '16px 0 8px 0' } }, '【設計實務】'),
      renderPeriodList(teaching && teaching.get('design'))
    );
  },
});
CMS.registerPreviewTemplate('director_teaching', DirectorTeachingPreview);

/* ── ⑦ 研究發表 ── */
function renderCatBlock(cat, key) {
  var items = cat.get('items');
  return h('div', { key: key, style: { marginBottom: '18px' } },
    h('h4', { style: { fontSize: '15px', fontWeight: 700, color: '#2d4920', margin: '0 0 8px 0' } }, cat.get('title_zh') || '（尚未填寫類別標題）'),
    items && items.size
      ? h('ol', { style: { margin: 0, paddingLeft: '20px' } }, items.toArray().map(function (item, j) {
          var text = (item && item.get) ? (item.get('text') || '') : item;
          var url = (item && item.get) ? item.get('url') : '';
          return h('li', { key: j, style: { fontSize: '13px', color: '#5c5449', marginBottom: '6px', lineHeight: 1.6 } },
            text,
            url ? h('span', { style: { color: '#446b2a', marginLeft: '6px' } }, '🔗') : null
          );
        }))
      : h('div', { style: { color: '#999', fontSize: '13px' } }, '（此類別尚無引用項目）')
  );
}
var DirectorPublicationsPreview = createClass({
  render: function () {
    var publications = this.props.entry.get('data');
    // 一般分類（學術期刊論文／相關學報出版論文／發明專利／新型專利）：引用內容＋原文連結。
    var pubCategories = publications && publications.get('categories');
    // 「國際學術研討會」是這份檔案裡單獨的一個物件（international_conference），引用內容＋英/日/德文，不附連結。
    var intlConf = publications && publications.get('international_conference');
    var catBlocks = pubCategories && pubCategories.size ? pubCategories.toArray().map(renderCatBlock) : [];
    if (intlConf) {
      var intlItems = intlConf.get('items');
      catBlocks.push(
        h('div', { key: 'intl_conf', style: { marginBottom: '18px' } },
          h('h4', { style: { fontSize: '15px', fontWeight: 700, color: '#2d4920', margin: '0 0 8px 0' } }, intlConf.get('title_zh') || '（尚未填寫類別標題）'),
          intlItems && intlItems.size
            ? h('ol', { style: { margin: 0, paddingLeft: '20px' } }, intlItems.toArray().map(function (item, j) {
                var text = (item && item.get) ? (item.get('text') || '') : item;
                return h('li', { key: j, style: { fontSize: '13px', color: '#5c5449', marginBottom: '6px', lineHeight: 1.6 } }, text);
              }))
            : h('div', { style: { color: '#999', fontSize: '13px' } }, '（此類別尚無引用項目）')
        )
      );
    }
    return h(
      'div',
      { style: previewWrap },
      previewNote,
      sectionHeading('⑦ 研究發表'),
      catBlocks.length ? catBlocks : h('div', { style: { color: '#999', fontSize: '13px' } }, '目前沒有任何類別')
    );
  },
});
CMS.registerPreviewTemplate('director_publications', DirectorPublicationsPreview);

/* ── ⑧ 研究生論文指導 ── */
var DirectorThesisPreview = createClass({
  render: function () {
    var thesis = this.props.entry.get('data');
    var thesisRows = thesis && thesis.get('rows');
    return h(
      'div',
      { style: previewWrap },
      previewNote,
      sectionHeading('⑧ 研究生論文指導'),
      thesisRows && thesisRows.size
        ? h('table', { style: { width: '100%', borderCollapse: 'collapse', background: '#fff', border: '1px solid #e7e2d8', borderRadius: '8px' } },
            h('thead', {}, h('tr', { style: { background: '#f4f1ea', borderBottom: '2px solid #e7e2d8' } },
              h('th', { style: cellStyle }, '論文題目'),
              h('th', { style: cellStyle }, '研究生'),
              h('th', { style: cellStyle }, '畢業年')
            )),
            h('tbody', {}, thesisRows.toArray().map(function (row, i) {
              return h('tr', { key: i, style: { borderBottom: '1px solid #e7e2d8' } },
                h('td', { style: cellStyle }, row.get('title_zh') || '（尚未填寫）'),
                h('td', { style: cellStyle }, row.get('student_zh') || ''),
                h('td', { style: cellStyle }, row.get('year') || '')
              );
            }))
          )
        : h('div', { style: { color: '#999', fontSize: '13px' } }, '目前沒有任何項目')
    );
  },
});
CMS.registerPreviewTemplate('director_thesis', DirectorThesisPreview);
