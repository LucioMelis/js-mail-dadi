console.log('Js Ok');
/*
Mail

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito
del controllo.*/


// MAIL EXERCISE 

// creo un array con delle mail generiche 
const emailList = ['luciomelis1992@gmail.com', 'giova@gmail.com', 'luffy@gmail.com', 'zoro@gmail.com'];


document.getElementById('btn-js').addEventListener('click', function () {
    let emailResult = false;
    const emailUser = document.getElementById('value').value;
    for (let i = 0; i < emailList.length; i++) {
        // se il risultato è uguale alla mail inserita dall'utente
        if (emailList[i] === emailUser.trim().toLowerCase()) {
            emailResult = true;
        }
    }

    // .trim() elimina gli eventuali spazi 
    // .toLowerCase rende la stringa in minuscolo andando ad aiutare l'utente 

    if (emailResult) {
        document.getElementById('result').innerHTML = "Hai inserito l'email corretta";
    } else {
        document.getElementById('result').innerHTML = 'Email non presente, Riprova';
    }
})
/*
Gioco dei dadi

Generare un numero random da 1 a 6,
sia per il giocatore sia per il computer.
Stabilire il vincitore,
in base a chi fa il punteggio più alto.
 */

// GIOCO DEI DADI EXERCISE 


document.querySelector('#btn-dice').addEventListener('click', function () {
    const player = Math.floor((Math.random() * 6) + 1);
    document.getElementById('player').innerHTML = `Player: ${player}`;
    // Variabile computer 
    const computer = Math.floor((Math.random() * 6) + 1);
    document.getElementById('computer').innerHTML = `Computer: ${computer}`;
    console.log(player, computer);

    if (player > computer) {
        console.log('The Winner is the Player!')
        document.getElementById('game-result').innerHTML = 'The Winner is the Player!';
    } else if (player === computer) {
        console.log('You Tied! Try Again!')
        document.getElementById('game-result').innerHTML = 'You Tied! Try Again!';
    } else {
        console.log('The Winner is the Computer!')
        document.getElementById('game-result').innerHTML = 'The Winner is the Computer!';
    }

})