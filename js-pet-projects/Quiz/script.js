const quizData = [
  {
    question: 'What country has won the most World Cups?',
    a: 'Brazil',
    b: 'Argentina',
    c: 'Germany',
    d: 'England',
    correct: 'a',
  },
  {
    question: 'What artist has the most streams on Spotify?',
    a: 'MorgenStern',
    b: 'Lil Uzi Vert',
    c: 'Drake',
    d: 'Kalush',
    correct: 'c',
  },
  {
    question: 'What sports car company manufactures the 911?',
    a: 'Porshe',
    b: 'McLaren',
    c: 'Ferrari',
    d: 'Audi',
    correct: 'a',
  },
  {
    question: 'How many elements are in the periodic table?',
    a: '112',
    b: '118',
    c: '99',
    d: '125',
    correct: 'b',
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener('click', () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
