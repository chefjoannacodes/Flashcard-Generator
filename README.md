# Flashcard-Generator

## Description 
- This is an application run in the terminal. You are able to perform certain functions with the appropriate arguments. Create flashcards with "create", view questions with "question", and display "full" "partial", or "cloze" text. 
- i.e "node index.js question"

## Requirements
#### 
- Create a new GitHub repository, named Flashcard-Generator or something similar. Clone this to your local drive.
- Create a BasicCard constructor. It should accept front and back arguments.
- Create a ClozeCard constructor. It should accept text and cloze arguments.
- ClozeCard should have a property or method that contains or returns only the cloze-deleted portion of the text.
- ClozeCard should have a property or method that contains or returns only the partial text.
- ClozeCard should have a property or method that contains or returns only the full text.
- ClozeCard should throw or log an error when the cloze deletion does not appear in the input text.
- Use prototypes to attach these methods, wherever possible.


## Technologies Used
#### 
- Javascript
- Inquirer
- Terminal
- Node.js

## Code Explaination
- I used a constructor for the front and back statements. Using the prompt method in inquirer, I asked the user for a question and answer. I then pushed these into an array. The prompt was looped 5 times to include 5 questions and answers.

-For the ClozeCard functionality, I created 2 functions. After displaying a sentence with an empty cloze, I used a function to get the user input. I then used a second function to pass the user's input through data validation to see if the user guess was correct. If correct, the full sentence would appear with the user input inserted where the empty cloze first displayed.

- I would like to add more questions, as well as show partial, full, and cloze parts of the questions. I think an exported array would be the best solution for this. 

-------------

The constructor function to create the flashcards looked like this. The second part is a variable that stores the user's input, so we can call it back later. 

```
function BasicCard(question, solution) {
    this.question = question;
    this.solution = solution;

var questionBasic = new BasicCard(answers.question, answers.solution);
```