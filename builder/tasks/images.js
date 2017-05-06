var gulp = require('gulp'),
	$ = require('gulp-load-plugins')();

gulp.task('images', function() {
	return gulp.src('../src/images/**/*')
		.pipe(gulp.dest('../built/images'))
		.pipe($.connect.reload());
});