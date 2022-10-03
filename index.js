readlineSync = require("readline-sync");
console.log("Welcome to Rubul's Quiz game.");
console.log("-----------------------------");
var score = 0;
function welcome() {
  var userName = readlineSync.question("What is your name? ");
  console.log("Welcome " + userName + "!!");
  console.log("Find out how well you know about the Marvel cinematic universe by answering these simple questions.");
  console.log("Goodluck :)");
  console.log("-------------");
}
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You typed " + userAnswer);
    console.log("You are correct!!");
    score = score + 1;
  } else {
    console.log("You typed " + userAnswer);
    console.log("You are wrong!!");
  }
  console.log("Current score = " + score);
  console.log("------------------");
}
var quiz = [{
  question: "In the MCU, what is the full form of S.H.I.E.L.D before it was changed in 1991?",
  answer: "Strategic Hazard Intervention Espionage Logistics Directorate"
}, {
  question: "What is Black Widow's real full name? ",
  answer: "Natalia Alianovna Romanova"
}, {
  question: "Who is the youngest Avengers? ",
  answer: "Vision"
}, {
  question: "What is Thor's AXE called? ",
  answer: "Stormbreaker"
}, {
  question: "How many infinity stones are there in mcu? ",
  answer: "6"
}];
function game() {
  for (var i = 0; i < quiz.length; i++) {
    play(quiz[i].question, quiz[i].answer);
  }
};

function showScore() {
  if (score >= 4) {
    console.log("Your high score is " + score + "!!");
    console.log("Wow you know me so well :)");
  } else {
    console.log("Your high score is " + score);
    console.log("Try harder next time :(");
  };
};
welcome();
game();
showScore();

var highScore = [
  {
    Name: "Rubul Deka",
    Score: 5
  },
  {
    Name:"Prarthana",
    Score:3
  },
  {
    Name:"Rithika",
    Score:1
  }
];
console.log();
console.log("Check your high score here :-");
console.log("-----------------------------");
highScore.map(score => console.log(score.Name, ":", score.Score));