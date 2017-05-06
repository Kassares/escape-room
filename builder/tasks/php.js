var gulp = require('gulp'),
	$ = require('gulp-load-plugins')();

gulp.task('php', function() {
	return gulp.src('../src/php/**/*')
		.pipe(gulp.dest('../built/php'))
		.pipe($.connect.reload());
});