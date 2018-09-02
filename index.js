const readlineSync = require('readline-sync');

function userStart() {
    const name = readlineSync.question('HI! What is your name?');
    console.log(`Thanks for joining me ${name}, wanna play a nifty game? In this game all you have to do, is pick a number, as high as you choose. The higher you choose, you harder the game, cause it's the highest number that you will have to guess! I'll generate a number between 1 and your choice. Then you Guess. Ready?`);
    getMaxFromUser(name);
    //let sum = max + 5;
    //console.log('The sum of ' + max + ' plus ' + 5 + ' equals ' + sum + '.');
}

userStart();

function getMaxFromUser(name) {
    let max = readlineSync.questionInt('Pick your number, ' + name + '!');
    
    if (max===0) {console.log('0 is invalid input. Game Over. Feel free to play again!');
    return;}
    generateRandomNumber(name, max);
   
}
function guessNum() {
    let attempt=0; 
    for (attempt=0; attempt>=1; attempt++) {
        return;
    }
}
function getGuessFromUser(max, attempt) {
    attempt++;
    let guess = readlineSync.questionInt('Please guess a number less than or equal to ' + max + '!');
    return guess;
}

function generateRandomNumber(name, max) {
    let goal = Math.floor(Math.random() * max + 1);
    goal = parseInt(goal);
    startGame(name, goal, max);
}

function startGame(name, goal, max) {
    let getWin = false;
    while (getWin === false) {
        let guess = getGuessFromUser(max);
        getWin = isGuessCorrect(name, guess, goal, max);
    }
}

function isGuessCorrect(name, guess, goal, max) {

    if (guess === goal) {
        console.log('WOOOOOOO ' + name + ' thank you for playing! Byeeeee');
        return true;
    } else if (guess === 0) {
        console.log('Invalid Input ' + name + '! End Game.');
        return;
    } else if (guess > goal) {
        console.log('Too high! Please guess again!');
        return false;
    } else if (guess < goal) {
        console.log('Too low! Please guess again!');
        return false;
        guess++;
    } else if (guess > max) {
        console.log('Dont guess higher than max!');
        return false;
    }
}