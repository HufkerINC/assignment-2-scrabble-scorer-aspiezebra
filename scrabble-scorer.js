// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");
let word = ""
const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   word = input.question("Let's play some scrabble! Enter a word: ");
};

let simplescore = 0;
function simpleScore (word) {
  simplescore = word.length;
  return simplescore;
}

let vowelbonusscore = 0;
function vowelBonusScore (word) {
  
  let vowel = ["a" , "e" , "i" , "o" , "u" , "y"];
  for (let i = 0; i < word.length; i++) {
    if (vowel.includes(word[i])) {
      vowelbonusscore = vowelbonusscore + 3;
    } else {
      vowelbonusscore = vowelbonusscore + 1;
    }
  }
  return vowelbonusscore;
  }

let scrabblescore = 0;
function scrabbleScore (word, object) {
  scrabblescore = 0;
  for (let i = 0; i < word.length; i++) {
    if (Object.keys(newPointStructure).includes(word[i])) {
      scrabblescore = scrabblescore + newPointStructure[word[i]];
    } 
    
  }
  return scrabblescore;
}

const scoringAlgorithms = [simpleScore, vowelBonusScore, scrabbleScore];

function scorerPrompt() {}

function transform(letterScore) {
 const transform = {};
  for (let score in letterScore) {
    let letters = letterScore[score];
    for (let i = 0; i < letters.length; i++) {
      transform[letters[i].toLowerCase()] = Number(score);
    }
  }
  return transform;
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   initialPrompt();
   console.log(oldScrabbleScorer(word))
   
}

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

