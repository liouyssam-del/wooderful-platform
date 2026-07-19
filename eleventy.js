module.exports = function (eleventyConfig) {
  // "最新動態" 資料集：讀取 templates/updates/*.md 每一篇的 frontmatter，
  // 依照 date 欄位新到舊排序，供 templates/updates.njk 迴圈輸出卡片。
  eleventyConfig.addCollection("updates", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("templates/updates/*.md")
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  });

  return {
    dir: {
      input: "templates",
      includes: "_includes",
      // 輸出路徑設成專案根目錄，這樣 build 出來的 updates.html
      // 會直接蓋掉現有位置，其他既有頁面完全不受影響、不會被搬動或改寫。
      output: ".",
    },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
