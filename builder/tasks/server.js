var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('server', ['watch'], function() {
  $.connect.server({
    root: '../built',
    port: 8080,
    livereload: false
  })
});