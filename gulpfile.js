// JavaScript Document

//depenencies requiremrents
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var SOURCEPATH = {
	SassSource:'src/scss/*.css'
}

var APPPATH = {
	root: 'app/',
	css: 'app/css',
	js: 'app/js'
}


//TASK
gulp.task('hello', function(){
	console.log('hello gulp');
	
});
gulp.task('sass', function(){
	return gulp.src('app/scss/app.scss')
		.pipe(sass({OutPutStyle: 'Expanded'} ).on('error', sass.logError))
		.pipe(gulp.dest('app/css'))

});
//gulp.task('sass:watch', function () {
//	gulp.watch('./sass/**/*.scss', ['sass']);
//});

gulp.task('serve', ['sass'], function () {
	browserSync.init([ APPPATH.css + '/*.css,', APPPATH.root + '/*.html,', APPPATH.js + '/*js,' ] ,{
		server:{
			baseDir : APPPATH.root
		}
	})
});

gulp.task('default', ['sass']);