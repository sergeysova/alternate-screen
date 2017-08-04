# alternate-screen

Utility to switch terminal screens. [Read question on SO](https://stackoverflow.com/questions/11023929/using-the-alternate-screen-in-a-bash-script)

## Installation

```bash
npm install --save alternate-screen
```

### Usage

Node.JS:

```js
const { show, hide } = require('alternate-screen')

console.log('In the main screen')

show()

console.log('In alternate screen')

hide()

console.log('Again in main screen')
```

Babel:

```js
import { show, hide } from 'alternate-screen'

console.log('In the main screen')

show()

console.log('In alternate screen')

hide()

console.log('Again in main screen')
```

### API

#### `show` and `showAlternateScreen`

Write to terminale escape sequence to switch screen to alternate.

#### `hide` and `hideAlternateScreen`

Write to terminale escape sequence to switch screen back to main.

### Example

Clone repository and run:

```bash
node ./test.js
```

### License

MIT @ Sergey Sova
