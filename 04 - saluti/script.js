/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */
const the_name = "Mario";

// Dichiara la funzione qui.
function hello_name (string) {
    const hello = `ciao ${string}`;
    return hello
}

// Invoca la funzione qui e stampa il risultato in console
console.log(hello_name(the_name));

//Risultato atteso se si passa 'Mario': // ciao Mario