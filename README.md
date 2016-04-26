#gulp-widgets

 a gulp plugin for widgets
##Installation
Install package with NPM and add it to your development dependencies:
```
npm install --save-dev gulp-widgets
```
##Usage

```js
gulp.task('default', function () {
    gulp.src('src/widgets/widgets-1/')
        .pipe(widgets())
        .pipe(gulp.dest('dest/'));
})
```

##Examples
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
### finally
```html
<widgets-1></widgets-1>
<script src="dest/widgets-1.js"></script>
```
## License
---
The MIT License (MIT)

Copyright (c) 2016 zhaiayfei

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.