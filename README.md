KeyboardJS
==========

A simple keyboard utility for the browser.

```javascript
const kbd = require('@dasilvacontin/keyboard')
kbd.debug = true

// any of these work
if (kbd.isKeyDown(32)) jump()
if (kbd.isKeyDown(kbd.SPACE_BAR)) jump()
if (kbd.isKeyDown(' ')) jump()
```

Available constants:
```js
var keyCodes = {
  SPACE_BAR: 32,

  LEFT_ARROW: 37,
  UP_ARROW: 38,
  RIGHT_ARROW: 39,
  DOWN_ARROW: 40
}
```

## License

MIT © [David da Silva]

[David da Silva]: http://dasilvacont.in
