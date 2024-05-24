let userscore = 0;
let computerscore = 0;
const userscore_span = document.getElementById('user-score');
const computerscore_span = document.getElementById('computer-score');
const scoreboard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const reset_btn = document.getElementById('btn');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomnumber = Math.floor(Math.random() * 3);
    return choices[randomnumber];
}

function convertcase(anythingIwant) {
    if (anythingIwant === 'paper') return 'Paper';
    if (anythingIwant === 'scissors') return 'Scissors';
    return 'Rock';
}

function win(user, computer) {
    userscore++;
    userscore_span.innerHTML = userscore;
    const userName = '(user)'.fontsize(3).sup();
    const compName = '(comp)'.fontsize(3).sup();
    result_div.innerHTML = `<p>${convertcase(user)} ${userName} beats ${convertcase(computer)} ${compName}. You win!</p>`;
    const roundstatus = document.getElementById(user);
    roundstatus.classList.add('winningStyles');
    setTimeout(() =>
        roundstatus.classList.remove('winningStyles'), 300);
}

function loses(user, computer) {
    computerscore++;
    computerscore_span.innerHTML = computerscore;
    const userName = '(user)'.fontsize(3).sup();
    const compName = '(comp)'.fontsize(3).sup();
    result_div.innerHTML = `<p>${convertcase(computer)} ${compName} beats ${convertcase(user)} ${userName}. You lose!</p>`;
    const roundstatus = document.getElementById(user);
    roundstatus.classList.add('losingStyles');
    setTimeout(() =>
        roundstatus.classList.remove('losingStyles'), 300);
}

function draw(user, computer) {
    const userName = '(user)'.fontsize(3).sup();
    const compName = '(comp)'.fontsize(3).sup();
    result_div.innerHTML = `<p>It was a draw! You both chose ${convertcase(user)}</p>`;
    const roundstatus = document.getElementById(user);
    roundstatus.classList.add('drawStyles');
    setTimeout(() =>
        roundstatus.classList.remove('drawStyles'), 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'paperrock':
        case 'rockscissors':
        case 'scissorspaper':
            win(userChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'scissorsrock':
        case 'paperscissors':
            loses(userChoice, computerChoice);
            break;
        case 'rockrock':
        case 'scissorsscissors':
        case 'paperpaper':
            draw(userChoice, computerChoice);
            break;
    }
}

// Reset scores
function resetScores() {
    userscore = 0;
    computerscore = 0;
    userscore_span.innerHTML = userscore;
    computerscore_span.innerHTML = computerscore;
    result_div.innerHTML = '<p>Scores have been reset!</p>';
}

function main() {
    rock_div.addEventListener('click', () => game('rock'));
    paper_div.addEventListener('click', () => game('paper'));
    scissors_div.addEventListener('click', () => game('scissors'));
    reset_btn.addEventListener('click', resetScores);
}
main();
