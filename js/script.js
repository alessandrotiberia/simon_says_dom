/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto
precedentemente, nell'ordine che preferisce. 

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// Funzione per ottenere un numero intero casuale tra un minimo e un massimo


const countdownEl = document.getElementById('countdown');
const numbersListEl = document.getElementById('numbers-list');
const formEl = document.getElementById('answers-form');
const instructionsEl = document.getElementById('instructions');
const messageEl = document.getElementById('message');
const inputs = document.querySelectorAll('#input-group input');

let timer = 3;
const randomNumbers = generateUniqueNumbers(5, 1, 50);
// mostra timer
countdownEl.innerText = timer;

// Stampo i 5 numeri casuali nella lista (ul) usando un ciclo
for (let i = 0; i < randomNumbers.length; i++) {
    numbersListEl.innerHTML += `<li>${randomNumbers[i]}</li>`;
}
const timerId = setInterval(function () {
    timer--; // Sottraggo 1 al timer
    countdownEl.innerText = timer; // Aggiorno il numero a schermo

    // Quando il timer arriva a zero, scatta il cambio di interfaccia
    if (timer === 0) {
        clearInterval(timerId); // Ferma il ciclo del setInterval

        // Nascondo i numeri aggiungendo la classe Bootstrap 'd-none' (display: none)
        numbersListEl.classList.add('d-none');
        instructionsEl.innerText = "Inserisci i numeri che ricordi!";

        // Mostro il form rimuovendo la classe 'd-none'
        formEl.classList.remove('d-none');
    }
}, 1000);