var gulp = require('gulp'),
	$ = require('gulp-load-plugins')();

gulp.task('vendor', function() {
	return gulp.src('../src/vendor/**/*')
		.pipe(gulp.dest('../built/vendor'))
		.pipe($.connect.reload());
});