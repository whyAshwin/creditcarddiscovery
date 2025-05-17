import { Answer, CreditCard, UserProfile } from '../types';
import { questions } from '../data/questions';
import { creditCards } from '../data/creditCards';

export const buildUserProfile = (answers: Answer[]): UserProfile => {
  // Initialize with default values
  const userProfile: UserProfile = {
    income: '',
    topSpendCategory: '',
    rewardPreference: '',
    internationalTravel: false,
    existingCards: false,
    annualFeePreference: false,
    employmentType: '',
    cityTier: '',
    lifestylePreference: '',
    creditHistory: '',
  };

  // Map answers to user profile
  answers.forEach(answer => {
    const question = questions.find(q => q.id === answer.questionId);
    if (!question) return;

    switch (question.id) {
      case 1: // Income
        userProfile.income = answer.selectedOption;
        break;
      case 2: // Top spend category
        userProfile.topSpendCategory = answer.selectedOption;
        break;
      case 3: // Reward preference
        userProfile.rewardPreference = answer.selectedOption;
        break;
      case 4: // International travel
        userProfile.internationalTravel = answer.selectedOption === 'true';
        break;
      case 5: // Existing cards
        userProfile.existingCards = answer.selectedOption !== 'none';
        break;
      case 6: // Annual fee preference
        userProfile.annualFeePreference = answer.selectedOption === 'true';
        break;
      case 7: // Employment type
        userProfile.employmentType = answer.selectedOption;
        break;
      case 8: // City tier
        userProfile.cityTier = answer.selectedOption;
        break;
      case 9: // Lifestyle preference
        userProfile.lifestylePreference = answer.selectedOption;
        break;
      case 10: // Credit history
        userProfile.creditHistory = answer.selectedOption;
        break;
    }
  });

  return userProfile;
};

export const getRecommendations = (profile: UserProfile): CreditCard[] => {
  // Start with all cards
  let filteredCards = [...creditCards];

  // Apply income filter (most restrictive first)
  if (profile.income === 'low') {
    filteredCards = filteredCards.filter(card => 
      ['low', 'medium'].includes(card.income)
    );
  } else if (profile.income === 'medium') {
    filteredCards = filteredCards.filter(card => 
      ['low', 'medium', 'high'].includes(card.income)
    );
  }

  // Apply credit history filter (people with limited history need specific cards)
  if (profile.creditHistory === 'limited') {
    filteredCards = filteredCards.filter(card => 
      card.creditHistory.includes('limited')
    );
  }

  // Apply employment type filter
  if (profile.employmentType) {
    filteredCards = filteredCards.filter(card => 
      card.employmentType.includes(profile.employmentType)
    );
  }

  // Score the remaining cards
  const scoredCards = filteredCards.map(card => {
    let score = 0;

    // Reward preference match
    if (profile.rewardPreference === 'cashback' && card.tags.includes('cashback')) {
      score += 3;
    } else if (profile.rewardPreference === 'travel-miles' && card.tags.includes('travel')) {
      score += 3;
    } else if (profile.rewardPreference === 'reward-points' && card.tags.includes('rewards')) {
      score += 3;
    } else if (profile.rewardPreference === 'discounts' && 
               (card.tags.includes('cashback') || card.spendCategories.includes(profile.topSpendCategory))) {
      score += 2;
    }

    // Spending category match
    if (card.spendCategories.includes(profile.topSpendCategory)) {
      score += 3;
    }

    // Annual fee preference
    if (!profile.annualFeePreference && card.tags.includes('no-fee')) {
      score += 2;
    } else if (profile.annualFeePreference && card.annualFeeWaiver) {
      score += 1;
    }

    // International travel
    if (profile.internationalTravel && card.travelBenefits) {
      score += 2;
    }

    // Lifestyle perks match
    if (card.lifestylePerks.includes(profile.lifestylePreference)) {
      score += 2;
    }

    // First-time card consideration
    if (!profile.existingCards && card.tags.includes('entry-level')) {
      score += 2;
    }

    return { card, score };
  });

  // Sort by score (highest first) and take top 4
  return scoredCards
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map(item => item.card);
};

export const getPersonalizedReason = (card: CreditCard, profile: UserProfile): string => {
  const reasons = [];

  // Check for reward type match
  if (profile.rewardPreference === 'cashback' && card.tags.includes('cashback')) {
    reasons.push('Offers strong cashback rewards on your purchases');
  } else if (profile.rewardPreference === 'travel-miles' && card.tags.includes('travel')) {
    reasons.push('Provides excellent travel benefits and miles');
  } else if (profile.rewardPreference === 'reward-points' && card.tags.includes('rewards')) {
    reasons.push('Offers flexible reward points to redeem as you wish');
  }

  // Check for spending category match
  if (card.spendCategories.includes(profile.topSpendCategory)) {
    if (profile.topSpendCategory === 'shopping') {
      reasons.push('Maximizes rewards on your shopping expenses');
    } else if (profile.topSpendCategory === 'travel') {
      reasons.push('Great for your travel expenses');
    } else if (profile.topSpendCategory === 'dining') {
      reasons.push('Offers excellent benefits on dining out');
    } else if (profile.topSpendCategory === 'fuel') {
      reasons.push('Ideal for your commuting and fuel expenses');
    } else if (profile.topSpendCategory === 'groceries') {
      reasons.push('Maximizes savings on your grocery shopping');
    }
  }

  // Check for annual fee preferences
  if (!profile.annualFeePreference && card.tags.includes('no-fee')) {
    reasons.push('No annual fee to worry about');
  } else if (profile.annualFeePreference && card.annualFeeWaiver) {
    reasons.push('Annual fee can be waived with spending');
  }

  // Check for lifestyle perks
  if (card.lifestylePerks.includes(profile.lifestylePreference)) {
    if (profile.lifestylePreference === 'lounge') {
      reasons.push('Provides airport lounge access you value');
    } else if (profile.lifestylePreference === 'dining') {
      reasons.push('Offers dining privileges that match your lifestyle');
    } else if (profile.lifestylePreference === 'entertainment') {
      reasons.push('Great entertainment perks for your lifestyle');
    } else if (profile.lifestylePreference === 'premium') {
      reasons.push('Offers premium experiences you\'ll appreciate');
    } else if (profile.lifestylePreference === 'wellness') {
      reasons.push('Includes health & wellness benefits you\'ll use');
    }
  }

  // First-time card consideration
  if (!profile.existingCards && card.tags.includes('entry-level')) {
    reasons.push('Great starter card with accessible benefits');
  }

  // If no specific reasons found, provide a default
  if (reasons.length === 0) {
    reasons.push('Well-rounded card matching multiple preferences');
  }

  // Return 2 top reasons or all if less than 2
  return reasons.slice(0, 2).join('. ');
};