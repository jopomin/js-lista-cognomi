//creare array con i cognomi dati (var1)
var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
console.log(listaCognomi);

//aggiungere proprio cognome (prompt + push)
var mioCognome = prompt('Inserisci il tuo cognome');
listaCognomi.push(mioCognome);
console.log(listaCognomi);

//ordinare alfabeticamente i cognomi (?) e inserirli in un secondo array di supporto (var2)
var cognomiSorted = listaCognomi.sort();
console.log(cognomiSorted);

//stampare nella console
/* for(var i = 0; i < cognomiSorted.length; i++) {
    console.log((i+1)+" "+cognomiSorted[i]);
} */


//stampare in HTML con numeri "umani"
for(var i = 0; i < cognomiSorted.length; i++) {
    document.getElementById("cognomi_ordinati").innerHTML += "<li>" + cognomiSorted[i] + "</li>"
}


