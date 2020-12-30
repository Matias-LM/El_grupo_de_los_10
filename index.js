//Game variables

    var miPersonaje, suPersonaje, miMovimento, suMovimento;
    let msg;
    var myMatch;

    var jugador1 = {

        stats: {

            VidaMax: 95,
            Vida: 95,
            Ataque: 10,
            AtaqueAnt: 10,
            Defensa: 8,
            DefensaAnt: 8,
            Velocidad: 12.5,
            VelocidadAnt: 12.5,
            Precision: 100

        },
        estado: {

            corte: 0,
            veneno: 0,
            aturd: 0,
            cont: 0,
            conf: 0

        }

    }
    var jugador2 = {

        stats: {

            VidaMax: 100,
            Vida: 100,
            Ataque: 10,
            AtaqueAnt: 10,
            Defensa: 11,
            DefensaAnt: 11,
            Velocidad: 9,
            VelocidadAnt: 9,
            Precision: 100    

        },
        estado: {

            corte: 0,
            veneno: 0,
            aturdimiento: 0,
            contador: 0,
            confucion: 0

        }
        
    }

    //Stat moves
    var desesperacion, grito, electedMov, debate, JdR, refugio, espera, reaccion, elJudio, sleep, elDebuff;
    var con, aRefugio, Acum, rRecuperado, falla, constru, llamada, cardistry;

    var noU = -1;
    var fe = 0;
    var intereses = 25;

    var anteojo = false;
    var turnoPasable = true;

//

//Graficos

    let _w = window.innerWidth;
    let _h = window.innerHeight;

    const frames1 = [];
    const framesAtk1 = [];
    const framesDmg1 = [];
    const frames2 = [];
    const framesAtk2 = [];
    const framesDmg2 = [];

    var line1, line2, fill1, fill2;
    var healts = {

        high: {

            line: 0xe4f9e4,
            fill: 0x52ff52

        },
        mid: {

            line: 0xf9f9e4,
            fill: 0xffcd52

        },
        low: {

            line: 0xf9e4e4,
            fill: 0xff5252

        }

    }
    line1 = healts.high.line;
    line2 = healts.high.line;
    fill1 = healts.high.fill;
    fill2 = healts.high.fill;

//

//Iniciar la aplicacion

    const app = new PIXI.Application({

        width: _w,
        height: _h,

    });
    document.body.appendChild(app.view);

//

//Pantallas

    let waitScreen, menuScreen, selectionScreen, gameScreen, endScreen;

    waitScreen = new PIXI.Container();
    menuScreen = new PIXI.Container();
    selectionScreen = new PIXI.Container();
    gameScreen = new PIXI.Container();
    endScreen = new PIXI.Container();

    app.stage.addChild(waitScreen);
    app.stage.addChild(menuScreen);
    app.stage.addChild(selectionScreen);
    app.stage.addChild(gameScreen);
    app.stage.addChild(endScreen);

    menuScreen.visible = false;
    selectionScreen.visible = false;
    endScreen.visible = false;

//


//Responsive design variables

    var barHigh = 30 - (app.screen.height / 17);
    var barWidht = 400 - (app.screen.width / 12.6);
    var aVida1 = barWidht;
    var aVida2 = barWidht;
    var buttonHigh = 87.5;
    var buttonWidht =  171.6;
    var habilidad2Xp, habilidad3Xp, habilidad4Xp;
    var mobile = false;

    const ticker = new PIXI.Ticker();
    var tick = new PIXI.Ticker();

//

window.addEventListener('resize', resize);
function resize(){

    _w = window.innerWidth;
    _h = window.innerHeight;
    app.renderer.resize(_w, _h);
    animateAll();

}