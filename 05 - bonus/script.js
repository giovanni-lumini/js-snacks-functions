/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
"buongiorno" se è mattina (fino alle 13), 
"buon pomeriggio" se è pomeriggio (fino alle 17) 
"buonasera" se è sera (oltre le 17)
*/
const the_name = 'Mario';


// Dichiara la funzione qui.
function greetings(string_name) {
    let hour = new Date().getHours();
    console.log(hour);
    let greet
    if (hour <= 13) {
        greet = "buongiorno";
    } else if (hour > 13 && hour <= 17) {
        greet = "buonpomeriggio";
    } else (hour > 17)
        greet = "buonasera";
    return `${greet} ${the_name}`
}

// Invoca la funzione qui e stampa il risultato in console
console.log(greetings(the_name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.