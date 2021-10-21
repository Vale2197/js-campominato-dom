/* Consegna
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

const divContainer = document.querySelector(".container");

let domandaUtente;
/* verifico che l'utente inserisca 1 o 2 o 3 */
let numero_celle = 0;

do {

    domandaUtente = parseInt(prompt("scegli un livello di difficoltà, digita 1, 2 o 3"));

} while (!verificaUtente())

if (domandaUtente == 1) {
    numero_celle = 100;
    divContainer.style.width = "1000px";
    creazione_celle(numero_celle);

}
else if (domandaUtente == 2) {
    numero_celle = 81;
    divContainer.style.width = "900px";
    creazione_celle(numero_celle);
}
else if (domandaUtente == 3) {
    numero_celle = 49;
    divContainer.style.width = "700px";
    creazione_celle(numero_celle);
}

/* cella_griglia.addEventListener("click", function() {
    cella_griglia.classList.add("red");  
}); */


let cella_griglia = document.querySelectorAll(".cella");
console.log(cella_griglia);

for (let i = 0; i < cella_griglia.length; i++) {
    const cella_singola = cella_griglia[i];

        cella_singola.addEventListener("click", function () {
        cella_singola.classList.add("blue");
    })
}














/* funzione che mi richiama n celle  */
function creazione_celle (numero) {
    for (let i = 1; i <= numero; i++) {
        const element = `<div class="cella">${i}</div>`;

        divContainer.innerHTML += element;
    }

}

/* funzione verifica domanda utente */

function verificaUtente () {
    if (domandaUtente == 1 || domandaUtente == 2 || domandaUtente == 3) {
        return true
    } 
    else {
        alert("non hai inserito correttamente il numero..");
        return false 
    }
}

