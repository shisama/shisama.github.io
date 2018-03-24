module.exports = {
  "globDirectory": ".",
  "globPatterns": [
    "**/*.{ico,png,svg,html,json,css,pug,js}"
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