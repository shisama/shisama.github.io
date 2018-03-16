module.exports = {
  staticFileGlobs: [
    '**.html',
    'js/**.js',
    'img/**.*',
  ],
  runtimeCaching: [{
    urlPattern: /this\\.is\\.a\\.regex/,
    handler: 'networkFirst'
  }]
};