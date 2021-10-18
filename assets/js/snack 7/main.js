//Stampa le potenze di 2 fino a 1000.



const risultato = document.getElementById('text_6');

for (let index = 0; index <= 1000; index++) {
    

   const element = Math.pow(2, index);
   console.log(element);
   risultato.innerHTML += element;
   
}