//ASSEGNAMO LA FUNZIONE CHE GENERA I QUADRATI DELLA GRIGLIA//
function createSquare() {
    let currentElement = document.createElement('div');
    // ASSEGNO LA CLASSE SQUARE ALL'ELEMENTO CREATO//
    currentElement.classList.add('square');
    // RESTITUISCO IL QUADRATO CONTENUTO ALL'INTERNO DELLA VARIABILE//
    return currentElement;
}
