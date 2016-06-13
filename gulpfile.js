var gulp = require('gulp'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint'),
    connect = require('gulp-connect');

// Styles Task
// 
gulp.task('styles', function() {
    gulp.src('assets/scss/**/*.scss') //find all scss file in scss directory
        .pipe(sass({
            outputStyle: 'compact' //[compressed, expanded, compact]
        }))
        .pipe(gulp.dest('assets/css/'));
});


gulp.task('lint', function() {
    return gulp.src('app/**/*.js')
        .pipe(jshint({ esversion: 6 }))
        .pipe(jshint.reporter('jshint-stylish'));
});

/*gulp.task('connect', function() {
    connect.server({
        port: 4000
    })
});*/

// Watch Task - look for changes
// Watches JS
gulp.task('watch', function() {
    gulp.watch('assets/scss/**/*.scss', ['styles']);
    gulp.watch('app/**/*.js', ['lint']);
});

// can be a callback function when gulp run
// gulp.task('default', function() {}); 

gulp.task('default', ['lint', /*'connect',*/ 'styles', 'watch']);
