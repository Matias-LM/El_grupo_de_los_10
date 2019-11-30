//Responsive
function animateAll() {

    var responsiveButtonsY;
    var habilidad2X, habilidad3X, habilidad4X;
    var textWidht, butWid;
    
    //Soporte para telefonos
    if(barHigh > -30) barHigh = -30;
    if(app.screen.width <= 800){

        if (!mobile) buttonWidht *= 2;
        mobile = true;
        responsiveButtonsY = app.renderer.height / 1.2;
        habilidad2X = app.renderer.width / 1.7;
        habilidad3X = app.renderer.width / 4.3;
        habilidad4X = app.renderer.width / 1.7;
        habilidad2Xp = -90;
        habilidad3Xp = -110;
        habilidad4Xp = -90;
        textWidht = 1.5;

    }else{

        if(mobile) buttonWidht /= 2;
        mobile = false;
        responsiveButtonsY = app.renderer.height / 1.5;
        habilidad2X = app.renderer.width / 2.43;
        habilidad3X = app.renderer.width / 1.7;
        habilidad4X = app.renderer.width / 1.3;
        habilidad2Xp = -100;
        habilidad3Xp = -90;
        habilidad4Xp = -80;
        textWidht = 0.75;

    }
    ///

    animateHealtBars();

    //Sprites
    player1.x = app.screen.width / 4.3;
    player1.y = app.screen.height / 3;
    player1.scale = new PIXI.Point(app.screen.width / 1000, app.screen.height / 1000)
    player2.x = app.screen.width / 1.3;
    player2.y = app.screen.height / 3;
    player2.scale = new PIXI.Point(app.screen.width / 1000, app.screen.height / 1000)
    //

    //Botones
    Habilidad1.x = app.renderer.width / 4.3;
    Habilidad1.y = app.renderer.height / 1.5;
    Habilidad1.scale = new PIXI.Point(app.screen.width / 1000, app.screen.height / 1000)
    Habilidad1.clear()
    Habilidad1.lineStyle(3, 0xebf9e4);
    Habilidad1.beginFill(0xdfdfdf)
    Habilidad1.drawRect(-110, -50, buttonWidht, buttonHigh);
    Habilidad1.endFill();
    
    Habilidad2.x = habilidad2X;
    Habilidad2.y = app.renderer.height / 1.5;
    Habilidad2.scale = new PIXI.Point(app.screen.width / 1000, app.screen.height / 1000)
    Habilidad2.clear()
    Habilidad2.lineStyle(3, 0xebf9e4);
    Habilidad2.beginFill(0xdfdfdf)
    Habilidad2.drawRect(habilidad2Xp, -50, buttonWidht, buttonHigh);
    Habilidad2.endFill();

    Habilidad3.x = habilidad3X;
    Habilidad3.y = responsiveButtonsY;
    Habilidad3.scale = new PIXI.Point(app.screen.width / 1000, app.screen.height / 1000)
    Habilidad3.clear()
    Habilidad3.lineStyle(3, 0xebf9e4);
    Habilidad3.beginFill(0xdfdfdf)
    Habilidad3.drawRect(habilidad3Xp, -50, buttonWidht, buttonHigh);
    Habilidad3.endFill();

    Habilidad4.x = habilidad4X;
    Habilidad4.y = responsiveButtonsY;
    Habilidad4.scale = new PIXI.Point(app.screen.width / 1000, app.screen.height / 1000)
    Habilidad4.clear()
    Habilidad4.lineStyle(3, 0xebf9e4);
    Habilidad4.beginFill(0xdfdfdf)
    Habilidad4.drawRect(habilidad4Xp, -50, buttonWidht, buttonHigh);
    Habilidad4.endFill();
    ///

    //Texto
    nombre1.scale = new PIXI.Point(textWidht, 1);
    nombre2.scale = new PIXI.Point(textWidht, 1);
    nombre3.scale = new PIXI.Point(textWidht, 1);
    nombre4.scale = new PIXI.Point(textWidht, 1);
    ///
    
};

function animateHealtBars(){

    //Barras de vida
    vida1.clear();
    vida1.lineStyle(3, line1);
    vida1.beginFill(fill1);
    vida1.drawRect(-73, -30, aVida1, barHigh);
    vida1.endFill();
    vida1.x = app.renderer.width / 6.1;
    vida1.y = app.renderer.height / 9;
    vida1.scale = new PIXI.Point(app.screen.width / 1000, app.screen.height / 1000)
    
    fondo1.clear()
    fondo1.lineStyle(3, line1);
    fondo1.beginFill(line1);
    fondo1.drawRect(-73, -30, barWidht, barHigh);
    fondo1.endFill();
    fondo1.x = app.renderer.width / 6.1;
    fondo1.y = app.renderer.height / 9;
    fondo1.scale = new PIXI.Point(app.screen.width / 1000, app.screen.height / 1000)
    
    vida2.clear();
    vida2.lineStyle(3, line2);
    vida2.beginFill(fill2);
    vida2.drawRect(-73, -30, aVida2, barHigh);
    vida2.endFill();
    vida2.x = app.renderer.width / 1.5;
    vida2.y = app.renderer.height / 9;
    vida2.scale = new PIXI.Point(app.screen.width / 1000, app.screen.height / 1000)
    
    fondo2.clear()
    fondo2.lineStyle(3, line2);
    fondo2.beginFill(line2);
    fondo2.drawRect(-73, -30, barWidht, barHigh);
    fondo2.endFill();
    fondo2.x = app.renderer.width / 1.5;
    fondo2.y = app.renderer.height / 9;
    fondo2.scale = new PIXI.Point(app.screen.width / 1000, app.screen.height / 1000);

}