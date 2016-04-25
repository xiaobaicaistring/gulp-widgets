var gulp = require('gulp');
var widgets = require('./index.js');

gulp.task('default',function() {
    gulp.src('src/index.html')
        .pipe(widgets())
        .pipe(gulp.dest('dest/'));
})