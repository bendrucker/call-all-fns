'use strict'

var test = require('tape')
var callAll = require('./')

test(function (t) {
  t.plan(3)
  var all = callAll([
    function (value) {
      t.equal(value, 1, 'first call')
      return 0
    },
    function (value) {
      t.equal(value, 1, 'second call')
      return 1
    },
    false
  ])
  t.deepEqual(all(1), [0, 1, undefined])
})

test(function (t) {
  t.plan(1)
  var all = callAll(
    function (value) { return value },
    function (value) { return value * 2 }
  )
  t.deepEqual(all(1), [1, 2])
})
