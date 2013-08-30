KeyboardJS
==========

Simple keyboard event handler.

```javascript
var debug = true;
var preventer = function (evt) {
	if (condition) evt.preventDefault();
};
var keyboard = new KeyboardJS(debug, preventer);

// check key with 'keyboard.keys[asciivalue]' or with 'keyboard.char(character)'
// characters must be uppercase!

if (keyboard.char('W')) moveForward();
// is the same as
if (keyboard.keys[75]) moveForward();
```
