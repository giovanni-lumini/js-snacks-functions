/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */
const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
console.log(names[0][0]); //prende l'elemento 0 dell'array e dell'elememto 0, prende, in questo caso la lettera, posta allo 0

// Dichiara la funzione qui
function get_iniziali (array) {
    let iniziali = [];
    for (let i = 0; i < array.length; i++) {
        iniziali.push(names[i][0])
    }
    return iniziali;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(get_iniziali (names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
