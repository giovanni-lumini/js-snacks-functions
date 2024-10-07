/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

/* const word = 'javascript'; */


// Dichiara la funzione qui.
function vowels_inside_word(word) {
    const vowels = 'aeiou';
    let count = 0;
    for(let i=0; i<word.length; i++){
        if(vowels.includes(word[i])){
            console.log(word[i]);
            count++;
        }             
    }
    return count;
}

console.log(vowels_inside_word("javascript"));""


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'javascript': 3 (a, a, i)