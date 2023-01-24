QuintOS.user = "quinton-ashley";
QuintOS.game = "GuessTheNumber";

async function start() {
  let num = Math.ceil(Math.random() * 100);
  let guess;  
  while (guess != num) {
   guess = await prompt('Guess a number 1-100?') 
  let guessMsg;
  if (guess > num) {
    guessMsg = 'too high'
  } else if (guess < num) {
    guessMsg = 'too low'
  }
  else { 
    guessMsg = 'correct'
  }
    
  await alert('The guess is ' + guessMsg)
  }

	exit();
}