// namespace
var App = App || {};

App.Enemy = (function () {
    "use strict";

    var fn = function (game, x, y, args) {
        Phaser.Sprite.call(this, game, x, y, args.image_key);
        args.init(this, args);

        this.game.physics.arcade.enable(this);
        this.frame = 0;
        this.collideWorldBounds = true;
        this.speed = 50;
    };


    fn.prototype = Object.create(Phaser.Sprite.prototype);
    fn.prototype.constructor = fn;

    fn.prototype.update = function () {
        var speed = this.speed;
        // this.debugText.text = "Enemy1";
        // this.debugText.x = this.x;
        // his.debugText.y = this.y - 20;
        // his.usernameText.x = this.x;
        // his.usernameText.y = this.y + 60;

        this.body.velocity.x = 0;
        this.body.velocity.y = -this.speed;

        // this.game.physics.arcade.collide(this, this.game.global.forest.layers.Collisions);
    };

    return fn;
})();
