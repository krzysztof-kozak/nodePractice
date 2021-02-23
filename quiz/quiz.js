class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.numberOfQuestions = questions.length;
    this.currentQuestionIndex = 0;
    this.totalPoints = 0;
  }

  getCurrentQuestion() {
    if (this.currentQuestionIndex > this.numberOfQuestions - 1) {
      console.log(`KONIEC GRY, ZDOBYŁEŚ ${this.totalPoints} PTK.`);
      process.exit();
    }

    return this.questions[this.currentQuestionIndex];
  }

  readQuestion() {
    const currentQuestion = this.getCurrentQuestion();
    console.log(`Pytanie ${this.currentQuestionIndex + 1} / ${this.numberOfQuestions}`);
    console.log(currentQuestion.text);

    for (const answer of currentQuestion.answers) {
      console.log(`${answer.id}. ${answer.text}.`);
    }
  }

  answer(id) {
    const currentQuestion = this.getCurrentQuestion();
    const answers = currentQuestion.answers;

    let chosenAnswer;
    answers.forEach((answer) => {
      if (answer.id === id) {
        chosenAnswer = answer;
      }
    });

    this.totalPoints += chosenAnswer.score;
    this.currentQuestionIndex++;

    this.readQuestion();
  }

  verifyUserInput(input) {
    const allowedInputs = ['a', 'b', 'c', 'd'];

    if (allowedInputs.includes(input.toLowerCase())) {
      this.answer(input);
    } else {
      console.log('Proszę podaj jedną z dostępnych opcji: a, b, c, d');
    }
  }
}

module.exports = {
  Quiz,
};
