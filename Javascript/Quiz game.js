const questions = [
  {
    category: "Science",
    question: "What gas do plants absorb during photosynthesis?",
    choices: ["Oxygen", "Carbon Dioxide", "Nitrogen"],
    answer: "Carbon Dioxide"
  },
  {
    category: "Geography",
    question: "Which is the largest continent on Earth?",
    choices: ["Asia", "Africa", "Europe"],
    answer: "Asia"
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["George Washington", "Abraham Lincoln", "John Adams"],
    answer: "George Washington"
  },
  {
    category: "Math",
    question: "What is the square root of 64?",
    choices: ["6", "8", "10"],
    answer: "8"
  },
  {
    category: "Sports",
    question: "How many players are on a football (soccer) team on the field?",
    choices: ["11", "9", "7"],
    answer: "11"
  }
];
function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}
function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}
function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
 }
}
const selectedQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(selectedQuestion.choices);

console.log("Question:", selectedQuestion.question);
console.log("Computer chose:", computerChoice);
console.log(getResults(selectedQuestion, computerChoice));
