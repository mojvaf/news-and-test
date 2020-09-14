import React, { useState } from "react";

const Question = () => {
  const questions = [
    {
      questionText:
        "Are the number of cases in these area low enough fro schools to open ?",
      answerOptions: [
        { answerText: "New York City", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Madrid", isCorrect: false },
        { answerText: "Tehran", isCorrect: false }
      ]
    },

    {
      questionText:
        "What other policy changes are being considered to reduce COVID-19?",
      answerOptions: [
        { answerText: "Eating together", isCorrect: false },
        { answerText: "Playing in a big group", isCorrect: false },
        { answerText: "Setting next to each other", isCorrect: false },
        { answerText: "Wearing mask", isCorrect: true }
      ]
    },

    {
      questionText: "will hand washing stations be available in schools?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false }
      ]
    },

    {
      questionText:
        "What kind of sports will students be allowed to participate?",
      answerOptions: [
        { answerText: "Boxing", isCorrect: false },
        { answerText: "Running", isCorrect: true },
        { answerText: "Swimming", isCorrect: false },
        { answerText: "Dancing", isCorrect: false }
      ]
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handelAnswerButtonClick = isCorrect => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(answerOption => (
              <button
                onClick={() => handelAnswerButtonClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Question;
