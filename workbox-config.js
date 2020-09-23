module.exports = {
  "globDirectory": ".",
  "globPatterns": [
    "**/*.{ico,png,svg,html,css,js}",
    "manifest.json"
  ],
  "globIgnores": [
    "gulpfile.js",
    "workbox-config.js",
    "src/**/**.*",
    "**/node_modules/**/**.*"
  ],
  "swDest": "sw.js",
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