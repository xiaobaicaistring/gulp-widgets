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

module.exports = function (options) {
    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            this.push(file);
            return cb();
        }
        
        this.push(file);
        cb();
    })
}