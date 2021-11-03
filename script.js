// --------------------------------------- <1> ---------------------------------------
// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro (o simili, l’importante è dare all’utente il feedback che ha scoperto una casella che rimarrà scoperta, con il numero relativo).

// --------------------------------------- <2> ---------------------------------------
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l’utente clicca su ogni cella:
// se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina,
// altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// __________________________________________________________________________________

// Chiedo all'utente il livello di difficoltà che vuole.

let chosenDiff = parseInt(prompt("Scegli la difficoltà: da 1 a 3"));
console.log("Difficoltà: ", chosenDiff);

let numberOfSquares;
// Se la difficoltà è 1(facile) genero 100 quadratini (10 per riga)
// Se la difficoltà è 2(media) genero 81 quadratini (10 per riga)
// Se la difficoltà è 3(difficile) genero 49 quadratini (10 per riga)
if (chosenDiff === 1) {
    numberOfSquares = 100;
    console.log("Numero di quadratini:", numberOfSquares);
} if (chosenDiff === 2) {
    numberOfSquares = 81;
    console.log("Numero di quadratini:", numberOfSquares);
} if (chosenDiff === 3) {
    numberOfSquares = 49;
    console.log("Numero di quadratini:", numberOfSquares);
};
// 2 - Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
    // Faccio generare al computer 16 numeri casuali con la condizione che non ci siano doppioni:
    // Se la difficoltà è 1 (da 1 a 100) - Se la difficoltà è 2 (da 1 a 81) - Se la difficoltà è 3 (da 1 a 49)



// Genero una griglia di gioco in base alla difficoltà scelta
// Quando genererò i quadratini all'interno avranno un numero progressivo nascosto

for (i = 0; i < numberOfSquares; i++) {
    let gridContainer = document.querySelector(".container");
    let newSquare;
    newSquare = createElement("div", "square");
    newSquare.innerHTML = `<span>${i + 1}</span>`;
    
    if (numberOfSquares == 49) {
        addClass (newSquare, "hard");
    } if (numberOfSquares == 81) {
        addClass (newSquare, "medium");
    } if (numberOfSquares == 100) {
        addClass (newSquare, "easy");
    }
    // Al click, il quadratino cambierà colore e mostrerà il numero nascosto
    // 2 - se il numero è presente nella lista dei numeri casuali generati la cella si colora di rosso e la partita termina.
    // 2 - sennò il punteggio del giocatore aumenterà di 1 ed il gioco continuerà.
    
    newSquare.addEventListener("click",
    function() {
        addClass (newSquare, "active");
    }
    )
    
    gridContainer.appendChild(newSquare);
}

// 2 - Al termine della partita il software deve scoprire tutte le bombe e comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato un quadratino con un numero consentito.
    // Se il punteggio del giocatore è uguale a (numero di quadratini generati - 16 bombe) -> il giocatore vince e tutte le bombe si colorano di rosso.



// funzioni generali
function createElement(elementTag, elementClass) {
    let createdElement = document.createElement(elementTag);
    createdElement.classList.add(elementClass);
    return createdElement;
}

function addClass (targetElement, plusClass) {
    let addedClass = targetElement.classList.add(plusClass)
    return addedClass;
}