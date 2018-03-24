module.exports = {
  "globDirectory": ".",
  "globPatterns": [
    "**/*.{ico,png,svg,html,css,js}",
    "manifest.json"
  ],
  "globIgnores": [
    "*.js",
    "**/node_modules/**/**.*"
  ],
  "swDest": "sw.js",
  "runtimeCaching": [{
    urlPattern: new RegExp('^https://cdn.ampproject.org'),
    handler: 'staleWhileRevalidate',
    options: {
      cacheableResponse: {
        statuses: [0, 200]
      }
    }

  }]
};