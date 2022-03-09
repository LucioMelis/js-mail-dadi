console.log('Js Ok');
/*
Mail

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito
del controllo.*/


// MAIL EXERCISE 

// chiedo all'utente di inserire una mail 
const emailUser = prompt('Inserisci una mail');
// creo un array con delle mail generiche 
const emailList = ['luciomelis1992@gmail.com', 'giova@gmail.com', 'luffy@gmail.com', 'zoro@gmail.com'];

for (let i = 0; i < emailList.length; i++) {
    // se il risultato è uguale alla mail inserita dall'utente
    if (emailList[i] === emailUser) {
        // allora...
        console.log('Hai inserito una mail corretta');
        document.getElementById('result').innerHTML = 'Email inserita correttamente';
        document.getElementById('welcome').innerHTML = `Benvenuto ${emailList[i]}`;
        // Altrimenti     
    } else {
        console.log('Email non presente, effettua il login!');
        document.getElementById('result').innerHTML = 'Email non presente, Effettua il login';
    }


}

/*
Gioco dei dadi

Generare un numero random da 1 a 6,
sia per il giocatore sia per il computer.
Stabilire il vincitore,
in base a chi fa il punteggio più alto.
 */

// GIOCO DEI DADI EXERCISE 

// // Variabile giocatore
const player = Math.floor((Math.random() * 6) + 1);
// Variabile computer 
const computer = Math.floor((Math.random() * 6) + 1);

console.log(player, computer);

if (player > computer) {
    console.log('The Winner is the Player!')
} else if (player === computer) {
    console.log('You Tied! Try Again!')
} else {
    console.log('The Winner is the Computer!')
}