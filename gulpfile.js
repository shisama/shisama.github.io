const gulp = require('gulp');
const inline_source = require('gulp-inline-source');

gulp.task("default", function() {
  gulp.src("src/index.html")
  // CSS/JSを埋め込む
  .pipe(inline_source())
  .pipe(gulp.dest("./"));
});