import React, { useState, useEffect } from 'react';
import { Option } from '../types';

interface QuestionProps {
  id: number;
  text: string;
  options: Option[];
  onAnswer: (questionId: number, selectedOption: string) => void;
  isActive: boolean;
  isExiting: boolean;
}

const Question: React.FC<QuestionProps> = ({
  id,
  text,
  options,
  onAnswer,
  isActive,
  isExiting,
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  // Reset selected option when question changes
  useEffect(() => {
    setSelectedOptionId(null);
  }, [id]);

  const handleOptionClick = (optionId: string, value: string) => {
    setSelectedOptionId(optionId);
    
    // Small delay to show selection before proceeding
    setTimeout(() => {
      onAnswer(id, value);
    }, 300);
  };

  let animationClass = '';
  if (isActive) {
    animationClass = 'animate-slideInRight';
  } else if (isExiting) {
    animationClass = 'animate-slideOutLeft';
  } else {
    animationClass = 'hidden';
  }

  return (
    <div 
      className={`question-card ${animationClass} ${!isActive && !isExiting ? 'hidden' : ''}`}
      style={{ position: isActive || isExiting ? 'absolute' : 'relative' }}
    >
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">{text}</h2>
      
      <div className="space-y-3">
        {options.map((option) => (
          <div
            key={option.id}
            className={`option-card ${selectedOptionId === option.id ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option.id, option.value)}
          >
            <p className="font-medium">{option.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;