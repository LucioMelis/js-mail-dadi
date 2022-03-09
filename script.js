console.log('Js Ok');
/*
Mail

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito
del controllo.*/

/*
Gioco dei dadi

Generare un numero random da 1 a 6,
sia per il giocatore sia per il computer.
Stabilire il vincitore,
in base a chi fa il punteggio più alto.
 */

// MAIL EXERCISE 
const emailUser = prompt('Inserisci una mail');
const emailList = ['luciomelis1992@gmail.com', 'giova@gmail.com', 'luffy@gmail.com', 'zoro@gmail.com'];

for (let i = 0; i < emailList.length; i++) {

    if (emailList[i] === emailUser) {
        console.log('Hai inserito una mail corretta');
        document.getElementById('result').innerHTML = 'Email inserita correttamente';
        document.getElementById('welcome').innerHTML = `Benvenuto ${emailList[i]}`;
    } else {
        console.log('Email non presente, effettua il login!');
        document.getElementById('result').innerHTML = 'Email non presente, Effettua il login';
    }


}

// GIOCO DEI DADI EXERCISE 

const number = Math.floor((Math.random() * 6));