// const input = require("readline-sync");
// let word = ""
// const oldPointStructure = {
//     1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
//     2: ['D', 'G'],
//     3: ['B', 'C', 'M', 'P'],
//     4: ['F', 'H', 'V', 'W', 'Y'],
//     5: ['K'],
//     8: ['J', 'X'],
//     10: ['Q', 'Z']
// };

// function oldScrabbleScorer(word) {
//     word = word.toUpperCase();
//     letterPoints = "";

//     for (let i = 0; i < word.length; i++) {

//         for (const pointValue in oldPointStructure) {

//             if (oldPointStructure[pointValue].includes(word[i])) {
//                 letterPoints += `Points for '${word[i]}': ${pointValue}\n`
//             }

//         }
//     }
//     return letterPoints;
// }

// let introNum = 0

// function initialPrompt() {
//     word = input.question("Enter a word to score(Typing 'St0p' will end the program): ")
// };
// let score = 0
// let simpleScore = function (word) {
//     console.log("simple")
//     score = word.length;
// }
// let vowelBonusScore = function (word) {
//     console.log("vowel")

//     word = word.toUpperCase()
//     score = 0
//     let vowels = ["A", "E", "I", "O", "U", "Y"];
//     for (i = 0; i < word.length; i++) {
//         if (vowels.includes(word[i])) {
//             score = score + 3
//         } else {
//             score = score + 1
//         }
//     }
//     return score;
// }
// let scrabbleScore = function (word, object) {
//     console.log("scrabble")
//     score = 0
//     for (let i = 0; i < word.length; i++) {
//         if (Object.keys(newPointStructure).includes(word[i])) {
//             score = score + newPointStructure[word[i].toLowerCase()];
//         }
//     }
//     return score;
// }

// const scoringAlgorithms = [

//     {
//         name: "Scrabble",
//         description: "The traditional scoring algorithm.",
//         scoreFunction: scrabbleScore,
//     }, {
//         name: "Simple score",
//         description: "Each letters is worth 1 point.",
//         scoreFunction: simpleScore,
//     }, {
//         name: "Vowel Bonus Score",
//         description: "Vowels are 3 pts, consonants are 1 pt.",
//         scoreFunction: vowelBonusScore,
//     },


// ];

// function scorerPrompt() {
//     introNum = Number(input.question(`Welcome to the Scrabble score calculator!

// Which scoring algorithm would you like to use?

// 0 - Scrabble: The traditional scoring algorithm.
// 1 - Simple Score: Each letter is worth 1 point.
// 2 - Bonus Vowels: Vowels are worth 3 pts, and consonants are 1 pt.

// Enter 0, 1, or 2:`));
//     return introNum;
// }

// function transform(letterScore) {
//     const tS = {};
//     for (let score in letterScore) {
//         let letters = letterScore[score];
//         for (let i = 0; i < letters.length; i++) {
//             tS[letters[i].toLowerCase()] = Number(score);
//         }
//     }
//     return tS;
//     console.log(tS)
// };

// let newPointStructure = transform(oldPointStructure);

// function runProgram(score) {
//     scorerPrompt()
//     initialPrompt();



//     word = word.toLowerCase();
//     if (word == "st0p") {
//         console.log("Goodbye");
//     }



//     if (introNum === 0) {
//         console.log(`using algorithm ${scoringAlgorithms[0].name}`);
//         console.log(word);

//         console.log(`Is worth ${scrabbleScore(word, newPointStructure)} points`);

//     } else if (introNum === 1) {
//         console.log(`Using algorithm ${scoringAlgorithms[1].name}`);
//         console.log(word);
//         console.log(`Is worth ${simpleScore(word)} points`);




//     } else if (introNum === 2) {
//         console.log(`Using algorithm: ${scoringAlgorithms[2].name}`)
//         console.log(`Is worth ${vowelBonusScore(word)} points`)


//     }
// }




