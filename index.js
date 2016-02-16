'use strict'

var array = require('cast-array')
var toCss = require('to-css')
var insertStyles = require('insert-styles')
var elements = require('./elements.json')

module.exports = function reset () {
  var css = [
    rule(elements, {
      margin: 0,
      padding: 0,
      border: 0,
      'font-size': '100%',
      font: 'inherit',
      'vertical-align': 'baseline'
    }),
    rule('body', {'line-height': 1}),
    rule(['ol', 'ul'], {'list-style': 'none'}),
    rule(['blockquote', 'q'], {quotes: 'none'}),
    rule(['blockquote:before', 'blockquote:after', 'q:before', 'q:after'], {
      content: ['', 'none']
    }),
    rule('table', {
      'border-collapse': 'collapse',
      'border-spacing': 0
    }),
    rule('button', {
      background: 'none',
      border: 'none',
      outline: 'none',
      'font-size': 'inherit',
      margin: 0,
      padding: 0,
      font: 'inherit',
      'line-height': 'normal'
    }),
    rule(['input:not([type=checkbox])', 'textarea'], {
      background: 'none',
      border: 'none',
      outline: 'none',
      font: 'inherit',
      padding: 0,
      margin: 0,
      'border-radius': 0
    }),
    rule('input::-webkit-input-placeholder', {'line-height': 'normal'}),
    rule('input:not([type=checkbox]):not([type=radio])', {'-webkit-appearance': 'none'}),
    rule(['select:-moz-focusring', 'select::-moz-focus-inner'], {
      color: 'transparent !important',
      'text-shadow': '0 0 0 #000 !important'
    }),
    rule('body', {
      '-webkit-tap-highlight-color': ['rgba(0,0,0,0)', 'transparent']
    }),
    rule('*', {'box-sizing': 'border-box'}),
    rule('a', {'text-decoration': 'none'})
  ]
  .join('')

  insertStyles(css)

  return css
}

function rule (selectors, properties) {
  var styles = {}
  styles[array(selectors).join(', ')] = properties

  return toCss(styles)
}
