import React, { useState } from 'react';
import QuestionsCard from './components/QuestionsCard';
import { fetchQuestions,  QuestionState } from './API';
import { GlobalStyle, Wrapper } from './App.styles';
import {deferredPrompt} from './sw';

const TOTAL_QUESTIONS = 10;


type AnswerObject = {
  question: string,
  answer: string,
  correct: boolean,
  correctAnswer: string

}

 

function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [difficulty,setDifficulty]= useState<string>("easy");
 


  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuestions(TOTAL_QUESTIONS, difficulty)
    setQuestions(newQuestions)
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
    
    if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then(function(choiceResult:any){
             console.log(choiceResult.outcome);

             if (choiceResult.outcome === 'dismissed'){
                 console.log("user cancel installiation")
             }else {
                 console.log("User Added to Home screen")
             }
            });                   
           
        }  

  };

   

  const nextQuestion = async () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    }
    else {
      setNumber(nextQuestion);
    }
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;

      const correct = questions[number].correct_answer === answer;

      if (correct) setScore(prev => prev + 1)

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      }

      setUserAnswers(prev => [...prev, answerObject])
    }
  };


  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Quiz App</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <>
            <h3>Select the Difficulty Level</h3>
            <div className="custom-select" style={{width:"200px"}}>
            <select                        
            onBlur={(
                ev: React.ChangeEvent<HTMLSelectElement>,
            ): void => setDifficulty(ev.target.value)}
        >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select>
        </div>
        <button className="start" onClick={startQuiz}>Start Quiz</button>
          </>
           
        ) : null}

        {!gameOver ? (
          <p className="score">Score :{score}</p>) : null}

        {loading ? (
          <p>Loading...</p>) : null}

        {!loading && !gameOver ? (
          <QuestionsCard
            questionNum={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />) : null}

        {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={nextQuestion}>Next</button>) : null}
      </Wrapper>
    </>
  );
}

export default App;
