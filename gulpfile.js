'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function () {
    return gulp.src('./views-dev/assets/css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./views/assets/css'));
});

gulp.task('scripts', function() {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'views-dev/assets/js/scripts.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js'
        //'node_modules/popper.js/dist/popper.min.js'
    ])
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('./views/assets/js'));
});

gulp.task('minify-css', () => {
    return gulp.src('./views-dev/assets/css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./views/assets/css'));
});

gulp.task('dev', [
    'sass',
    'scripts'
]);

gulp.task('prod', [
    'minify-css',
    'scripts',
]);

gulp.task('watch', function() {
    gulp.watch([
        './views-dev/assets/css/*.scss',
        './views-dev/assets/js/*.js',
    ], [
        'dev'
    ]);
});

gulp.task('default', ['watch']);