let randomNumber;
let attempts;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('feedback').textContent = '';
    document.getElementById('attempts').textContent = 'Attempts: 0';
    document.getElementById('restartBtn').style.display = 'none';
}

function submitGuess() {
    const guessInput = document.getElementById('guessInput');
    const feedback = document.getElementById('feedback');
    const attemptsDisplay = document.getElementById('attempts');
    const guess = parseInt(guessInput.value);

    if (isNaN(guess)) {
        feedback.textContent = 'Please enter a valid number.';
        feedback.style.color = 'red';
    } else if (guess < 1 || guess > 100) {
        feedback.textContent = 'Guess must be between 1 and 100.';
        feedback.style.color = 'red';
    } else {
        attempts++;
        if (guess === randomNumber) {
            feedback.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
            feedback.style.color = 'green';
            document.getElementById('restartBtn').style.display = 'inline-block';
        } else if (guess < randomNumber) {
            feedback.textContent = 'Too low! Try again.';
            feedback.style.color = 'orange';
        } else {
            feedback.textContent = 'Too high! Try again.';
            feedback.style.color = 'orange';
        }
        attemptsDisplay.textContent = `Attempts: ${attempts}`;
    }

    guessInput.value = '';
}

document.getElementById('submitGuessBtn').addEventListener('click', submitGuess);
document.getElementById('restartBtn').addEventListener('click', startGame);


startGame();
