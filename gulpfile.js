const gulp = require('gulp');
const inline_source = require('gulp-inline-source');
const pug = require('gulp-pug');
const path = require('path');

gulp.task("html", function() {
  const src = path.resolve('src');
  const dest = path.resolve('./docs');

  return gulp.src(path.join(src, "pug", '*.pug'))
      .pipe(pug({pretty: false}))
      .pipe(inline_source())
      .pipe(gulp.dest(dest));
});
