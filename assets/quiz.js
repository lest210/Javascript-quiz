
//could be const instead of var
var question = document.getElementById("question");
var choices = document.getElementsByClassName("choice-text");


//could be let instead of var

var currentQuestion = {};
var acceptingAnswers = {};
var score = 0;
var questionCounter = 0;
var availableQuestions =[];

var questions = [
  {
  question: "Inside which HTML element do we put the JavaScript?",
  choice1: "<script>",
  choice2: "<javascript>",
  choice3: "<js>",
  choice4: "<scripting>",
  answer:1
  },

  {
  question: "what is the correct syntax for reffering to an external script called 'xxx.js'?",
  choice1: "<script href='xxx.js'>",
  choice2: "<script name='xxx.js'>",
  choice3: "<script src='xxx.js'>",
  choice4: "<script file='xxx.js'>",
  answer:3
  },

  {
    question: "How do you write 'Start Quiz' in an alert box?",
    choice1: "msgBox('Start Quiz');",
    choice2: "alertBox('Start Quiz');",
    choice3: "msg('Start Quiz');",
    choice4: "alert('Start Quiz');",
    answer:4
    },


];


//constants

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
  questionCounter
}



