const hangman = [
	`
    

      
      |
      |
      |
=========`,
	`
    

      |
      |
      |
      |
=========`,
	`

      |
      |
      |
      |
      |
=========`,
	`
  +---+
      |
      |
      |
      |
      |
=========`,
	`
  +---+
  |   |
      |
      |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
      |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========`,
	`
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========`
];

const wordsList =
	'abruptly absurd abyss affix askew avenue awkward axiom azure bagpipes bandwagon banjo bayou beekeeper bikini blitz blizzard boggle bookworm boxcar buckaroo buffalo buffoon buzzard buzzing buzzwords cobweb croquet crypt cycle disavow dizzying duplex dwarves embezzle equip espionage euouae exodus faking fishhook fixable fjord flapjack flopping fluffiness flyby foxglove frazzled frizzled funny gabby galaxy galvanize gazebo gizmo glow glyph gnarly gnostic gossip grogginess haiku haphazard hyphen icebox injury ivory ivy jackpot jawbreaker jaywalk jazzy jelly jigsaw jinx jiujitsu jockey jogging joking jovial joyful juicy jukebox jumbo kayak kazoo keyhole kilobyte kiosk kitsch kiwifruit klutz knapsack lengths lucky luxury marquee matrix megahertz microwave mnemonic mystify nightclub nowadays oxidize oxygen pajama phlegm pixel pizazz polka psyche puppy puzzling quartz queue quip quiz quizzes razzmatazz rhythm scratch snazzy squawk staff strength stretch stronghold stymie subway swivel syndrome thrift thumb topaz transcript transgress transplant twelfth unknown unzip vaporize voodoo vortex walkway waltz wave wavy waxy well whomever witch wizard wristwatch xylophone yacht youthful yummy zigzag zilch zipper zodiac zombie';

// the start function gets run when the game starts
async function start() {
	// your code goes here! below this line

	/* Part A: split the wordsList String into an array called words, then choose a random word */
	let words = wordsList.split(' ');
	let choice = 'y';
	while (choice == 'y') {
		let n = round(random(0, words.length));

		let word = words[n];
		console.log(word);

		/* Part B: make an array with a line for each letter in the word */
		// Example word: 'quiz'
		// lines -> ['_', '_', '_', '_']
		let lines = [];
		for (let i = 0; i < word.length; i++) {
			lines.push('_');
		}

		let wrong = 0;
		let wrongLetters = [];

		while (lines.includes('_')) {
			/* Part C: show the lines for the word below the hangman art */
			let guess = await prompt(hangman[wrong] + '\n\n' + lines.join(' ') + '\n\n' + wrongLetters);

			if (guess == word) {
				break;
			}

			let ifAlreadyGuessed = false;
			for (let i = 0; i < wrongLetters.length; i++) {
				if (guess == wrongLetters[i]) {
					ifAlreadyGuessed = true;
					break;
				}
			}
			if (ifAlreadyGuessed == true) continue;

			let correct = false;
			for (let i = 0; i < lines.length; i++) {
				let letter = word[i];
				if (guess == letter) {
					lines[i] = guess;
					correct = true;
					log(lines);
				}
			}

			if (correct == false) {
				wrong++;
				wrongLetters.push(guess);
			}

			if (wrong == 10) {
				break;
			}
		}
		if (wrong == 10) {
			await alert('You lose! The word was ' + word);
		} else {
			await alert('You won');
		}

		choice = await prompt('Would you like to keep playing? (Y/N)');
		if (choice == 'Y') choice = 'y';
	}

	exit();
} // end of the start function
