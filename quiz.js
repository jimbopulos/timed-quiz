// declare
var question = document.querySelector('.quest-text');
var choices = Array.from(document.querySelectorAll('.option'));

let currentQuestion = {};
let correctAmswer = true;
let score = 0;

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

// declare score for each question answered correctly
// max # questions
var questPoints = 100;
var maxQuestions = 4;

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

window.onload = function () {
    var oneMinute = 60 * 1,
        display = document.querySelector('#time');
    startTimer(oneMinute, display);
};

// create function to begin quiz
function startQuiz() {
    questionCounter = 0;
    score = 0;
    availQuestions = [];
    nextQuestion();
}

// function for nextQuestion since called
function nextQuestion() {

}
