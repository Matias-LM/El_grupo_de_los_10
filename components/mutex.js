let c = 0;
let estatus = 0;
let resurrect = 3;

let act1 = false;
let cha1 = false;
let act2 = false;
let cha2 = false;
let end = false;

var tickEnd = new PIXI.Ticker();

function healtBars(){

    if(cha1){

        console.log('cha1')
        if (aVida1 > ((jugador1.stats.Vida * barWidht) / jugador1.stats.VidaMax)) 
            aVida1--;
        else if (aVida1 < ((jugador1.stats.Vida * barWidht) / jugador1.stats.VidaMax)) 
            aVida1++;

        if(((aVida1 * 100) / barWidht) > 45){

            line1 = healts.high.line;
            fill1 = healts.high.fill;

        }else if (((aVida1 * 100) / barWidht) > 20){

            line1 = healts.mid.line;
            fill1 = healts.mid.fill;

        }else{

            line1 = healts.low.line;
            fill1 = healts.low.fill;

        }
        animateHealtBars();

    }
    if(cha2){

        if (aVida2 > ((jugador2.stats.Vida * barWidht) / jugador2.stats.VidaMax)) aVida2--;
        else if (aVida2 < ((jugador2.stats.Vida * barWidht) / jugador2.stats.VidaMax)) aVida2++;

        if(((aVida2 * 100) / barWidht) > 45){

            line2 = healts.high.line;
            fill2 = healts.high.fill;
            
        }else if (((aVida2 * 100) / barWidht) > 20){

            line2 = healts.mid.line;
            fill2 = healts.mid.fill;

        }else{

            line2 = healts.low.line;
            fill2 = healts.low.fill;

        }
        animateHealtBars();

    }

}

function turnEnd(){

    //Efectos de estado
    if(jugador1.estado.corte != 0){

        jugador1.stats.Vida -= 10;
        jugador1.estado.corte--;
        cha1 = true;

    }
    if(jugador1.estado.veneno != 0 && estatus == 1){

        switch(jugador1.estado.veneno){

            case 3:
                jugador1.stats.Vida -= 5;
                break;

            case 2:
                jugador1.stats.Vida -= 15;
                break;

            case 1:
                jugador1.stats.Vida -= 25;
            break;

        }
        jugador1.estado.veneno--;
        cha1 = true;

    }
    if(jugador2.estado.corte != 0 && estatus == 2){

        jugador2.stats.Vida -= 10;
        jugador2.estado.corte--;
        cha2 = true;

    }
    if(jugador2.estado.veneno != 0 && estatus == 3){

        switch(jugador2.estado.veneno){

            case 3:
                jugador2.stats.Vida -= 5;
                break;

            case 2:
                jugador2.stats.Vida -= 15;
                break;

            case 1:
                jugador2.stats.Vida -= 25;
            break;

        }
        jugador2.estado.veneno--;
        cha2 = true;

    }

    //"Resurrecion" y "Buena fe" de Di Nardo
    if((miPersonaje == 2 || suPersonaje == 2) && estatus == 4){

        console.log("yes");
        if(fe > 0){

            fe--;
            if(fe == 0){

                if(miPersonaje == 2){

                    jugador1.stats.Vida += 50
                    if(jugador1.stats.Vida > jugador1.stats.VidaMax) jugador1.stats.Vida = jugador1.stats.VidaMax;

                }else {
                
                    jugador2.stats.Vida += 50;
                    if(jugador2.stats.Vida > jugador2.stats.VidaMax) jugador2.stats.Vida = jugador2.stats.VidaMax;
    
                }
            }

        }

        resurrect--;
        if (resurrect == 0 && estatus == 5){

            if(miPersonaje == 2){

                jugador1.stats.Vida += 20
                if(jugador1.stats.Vida > jugador1.stats.VidaMax) jugador1.stats.Vida = jugador1.stats.VidaMax;

            }else {
                
                jugador2.stats.Vida += 20;
                if(jugador2.stats.Vida > jugador2.stats.VidaMax) jugador2.stats.Vida = jugador2.stats.VidaMax;

            }
            resurrect = 3;

        }

    }
    healtBars();
    estatus++;
    console.log(estatus);
    if(estatus == 6) {estatus = 0; tickEnd.stop}

}

function mutax(){

    c += 1;
    switch(c){

        case 1:

            player1.textures = framesAtk1;
            player1.play();
            accion1();
            break;

        case 151:

            if(act2) {act2 = false; cha2 = true;}
            if(act1) {act1 = false; cha1 = true;}
            player2.textures = framesDmg2;
            player2.play();
            player1.textures = frames1;
            player1.play();
            break;

        case 302:

            cha1 = false;
            cha2 = false;        
            player2.textures = framesAtk2;
            player2.play();
            suMovimiento = Math.floor((Math.random() * 4) + 1);
            accion2();
            break;

        case 453:

            if(act2) {act2 = false; cha2 = true;}
            if(act1) {act1 = false; cha1 = true;}
            player1.textures = framesDmg1;
            player1.play();
            player2.textures = frames2;
            player2.play();
            break;
        
        case 604:

            player1.textures = frames1;
            player1.play();   
            cha1 = false;
            cha2 = false;
            c = 0;  
            tickEnd.start();
            tick.stop();

        break;

    }
    healtBars();

}

tick.add(mutax);
tickEnd.add(turnEnd);