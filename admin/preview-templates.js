/* 自訂 Decap CMS 後台的「即時預覽」樣式，讓右側預覽長得接近網站實際顯示的樣子，
   而不是單純條列欄位名稱與內容。這個檔案只影響後台編輯畫面，不影響網站前台。 */

var h = window.h;
var createClass = window.createClass;

/* ── 最新動態：預覽卡片，模擬 updates.html 的 .activity-card 樣式 ── */
var UpdatesExtraPreview = createClass({
  render: function () {
    var entry = this.props.entry;
    var items = entry.getIn(['data', 'items']);
    if (!items || items.size === 0) {
      return h('div', { style: { padding: '24px', fontFamily: 'sans-serif', color: '#999' } }, '目前沒有任何項目');
    }

    var categoryLabels = {
      intl: '國際交流',
      wood: '木育玩具開發與推廣',
      bamboo: '竹育樂',
      industry: '產學合作計畫成果',
    };

    var cards = items.map(function (item, i) {
      var category = item.get('category') || '';
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
      cards.toArray()
    );
  },
});

/* ── 計畫主持人（研究計畫）：預覽表格列，模擬 director.html 的表格樣式 ── */
var DirectorProjectsPreview = createClass({
  render: function () {
    var entry = this.props.entry;
    var items = entry.getIn(['data', 'items']);
    if (!items || items.size === 0) {
      return h('div', { style: { padding: '24px', fontFamily: 'sans-serif', color: '#999' } }, '目前沒有任何項目');
    }

    var tableLabels = { nstc: '國科會研究計畫', industry: '產學合作計畫' };
    var cellStyle = { padding: '10px 14px', fontSize: '14px', color: '#3d2b20', textAlign: 'left' };

    var rows = items.map(function (item, i) {
      return h(
        'tr',
        { key: i, style: { borderBottom: '1px solid #e7e2d8' } },
        h('td', { style: cellStyle }, item.get('year_roc') || ''),
        h('td', { style: cellStyle }, item.get('field_zh') || ''),
        h('td', { style: cellStyle }, item.get('title_zh') || '（尚未填寫）'),
        h('td', { style: cellStyle }, item.get('duration_zh') || ''),
        h(
          'td',
          { style: Object.assign({}, cellStyle, { color: '#5e8b3a', fontWeight: 600 }) },
          tableLabels[item.get('table')] || item.get('table') || ''
        )
      );
    });


    return h(
      'div',
      { style: { padding: '24px', background: '#fbf9f5', fontFamily: '"Noto Sans TC", sans-serif' } },
      h('p', { style: { fontSize: '12px', color: '#a8998a', marginBottom: '16px' } }, '（預覽樣式僅供參考，實際網站排版可能略有差異）'),
      h(
        'table',
        { style: { width: '100%', borderCollapse: 'collapse', background: '#fff', border: '1px solid #e7e2d8', borderRadius: '8px' } },
        h(
          'thead',
          {},
          h(
            'tr',
            { style: { background: '#f4f1ea', borderBottom: '2px solid #e7e2d8' } },
            h('th', { style: cellStyle }, '民國年'),
            h('th', { style: cellStyle }, '學門'),
            h('th', { style: cellStyle }, '計畫名稱'),
            h('th', { style: cellStyle }, '起迄／狀態'),
            h('th', { style: cellStyle }, '表格分類')
          )
        ),
        h('tbody', {}, rows.toArray())
      )
    );
  },
});

CMS.registerPreviewTemplate('updates_extra', UpdatesExtraPreview);
// 修正舊 bug：files 型 collection 的預覽要註冊「檔案的 name」（director_projects_extra），
// 不是外層 collection 的 name（director_projects），否則預覽會退回純文字、樣式不生效。
CMS.registerPreviewTemplate('director_projects_extra', DirectorProjectsPreview);

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
      var images = item.get('images'); // 圖片清單（新格式），第一張當作縮圖
      var legacyImage = item.get('image'); // 舊格式：單張圖片欄位（相容用）
      var coverImage = (images && images.size && images.get(0).get('src')) || legacyImage || '';
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
