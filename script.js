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
let btn_reset = document.getElementById("reset");

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

/* 
        PRENDO UNA SINGOLA CELLA DALLA LISTA DI CELLE, E GLI AGGIUNGO UN ADDEVENT.
*/

let cella_griglia = document.querySelectorAll(".cella");

console.log(cella_griglia.length);
let bombs =[];
generaBombe(1,cella_griglia.length);


for (let i = 0; i < cella_griglia.length; i++) {
    const cella_singola = cella_griglia[i];
    
        cella_singola.addEventListener("click", funzioneClick)
       function funzioneClick() 
            {   
                cella_singola.classList.add("blue");
                if(bombs.includes(parseInt(cella_singola.textContent))) {
                    cella_singola.classList.remove("blue");
                    cella_singola.classList.add("red");
                    alert("hai preso una bomba!, hai perso... clicca il tasto di reset per ricominciare"); 
                    btn_reset.style.display = "block";       
                } 
                btn_reset.addEventListener("click", function() {
                    cella_singola.classList.remove("blue", "red");
                    btn_reset.style.display = "none";
                })  
            }
}
/*  mi serve una lista di 16 bombe */

console.log(bombs.toString());




















/* funzione generabombe */
function generaBombe (min, lunghezza_lista_celle) {
    for (let i = 0; i < 16; i++) {
       let element= numeroRandom(min , lunghezza_lista_celle); 
       if(!bombs.includes(element))  
        bombs.push(element); 
       else
        i--;
    }

}

/* funzione che mi richiama n celle  */
function creazione_celle (numero) {
    for (let i = 1; i <= numero; i++) {
        const element = `<div class="cella">${i}</div>`;

        divContainer.innerHTML += element;
    }

}

/* funzione numero random */
function numeroRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
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

