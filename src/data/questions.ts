import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: "What is your monthly income range?",
    options: [
      { id: "income-1", text: "Less than ₹25,000", value: "low" },
      { id: "income-2", text: "₹25,000 - ₹50,000", value: "medium" },
      { id: "income-3", text: "₹50,000 - ₹1,00,000", value: "high" },
      { id: "income-4", text: "Above ₹1,00,000", value: "very-high" }
    ]
  },
  {
    id: 2,
    text: "What do you spend the most on?",
    options: [
      { id: "spend-1", text: "Online Shopping", value: "shopping" },
      { id: "spend-2", text: "Travel & Flights", value: "travel" },
      { id: "spend-3", text: "Dining & Entertainment", value: "dining" },
      { id: "spend-4", text: "Fuel & Commuting", value: "fuel" },
      { id: "spend-5", text: "Groceries & Daily Needs", value: "groceries" }
    ]
  },
  {
    id: 3,
    text: "What type of rewards do you prefer?",
    options: [
      { id: "rewards-1", text: "Cashback", value: "cashback" },
      { id: "rewards-2", text: "Travel Miles", value: "travel-miles" },
      { id: "rewards-3", text: "Reward Points", value: "reward-points" },
      { id: "rewards-4", text: "Merchant Discounts", value: "discounts" }
    ]
  },
  {
    id: 4,
    text: "Do you travel internationally often?",
    options: [
      { id: "travel-1", text: "Yes, frequently", value: "true" },
      { id: "travel-2", text: "Occasionally (1-2 times a year)", value: "sometimes" },
      { id: "travel-3", text: "Rarely or never", value: "false" }
    ]
  },
  {
    id: 5,
    text: "Do you already own any credit cards?",
    options: [
      { id: "existing-1", text: "Yes, I have multiple cards", value: "multiple" },
      { id: "existing-2", text: "Yes, I have one card", value: "one" },
      { id: "existing-3", text: "No, this will be my first card", value: "none" }
    ]
  },
  {
    id: 6,
    text: "Are you okay with annual fees if benefits justify it?",
    options: [
      { id: "fees-1", text: "Yes, if the benefits outweigh the cost", value: "true" },
      { id: "fees-2", text: "I prefer cards with no annual fee", value: "false" },
      { id: "fees-3", text: "Only if the fee is waived based on spend", value: "waiver" }
    ]
  },
  {
    id: 7,
    text: "What describes your employment status?",
    options: [
      { id: "employment-1", text: "Student", value: "student" },
      { id: "employment-2", text: "Salaried Employee", value: "salaried" },
      { id: "employment-3", text: "Self-Employed / Business Owner", value: "self-employed" },
      { id: "employment-4", text: "Government Employee", value: "government" }
    ]
  },
  {
    id: 8,
    text: "Where do you live?",
    options: [
      { id: "city-1", text: "Metro City (Delhi, Mumbai, etc.)", value: "metro" },
      { id: "city-2", text: "Tier-1 City", value: "tier-1" },
      { id: "city-3", text: "Tier-2 City or Smaller", value: "tier-2" }
    ]
  },
  {
    id: 9,
    text: "What lifestyle perks interest you the most?",
    options: [
      { id: "lifestyle-1", text: "Airport Lounge Access", value: "lounge" },
      { id: "lifestyle-2", text: "Dining Discounts", value: "dining" },
      { id: "lifestyle-3", text: "Movie & Entertainment", value: "entertainment" },
      { id: "lifestyle-4", text: "Golf & Premium Experiences", value: "premium" },
      { id: "lifestyle-5", text: "Health & Wellness Benefits", value: "wellness" }
    ]
  },
  {
    id: 10,
    text: "How would you describe your credit history?",
    options: [
      { id: "credit-1", text: "Excellent (750+ score)", value: "excellent" },
      { id: "credit-2", text: "Good (700-750 score)", value: "good" },
      { id: "credit-3", text: "Average (650-700 score)", value: "average" },
      { id: "credit-4", text: "Limited or No History", value: "limited" }
    ]
  }
];