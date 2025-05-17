import React from 'react';
import { CreditCard, UserProfile } from '../types';
import CardTile from './CardTile';
import { getPersonalizedReason } from '../utils/recommendationLogic';
import { ArrowLeft, ThumbsUp, RefreshCw } from 'lucide-react';

interface ResultsPageProps {
  recommendations: CreditCard[];
  userProfile: UserProfile;
  onRetake: () => void;
}

const ResultsPage: React.FC<ResultsPageProps> = ({
  recommendations,
  userProfile,
  onRetake,
}) => {
  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fadeIn">
          <div className="mb-4 inline-block bg-accent-100 text-accent-600 p-2 rounded-full">
            <ThumbsUp size={24} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Perfect Credit Card Matches</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Based on your preferences, we've found these credit cards that best match your lifestyle and spending habits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {recommendations.map((card, index) => (
            <div key={card.id} className="animate-scaleUp" style={{ animationDelay: `${index * 100}ms` }}>
              <CardTile 
                card={card} 
                personalizedReason={getPersonalizedReason(card, userProfile)} 
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button 
            onClick={onRetake}
            className="btn-secondary flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Retake Questionnaire
          </button>
          
          <button className="btn-accent flex items-center">
            <RefreshCw size={18} className="mr-2" />
            Refine My Results
          </button>
        </div>

        <div className="mt-16 text-center text-sm text-neutral-500">
          <p>
            Need more help deciding? Contact our credit card advisors for personalized guidance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;