var gulp = require('gulp');
gulp.task('build', ['scripts', 'styles', 'templates', 'vendor', 'images', 'fonts', 'php']);
gulp.task('default', ['build']);