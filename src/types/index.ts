export interface Business {
  id: string;
  name: string;
  industry: string;
  location: string;
  description: string;
  askingPrice: number;
  annualRevenue: number;
  rating: number;
  yearFounded: number;
  employeeCount: number;
  ebitda: number;
  investmentDetails: {
    minimumInvestment: number;
    targetReturn: number;
    term: number;
    riskLevel: 'Low' | 'Medium' | 'High';
    fundingProgress: number;
    fundingGoal: number;
  };
  externalUrl?: string;
}

export interface IndexFund {
  id: string;
  name: string;
  description: string;
  apy: number;
  riskLevel: 'Low' | 'Medium' | 'High';
  minimumInvestment: number;
  businesses: Business[];
  performance: {
    month: number;
    year: number;
    allTime: number;
  };
}

export interface InvestmentPortfolio {
  totalInvested: number;
  totalReturn: number;
  roi: number;
  investments: {
    business?: Business;
    index?: IndexFund;
    amount: number;
    date: string;
    currentValue: number;
    roi: number;
  }[];
}