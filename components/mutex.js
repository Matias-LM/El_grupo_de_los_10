let c = 0;
let act1 = false;
let cha1 = false;
let act2 = false;
let cha2 = false;

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
            if(act1) {act1 = false; cha1 = false;}
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
            var suMovimiento = Math.floor((Math.random() * 4) + 1);
            switch(suMovimiento){

                case 1:
    
                    jugador2.Defensa += 1;
                    break;
    
                case 2:
    
                    console.log('2');
                    break;
    
                case 3:
    
                    jugador1.Vida -= (20 * jugador2.Ataque) / jugador1.Defensa;
                    if(jugador1.Vida < 0) jugador1.Vida = 0;
                    act1 = true;
                    break;
    
                case 4:
    
                    jugador2.Vida -= 30;
                    if(jugador2.Vida < 0) jugador2.Vida = 0;
                    jugador2.Defensa += 1.5;
                    jugador2.Ataque += 0.5;
                    act2 = true;
                    break;
    
            }
            break;

        case 453:

            if(act2) {act2 = false; cha2 = true;}
            if(act1) {act1 = false; cha1 = false;}
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
            tick.stop();
            break;

    }
    if(cha1){

        if (aVida1 > ((jugador1.Vida * barWidht) / jugador1.VidaMax)) 
            aVida1--;
        else if (aVida1 < ((jugador1.Vida * barWidht) / jugador1.VidaMax)) 
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

        if (aVida2 > ((jugador2.Vida * barWidht) / jugador2.VidaMax))
            aVida2--;
        else if (aVida2 < ((jugador2.Vida * barWidht) / jugador2.VidaMax))
            aVida2++;

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

tick.add(mutax);