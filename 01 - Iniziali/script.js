/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
/* 
1-inserire un array
2-prendere ogni item dell'array
3-prendere l'iniziale dell'item
4-stampare tutte le iniziali degli item
*/

// Dichiara la funzione qui.
function getInitials(names) {
    return names.map(name => name[0]);
}

// Invoca la funzione qui e stampa il risultato in console
console.log(getInitials(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

