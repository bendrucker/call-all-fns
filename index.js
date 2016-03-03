'use strict'

var toArray = require('to-array')

module.exports = CallAll

function CallAll (fns) {
  fns = Array.isArray(fns) ? fns : toArray(arguments)
  return function callAll () {
    var args = arguments
    return fns.map(function (fn) {
      return fn.apply(null, args)
    })
  }
}
