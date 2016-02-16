'use strict'

var test = require('tape')
var cssReset = require('./')

test(function (t) {
  var css = cssReset()
  t.ok(css.indexOf('*{box-sizing:border-box;}') >= 0, 'combines reset rules')
  t.end()
})
