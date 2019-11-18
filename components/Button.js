var pixi = require('pixi'),
    parseOctal = require('./utils').parseOctal,
    Button;


Button = function (game, options){

    if (!options) {
        options = {};
    }

    this.game =  game;
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.size = options.size;
    this.lastUpdate = new Date().getTime();
    this.removed = false;
    this.color = parseOctal(options.color);

    this.graphics = new pixi.Graphics();

    this.render();
    this.bind();

}

Button.prototype.bind = function () {

    var self = this;

    this.game.on('update', function () {

        if (!self.removed)
            self.update();

    });

    this.game.on('resize', function () {

        if (!self.removed)
            self.updatePosition();

    });

    this.game.on('setButtonColor', function (color) {

        if (!self.removed)
            self.setColor(color);

    });

    this.game.on('setButtonImage', function (image) {

        if (!self.removed)
            self.setImage(image);

    });

    this.game.on('setButtonSize', function (size) {

        if (!self.removed)
            self.setSize(size);

    });

    this.game.on('resume', function () {

        if (!self.removed)
            self.lastUpdate = new Date().getTime();

    });

};

Button.prototype.render = function () {

    if (this.sprite)
        this.graphics.removeChild(this.sprite);

    if (this.image) {

        this.sprite = pixi.Sprite.fromImage(this.image);
        this.graphics.addChild(this.sprite);
        this.sprite.width = this.size * 2;
        this.sprite.position.x = - this.size;
        this.sprite.position.y = - this.size;
        this.sprite.height = this.size * 2;

    } else {

        this.graphics = new pixi.Graphics();
        this.graphics.beginFill(this.color, 1);
        this.graphics.drawRect(0, 0, this.size.x, this.size.y);
        this.graphics.endFill();

    }

    this.game.stage.addChild(this.graphics);

    this.updatePosition();

};

Button.prototype.refresh = function () {
    this.render();
};

Button.prototype.updatePosition = function () {

    /*var elapsed = new Date().getTime() - this.lastUpdate;

    this.x += (elapsed / 50) * this.velocity.x;
    this.y += (elapsed / 50) * this.velocity.y;*/

    this.graphics.position.x = this.game.renderer.width / 2/* + this.x*/;
    this.graphics.position.y = this.game.renderer.height / 2 /*+ this.y*/;

};

Button.prototype.update = function () {

    if (!this.removed) {

        this.updatePosition();
        this.lastUpdate = new Date().getTime();

    }

};

Button.prototype.remove = function () {

    if (this.sprite)
        this.graphics.removeChild(this.sprite);

    this.graphics.clear();
    this.removed = true;

};

Button.prototype.setColor = function (color) {

    this.color = parseOctal(color);
    this.refresh();

};

Button.prototype.setImage = function (image) {

    this.image = image;
    this.refresh();
};


Button.prototype.setSize = function (size) {

    this.size = size;
    this.refresh();

};

module.exports = Button;