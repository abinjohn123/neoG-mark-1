const R = require('readline-sync');

let score = 0,
  correctAnswers = 0;

const questions = [
  {
    question: 'Which city is Abin based off of?: ',
    answer: 'thrissur',
  },
  {
    question: 'Is he a coffee or tea person?: ',
    answer: 'coffee',
  },
  {
    question:
      'What fitness activity is he into these days? (Running, Cycling, Weights): ',
    answer: 'cycling',
  },
  {
    question:
      'What is his favourite programing language? (C, Java, JavaScript): ',
    answer: 'javascript',
  },
  {
    question: 'Which brand mobile does he use? (Moto, Realme, Redmi): ',
    answer: 'realme',
  },
];

function playGame() {
  for (const Q of questions) {
    const answer = R.question(Q.question).toLowerCase();

    if (answer === Q.answer) {
      console.log(`Right answer! Score = ${++score}\n`);
      ++correctAnswers;
    } else console.log(`Wrong answer! Score = ${--score}\n`);
  }
}

function displayScore() {
  console.log(
    `\n\nYou answered ${correctAnswers}/${questions.length} questions correctly.\nFinal score is ${score}`
  );
}

// ----------------
playGame();
displayScore();
