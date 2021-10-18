//Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.



const risult = document.getElementById('text_3');

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

risult.innerHTML = (primo + secondo + terzo + quarto + quinto + sesto + settimo + ottavo + nono + decimo);
