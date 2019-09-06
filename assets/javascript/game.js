
// create array of words for computer to use

var words = ["kitten", "giraffe", "alligator", "dinosaur", "bovine", "horse", "buffalo", "squirrel", "elephant", "eagle", "lion", "lynx", "porcupine", "python", "kangaroo", "tortoise", "badger", "beaver", "bear", "woodpecker", "armadillo", "albatross", "donkey", "magpie", "rhinoceros", "lizard", "skink", "otter", "capybara", "caribou", "chickadee", "flamingo", "cormorant", "cougar", "ibis", "dingo", "dolphin", "rabbit", "heron", "hyena", "leopard", "jaguar", "peacock", "mongoose", "vulture", "kingfisher", "bushbuck", "kudu", "duiker", "iguana", "hummingbird", "hawk", "tapir", "lemming", "stork", "mockingbird", "goat", "orca", "whale", "oryx", "osprey", "ostrich", "oystercatcher", "pelican", "penguin", "puma", "quail", "raccoon", "crab", "meerkat", "coatimundi", "antelope", "tern", "dragonfly", "butterfly", "sparrow", "spider", "beetle", "starfish", "starling", "stilt", "tarantula", "gazelle", "turkey", "warthog", "zebra"];

// use Math.floor(Math.random() * arr.length) to generate current word

var currentWord = words[Math.floor(Math.random() * words.length)].split("");
console.log(currentWord);

// emptyArray.length = word.length & for each index, value = "_"

var guessedWord = [];

for (var i = 0; i < currentWord.length; i++) {
    guessedWord.push("_ ");
    console.log(guessedWord);
};

// document.onkeyup stuff.  
// event.key = userInput

document.onkeyup = function (event) {
    let userInput = event.key;
}

// if userInput exists within word chosen, then it will replace the "_" at the corresponding index

// if userInput does not exist within word chosen, it will be added to empty array displayed in letter guessed section
    // and guesses remaining decreases by 1

// if userInput already exists within letters guessed, alert will ask for different input
    // guesses remaining will not decrease

    // once current word shows no underscores, wins increases by 1 (if indexof "_" < 0) and game resets

// GAME RESET: letters guessed array empties, guesses remaining returns to original value

// if guesses remaining reaches 0, player loses, game resets and wins resets to 0

