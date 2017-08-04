const tty = require('tty')

function showAlternateScreen() {
  process.stdout.write(new Buffer([0x1b, 0x5b, 0x3f, 0x31, 0x30, 0x34, 0x39, 0x68]))
}

function hideAlternateScreen() {
  process.stdout.write(new Buffer([0x1b, 0x5b, 0x3f, 0x31, 0x30, 0x34, 0x39, 0x6c]))
}

module.exports = {
  __esModule: true,
  show: showAlternateScreen,
  hide: hideAlternateScreen,
  showAlternateScreen: showAlternateScreen,
  hideAlternateScreen: hideAlternateScreen,
}
