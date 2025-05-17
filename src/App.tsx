import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Questionnaire from './components/Questionnaire';
import ResultsPage from './components/ResultsPage';
import { questions } from './data/questions';
import { Answer, UserProfile } from './types';
import { buildUserProfile, getRecommendations } from './utils/recommendationLogic';

function App() {
  const [currentStep, setCurrentStep] = useState<'landing' | 'questionnaire' | 'results'>('landing');
  const [userAnswers, setUserAnswers] = useState<Answer[]>([]);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const handleStartClick = () => {
    setCurrentStep('questionnaire');
  };

  const handleQuestionnaireComplete = (answers: Answer[]) => {
    setUserAnswers(answers);
    const profile = buildUserProfile(answers);
    setUserProfile(profile);
    setCurrentStep('results');
  };

  const handleRetakeQuestionnaire = () => {
    setUserAnswers([]);
    setUserProfile(null);
    setCurrentStep('questionnaire');
  };

  return (
    <div className="min-h-screen">
      {currentStep === 'landing' && (
        <LandingPage onStartClick={handleStartClick} />
      )}

      {currentStep === 'questionnaire' && (
        <Questionnaire 
          questions={questions} 
          onComplete={handleQuestionnaireComplete} 
        />
      )}

      {currentStep === 'results' && userProfile && (
        <ResultsPage 
          recommendations={getRecommendations(userProfile)} 
          userProfile={userProfile}
          onRetake={handleRetakeQuestionnaire}
        />
      )}
    </div>
  );
}

export default App;