// module.exports = {
//     initialPrompt: initialPrompt,
//     transform: transform,
//     oldPointStructure: oldPointStructure,
//     simpleScore: simpleScore,
//     vowelBonusScore: vowelBonusScore,
//     scrabbleScore: scrabbleScore,
//     scoringAlgorithms: scoringAlgorithms,
//     newPointStructure: newPointStructure,
//     runProgram: runProgram,
//     scorerPrompt: scorerPrompt
// };

const input = require("readline-sync");
let letterPoints = ""
let word = "";
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
    letterPoints = "";

    for (let i = 0; i < word.length; i++) {

        for (const pointValue in oldPointStructure) {

            if (oldPointStructure[pointValue].includes(word[i])) {
                letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
            }

        }
    }
    return letterPoints;
}

let introNum = 0;

function initialPrompt() {
    word = input.question("Enter a word to score(Typing 'St0p' will end the program): ");
    return word;
}
let score = 0;
let simpleScore = function (word) {
    // console.log(word)
    // console.log("simple");
    score = word.length;
    return score;
};
let vowelBonusScore = function (word) {
    // console.log("vowel");

    word = word.toUpperCase();
    score = 0;
    let vowels = ["A", "E", "I", "O", "U", "Y"];
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            score = score + 3;
        } else {
            score = score + 1;
        }
    }
    return score;
};
let scrabbleScore = function (word, object) {
    // console.log("scrabble");
    score = 0;
    for (let i = 0; i < word.length; i++) {
        if (Object.keys(newPointStructure).includes(word[i])) {
            score = score + newPointStructure[word[i].toLowerCase()];
        }
    }
    return score;
};

const scoringAlgorithms = [

    {
        name: "Scrabble",
        description: "The traditional scoring algorithm.",
        scoreFunction: scrabbleScore,
    }, {
        name: "Simple score",
        description: "Each letters is worth 1 point.",
        scoreFunction: simpleScore,
    }, {
        name: "Vowel Bonus Score",
        description: "Vowels are 3 pts, consonants are 1 pt.",
        scoreFunction: vowelBonusScore,
    },


];

function scorerPrompt() {
    introNum = Number(input.question(`Welcome to the Scrabble score calculator!

Which scoring algorithm would you like to use?

0 - Scrabble: The traditional scoring algorithm.
1 - Simple Score: Each letter is worth 1 point.
2 - Bonus Vowels: Vowels are worth 3 pts, and consonants are 1 pt.

Enter 0, 1, or 2:`));
    return introNum;
}

function transform(letterScore) {
    const tS = {};
    for (let score in letterScore) {
        let letters = letterScore[score];
        for (let i = 0; i < letters.length; i++) {
            tS[letters[i].toLowerCase()] = Number(score);
        }
    }
  	// console.log(tS);
    return tS;
    
}

let newPointStructure = transform(oldPointStructure);

function runProgram(score) {
    scorerPrompt();
    initialPrompt();



    word = word.toLowerCase();
    if (word == "st0p") {
        console.log("Goodbye");
    }
    while(word != "st0p"){
      // console.log(`Using algorithm: ${scoringAlgorithms[introNum].name}`);
      //   console.log(`Is worth ${scoreFunction[introNum](word)} points`);
        // initialPrompt();
    



    if (introNum === 0) {
        console.log(`using algorithm ${scoringAlgorithms[0].name}`);
        console.log(word);

        console.log(`Is worth ${scrabbleScore(word, newPointStructure)} points`);

    } else if (introNum === 1) {
        console.log(`Using algorithm ${scoringAlgorithms[1].name}`);
        console.log(word);
        console.log(`Is worth ${simpleScore(word)} points`);




    } else if (introNum === 2) {
        console.log(`Using algorithm: ${scoringAlgorithms[2].name}`);
        console.log(`Is worth ${vowelBonusScore(word)} points`);


    }
     initialPrompt();
}
}


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