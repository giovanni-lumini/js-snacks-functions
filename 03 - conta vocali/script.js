/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */
const word = 'javascript';

// Dichiara la funzione qui
function count_vowels (string) {
    //creare variabile dove ci sono le vocali
    let vowels = ["a", "e", "i", "o", "u"];
    /* let counter = 0; */ //SOL1
    let found_volwes = []; //SOL2
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        //se char è presente nell'array vowels, lo conto
        if (vowels.includes(char)) {
            /* counter++ */ //è il contatore creato sopra di valore 0, che incrememta di +1 quando trova la vocale (come i++ del ciclo FOR) //SOL1
            found_volwes.push(char) //SOL2
        }
    }
    /* return counter */ //SOL1
    return found_volwes.length //SOL2
}

// Invoca la funzione qui e stampa il risultato in console
console.log(count_vowels(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)