const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const minifyJS = require('gulp-uglify');
const minifyCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

// image minify
gulp.task('image',()=>{
    return gulp.src('src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images/'))
})

// js minify
gulp.task('js',()=>{
    return gulp.src('src/js/**/*.js')
    .pipe(minifyJS())
    .pipe(gulp.dest('dist/js'))
})

// sass to css
gulp.task('sass',()=>{
    return gulp.src('src/sass/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('src/css/'))
})

// css return to dist folder
gulp.task('css',()=>{
    return gulp.src('src/css/**/*.css')
    .pipe(gulp.dest('dist/css'))
})

// html return to dist folder
gulp.task('html',()=>{
    return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist/'))
})

// bütün taskleri otomatık calıstır
gulp.task('watch',()=>{
    gulp.watch('src/**/*.html',gulp.series('html'))
    gulp.watch('src/js/**/*.js', gulp.series('js'))
    gulp.watch('src/css/**/*.css', gulp.series('css'))
    gulp.watch('src/sass/**/*.scss', gulp.series('sass'))
    gulp.watch('src/images/**/*', gulp.series('image'))
})