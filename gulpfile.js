var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

var paths = {
    popupscripts: [
      './node_modules/jquery/dist/jquery.min.js',
      './node_modules/moment/min/moment.min.js',
      './assets/js/popup.js',
    ],
    css: './assets/css/main.css'
}

gulp.task('css', function() {
  return gulp.src(paths.css)
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('popup-scripts', function() {
  return gulp.src(paths.popupscripts)
    .pipe(concat('popup.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('default', ['css', 'popup-scripts']);
