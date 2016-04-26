/**
 * 
 * @author: zhaiyafei
 * 
 * @email: 871588950@qq.com
 * Copyright (c) 2016 Sina Inc.
 * 
 */
'use strict';

var through = require('through2');
var nano = require('cssnano');
var minify = require('html-minifier').minify;
var rename = require('gulp-rename');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require("fs"));
var path = require('path');

var PARTIAL = path.join(__dirname, './partial.js');
var EXT = {
    CSS: '.css',
    JS: '.js',
    HTML: '.html'
}
var MINICFG = {
    "removeComments": true,
    "removeCommentsFromCDATA": true,
    "removeCDATASectionsFromCDATA": true,
    "collapseWhitespace": true,
    "conservativeCollapse": true,
    "removeAttributeQuotes": true,
    "useShortDoctype": true,
    "keepClosingSlash": true,
    "removeScriptTypeAttributes": true,
    "removeStyleTypeAttributes": true
}

module.exports = function (options) {
    return through.obj(function (file, enc, cb) {
        var me = this;
        var items = [];
        var partials = null;
        var widgetsName = path.basename(file.path);
        var pcss = path.join(file.path, '/style' + EXT.CSS);
        var pjs = path.join(file.path, '/index' + EXT.JS);
        var phtml = path.join(file.path, '/tpl' + EXT.HTML);

        fs.readFileAsync(pcss, "utf8")
            .then(function (contents) {
                return nano.process(contents, { discardDuplicates: false })
            })
            .then(function (contents) {
                items.push("var widgetsName='" + widgetsName + "';\n");
                items.push("var css='" + contents + "';\n");
                return fs.readFileAsync(phtml, "utf8");
            })
            .then(function (contents) {
                contents = minify(contents, MINICFG);
                items.push("var html='" + contents + "';\n");
                return fs.readFileAsync(PARTIAL, "utf8");
            })
            .then(function (contents) {
                partials = '+function(){\n' + items.join("") + contents + '\n}();\n';
                items = [];
                return fs.readFileAsync(pjs, "utf8");
            })
            .done(function (contents) {

                partials += '+function(){\n' + contents + '\n}();\n';;
                file.contents = new Buffer(partials);
                file.path += '.js';
                me.push(file);
                cb();
            })
    })
}