const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

const PLAYER = 0;
const CPU = 1;
const DRAW = 2;

playGame();

function cpuTurn() {
	// random integer from 0 to 3
	return Math.floor(Math.random() * 4);
}

// returns the winner
function checkWinner(player, cpu) {
	if (player == cpu) {
		return DRAW;
	}
	if (
		player == ROCK  && cpu == SCISSORS||
		player == PAPER && cpu == ROCK ||
		player == SCISSORS && cpu == PAPER
	) {
		return PLAYER;
	}
	return CPU;
}

function decodeInput(string) {
	string = string.trim().toLowerCase();
	if (string == "rock") {
		return ROCK;
	}
	if (string == "paper") {
		return PAPER;
	}
	if (string == "scissors") {
		return SCISSORS;
	}
	throw "invalid input";
}

function playRound() {
	try {
		var playerTurn = decodeInput(prompt("Enter your weapon (rock, paper, scissors):"));
	} catch {
		playRound();
	}
	return checkWinner(playerTurn, cpuTurn());
}

function playGame() {
	let playerScore = 0;
	let cpuScore = 0;

	for (let i = 0; i < 5; i++) {
		let winner = playRound();
		if (winner == PLAYER) {
			playerScore++;
		} else if (winner == CPU) {
			cpuScore++;
		}
		console.log("Player: " + playerScore + ", CPU: " + cpuScore);
	}

	if (playerScore > cpuScore) {
		console.log("Player wins!");
	} else if (cpuScore > playerScore) {
		console.log("CPU wins!");
	} else {
		console.log("Draw!");
	}
	if (confirm("Play again?")) {
		playGame();
	}
}
