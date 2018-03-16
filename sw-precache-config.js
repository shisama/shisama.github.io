module.exports = {
  staticFileGlobs: [
    '**.html',
    '**.js',
    'js/**.js',
    'img/**.*',
    'https://cdn.ampproject.org/v0.js',
    'https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js'
  ],
  runtimeCaching: [{
    urlPattern: /this\\.is\\.a\\.regex/,
    handler: 'networkFirst'
  }]
};