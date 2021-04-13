var readlineSync = require("readline-sync");
var chalk = require("chalk");
var score = 0 ;

///highscorers
var highscores = [
  {
    name : "Vinay",
    score: 4
  },
  {
    name: "akhil",
    score : 3
  }
]

//array of Object
var questions = [{
  question: "Vinay is interested in which start-ups (Sofware/Hardware) ? ",
  answer : "Software"
},{
  question: " What's vinay favorite love song ? ",
  answer : "gone gone gone"
},{
  question: " What's his good friend name ? ",
  answer : "Akhil"
},{
  question: "Number of girlfriends he have presently ? ",
  answer : "One"
}];


function welcome(){
 var userNameQuestion = readlineSync.question(chalk.bold.red(" What's your name, buddy ? "));

 console.log(" Hi," +  userNameQuestion + " let's play a quiz. " + "\n");
}

//function to calcuate score

function game(question, answer) {
  var userAnswer = readlineSync.question(chalk.bold.green(question));
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("You are right");
    score++;
  }
  else{
    console.log("Wrong!");
  }
  console.log("Current score :  " + chalk.red(score ));
  console.log("\n");
};

//function 
function play() {
for( var i = 0 ; i < questions.length; i++) {
 var currentQuestion = questions[i];
 game(currentQuestion.question, currentQuestion.answer);
 }
}

function showScore() {
 
  console.log("YAY, you scored " + score + "\n");

  console.log(chalk.underline(" Check out other scores, if you have scored like them, please share a SS with vinay to update the scoreboard."));
    
  highscores.map( score => console.log(score.name, ":", score.score));

}


//function call and score 
welcome();
play();
showScore();

