//ASSEGNAMO LA FUNZIONE CHE GENERA I QUADRATI DELLA GRIGLIA//
function createSquare() {
    let currentElement = document.createElement('div');
    // ASSEGNO LA CLASSE SQUARE ALL'ELEMENTO CREATO//
    currentElement.classList.add('square');
    // RESTITUISCO IL QUADRATO CONTENUTO ALL'INTERNO DELLA VARIABILE//
    return currentElement;
}
//RECUPERO ELEMENTO CONTENENTE LA MIA GRIGLIA//
const grid = document.getElementById('grid');

for (let i = 1; i < 100; i++) {

    let currentSquare = createSquare();

    currentSquare.addEventListener('click', function () {
        console.log(this);
        this.classList.toggle('clicked');
    });

    currentSquare.innerText = i + 1;

    grid.append(currentSquare);
}