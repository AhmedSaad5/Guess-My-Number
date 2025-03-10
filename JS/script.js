'use strict';

//# Let's Learn what the DOM actually is and how it works...
/**
 * @ - DOM is :-  Document Object Model, a structured representation of HTML, Allows JavaScript to access HTML elements and styles in order to manipulate them...
 * * DOM is basically a connection point between HTML and JavaScript Code...*
 * ` the DOM is automatically created by the browser as soon as HTML is loaded...And it's stored in a tree structure..., each element is an object
*# the DOM always starts with the document object right at the top
*% Document is an object, And this Object serves as an entry point into the DOM...
*~ The DOM:: is a complete representation of the HTML document, so that you can manipulate it in complex ways...
*? The DOM and DOM Methods are actually part of something called the web APIs(Application program interface)...

*  */
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23; //
console.log(document.querySelector('.guess').value); //
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// console.log(number);


const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};




document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, '|', typeof guess);
  //~ when there is no input...
  if (!guess) {
    displayMessage('⛔ No Number !');
  }
  //~ when player wins...
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number';
    displayMessage('🎉 Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b437';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //~ when guess is wrong...
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too High !' : '📉 Too Low !';
      displayMessage(guess > secretNumber ? '📈 Too High !' : '📉 Too Low !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You Lost the Game !';
      displayMessage('💥 You Lost the Game !');
      document.querySelector('.score').textContent = 0;
    }
  }

  //~ when guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High !';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You Lost the Game !';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //~ when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low !';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You Lost the Game !';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

//TODO: Refactoring  => duplicate code... => restructure the code but without changing how to works

//TODO:  => so we use Refactoring to improve the code and eliminate duplication of code...
