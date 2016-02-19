'use strict';

var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    stylus = require('gulp-stylus'),
    gp_concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    jade = require('gulp-jade'),
    csso = require('gulp-csso');

var bc = './bower_components/';

gulp.task('js', function() {
  gulp.src('builds/development/js/script.js')
    .pipe(gp_concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('builds/dist/js/'))
});

gulp.task('copy_jqui', function() {
  gulp.src('builds/development/libs/jquery_ui_slider/')
    .pipe(gulp.dest('builds/dist/libs/jquery_ui_slider/'))
});

gulp.task('jade', function(){
  gulp.src('builds/development/*.jade')
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest('builds/dist/'))
});

gulp.task('stylus', function () {
  gulp.src('builds/development/styl/*.styl')
      .pipe(stylus())
      .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
      .pipe(gp_concat('style.min.css'))
      .pipe(csso())
      .pipe(gulp.dest('builds/dist/css/'));
});

gulp.task('img', function() {
  gulp.src('builds/development/img/**/*')
    .pipe(gulp.dest('builds/dist/img/'));
});


gulp.task('watch', function() {
  gulp.watch('builds/development/js/**/*.js', ['js']);
  gulp.watch('builds/development/styl/**/*.styl', ['stylus']);
  gulp.watch('builds/development/**/*.html', ['html']);
  gulp.watch('builds/development/img/**/*', ['img']);
  gulp.watch('builds/development/fonts/**/*', ['fonts']);
  gulp.watch('builds/development/**/*.jade', ['jade']);
});

gulp.task('libs', function() {
  gulp.src(bc+'jquery/dist/jquery.min.js')
      .pipe(gulp.dest('./builds/dist/libs/jquery/'));

  gulp.src(bc+'/normalize-css/normalize.css')
      .pipe(gulp.dest('./builds/dist/css/'));

  gulp.src('builds/development/libs/**/*.*')
      .pipe(gulp.dest('./builds/dist/libs/'));

});

gulp.task('fonts', function() {
  gulp.src('builds/development/fonts/**/*')
      .pipe(gulp.dest('./builds/dist/fonts/'));
});

gulp.task('webserver', function() {
  gulp.src('builds/dist/')
      .pipe(webserver({
        livereload: true,
        open: false,
        port: 8080
      }));
});

gulp.task('default', [
  'libs',
  'fonts',
  'img',
  'js',
  'stylus',
  'jade',
  'webserver',
  'watch'
]);