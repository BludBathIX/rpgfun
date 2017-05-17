// namespace
var App = App || {};

App.Gold = (function () {
    "use strict";

    var fn = function (game, x, y, args) {
        Phaser.Sprite.call(this, game, x, y, args.image_key);

        // Create animation linked to this object
        if (args.init) args.init(this, args);

        this.game.physics.arcade.enable(this);

        // Default gold count value
        this.count = 1;
    };

    fn.prototype = Object.create(Phaser.Sprite.prototype);
    fn.prototype.constructor = fn;

    fn.prototype.count = function () {
        return this.count;
    };

    fn.prototype.setCount = function (count) {
        this.count = count;
    }

    return fn;
})();
