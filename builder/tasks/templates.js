var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('templates', function(){
  return gulp.src('../src/templates/**/*.jade')
    .pipe($.jade({
    	pretty: true	
    }))
    .pipe(gulp.dest('../built'))
    .pipe($.connect.reload());
});