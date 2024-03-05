const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const messageElement = document.getElementById('message');
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageElement.textContent = 'Please enter a valid number between 1 and 100.';
    } else {
        attempts++;

        if (userGuess === secretNumber) {
            messageElement.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
            disableInputAndButton();
        } else {
            const hint = userGuess < secretNumber ? 'higher' : 'lower';
            messageElement.textContent = `Try again! The secret number is ${hint}.`;
        }
    }
}

function resetGame() {
    const guessInput = document.getElementById('guessInput');
    const messageElement = document.getElementById('message');

    guessInput.value = '';
    messageElement.textContent = '';
    enableInputAndButton();

    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
}

function disableInputAndButton() {
    const guessInput = document.getElementById('guessInput');
    const submitButton = document.querySelector('button');

    guessInput.disabled = true;
    submitButton.disabled = true;
}

function enableInputAndButton() {
    const guessInput = document.getElementById('guessInput');
    const submitButton = document.querySelector('button');

    guessInput.disabled = false;
    submitButton.disabled = false;
}
