'use strict'

var getObject = require('./object')
var toCss = require('to-css')
var insertStyles = require('insert-styles')

module.exports = function reset () {
  var css = toCss(getObject())

  insertStyles(css)

  return css
}
