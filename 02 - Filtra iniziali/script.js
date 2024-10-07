/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */


// Dichiara la funzione qui.
/* function start_with(names, letter) {
    return names.filter(name => name.startsWith(letter));
} */
function start_with(names, letter) {
    for (let i= 0; i< names.length; i++) {
        if (names[i].startsWith(letter))
        console.log(names[i]);
    }
}

// Invoca la funzione qui e stampa il risultato in console
const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const letter='A';
start_with(names,letter);



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]