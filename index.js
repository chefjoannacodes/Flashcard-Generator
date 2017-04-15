//====================================================
///Possible process.argv[2]: "create", "back", "question", "full", "partial", "cloze"  i.e "node index.js question"======================


// Load the NPM Package inquirer
var inquirer = require("inquirer");


// constructor function for creating question objects
function BasicCard(question, solution) {
    this.question = question;
    this.solution = solution;

    this.printQuestion = function() {
        console.log("Question: " + this.question);
    }
    this.printAnswer = function() {
        console.log("Answer: " + this.solution);
    }
}

//arrays used to contain all question and answer objects
var questions = [];
var answers = [];
var score = 0;

var createQuestion = function() {
    if (questions.length < 5) {
        console.log("\nNEW QUESTION\n");
        inquirer.prompt([{

            name: "question",
            message: "Type your question: ",
        }, {

            name: "solution",
            message: "Type the answer: "
        }]).then(function(answers) {
            var questionBasic = new BasicCard(answers.question, answers.solution);
            questionBasic.printQuestion();
            questionBasic.printAnswer();
            if (questions.length < 5) {
                questions.push(questionBasic);
                console.log(questionBasic.question + " added to the flashcard stack");
                console.log(questionBasic.solution + " answer added");

            }

            createQuestion();
        });
    } else {


    }
};
//Creating the FRONT and BACK Flashcard stack
//Argument 2 is "front" or "back"
var basicFlashcard = process.argv[2];

switch (basicFlashcard) {
    case "create":
        createQuestion();

        break;
    case "back":
        
        break;
}


function ClozeCard(fillBlank, cloze) {
    this.fillBlank = fillBlank;
    this.cloze = cloze;
    this.clause = "I am (going to / go) ...[fillBlank]... to bake a cake today.";
    this.clauseTwo = "George Washington was the first president of the United States.", "George Washington";
    this.printCloze = function() {
        console.log(this.cloze);
    }
    this.printText = function() {
        console.log(this.fillBlank);
    }
    // this.message =  this.fillBlank.replace
}
//Argument 2 is "full", "partial", "cloze", or "question"
var displayText = process.argv[2];

//if the "full" function is called . .. 
function full() {
    console.log("The full text: ", this.clauseTwo);
};

// if the "partial" function is called...
function partial() {
    console.log("Partial text", this.clauseTwo);
};

//if the "cloze" function is called .. .
function cloze() {
    console.log("Cloze text", this.clauseTwo);
}





var fillBlank = [];
var loop = 0;

function displayQuestion() {
    var blankCloze = new ClozeCard(fillBlank);
    console.log(blankCloze.clause);
};
var getWords = function(loop) {

    // console.log(fillBlank);
    if (loop < 1) {
        inquirer.prompt({
            name: "word",
            message: "Enter the correct word or phrase: ",
            validate: function validateWord(name) {
                if (name !== "going to") {
                    console.log(" Sorry, wrong answer");
                    console.log(" Try again ");
                    return false;

                } else {
                    console.log(" CORRECT!");
                    return true;
                }

            }

        }).then(function(answers) {
            fillBlank.push(answers.word);
            var clozeCard = new ClozeCard(fillBlank);
            console.log("choice", clozeCard.fillBlank);
            // console.log(clozeCard);
            loop++;
            getWords(loop);
            constructSentence(clozeCard);
        })
    }
}

var constructSentence = function(completeObject) {
    for (var i = 0; i < 1; i++) {
        completeObject.clause = completeObject.clause.replace("[fillBlank]", completeObject.fillBlank[i]);
    }
    console.log(completeObject.clause);

}

// getWords(loop);
//end cloze function 1++++++++++++++++++++++++++++==


switch (displayText) {
    case "full":
        full();
        break;
    case "partial":
        partial();
        //should display "... was the first president of the United States"
        break;
    case "cloze":
        cloze();
        //should display "George Washington"
        break
    case "question":
        displayQuestion();
        getWords(loop);
        break;
}
//Import the full questions list
var questionList = require('./questions.js').questions;
//variable that hols the cloze-deleted questions
var clozeQuestions = [];

for (var i = 0; i<questionList.length; i++) {
  var displayQ = (questionList.full, questionList.cloze);
  clozeQuestions.push(displayQ);
}


function promptQuestion() {
  inquirer.prompt([
  {
    type: "input", 
    message: clozeQuestions.partial + "\nAnswer: ",
    name: "guess"
  }
  ]).then(function(answers) {
    console.log('\n');

    if (answers.guess.toLowerCase() === clozeQuestions.cloze.toLowerCase()) {
      console.log('Correct!');
    } else {
      console.log('Incorrect!')
    }
    console.log(clozeQuestions.full);
  })
}

// promptQuestion();



// exports.BasicCard = function(front, back) {
//   this.front = front;
//   this.back = back;

// }

// exports.ClozeCard = function(text, cloze) {
//   var textLower = text.toLowerCase();
//   var clozeLower = cloze.toLowerCase();

//   if(!textLower.includes(clozeLower)){
//     console.log("ERROR: cloze deletion doesn't appear in full text <" + cloze + '>')
//   } 

//   this.full = text;
//   this.cloze = cloze;
//   this.partial = text.replace(cloze, '...');
// }