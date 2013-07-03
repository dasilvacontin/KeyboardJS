KeyboardJS
==========

Simple keyboard event handler.

```javascript
var debug = true;
var preventer = function (evt) {
	if (condition) evt.preventDefault();
};
var keyboard = new KeyboardJS(debug, preventer);

if (keyboard.keysASCII['W']) moveForward();
```
