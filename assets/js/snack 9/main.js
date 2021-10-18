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