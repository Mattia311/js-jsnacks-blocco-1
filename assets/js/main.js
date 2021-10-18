//L'utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

/*const firtsNumber = parseInt(prompt('Scegli il primo numero'));
const secondNumber = parseInt(prompt('Scegli il secondo numero'));

const text = document.getElementById('text')

if (firtsNumber > secondNumber){

    console.log(firtsNumber);
    text.innerHTML = (firtsNumber);

} else if (firtsNumber < secondNumber) {
    
    console.log(secondNumber);
    text.innerHTML = (secondNumber);

} else {

}*/




//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

/*const Word_1 = prompt('Scegli la prima parola');
const Word_2 = prompt('Scegli la seconda parola');

const text_1 = document.getElementById('text_1');
const text_2 = document.getElementById('text_2');

if (Word_1.length > Word_2.length){

    text_1.innerHTML = (Word_2);
    console.log(Word_1);
    text_2.innerHTML = (Word_1);
    console.log(Word_2);

} else if (Word_1 < Word_2) {
    
    text_1.innerHTML = (Word_1);
    console.log(Word_1);
    text_2.innerHTML = (Word_2);
    console.log(Word_2);

} else {

}*/



//Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.


/*const risult = document.getElementById('text_3');

for (let index = 0; index < 10; index++) {
    const element = parseInt(prompt('Scegli un numero'));

    risult.innerHTML += element;
    console.log(element);
}*/


/*const risult = document.getElementById('text_3');

const primo = parseInt(prompt('Scegli un numero'));
const secondo = parseInt(prompt('Scegli un numero'));
const terzo = parseInt(prompt('Scegli un numero'));
const quarto = parseInt(prompt('Scegli un numero'));
const quinto = parseInt(prompt('Scegli un numero'));
const sesto = parseInt(prompt('Scegli un numero'));
const settimo = parseInt(prompt('Scegli un numero'));
const ottavo = parseInt(prompt('Scegli un numero'));
const nono = parseInt(prompt('Scegli un numero'));
const decimo = parseInt(prompt('Scegli un numero'));

risult.innerHTML = (primo + secondo + terzo + quarto + quinto + sesto + settimo + ottavo + nono + decimo);*/



//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.



 /*const names = ['luigi', 'mario', 'mattia', 'luca', 'alfredo'];

 const askName = prompt("Qual'è il tuo nome?")

 const risult = document.getElementById('text_4');

 for (let i = 0; i < names.length; i++) {
    const element = names[i];
        if (names.includes(askName)) {
            document.getElementById('text_4').innerHTML = ("Il tuo nome è presente nella lista. Puoi partecipare, benvenuto!");
        }
        else {
            document.getElementById('text_4').innerHTML = ("Il tuo nome non è presente nella lista. Non puoi partecipare, mi dispiace!");
        }
    
}*/




//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.



//Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

/*const askNumber = parseInt(prompt('Scegli un numero e io te lo elevo al cubo'));

const risultato = document.getElementById('text_5'); 

console.log(Math.pow(askNumber, 3));

risultato.innerHTML = Math.pow(askNumber, 3);*/




//Stampa le potenze di 2 fino a 1000.

/*for (let index = Math.pow(2, 0); index <= Math.pow(2, 1000); index++) {
    console.log(index);
    const element = risultat[index];


    
}*/







//Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.
/*const askNumber = parseInt(prompt('Scegli un numero di 4 cifre e io ti calcolerò la somma dei suoi numeri'));

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
risultato.innerHTML = sum;*/




//Calcola la somma e la media dei primi 10 numeri.

let somma=0;
const risultatoSomma = document.getElementById('text_8');
const risultatoMedia = document.getElementById('text_9');

for (let i=1; i<=10; i++){
    somma = somma +i ;
}
console.log("somma = "+somma);
risultatoSomma.innerHTML = "la somma dei primi 10 numeri è = "+somma




let somma1 = 0

for (let i=1; i<=10; i++){
    
    somma1+=parseFloat(i);
    
    
}

somma1/=10;
console.log("media = "+somma1);
risultatoMedia.innerHTML = "La media dei primi 10 numeri è = "+somma1;


