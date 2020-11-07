const path = require("path");

module.exports = {
  "globDirectory": "./docs",
  "globPatterns": [
    "**/*.{ico,png,svg,html,css,js}",
    "*.webmanifest"
  ],
  "globIgnores": [
    "gulpfile.js",
    "workbox-config.js",
    "src/**/**.*",
    "**/node_modules/**/**.*"
  ],
  "swDest": path.resolve(__dirname, "docs", "sw.js"),
  "runtimeCaching": [{
    urlPattern: new RegExp('^https://cdn.ampproject.org'),
    handler: "CacheFirst",
    options: {
      cacheableResponse: {
        statuses: [0, 200]
      }
    }

  }]
};