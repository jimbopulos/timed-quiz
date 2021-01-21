// declare globals
var startButton = document.getElementById('start-button');
var startQuiz = document.getElementById('start');
var questBox = document.querySelector('.questionbox');

// array of object for question set
// quiz object to hold: questions, and possible answers (options) 
var questionCards = [
    {
    firstQuestion: 'What does the acronym HTML stand for?',
    answers: ['Helicopter Tilt Makes Laws', 'Hyper Text Makeup Language', 'Hyper Text Markup Language', 'How To Make Latkes'],
    correctAnswer: 'Hyper Text Markup Language'
    },
    {
    secondQuestion: 'What does the acronym CSS stand for?',
    answers: ['Cascading Silly String', 'Cascading Style Sheets', 'Cats Scratching Scarves', 'Cascading Style Sleet'],
    correctAnswer: 'Cascading Style Sheets'
    },
    {
    thirdQuestion: 'What is the syntax for linking our JavaScript (script.js) to our HTML, and where do we place in the HTML code?',
    answers: ['<script link=script.js></script>, bottom element of the body', '<shrimp src=shrimp.js></>, first element of the body', '<script src=script.js></script>, bottom element of the body', '<script src=main.js></script>, bottom element of the body'],
    correctAnswer: '<script src=script.js></script>, bottom element of the body'
    },
    {
    fourthQuestion: 'Which of the following uses the proper casing to declare a variable?',
    answers: ['var codingQuiz', 'var coding-quiz', 'var CodingQuiz', 'var coding Quiz'],
    correctAnswer: 'var codingQuiz'
    }
    ];

// var timer = 60 -seconds- (60000 -ms-)
// timer--
// var index = 0

// start button eventListener to hide div element
// startButton.addEventListener('click', displayNone);
// start button eventListener to start timer
// startButton.addEventListener('click', startTimer);

// function for moving along carousel (to question boxes)
function  () {

}


startButton.addEventListener('click', function () {
    // displayNone();
    // add function to move along carousel

    var oneMinute = 60 * 1;
    var display = document.querySelector('#time');
    startTimer(oneMinute, display);
});

// eventListener, click event to hide inital start --> display first question
// create function to make start-card disappear upon click event
// function displayNone () {
//     startCard.style.visibility = 'hidden';
// }

// handle start


// start timer
// create function to also start timer countdown upon click event
function startTimer (duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

// window.onload = function () {
//     var oneMinute = 60 * 1,
//         display = document.querySelector('#time');
//     startTimer(oneMinute, display);
// };
// when timer runs out, quiz will end
// user brought to high scores div (prompt)
// may enter string, local storage saves entry with associated score

// start timer

// function showStuff(id, text, btn) {
//     document.getElementById(id).style.display = 'block';
//     // hide the lorem ipsum text
//     document.getElementById(text).style.display = 'none';
//     // hide the link
//     btn.style.display = 'none';
// }

// object for correct answers to pull from (as array)
// object for incorrect answers to pull from (as array)

// click event for each option
// classes for correct, incorrect
// link data attributes

// if statement for user selected answer (option)
// if correct, next question
// if incorrect, next question, decrement time from timer (maybe 10-15 seconds)

// if statement for stop timer. timer = 0 --> end quiz

// user can reset highscores
// user can take quiz again