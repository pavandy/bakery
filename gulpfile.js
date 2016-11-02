'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const browsersync = require('browser-sync').create();

gulp.task('sass', function(){
	return gulp.src('sass/main.sсss')
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('css'))

});

gulp.task('clean', function(){
	return del('css/**/*.*');
})

gulp.task('watch', function(){
	gulp.watch('sass/**/*.scss', gulp.series('sass'));
})

gulp.task('serve',function(){
	browsersync.init({
		server:'.'
	});

	browsersync.watch('index.html').on('change',browsersync.reload);
})

gulp.task('dev', gulp.series('sass',gulp.parallel('serve','watch')));
