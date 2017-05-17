// namespace
var App = App || {};

App.Portal = (function () {
    "use strict";

    var fn = function (game, x, y, args) {
        Phaser.Sprite.call(this, game, x, y, args.image_key, args.frame);
    };

    fn.prototype = Object.create(Phaser.Sprite.prototype);
    fn.prototype.constructor = fn;

    return fn;
})();
