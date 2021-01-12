// import functions and grab DOM elements



import { countsAsAYes } from './utils.js';




const userButton = document.getElementById('user-button');
const secretDiv = document.getElementById('secret-div');


userButton.addEventListener('click', () => {
    alert('Welcome to my capybara quiz!');
    const confirmation = confirm('Do you want to proceed?');
    
    if (!confirmation) return;

    let correctAnswers = 0;

    const firstName = prompt('What is your first name?');
    const lastName = prompt('What is your last name?');
    const firstAnswer = prompt('Are capybaras the largest rodent in the world?');
    
    if (countsAsAYes(firstAnswer)) correctAnswers++;
    console.log(correctAnswers)
});






// initialize state

// set event listeners to update state and DOM


