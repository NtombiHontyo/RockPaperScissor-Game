// Declare variables
const choices = ['🤚', '👊', '✌'];

const playerOne = document.getElementById('playerOne');

const playerTwo = document.getElementById('playerTwo');

const result = document.getElementById('resultArea');

const clickBtn = document.getElementById('playBtn');

console.log(playerOne);
console.log(playerTwo);
console.log(result);
console.log(clickBtn)


//functions

//function one: generate random number between 0 and 2. return array[i]

const generateRandomEmoji = () => {
    let emojiIndexNumber = Math.floor(Math.random() * 3)
    return choices[emojiIndexNumber];
}

//function two: add innerhtml to player1, 2 and result. Return void

const getNewInnerHTML = (choice1, choice2, Outcomeresult) => {
    playerOne.innerHTML = choice1;
    playerTwo.innerHTML = choice2;
    result.innerHTML = Outcomeresult;
}

// function three: generating a winner using logic and conditionals. return: string elements to be used in results later on

const generateWinner = (a, b) => {
    if ( a === b) {
        return "It's a tie!"
    }

    else if ((a === '🤚' && b === '👊') || (a === '👊' && b === '✌') || (a === '✌' && b === '🤚')) {
        return "Player 1 Wins!"
    }
    else {
        return "Player 2 Wins"
    }
}

//function four: the function to be used in the event listener. parameter: event. uses function one to store result in a variables. calls function three and uses previous variables as arguments. calls second function to store hand signals 
const clickFunction = (event) => {
    let playerOne = generateRandomEmoji();
    let playerTwo = generateRandomEmoji();
    let outcome = generateWinner(playerOne, playerTwo)

    getNewInnerHTML(playerOne, playerTwo, outcome);
}

// the event listener. arguments: click and play(fourth function) 

clickBtn.addEventListener('click', clickFunction)