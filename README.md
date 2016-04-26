#gulp-widgets

### a gulp plugin for widgets
##install
```
npm install --save-dev gulp-widgets
```
##gulp task

```js
gulp.task('default', function () {
    gulp.src('src/widgets/widgets-1/')
        .pipe(widgets())
        .pipe(gulp.dest('dest/'));
})
```

##structure
###before compile
<pre>
├── widgets-1             // dir
│   ├── index.js         // javascript logic
│   ├── style.css        // css
│   ├── tpl.html         // html template
└── widgets-2...
</pre>
### after compiled

<pre>
├── dest                       
│   ├── widgets-1.js    
│   ├── widgets-2.js
</pre>
### you can use it like this
```html
<widgets-1></widgets-1>
<script src="dest/widgets-1.js"></script>
```
## 贡献

有任何意见或建议都欢迎提 issue，或者直接提给 [@xiaobaicai](https://github.com/xiaobaicaistring)

## License

MIT