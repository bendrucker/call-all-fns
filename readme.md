# call-all-fns [![Build Status](https://travis-ci.org/bendrucker/call-all-fns.svg?branch=master)](https://travis-ci.org/bendrucker/call-all-fns)

> Wrap a set of functions in a single function that calls each


## Install

```
$ npm install --save call-all-fns
```


## Usage

```js
var callAll = require('call-all-fns')

var all = callAll([
  function (value) {
    return value + 1
  },
  function (value) {
    return value + 2
  } 
])
all(1)
//=> [2, 3]
```

## API

#### `callAll(fns)` -> `function`

Returns a function that will pass all arguments to the `fns` and then return an array of results.

##### fns

*Required*  
Type: `array[function]` / `functions...`

An array of functions. Functions can also be provided as a variadic set of arguments.


## License

MIT © [Ben Drucker](http://bendrucker.me)
