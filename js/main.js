//creare array con i cognomi dati (var1)
var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
console.log(listaCognomi);

//aggiungere proprio cognome (prompt + push)
var mioCognome = prompt('Inserisci il tuo cognome');
listaCognomi.push(mioCognome);
console.log(listaCognomi);

//ordinare alfabeticamente i cognomi (?) e inserirli in un secondo array di supporto (var2)
//var cognomiSorted = listaCognomi.sort();
//console.log(cognomiSorted);

//stampare nella console
/* for(var i = 0; i < cognomiSorted.length; i++) {
    console.log((i+1)+" "+cognomiSorted[i]);
} */



//dichiaro una variabile contatore
var x = 0;
//creo un array vuoto da riempire con i cognomi ordinati
var cognomiSorted = [];

/* metto a confronto tra loro tutti gli elementi della lista, impostando due diversi indici per uno stesso array */
for (var a = 0; a < listaCognomi.length; a++) {
    for (var b = 0; b < listaCognomi.length; b++) {

/*         se l'elemento della lista ha un elemento maggiore di sé, aumenta il contatore di uno, altrimenti non fare nulla. Se l'elemento non avrà nessuno maggiore di sé (0), allora sarà esso stesso il maggiore della lista e andrà scritto in posizione "0" del nuovo array, e così via*/
        if (listaCognomi[a] > listaCognomi[b]) {
           x++;
        }
    }
/* alla fine di ogni ciclo di confronto inietto l'elemento analizzato nella posizione definita dal contatore */
console.log(x);
cognomiSorted[x] = listaCognomi[a];
console.log(cognomiSorted[x]);
console.log(cognomiSorted);
x = 0;

}


//stampare in HTML con numeri "umani"
for(var i = 0; i < cognomiSorted.length; i++) {
    document.getElementById("cognomi_ordinati").innerHTML += "<li>" + cognomiSorted[i] + "</li>"
}


