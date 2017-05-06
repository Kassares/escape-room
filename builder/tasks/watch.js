var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('watch', ['styles', 'scripts', 'templates', 'vendor', 'images', 'fonts', 'php'], function() {
  gulp.watch('../src/**/*.jade', ['templates']);
  gulp.watch('../src/**/*.js', ['scripts']);
  gulp.watch('../src/**/*.scss', ['styles']);
  gulp.watch('../src/vendor/**/*', ['vendor']);
  gulp.watch('../src/images/**/*', ['images']);
  gulp.watch('../src/fonts/**/*', ['fonts']);
  gulp.watch('../src/php/**/*', ['php']);
});