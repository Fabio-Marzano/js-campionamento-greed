//ASSEGNAMO LA FUNZIONE CHE GENERA I QUADRATI DELLA GRIGLIA//
function createSquare() {
    let currentElement = document.createElement('div');
    // ASSEGNO LA CLASSE SQUARE ALL'ELEMENTO CREATO//
    currentElement.classList.add('square');
    // RESTITUISCO IL QUADRATO CONTENUTO ALL'INTERNO DELLA VARIABILE//
    return currentElement;
}
//RECUPERO IL PULSANTE DAL DOM//
const btn = document.getElementById('start');
//RECUPERO ELEMENTO CONTENENTE LA MIA GRIGLIA//
const grid = document.getElementById('grid');

btn.addEventListener('click', function () {
    // ESEGUO CICLO DI 100 ITERAZIONI PER CREARE LA GRIGLIA//
    for (let i = 0; i < 100; i++) {
        // CREO UN QUADRATO CON LA FUNZIONE createSquare()//
        let currentSquare = createSquare();
        //AGGIUNGO EVENTO CLICK AL QUADRATO CREATO//
        currentSquare.addEventListener('click', function () {
            console.log(this);
            this.classList.toggle('clicked');
        });
        //GLI ASSEGNO IL NUMERO PROGRESSIVO//
        currentSquare.innerText = i + 1;
        //APPENDO IL QUADRATO APPENA CREATO ALL'INTERNO DELLA GRIGLIA//
        grid.append(currentSquare);

    }

});
