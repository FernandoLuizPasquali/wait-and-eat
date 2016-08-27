var gulp = require('gulp');
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');

gulp.task('jshint',function(){
	gulp.src(['./src/**/*.js', '!./bower_components/**'])
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
	.pipe(jshint.reporter('fail'));
});



gulp.task('connect', function(){
	connect.server({
		root:['src'],
		port: 8080,
		livereload: true,
		middleware: function(connect){
			return[connect().use('/bower_components', connect.static('bower_components'))];
		}
	});
});

gulp.task('default', ['jshint','connect']);