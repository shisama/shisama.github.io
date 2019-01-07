const gulp = require('gulp');
const inline_source = require('gulp-inline-source');
const pug = require('gulp-pug');
const path = require('path');
var spawn = require('child_process').spawn;
var gutil = require('gulp-util');

gulp.task("html", function() {
  const src = path.resolve('src');
  const dest = path.resolve('./');

  return gulp.src(path.join(src, '*.pug'))
      .pipe(pug({pretty: false}))
      .pipe(gulp.dest(dest))
      .pipe(inline_source())
      .pipe(gulp.dest(dest));
});
