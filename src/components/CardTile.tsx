import React from 'react';
import { CreditCard } from '../types';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface CardTileProps {
  card: CreditCard;
  personalizedReason: string;
}

const CardTile: React.FC<CardTileProps> = ({ card, personalizedReason }) => {
  return (
    <div className="credit-card-tile h-full flex flex-col">
      <div className="aspect-[16/9] overflow-hidden rounded-t-lg mb-4">
        <img 
          src={card.imageSrc} 
          alt={card.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="mb-3">
          <p className="text-sm text-primary-600 font-medium mb-1">{card.bank}</p>
          <h3 className="text-xl font-semibold mb-2">{card.name}</h3>
        </div>
        
        <div className="mb-4 bg-primary-50 p-3 rounded-lg">
          <p className="font-medium text-primary-800 text-sm mb-1">Why This Card For You:</p>
          <p className="text-neutral-700">{personalizedReason}</p>
        </div>
        
        <div className="mb-4">
          <p className="font-medium mb-2">Key Benefits:</p>
          <ul className="space-y-2">
            {card.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle size={18} className="text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="bg-neutral-50 p-2 rounded">
            <p className="font-medium mb-1">Annual Fee</p>
            <p>{card.annualFee}</p>
          </div>
          <div className="bg-neutral-50 p-2 rounded">
            <p className="font-medium mb-1">Reward Rate</p>
            <p>{card.rewardRate.split(' ').slice(0, 5).join(' ')}</p>
          </div>
        </div>
        
        <div className="mt-auto">
          <a 
            href="#" 
            className="btn-primary w-full group"
            onClick={(e) => e.preventDefault()}
          >
            Apply Now
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardTile;