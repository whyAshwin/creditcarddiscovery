import React from 'react';
import { ArrowRight, CreditCard } from 'lucide-react';

interface LandingPageProps {
  onStartClick: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStartClick }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-neutral-50 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full text-center mb-8 animate-fadeIn">
        <div className="mb-6 flex justify-center">
          <div className="bg-primary-600 text-white p-3 rounded-xl">
            <CreditCard size={40} />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-900">
          Find Your Perfect Credit Card Match
        </h1>
        <p className="text-xl text-neutral-700 max-w-2xl mx-auto mb-8">
          Stop wasting time comparing 1000+ credit cards. Answer a few simple questions and discover the best cards for your lifestyle and spending habits.
        </p>
        <button 
          onClick={onStartClick}
          className="btn-primary text-lg group"
        >
          Find My Cards
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
        </button>
      </div>

      <div className="w-full max-w-4xl grid md:grid-cols-3 gap-6 mt-8">
        <div className="card p-6 bg-white flex flex-col items-center text-center animate-scaleUp">
          <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
            <span className="text-lg font-bold">1</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Quick Questionnaire</h3>
          <p className="text-neutral-600">Answer 10 simple questions about your spending habits and preferences.</p>
        </div>

        <div className="card p-6 bg-white flex flex-col items-center text-center animate-scaleUp delay-100">
          <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
            <span className="text-lg font-bold">2</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Smart Matching</h3>
          <p className="text-neutral-600">Our algorithm analyzes your profile to find the best cards for you.</p>
        </div>

        <div className="card p-6 bg-white flex flex-col items-center text-center animate-scaleUp delay-200">
          <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
            <span className="text-lg font-bold">3</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Personalized Results</h3>
          <p className="text-neutral-600">Get customized recommendations with clear explanations of benefits.</p>
        </div>
      </div>

      <div className="mt-16 text-center text-neutral-500">
        <p className="text-sm">Helping Indians find their perfect credit card match since 2025</p>
      </div>
    </div>
  );
};

export default LandingPage;