// script.js
let playerScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

const playerButtons = document.querySelectorAll('.choice');
const message = document.getElementById('message');
const score = document.getElementById('score');

playerButtons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        updateScore(result);
        updateMessage(result, playerChoice, computerChoice);
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    }
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock')
    ) {
        return 'win';
    } else {
        return 'lose';
    }
}

function updateMessage(result, playerChoice, computerChoice) {
    if (result === 'win') {
        message.textContent = `You Win! ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}.`;
    } else if (result === 'lose') {
        message.textContent = `You Lose! ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}.`;
    } else {
        message.textContent = `It's a draw! You both chose ${capitalize(playerChoice)}.`;
    }
}

function updateScore(result) {
    if (result === 'win') {
        playerScore++;
    } else if (result === 'lose') {
        computerScore++;
    }
    score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
