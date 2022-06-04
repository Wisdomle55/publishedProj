
var handPossibilites = ["rock", "paper", "scissors"];
let userWins = 0;


function computerPlay() {
    return handPossibilites[Math.floor(Math.random() * handPossibilites.length)];
}

function playRound(playerHand, computerHand) {
    playerHand = playerHand.toLowerCase();
    if (computerHand == playerHand) {
        return "It's a tie";
    }

    /* check player hand vs paper */
    if (computerHand == "paper" && playerHand == "rock") {
        return "You lose! Paper beats Rock";
    }
    if (computerHand == "paper" && playerHand == "scissors") {
        userWins++;
        return "You win! Scissors beats Paper";
    }

    /* check player hand vs rock */
    if (computerHand == "rock" && playerHand == "paper") {
        userWins++;
        return "You win! Paper beats Rock";
    }
    if (computerHand == "rock" && playerHand == "scissors") {
        return "You lose! Rock beats Scissors";
    }

    /* check player hand vs scissors */
    if (computerHand == "scissors" && playerHand == "paper") {
        return "You lose! Scissors beats Paper";
    }
    if (computerHand == "scissors" && playerHand == "rock") {
        userWins++;
        return "You win! Rock beats Scissors";
    }
}

function game() {
    console.log("Do you feel lucky punk, well do you?");
    for (let i = 0; i < 5; i++) {
        let playerHand = prompt("What's your play?");
        if (handPossibilites.includes(playerHand.toLowerCase())) {
            console.log(playRound(playerHand, computerPlay()));
        } else {
            console.log("You lost this round because you misstyped");
        }
    }

    if (userWins > 2) {
        console.log(`Congratulations, you won ${userWins} out of 5 hands.`);
    } else {
        console.log(`You only won ${userWins} out of 5 hands. Better luck next time.`);
    }
}

game();