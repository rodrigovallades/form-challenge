const gulp = require('gulp')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('deps', ['deps.js', 'deps.css', 'deps.fonts'])

gulp.task('deps.js', () => {
  return gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/jquery-form-validator/form-validator/jquery.form-validator.min.js',
    'node_modules/jquery-form-validator/form-validator/security.js'
  ])
  .pipe(uglify())
  .pipe(concat('dependencies.min.js'))
  .pipe(gulp.dest('public/assets/scripts'))
});

gulp.task('deps.css', () => {
  return gulp.src([
    'node_modules/normalize.css/normalize.css',
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/jquery-form-validator/form-validator/theme-default.min.css'
  ])
  .pipe(uglifycss({ "uglyComments": true }))
  .pipe(concat('dependencies.min.css'))
  .pipe(gulp.dest('public/assets/css'))
});

gulp.task('deps.fonts', () => {
  return gulp.src([
    'node_modules/font-awesome/fonts/*.*'
  ])
  .pipe(gulp.dest('public/assets/fonts'))
});
