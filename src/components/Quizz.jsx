import React, { useState } from 'react';

function Acceuil() {
  window.location.reload();
}

function Quiz() {
  const questions = [
    {
      questionText: 'Quel est le jeu le plus vendu de tout les temps ?',
      answerOptions: [
        { answerText: 'Minecraft', isCorrect: false },
        { answerText: 'Tetris', isCorrect: true },
        { answerText: 'Grand Theft Auto V', isCorrect: false },
        { answerText: 'Fortnite', isCorrect: false },
      ],
    },
    {
      questionText: 'Quel jeu a été le premier à populariser le genre Battle Royale ?',
      answerOptions: [
        { answerText: "PlayerUnknown's Battlegrounds", isCorrect: true },
        { answerText: 'Apex Legends', isCorrect: false },
        { answerText: 'Call of Duty : Warzone', isCorrect: false },
        { answerText: 'Fortnite', isCorrect: false },
      ],
    },
    {
      questionText: 'Quelle console de jeux vidéo a été publiée par Sony en 2020 ?',
      answerOptions: [
        { answerText: 'Xbox Serie X', isCorrect: false },
        { answerText: 'PlayStation 5', isCorrect: true },
        { answerText: 'Nintendo Switch', isCorrect: false },
        { answerText: 'PlayStation 4 pro', isCorrect: false },
      ],
    },
    {
      questionText: "Quel est le jeu vidéo le plus vendu de la série 'The Legend of Zelda' ?",
      answerOptions: [
        { answerText: 'The Legend of Zelda: Breath of the Wild', isCorrect: true },
        { answerText: 'The Legend of Zelda: Ocarina of Time', isCorrect: false },
        { answerText: 'The Legend of Zelda: Twilight Princess', isCorrect: false },
        { answerText: 'The Legend of Zelda: A Link to the Past', isCorrect: false },
      ],
    },
    {
      questionText: 'Quel est le nom du plombier emblématique de Nintendo ?',
      answerOptions: [
        { answerText: 'Sonic', isCorrect: false },
        { answerText: 'Mario', isCorrect: true },
        { answerText: 'Luigi', isCorrect: false },
        { answerText: 'Donkey Kong', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(`Votre score final est de ${score}/${questions.length}`);
    }
  };

  return (
    <div>
      <h2>Question {currentQuestion + 1} :</h2>
      <p>{questions[currentQuestion].questionText}</p>
      <div>
        {questions[currentQuestion].answerOptions.map((option, number) => (
          <div key={number}>
            <input type="radio" name="answer" value={option.isCorrect}/>
            <label htmlFor={`option${number}`}>{option.answerText}</label>
          </div>
        ))}
      </div>
      <button onClick={() => handleAnswerButtonClick(document.querySelector('input[name="answer"]:checked').value === 'true')}>
        Valider
      </button>
      <button onClick={Acceuil}>Acceuil</button>
    </div>
  );
}

export default Quiz;