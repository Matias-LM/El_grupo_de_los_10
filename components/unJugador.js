/*function combate(){

    myBreak = true;
    bloqueo = true;
    connection.send(JSON.stringify({msg:{movimiento: miMovimento, match:myMatch, jugador: suPersonaje}}));
    switch(miMovimento){

        case 1:

            jugador1.Defensa += 1.5;
            jugador1.Velocidad -= 1;
            break;
        
        case 2:

            jugador2.Vida -= (20 * jugador1.Ataque) / jugador2.Defensa
            if(jugador2.Vida < 0) jugador2.Vida = 0
            golpe = true
            break;

        case 3:

            jugador2.Vida -= (30 * jugador1.Ataque) / jugador2.Defensa
            if(jugador2.Vida < 0) jugador2.Vida = 0
            golpe = true
            break;

        case 4:

            break;

    }
    player1.textures = framesAtk1;
    player1.play();
    var first = true;
    var ready = false;
    tic1.start();
    tic1.add(() => {

        if(golpe){

            if(ready){

                if(!(aVida1 <= ((jugador1.Vida * barWidht) / jugador1.VidaMax))) 
                    aVida1--;
                if(!(aVida2 <= ((jugador2.Vida * barWidht) / jugador2.VidaMax)))
                    aVida2--;

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
                if(player2.currentFrame == (player2.totalFrames - 1)){

                    golpe = false;
                    setTimeout(function(){

                        player2.textures = frames2;
                        player2.play();
                        tic1.stop();
                        first = true;
                        secondTurn();

                    }, 500);

                }

            }
            if (first){

                player2.textures = framesDmg2;
                player2.play();
                setTimeout(function(){ready = true; first = false;}, 1500)

            }

        }
        if(player1.currentFrame == (player1.totalFrames - 1)) {
                    
            player1.textures = frames1;
            player1.play();
            if(!golpe){
                
                tic1.stop();
                if(player2.Vida == 0 || player1.Vida == 0) document.body.appendChild(pairing.view);
                secondTurn();

            }

        }

    });
    
}

function secondTurn(){

    if(myBreak){

        myBreak = false;
        var suMovimiento = Math.floor((Math.random() * 4) + 1);
        console.log(suMovimiento);
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
                golpe = true;
                break;

            case 4:

                jugador2.Vida -= 30;
                if(jugador2.Vida < 0) jugador2.Vida = 0;
                jugador2.Defensa += 1.5;
                jugador2.Ataque += 0.5;
                break;

        }
        player2.textures = framesAtk2;
        player2.play();
        var first = true;
        var ready = false;
        tic2.start();
        tic2.add(() => {

            if(ready){

                if(!(aVida1 <= ((jugador1.Vida * barWidht) / jugador1.VidaMax))) 
                    aVida1--;
                if(!(aVida2 <= ((jugador2.Vida * barWidht) / jugador2.VidaMax)))
                    aVida2--;

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
                if(player1.currentFrame == (player1.totalFrames - 1)){

                    golpe == false;
                    setTimeout(function(){

                        console.log('popo');
                        player1.textures = frames1;
                        player1.play();
                        tic2.stop();
                        myBreak = true;
                        return;

                    }, 500);

                }

            }
            if (first){

                if(golpe){

                    player1.textures = framesDmg1;
                    player1.play();

                }
                setTimeout(function(){ready = true; first = false;}, 1500)

            }
            if(player2.currentFrame == (player2.totalFrames - 1)) {
                        
                console.log('popo');
                player2.textures = frames2;
                player2.play();
                if(!golpe) tic2.stop();

            }

        });
        if(player2.Vida == 0 || player1.Vida == 0) document.body.appendChild(pairing.view);
        bloqueo = false;

    }

}*/