import React from 'react';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ 
  currentStep, 
  totalSteps 
}) => {
  const percentage = (currentStep / totalSteps) * 100;
  
  return (
    <div className="w-full max-w-xl mx-auto mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-neutral-600">
          Question {currentStep} of {totalSteps}
        </span>
        <span className="text-sm font-medium text-primary-600">
          {Math.round(percentage)}% Complete
        </span>
      </div>
      <div className="w-full h-2 bg-neutral-200 rounded-full">
        <div 
          className="h-full bg-primary-600 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressIndicator;