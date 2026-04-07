function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione che genera un array di tot numeri casuali unici
function generateUniqueNumbers(amount, min, max) {
    const numbers = [];

    // Continuare ciclo finché non abbiamo riempito l'array con la quantità richiesta
    while (numbers.length < amount) {
        const randomNum = getRandomNumber(min, max);

        // Se il numero NON è già presente nell'array, lo aggiungo
        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }

    return numbers;
}