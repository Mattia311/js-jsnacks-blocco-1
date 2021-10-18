//Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

const askNumber = parseInt(prompt('Scegli un numero e io te lo elevo al cubo'));

const risultato = document.getElementById('text_5'); 

console.log(Math.pow(askNumber, 3));

risultato.innerHTML = Math.pow(askNumber, 3);
