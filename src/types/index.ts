export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface Option {
  id: string;
  text: string;
  value: string;
}

export interface Answer {
  questionId: number;
  selectedOption: string;
}

export interface CreditCard {
  id: string;
  name: string;
  bank: string;
  imageSrc: string;
  annualFee: string;
  rewardRate: string;
  joiningBonus: string;
  features: string[];
  tags: string[];
  spendCategories: string[];
  lifestylePerks: string[];
  income: string;
  employmentType: string[];
  creditHistory: string[];
  travelBenefits: boolean;
  annualFeeWaiver: boolean;
}

export interface UserProfile {
  income: string;
  topSpendCategory: string;
  rewardPreference: string;
  internationalTravel: boolean;
  existingCards: boolean;
  annualFeePreference: boolean;
  employmentType: string;
  cityTier: string;
  lifestylePreference: string;
  creditHistory: string;
}