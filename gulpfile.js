const gulp = require('gulp');
const inline_source = require('gulp-inline-source');
const pug = require('gulp-pug');
const path = require('path');

gulp.task("html", function() {
  const src = path.resolve('src');
  const dest = path.resolve('./');

  gulp.src(path.join(src, '*.pug'))
      .pipe(pug({pretty: false}))
      .pipe(gulp.dest(dest))
      .pipe(inline_source())
      .pipe(gulp.dest(dest));
});