import React, { useState } from 'react';
import { Question as QuestionType, Answer } from '../types';
import Question from './Question';
import ProgressIndicator from './ProgressIndicator';

interface QuestionnaireProps {
  questions: QuestionType[];
  onComplete: (answers: Answer[]) => void;
}

const Questionnaire: React.FC<QuestionnaireProps> = ({
  questions,
  onComplete,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [exitingQuestionIndex, setExitingQuestionIndex] = useState<number | null>(null);

  const handleAnswer = (questionId: number, selectedOption: string) => {
    const newAnswers = [...answers];
    const existingAnswerIndex = newAnswers.findIndex(a => a.questionId === questionId);
    
    if (existingAnswerIndex >= 0) {
      newAnswers[existingAnswerIndex] = { questionId, selectedOption };
    } else {
      newAnswers.push({ questionId, selectedOption });
    }
    
    setAnswers(newAnswers);
    
    // Set the exiting question index to start the exit animation
    setExitingQuestionIndex(currentQuestionIndex);
    
    // Move to the next question after a short delay (for animation)
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setExitingQuestionIndex(null);
      } else {
        onComplete(newAnswers);
      }
    }, 300); // Match this with the animation duration
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto">
        <ProgressIndicator 
          currentStep={currentQuestionIndex + 1} 
          totalSteps={questions.length} 
        />

        <div className="relative w-full" style={{ height: '300px' }}>
          {questions.map((question, index) => (
            <Question
              key={question.id}
              id={question.id}
              text={question.text}
              options={question.options}
              onAnswer={handleAnswer}
              isActive={index === currentQuestionIndex}
              isExiting={index === exitingQuestionIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;