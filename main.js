// declare globals
var startButton = document.getElementById('start-button');
var startQuiz = document.getElementById('start');
// var questBox = document.querySelector('.questionbox');

// var timer = 60 -seconds- (60000 -ms-)
// timer--
// var index = 0

// start button eventListener to hide div element
// startButton.addEventListener('click', displayNone);
// start button eventListener to start timer
// startButton.addEventListener('click', startTimer);

// function for moving along carousel (to question boxes)


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