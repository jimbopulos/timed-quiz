// Declare global variables

// var question = document.querySelector('.quest-text');
// var choices = Array.from(document.querySelectorAll('.option'));
var startButton = document.getElementById('start-button');
var startQuiz = document.getElementById('start');
var results = document.getElementById('result');
document.getElementById('questions').style.display = "none";
results.style.display = "none";

// timer variables
var intervalId;
var timer = 60;

let currentQuestion = 0;
// let correctAnswer = true;
let score = 0;

// array of object for question set
// quiz objects to hold: questions, and possible answers (options) 
var questionCards = [
    {
    question: 'What does the acronym HTML stand for?',
    answers: ['Helicopter Tilt Makes Laws', 'Hyper Text Makeup Language', 'Hyper Text Markup Language', 'How To Make Latkes'],
    correctAnswer: 'Hyper Text Markup Language'
    },
    {
    question: 'What does the acronym CSS stand for?',
    answers: ['Cascading Silly String', 'Cascading Style Sheets', 'Cats Scratching Scarves', 'Cascading Style Sleet'],
    correctAnswer: 'Cascading Style Sheets'
    },
    {
    question: 'What is the syntax for linking our JavaScript (script.js) to our HTML, and where do we place in the HTML code?',
    answers: ['<script link=script.js></script>, bottom element of the body', '<shrimp src=shrimp.js></>, first element of the body', '<script src=script.js></script>, bottom element of the body', '<script src=main.js></script>, bottom element of the body'],
    correctAnswer: '<script src=script.js></script>, bottom element of the body'
    },
    {
    question: 'Which of the following uses the proper casing to declare a variable?',
    answers: ['var codingQuiz', 'var coding-quiz', 'var CodingQuiz', 'var coding Quiz'],
    correctAnswer: 'var codingQuiz'
    }
    ];

// replace start button div with first question, so on
startButton.addEventListener('click', function () {
    // start countdown
    startTimer();
    displayQuestion();
});

// hide start button box, display answers
function displayQuestion() {
    // hide questions
    document.getElementById('questions').style.display = "block";
    // hide results
    results.style.display = "none";
    startQuiz.style.display = "none";
    // clear out previous content
    document.getElementById("questions").innerHTML = "";
    // show question based on iteration of questionCards array
    var questionText = document.createElement("h3");
    questionText.textContent = questionCards[currentQuestion].question;
    document.getElementById("questions").appendChild(questionText);
    // append answers for each question
    for (var i = 0; i < questionCards[currentQuestion].answers.length; i++) {
        var answerText = document.createElement("button");
        answerText.textContent = questionCards[currentQuestion].answers[i];
        answerText.classList.add("answer");
        answerText.setAttribute("data-answer", questionCards[currentQuestion].answers[i]);
        answerText.onclick = checkAnswer;
        document.getElementById("questions").appendChild(answerText);
    }
};

// check user answers against correct answers
function checkAnswer() {
    var userAnswer = this.getAttribute("data-answer");
    // console.log(userAnswer);
    // compare with correct answer
    if (userAnswer === questionCards[currentQuestion].correctAnswer) {
        score += 10; 
        currentQuestion++;
        // call function that checks max question
        checkLastQuestion();
    // if wrong, time penalty
    } else {
        timer = timer - 15;
        currentQuestion++;
        // call function that checks max question
        checkLastQuestion();
    }
};

// create function to also start timer countdown upon click event
function startTimer() {
    
    intervalId = setInterval(function () {
        timer--;
        document.querySelector('#time').textContent = timer;
        if (timer <= 0) {
            timer = 60;
            clearTimeout(intervalId);
        }
    }, 1000);
}

// create function to check if last question displayed
function checkLastQuestion() {
    if(currentQuestion === questionCards.length) {
        clearTimeout(intervalId);
        displayScore();
    } else {
        // run function to clear question, display next
        displayQuestion();
    }
}

// scoreboard function
function displayScore() {
    // hide questions
    document.getElementById('questions').style.display = "none";
    // startQuiz.style.display = "none";
    // show results
    results.style.display = "block";
}





// function for nextQuestion since called
// function nextQuestion() {
//     if (availQuestions.length = 0 || questionCounter > maxQuestions) {
//         localStorage.setItem('prevScore', score);
//         return 
//     } 
// }



// timer = duration, minutes, seconds;

// minutes = parseInt(timer / 60, 10);
        // seconds = parseInt(timer % 60, 10);

        // minutes = minutes < 10 ? "0" + minutes : minutes;
        // seconds = seconds < 10 ? "0" + seconds : seconds;

        // display.textContent = minutes + ":" + seconds;

// window.onload = function () {
    //     var oneMinute = 60 * 1,
    //         display = document.querySelector('#time');
    //     startTimer(oneMinute, display);
    // };