'use strict'

var test = require('tape')
var cssReset = require('./')
var cssResetObject = require('./object')

test('string', function (t) {
  var css = cssReset()
  t.ok(css.indexOf('*{box-sizing:border-box;}') >= 0, 'combines reset rules')
  t.end()
})

test('object', function (t) {
  var rules = cssResetObject()
  t.deepEqual(rules['*'], {'box-sizing': 'border-box'})
  t.end()
})
