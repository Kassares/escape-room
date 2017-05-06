var gulp = require('gulp'),
  $ = require('gulp-load-plugins')();

gulp.task('styles', function () {
  return gulp.src('../src/styles/styles.scss')
  .pipe($.sass({errLogToConsole: true}))
  .pipe($.autoprefixer({ browsers: ['last 2 version'] }))
  .pipe(gulp.dest('../built/styles'))
  .pipe($.csso())
  .pipe($.rename('styles.min.css'))
  .pipe(gulp.dest('../built/styles'))
  .pipe($.connect.reload());
});