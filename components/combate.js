function anteojos(j){

    if (anteojo){

        if(j == 1){

            jugador1.stats.Defensa += 1;
            jugador1.stats.Ataque -=1;
            //Narrar: "Montiel aporto la postura defensiva."
            anteojo = !anteojo;

        }else{

            jugador2.stats.Defensa += 1;
            jugador2.stats.Ataque -=1;
            //Narrar: "Montiel aporto la postura defensiva."
            anteojo = !anteojo;

        }

    }else{

        if(j == 1){

            jugador1.stats.Defensa -= 1;
            jugador1.stats.Ataque +=1;
            //Narrar: "Montiel aporto la postura ofensiva."
            anteojo = !anteojo;

        }else{

            jugador2.stats.Defensa -= 1;
            jugador2.stats.Ataque +=1;
            //Narrar: "Montiel aporto la postura ofensiva."
            anteojo = !anteojo;

        }

    }

}

function accion1(){

    switch(miPj){

        case 1:

            switch(miMovimento){

                case 1:
        
                    jugador1.Defensa += 1.5;
                    jugador1.Velocidad -= 1;
                    break;
                
                case 2:
        
                    jugador2.Vida -= (20 * jugador1.Ataque) / jugador2.Defensa
                    if(jugador2.Vida < 0) jugador2.Vida = 0
                    act2 = true
                    break;
        
                case 3:
        
                    jugador2.Vida -= (30 * jugador1.Ataque) / jugador2.Defensa
                    if(jugador2.Vida < 0) jugador2.Vida = 0
                    act2 = true
                    break;
        
                case 4:
        
                    break;
        
            }
            break;

        case 2:


            break;

        case 3:


            break;

        case 4:


            break;

        case 5:


            break;

        case 6:


            break;

        case 7:


            break;

        case 8:


            break;

        case 9:


            break;

        case 10:


            break;

        case 11:


            break;

        case 12:


            break;

        case 13:


            break;

        

    }

}
function accion2(){

    switch(suPj){

        case 1:

            switch(suMovimento){

                case 1:
        
                    jugador2.Defensa += 1.5;
                    jugador2.Velocidad -= 1;
                    break;
                
                case 2:
        
                    jugador1.Vida -= (20 * jugador2.Ataque) / jugador1.Defensa
                    if(jugador1.Vida < 0) jugador1.Vida = 0
                    act1 = true
                    break;
        
                case 3:
        
                    jugador1.Vida -= (30 * jugador2.Ataque) / jugador1.Defensa
                    if(jugador1.Vida < 0) jugador1.Vida = 0
                    act1 = true
                    break;
        
                case 4:
        
                    break;
        
            }
            break;

        case 2:


            break;

        case 3:


            break;

        case 4:


            break;

        case 5:


            break;

        case 6:


            break;

        case 7:


            break;

        case 8:


            break;

        case 9:


            break;

        case 10:


            break;

        case 11:


            break;

        case 12:


            break;

        case 13:


            break;

        

    }

}