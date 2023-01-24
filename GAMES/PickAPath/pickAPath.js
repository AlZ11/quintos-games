QuintOS.user = 'AlZ11';
QuintOS.game = 'PickAPath';

async function start() {
	// your code goes here! below this line

	let choice = 0; // initialize choice to 0, user has not made any choice yet

	let prices = ['2.45', '3.30', '4.99', '5.05', '4.50', '8.20', '2.40', '6.84'];

	let categoryBrowsed;

	while (choice != null && choice != 13) {
		// while choice is not null (nothing)
		// null in this case indicates the player cancelled out of the prompt

		let msg = ''; // initialize message to empty string
		let options = [];

		if (choice == 'no' || choice == 12) {
			if (categoryBrowsed == 'fruits') {
				choice = 1;
			} else {
				choice = 2;
			}
		}

		if (choice == 0) {
			/* Part A0: Start your story! */
			msg =
				'Welcome, to my store! Would you like to purchase some fruits or vegetables?\n\n\t' +
				'1: fruits\n\t' +
				'2: vegetables';
			options = [1, 2];
		} else if (choice == 1) {
			categoryBrowsed = 'fruits';
			msg =
				'Have a look at these fruits, would you like to buy any.\n\n\t' +
				'4: strawberrys\n\t' +
				'5: pears\n\t' +
				'6: apples\n\t' +
				'7: banana\n\t' +
				'3: go back';
			options = [4, 5, 6, 7, 3];
		} else if (choice == 2) {
			categoryBrowsed = 'vegetables';
			msg =
				'Have a look at these vegetables, would you like to buy any.\n\n\t' +
				'8: Lettuce\n\t' +
				'9: Cucumber\n\t' +
				'10: Carrots\n\t' +
				'11: Cabbage\n\t' +
				'3: go back';
			options = [8, 9, 10, 11, 3];
		} else if (choice == 3) {
			msg =
				'Would you like to purchase some fruits or vegetables?\n\n\t' +
				'1: fruits\n\t' +
				'2: vegetables\n\t' +
				'13: Leave store';
			options = [1, 2, 13];
		} else if (choice >= 4 && choice <= 11) {
			msg = 'They cost $' + prices[choice - 4] + '. Would you like to buy them?\n\n\tyes or no?';
			options = ['yes', 'no'];
		} else if (choice == 'yes') {
			msg =
				'Thank you for the purchase, is there anything else you would like?\n\n\t' +
				'12: Continue shopping\n\t' +
				'13: Leave store';
			options = [12, 13];
		}

		// prompt the player to make choices
		let userInput = await prompt(msg);

		if (options.includes(userInput)) {
			choice = userInput;
		} else await alert('Wrong choice');

		/* PART B0: end the game if there are no more choices to make */

		/* PART B1: check if the player made a valid choice, reject invalid choices */
	} // end of the while

	await alert('Thanks for shopping!');

	exit(); // exits the game
} // end wrapper
