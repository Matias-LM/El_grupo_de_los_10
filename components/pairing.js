_w = window.innerWidth;
_h = window.innerHeight;
const pairing = new PIXI.Application({

    width: _w,
    height: _h,

});
pairing.renderer.antialias = true;
const asd = new PIXI.Text('Esperando jugador 2');
asd.style = {fill: 0xffffff};
asd.x = 0;
asd.y = 0;
pairing.stage.addChild(asd);