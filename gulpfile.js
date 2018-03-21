const gulp = require('gulp');
const inline_source = require('gulp-inline-source');
const pug = require('gulp-pug');
const path = require('path');
var spawn = require('child_process').spawn;
var gutil = require('gulp-util');

gulp.task("html", function() {
  const src = path.resolve('src');
  const dest = path.resolve('./');

  gulp.src(path.join(src, '*.pug'))
      .pipe(pug({pretty: false}))
      .pipe(gulp.dest(dest))
      .pipe(inline_source())
      .pipe(gulp.dest(dest));
});
gulp.task('retire', function() {
  // Spawn Retire.js as a child process
  // You can optionally add option parameters to the second argument (array)
  var child = spawn('retire', ['-p'], {cwd: process.cwd()});

  child.stdout.setEncoding('utf8');
  child.stdout.on('data', function (data) {
    gutil.log(data);
  });

  child.stderr.setEncoding('utf8');
  child.stderr.on('data', function (data) {
    gutil.log(gutil.colors.red(data));
    gutil.beep();
    process.exit(1);
  });
});