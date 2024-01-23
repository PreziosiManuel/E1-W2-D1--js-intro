/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/*
1. String: contiene dei caratteri
2. Number: contiene dei numeri
3. Boolean: è il risultato e può contenere solo "true" o "false"
4. Undefined: è il risultato quando non è stata trovata una risposta
5. Null: è il risultato "nullo" quando vogliamo che non ci sia nessun risultato
6. Bigint:
7. Symbol: 
8. Object:
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let myName = "Manuel";
console.log("Prima variabile con il nome: ", myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let firNum = 12;
let secNum = 20;
console.log("Somma con variabili: ", firNum + secNum);
console.log("Somma senza variabili: ", 12 + 20);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
myName = "Preziosi";
console.log("Modifica della prima variabile con il cognome: ", myName);

// const myName1 = "Manuel";
// console.log(myName1);
// myName1 = "Preziosi";
// console.log(myName1);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
console.log("4 - varibile x(12): ", 4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1 = "john";
let name2 = "John";

console.log("Comparazione tra john e John, con la funzione(===): ", name1 === name2);

let name12 = "john";
let name22 = "John";
console.log("Comparazione tra john e John, aggiungendo la funzione (!)(===): ", !(name12 === name22));

// ESERCIZIO EXTRA RICETTA
