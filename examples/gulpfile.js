var gulp = require('gulp');
var widgets = require('gulp-widgets');

gulp.task('default', function () {
    gulp.src('src/widgets/wui-header/')
        .pipe(widgets())
        .pipe(gulp.dest('dest/'));
})