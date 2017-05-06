var gulp = require('gulp'),
	$ = require('gulp-load-plugins')();

gulp.task('scripts', function() {
	return gulp.src('../src/scripts/app.js')
		.pipe($.browserify({debug: true}))
		.pipe(gulp.dest('../built/scripts/'))
		.pipe($.uglify())
		.pipe($.rename('app.min.js'))
		.pipe(gulp.dest('../built/scripts'))
		.pipe($.connect.reload());
});