const readline = require('readline');
const { Quiz } = require('./quiz/quiz');

const { Question } = require('./quiz/question');
const { Answer } = require('./quiz/answer');

const questionsDB = require('./data/questions.json');

const questionsFormatted = questionsDB.map((question) => {
  return new Question(
    question.text,
    question.answers.map((answer) => {
      return new Answer(answer.text, answer.score, answer.id);
    })
  );
});

const myQuiz = new Quiz(questionsFormatted);
myQuiz.readQuestion();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  myQuiz.verifyUserInput(input);
});
