//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

const Word_1 = prompt('Scegli la prima parola');
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

}