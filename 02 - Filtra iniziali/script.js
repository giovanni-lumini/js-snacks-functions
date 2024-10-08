/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */
const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
names[0] //accedo al primo elemento dell'array

// Dichiara la funzione qui.
function start_with (array, char) {
    let new_array = [];
    for (let i = 0; i < array.length; i++) {
        //crea una variabile che contenga l'elemento dell'array
        let name_element = array[i];
        //verifico se l'elemento inizi con il carattere richiesto
        if (name_element[0] == char) { //[0] accede al primo carattere della parola dell'array
            new_array.push(name_element)
        }
        //se inizia con quel carattere lo inserisco nell'array  
    }
    return new_array
}

// Invoca la funzione qui e stampa il risultato in console
console.log(start_with (names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]