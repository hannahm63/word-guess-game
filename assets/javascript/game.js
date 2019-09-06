// array of words for computer to use
let words = [
    "antelope", "albatross", "alligator", "armadillo", "badger", 
    "bear", "beaver", "beetle", "bovine", "buffalo", "bushbuck", "butterfly", 
    "capybara", "caribou", "chickadee", "coatimundi", "cormorant", "cougar", "crab", 
    "dinosaur", "dingo", "dolphin", "donkey", "dragonfly", "duiker",
    "eagle", "elephant",
    "flamingo", 
    "gazelle", "giraffe", "goat", 
    "hawk", "heron", "horse", "hummingbird", "hyena", 
    "ibis", "iguana", 
    "jaguar",
    "kangaroo", "kingfisher", "kitten", "kudu",
    "lemming", "leopard", "lion", "lizard", "lynx", 
    "magpie", "meerkat", "mockingbird", "mongoose", 
    "otter", "orca", "oryx", "osprey", "ostrich", "oystercatcher", 
    "pelican", "penguin", "puma", "peacock", "porcupine", "python", 
    "quail", 
    "raccoon", "rabbit", "rhinoceros", 
    "skink", "squirrel", "sparrow", "spider", "starfish", "starling", "stilt", "stork", 
    "tapir", "tarantula", "tern", "tortoise", "turkey",
    "vulture", 
    "warthog", "whale", "woodpecker",
    "zebra"
];

// generate random word to guess and split it into an array
let currentWord = words[Math.floor(Math.random() * words.length)].split("");
console.log(currentWord);

// emptyArray.length = word.length & for each index, value = "_"
let guessedWord = document.getElementById("currentWord");
let placeholderWord = [];

let wins = document.getElementById("Wins");
wins = 0;

 


for (let i = 0; i < currentWord.length; i++) {
    placeholderWord.push("_ ");
    console.log(placeholderWord);
    guessedWord.textContent = placeholderWord.join("");
};

// document.onkeyup stuff.  
// event.key = userInput

document.onkeyup = function (event) {
    let userInput = event.key;

    // if userInput does not exist within word chosen, it will be added to empty array displayed in letter guessed section and guesses remaining decreases by 1
    if (currentWord.indexOf(userInput) === -1) {
        console.log("this letter is NOT in the word")

    } else {
        // if userInput exists within word chosen, then it will replace the "_" at the corresponding index
        console.log("this letter IS in the word")

    }

    // if userInput already exists within letters guessed, alert will ask for different input
    // guesses remaining will not decrease

    // once current word shows no underscores, wins increases by 1 (if indexof "_" < 0) and game resets

};




// GAME RESET: letters guessed array empties, guesses remaining returns to original value

// if guesses remaining reaches 0, player loses, game resets and wins resets to 0

