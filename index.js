const _ = require('loadsh')

function chunk (arr,size) {
  return  _.chunk(arr, size)
}

module.exports = chunk