const readlineSync = require('readline-sync');

function userStart() {
    const name = readlineSync.question('HI! What is your name?');
    console.log('Nice! ' + name + ' , thanks for joining me! ');
    getMaxFromUser(name);
    //let sum = max + 5;
    //console.log('The sum of ' + max + ' plus ' + 5 + ' equals ' + sum + '.');
}

userStart();

function getMaxFromUser(name) {
    let max = readlineSync.questionInt('Pick any number greater than 0! picking 0 will lose!');
    
    if (max===0) {console.log('Cmon, dude. At least play by the rules! Please dont test me');
    getMaxFromUser();}
    generateRandomNumber(name, max);
   
}

function getGuessFromUser(max) {
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
    } else if (guess > max) {
        console.log('Dont guess higher than max!');
        return false;
    }
}