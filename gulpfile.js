var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

// Default task
gulp.task('default', ['css', 'js', 'vendor']);

// Copy third party libraries into /vendor
gulp.task('vendor', function() {

    // Bootstrap
    gulp.src([
        './node_modules/bootstrap/dist/**/*',
        '!./node_modules/bootstrap/dist/css/bootstrap-grid*',
        '!./node_modules/bootstrap/dist/css/bootstrap-reboot*'
        ])
        .pipe(gulp.dest('./vendor/bootstrap'))

    // Font Awesome
    gulp.src([
        './node_modules/font-awesome/**/*',
        '!./node_modules/font-awesome/{less,less/*}',
        '!./node_modules/font-awesome/{scss,scss/*}',
        '!./node_modules/font-awesome/.*',
        '!./node_modules/font-awesome/*.{txt,json,md}'
        ])
        .pipe(gulp.dest('./vendor/font-awesome'))

    // jQuery
    gulp.src([
        './node_modules/jquery/dist/*',
        '!./node_modules/jquery/dist/core.js'
        ])
        .pipe(gulp.dest('./vendor/jquery'))
  
});

// Compile SCSS
gulp.task('css:compile', function() {
    return gulp.src('./scss/**/*.scss')
      .pipe(sass.sync({
        outputStyle: 'expanded'
      }).on('error', sass.logError))
      .pipe(rename({
        basename: "move"
      }))
      .pipe(gulp.dest('./assets/css'))
});

// Minify CSS
gulp.task('css:minify', ['css:compile'], function() {
    return gulp.src([
        './css/*.css',
        '!./css/*.min.css'
      ])
      .pipe(cleanCSS())
      .pipe(rename({
        basename: "move",
        suffix: '.min'
      }))
      .pipe(gulp.dest('./assets/css'))
      .pipe(browserSync.stream());
});

// CSS tasks
gulp.task('css', ['css:compile', 'css:minify']);

// Minify JavaScript
gulp.task('js:minify', function() {
    return gulp.src([
        './js/*.js',
        '!./js/*.min.js'
      ])
      .pipe(uglify())
      .pipe(rename({
        basename: "move",
        suffix: '.min'
      }))
      .pipe(gulp.dest('./assets/js'))
      .pipe(browserSync.stream());
});

// JS tasks
gulp.task('js', ['js:minify']);

// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: "./"
      }
    });
});

// Dev task
gulp.task('dev', ['css', 'js', 'browserSync'], function() {
    gulp.watch('./scss/*.scss', ['css']);
    gulp.watch('./js/*.js', ['js']);
    gulp.watch('./*.html', browserSync.reload);
});