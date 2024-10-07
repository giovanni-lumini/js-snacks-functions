/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

// Dichiara la funzione qui.
function hello_name(name) {
    const hello=`ciao ${name}`;
    return hello
}

// Invoca la funzione qui e stampa il risultato in console
const name2=hello_name('Mario')
console.log(name2);

//Risultato atteso se si passa 'Mario': // ciao Mario