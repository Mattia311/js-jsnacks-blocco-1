//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.



 const names = ['luigi', 'mario', 'mattia', 'luca', 'alfredo'];

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
    
}
