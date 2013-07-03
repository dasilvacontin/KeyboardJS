function KeyboardJS (debug, preventer) {
    this.keysASCII = {};
    this.keysCHAR = {};
    this.debug = debug;
    var scope = this;
    document.addEventListener("keydown", function (evt) {
        scope.keysASCII[evt.keyCode] = true;
        scope.keysCHAR[String.fromCharCode(evt.keyCode)] = true;
        if (scope.debug) console.log('-- keyIsDown ASCII('+evt.keyCode+') CHAR('+String.fromCharCode(evt.keyCode)+')');
        if (preventer) preventer(evt);
    });
    document.addEventListener("keyup", function (evt) {
        scope.keysASCII[evt.keyCode] = false;
        scope.keysCHAR[String.fromCharCode(evt.keyCode)] = false;
        if (scope.debug) console.log('-- keyIsUp ASCII('+evt.keyCode+') CHAR('+String.fromCharCode(evt.keyCode)+')');
        if (preventer) preventer(evt);
    });
    if (scope.debug) console.log("keyboardJS inited", "keyboardJS");
}