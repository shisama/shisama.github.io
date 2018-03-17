module.exports = {
  staticFileGlobs: [
    '**.html',
    '**.js',
    '**.json',
    'js/**.js',
    'img/**.*',
    'https://cdn.ampproject.org/v0.js',
    'https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js'
  ],
  runtimeCaching: [{
    urlPattern: '*',
    handler: 'networkFirst'
  },{
    urlPattern: /cdn\.ampproject\.org/,
    handler: 'fastest'
  }]
};