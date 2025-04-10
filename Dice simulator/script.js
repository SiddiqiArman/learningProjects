// // script.js
// const rollButton = document.getElementById('rollButton');
// const dice = document.getElementById('dice');

// // Array of dice faces (Unicode characters for dice)
// const diceFaces = ['🎲', '⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

// rollButton.addEventListener('click', () => {
//   // Generate a random number between 1 and 6
//   const randomNumber = Math.floor(Math.random() * 6) + 1;
  
//   // Update the dice face
//   dice.textContent = diceFaces[randomNumber];
// });
const rollButton = document.getElementById('rollButton');
const dice = document.getElementById('dice');
const  dice2 =document.getElementById('dice2')
const displayMessage =document.querySelector('h2');

// Array of dice faces
const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

rollButton.addEventListener('click', () => {
  // Add the rolling class for animation
  dice.classList.add('rolling');
  dice2.classList.add('rolling');

  // Delay updating the face until the animation is complete
  setTimeout(() => {
    // Generate a random number between 1 and 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 =Math.floor(Math.random() * 6)
    let sum =randomNumber+randomNumber2+1;

    // Update the dice face
    dice.textContent = diceFaces[randomNumber - 1];
    dice2.textContent =diceFaces[randomNumber2]
    displayMessage.textContent =`Sum is ${sum}.`

    // Remove the rolling class after animation
    dice.classList.remove('rolling');
    dice2.classList.remove('rolling');
  }, 800); // Match the animation duration (0.8s)
});

