var gulp = require('gulp');
var widgets = require('./index.js');
var rename = require("gulp-rename");

gulp.task('default', function () {
    gulp.src('src/widgets/sina-top/')
        .pipe(widgets({ name: 'sina-top' }))
        .pipe(rename("sina-top.js"))
        .pipe(gulp.dest('dest/'));
})