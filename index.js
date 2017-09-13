'use strict'

module.exports = CallAll

function CallAll (fns) {
  fns = Array.isArray(fns) ? fns : arguments
  return function callAll () {
    var args = arguments
    var ret = new Array(fns.length)
    for (var i = 0, ii = fns.length; i < ii; i++) {
      ret[i] = fns[i].apply(null, args)
    }
    return ret
  }
}
