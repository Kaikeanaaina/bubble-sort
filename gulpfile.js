var gulp = require('gulp');
var browserify = require('gulp-browserify');
var sass = require('gulp-sass');

gulp.task('build',function(){
  gulp.src('./app.js')
    .pipe(browserify({
      insertGlobals : true
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('sass', function () {
  return gulp.src('./scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./public/css'));
});



gulp.task('default', ['build', 'sass']);

