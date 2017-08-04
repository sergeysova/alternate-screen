const { show, hide } = require('./index')

console.log('In main screen:', 1, 2, 3)

show()

console.log('In alternate screen:', 4, 5, 6)

setTimeout(function() {
  hide()
  console.log('Again main screen')
}, 1000)
