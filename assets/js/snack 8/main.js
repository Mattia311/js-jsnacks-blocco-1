//Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.
const askNumber = parseInt(prompt('Scegli un numero di 4 cifre e io ti calcolerò la somma dei suoi numeri'));

const risultato = document.getElementById('text_7');
   
var value = askNumber,
    sum = value
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);

console.log(sum);
risultato.innerHTML = sum;