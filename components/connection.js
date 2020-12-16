window.WebSocket = window.WebSocket || window.MozWebSocket;

var connection = new WebSocket('wss://el-grupo-de-los-10.herokuapp.com/');
//var connection = new WebSocket('ws://localhost:4000/');

connection.onopen = function () {
    // first we want users to enter their names
  };

connection.onmessage = function (message) {
    
    try {

        var auxMsg = JSON.parse(message.data).msg;
        if(Number.isInteger(auxMsg.match)) {
            
            msg = JSON.parse(message.data).msg;
            myMatch = msg.match;
                miPersonaje = 1;
                suPersonaje = 0;
            console.log("matched");
            //Cargar sprites
            app.loader
                .add(msg.miPj.routes.standar.sheet)
                .add(msg.miPj.routes.atack.sheet)
                .add(msg.miPj.routes.damage.sheet)
                .add(msg.suPj.standar.sheet)
                .add(msg.suPj.atack.sheet)
                .add(msg.suPj.damage.sheet)
                .load(onplayer1Load);

        }else if(Number.isInteger(auxMsg.move)){

            suMovimento = auxMsg;
            console.log(auxMsg.move);

        };

    } catch (e) {

        console.log(e);
        return;

    }

}
//