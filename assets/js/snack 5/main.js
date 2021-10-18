//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.


const number = [];
const risultato = document.getElementById('text_10');

for (let index = 0; index <= 5; index++) {
    const askNumber = parseInt(prompt('Scegli un numero'));

    if(askNumber % 2 == 0) {

    } else {
        number.push(askNumber)
    }
    
}
console.log(number);
risultato.innerHTML = number;