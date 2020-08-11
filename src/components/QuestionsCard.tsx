import React from 'react'

type props = {
    question: string,
    answers: string[],
    callback: any,
    userAnswer: any,
    questionNum: number,
    totalQuestions: number
}

const QuestionsCard : React.FC<props> = ({question,answers,callback,userAnswer,questionNum,totalQuestions}) => {
    return (
        <div>
           <p>Question : {questionNum}/{totalQuestions}</p>
           <p dangerouslySetInnerHTML={{__html:question}}/>
           <div>
               {answers.map(answer =>(
                   <div>
                       <button disabled={userAnswer} onClick={callback}>
                           <span dangerouslySetInnerHTML={{__html: answer}}/>
                       </button>
                   </div>
               ))}
           </div>
        </div>
    )
}
export default QuestionsCard;
