# css-reset [![Build Status](https://travis-ci.org/eaze/css-reset.svg?branch=master)](https://travis-ci.org/eaze/css-reset)

> Aggressive CSS resets that remove non-essential browser defaults


## Install

```
$ npm install --save @eaze/css-reset
```


## Usage

```js
var cssReset = require('@eaze/css-reset')

cssReset()
//=> appends style rules to the head
```

## Rules

Removes:

* Default spacing and size properties on all native elements
* List styles
* Quote styles
* Table styles
* Button styles
* Input styles
* Firefox select styles
* Webkit tap highlights (iOS)
* Anchor styles

Sets:

* `box-sizing: border-box` on all elements

## License

MIT © [Ben Drucker](http://bendrucker.me)
