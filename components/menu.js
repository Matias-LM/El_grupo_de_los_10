_w = window.innerWidth;
_h = window.innerHeight;
const menu = new PIXI.Application({

    width: _w,
    height: _h,

});
menu.renderer.antialias = true;
asd.style = {fill: 0xffffff};
asd.x = 0;
asd.y = 0;
menu.stage.addChild(asd);