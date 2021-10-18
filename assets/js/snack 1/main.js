//L'utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

const firtsNumber = parseInt(prompt('Scegli il primo numero'));
const secondNumber = parseInt(prompt('Scegli il secondo numero'));

const text = document.getElementById('text')

if (firtsNumber > secondNumber){

    console.log(firtsNumber);
    text.innerHTML = (firtsNumber);

} else if (firtsNumber < secondNumber) {
    
    console.log(secondNumber);
    text.innerHTML = (secondNumber);

} else {

}