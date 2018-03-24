/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "favicon.ico",
    "revision": "b56cc23c910c205c80bd203703a4a848"
  },
  {
    "url": "img/avatar.png",
    "revision": "0276de5913ae5c8e7b08d0c2ed7e70fa"
  },
  {
    "url": "img/codepen.svg",
    "revision": "382c40fb684c0e800e0cedec7ff54f12"
  },
  {
    "url": "img/devto.png",
    "revision": "95bef5f02224ab67b315540daaf725c9"
  },
  {
    "url": "img/facebook.svg",
    "revision": "799b1e62de2aa7bf919ae277bf3c1dc5"
  },
  {
    "url": "img/github.svg",
    "revision": "71edeaefdc2f5a19dc84298669af6962"
  },
  {
    "url": "img/icons/icon-128x128.png",
    "revision": "24ebdea21daa6c27afd81c5d64e47266"
  },
  {
    "url": "img/icons/icon-144x144.png",
    "revision": "e5376ee4f88957a6b08eb1c6b94a663d"
  },
  {
    "url": "img/icons/icon-152x152.png",
    "revision": "02ab60957484b300d2e5cec907dd7e75"
  },
  {
    "url": "img/icons/icon-192x192.png",
    "revision": "c8954531f8358f67714ac65daa9d2743"
  },
  {
    "url": "img/icons/icon-384x384.png",
    "revision": "a5d8d87eb24b017debdefb95d6691fc0"
  },
  {
    "url": "img/icons/icon-512x512.png",
    "revision": "e87224e68ed4e05a83ecdb408099130d"
  },
  {
    "url": "img/icons/icon-72x72.png",
    "revision": "f130b7b68e2c0b633df77123f0689d5c"
  },
  {
    "url": "img/icons/icon-96x96.png",
    "revision": "5888d7ad0e4d55314317e88ba6819db8"
  },
  {
    "url": "img/npm.png",
    "revision": "1cdefa619bfa1e311e0018624f9603db"
  },
  {
    "url": "img/qiita.svg",
    "revision": "bdb266ed43392a19c8765e25f47baba9"
  },
  {
    "url": "img/speakerdeck.png",
    "revision": "79c390aab08992b6912d04d8f54418f7"
  },
  {
    "url": "img/twitter.svg",
    "revision": "f308d44e1b4981653100e5f6ced3d2c7"
  },
  {
    "url": "index.html",
    "revision": "ba62be6616e25e9e38ee393813aed5e2"
  },
  {
    "url": "src/css/style.css",
    "revision": "c7528176c230c88d44faf8d83b60226b"
  },
  {
    "url": "manifest.json",
    "revision": "7a1e6f66dda4b24874af0e773d092550"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/cdn.ampproject.org/, workbox.strategies.staleWhileRevalidate({ plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
