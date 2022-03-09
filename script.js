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


const emailUser = prompt('Inserisci una mail');
const emailList = ['luciomelis1992@gmail.com', 'giova@gmail.com', 'luffy@gmail.com', 'zoro@gmail.com'];

for (let i = 0; i < emailList.length; i++) {

    if (emailList[i] === emailUser) {
        console.log('Hai inserito una mail corretta');
    } else {
        console.log('Email non presente, effettua il login!');
    }
}