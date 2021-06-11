// Refer to the online book to access detailed instructions for this project.

// URL = https://education.launchcode.org/intro-to-professional-web-dev/assignments/scrabble-scorer.html
// Here is the oldPointStructure object:
const oldPointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', 'G'],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
   10: ['Q', 'Z']
};

// Code your initialPrompt function here:

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
// Code your transform function here:
const input = require('readline-sync');
function transform(letterScore) {
  const ts = {};
  for (let score in letterScore) {
    let letters = letterScore[score];
    for (let i = 0; i < letters.length; i++) {
      ts[letters[i].toLowerCase()] = Number(score);
    }
  }
  return ts;
}
let newPointStructure = transform(oldPointStructure);
// console.log(transform(oldPointStructure));


let word = " ";

// Code your runProgram function here:





// Use the transform function to create the newPointStructure object here:


// Create your scoringAlgorithms array here:
let sScore = 0
function simpleScore (word) {
  let sScore = word.length;
  return sScore;
}

// function vowelScore (word) {
//   let vScore = 0;
//   let vowel = ["A" , "E" , "I" , "O" , "U" , "Y"];
//   for (let i = 0; i < vowel.length; i++) {
//     if (vowel.includes(word[i])) {
//       vScore = vScore + 3;
//     }
//   }
//   }
  
      
    
//    for (let i = 0; i < word.length; i++) {
//      if (word.includes(word[i])) {
//        let ssScore = sScore + newPointStructure;
//      }
//    }
  
// function scrabbleScore (newPointStructure, scrabbleScore) {
// }
// function scrabbleScore(word, object) {
//   let total = 0;
//   let arr = [];
//   for (i = 0; i < word.length; i++) {
//     arr.push(word[i]);
//     total = total + object[arr[i]];

//   }
// }
// function simpleScore (word) {
//   let sScore = word.length
//   return sScore;
// };

function vowelScore (word) {
  let vScore = 0
  let vowel = ["a" , "e" , "i" , "o" , "u" , "y"];
  for (let i = 0; i < word.length; i++) {
    if (vowel.includes(word[i])) {
      vScore = vScore + 3;
    } else {
      vScore = vScore + 1;
    }
  }
  return vScore;
  }
function scrabbleScore (word, object) {
  let ssScore = 0
  for (let i = 0; i < word.length; i++) {
    if (Object.keys(newPointStructure).includes(word[i])) {
      ssScore = ssScore + newPointStructure[word[i]];
    } 
    
  }
  return ssScore;
}
// Call the runProgram function here:

let ssScoreO = {
  name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scoreFunction: scrabbleScore,
  };
let vScoreO = {
  name: "Vowel",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scoreFunction: vowelScore,
  };
let sScoreO = {
  name: 'Simple'
  description: "Each letters is worth 1 point.",
  scoreFunction: simpleScore,
  };
 let scoringAlgorithms = [ssScoreO, sScoreO, vScoreO]; 


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
      //console.log(initialPrompt);
      console.log(`Using algorithm ${scoringAlgorithms[0].name}`);
      // console.log(word);
      console.log(`Is worth ${scrabbleScore(word, newPointStructure)} points`);
    } else if (num === 1) {
      console.log(initialPrompt);
      console.log(`Using algorithm: ${scoringAlgorithms[1].name}`);
      // console.log(word);
      console.log(`Is worth ${simpleScore(word)} points`);
    } else if (num === 2) {
      console.log(initialPrompt);
      console.log(`using algorithm ${scoringAlgorithms[2].name}`);
      // console.log(word);
      console.log(`Is worth ${vowelScore(word)} points`);
    }
  }
}


runProgram(scoringAlgorithms);