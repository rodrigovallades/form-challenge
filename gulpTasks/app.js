const gulp = require('gulp')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')
const sass = require('gulp-sass')

gulp.task('app', ['app.html', 'app.css', 'app.scss', 'app.js', 'app.assets'])

gulp.task('app.html', () => {
  return gulp.src('app/**/*.html')
    //.pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('public'))
})

gulp.task('app.css', () => {
  return gulp.src('app/**/*.css')
    //.pipe(uglifycss({ "uglyComments": true }))
    .pipe(concat('index.css'))
    .pipe(gulp.dest('public/css'))
})

gulp.task('app.scss', function() {
  return gulp.src('app/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
})

gulp.task('app.js', () => {
  return gulp.src('app/**/*.js')
    //.pipe(uglify({ mangle: false }))
    .pipe(concat('index.js'))
    .pipe(gulp.dest('public/scripts'))
})

gulp.task('app.assets', () => {
  return gulp.src('app/assets/**/*.*')
    .pipe(gulp.dest('public/assets'))
})
