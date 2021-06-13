// // inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

// const input = require("readline-sync");
// let word = " "
// let letterPoints= ""
// const oldPointStructure = {
//   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
//   2: ['D', 'G'],
//   3: ['B', 'C', 'M', 'P'],
//   4: ['F', 'H', 'V', 'W', 'Y'],
//   5: ['K'],
//   8: ['J', 'X'],
//   10: ['Q', 'Z']
// };

// function oldScrabbleScorer(word) {
// 	word = word.toUpperCase();
// 	let letterPoints = "";
 
// 	for (let i = 0; i < word.length; i++) {
 
// 	  for (const pointValue in oldPointStructure) {
 
// 		 if (oldPointStructure[pointValue].includes(word[i])) {
// 			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
// 		 }
 
// 	  }
// 	}
// 	return letterPoints;
//   return word;
//  }

// // your job is to finish writing these functions and variables that we've named //
// // don't change the names or your program won't work as expected. //

// function initialPrompt() {
//   //  console.log("Let's play some scrabble! Enter a word:");
//   let word = input.question("Let's play some scrabble! Enter a word: ");
// };


const input = require("readline-sync");
let word = " "
let letterPoints= ""
const oldPointStructure = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
};


function initialPrompt() {

    let intro = input.question(`Welcome to the Scrabble score calculator!

Which scoring algorithm would you like to use?

0 - Scrabble: The traditional scoring algorithm.
1 - Simple Score: Each letter is worth 1 point.
2 - Bonus Vowels: Vowels are worth 3 pts, and consonants are 1 pt.

Enter 0, 1, or 2:`);
    return intro;
}
let score = 0;
// const input = require('readline-sync');

function transform(letterPoint) {
    const ts = {};
    for (let score in letterPoint) {
        let letters = letterPoint[score];
        for (let i = 0; i < letters.length; i++) {
            ts[letters[i].toLowerCase()] = Number(score);
        }
    }
    return ts;
}
let newPointStructure = transform(oldPointStructure);


// let word = " ";




// let simpleScore = 0

function simpleScore(word) {
    let simpleScore = word.length;
    return simpleScore;
}




function vowelScore(word) {
    let vowelBonusScore = 0
    let vowel = ["a", "e", "i", "o", "u", "y"];
    for (let i = 0; i < word.length; i++) {
        if (vowel.includes(word[i])) {
            vowelBonusScore = vowelBonusScore + 3;
        } else {
            vowelBonusScore = vowelBonusScore + 1;
        }
    }
    return vowelBonusScore;
}

function scrabbleScore(word, object) {
    let scrabbleScore = 0
    for (let i = 0; i < word.length; i++) {
        if (Object.keys(newPointStructure).includes(word[i])) {
            scrabbleScore = scrabbleScore + newPointStructure[word[i]];
        }

    }
    return scrabbleScore;
}

let scrabbleScoreO = {
    name: "Scrabble",
    description: "The traditional scoring algorithm.",
    scoreFunction: scrabbleScore,
};
let vowelBonusScoreO = {
    name: "Vowel",
    description: "Vowels are 3 pts, consonants are 1 pt.",
    scoreFunction: vowelScore,
};
let simpleScoreO = {
    name: "Simple",
    description: "Each letters is worth 1 point.",
    scoreFunction: simpleScore,
};
let scoringAlgorithms = [scrabbleScoreO, simpleScoreO, vowelBonusScoreO];


function runProgram(scoringAlgorithms) {
    let num = initialPrompt();
    num = (Number(num));
    const readline = require('readline-sync');
    while (true) {
        let word = readline.question(
            `Enter a word to score(Typing 'St0p' will end the program): `);
        word = word.toLowerCase();
        if (word == "st0p") {
            console.log("Goodbye");
            break;
        }

        if (num === 0) {
            console.log(`Using algorithm ${scoringAlgorithms[0].name}`);
            console.log(`Is worth ${scrabbleScore(word, newPointStructure)} points`);
        } else if (num === 1) {
            console.log(initialPrompt);
            console.log(`Using algorithm: ${scoringAlgorithms[1].name}`);
            console.log(`Is worth ${simpleScore(word)} points`);
        } else if (num === 2) {
            console.log(initialPrompt);
            console.log(`using algorithm ${scoringAlgorithms[2].name}`);
            console.log(`Is worth ${vowelScore(word)} points`);
        }
    }
}


runProgram(scoringAlgorithms);

// let simpleScore;

// let vowelBonusScore;

// let scrabbleScore;

// const scoringAlgorithms = [];

// function scorerPrompt() {}

// function transform() {};

// let newPointStructure;

// function runProgram() {
//   initialPrompt();
//   oldScrabbleScorer(word)
//   //console.log(` this.function(w)= ${oldScrabbleScorer(word)}`)
//   console.log(letterPoints)
//   // console.log(this.oldScrabbleScorer(letterPoints))
// }


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

