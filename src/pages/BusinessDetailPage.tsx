import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  Calendar, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Star, 
  Building, 
  MapPin, 
  AlertCircle,
  ArrowLeft,
  FileText,
  Clock,
  BarChart3,
  Shield,
  Wallet
} from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { businesses } from '../data/mockData';

const BusinessDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [investmentAmount, setInvestmentAmount] = useState<number | ''>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const business = businesses.find(b => b.id === id);
  
  if (!business) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Business Not Found</h1>
        <p className="mb-8">The business you're looking for doesn't exist or has been removed.</p>
        <Link to="/businesses" className="btn btn-primary">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Businesses
        </Link>
      </div>
    );
  }
  
  const handleInvestSubmit = () => {
    if (!investmentAmount || investmentAmount < business.investmentDetails.minimumInvestment) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert(`Investment of €${investmentAmount.toLocaleString()} submitted successfully!`);
      setInvestmentAmount('');
    }, 1500);
  };
  
  const calculateEstimatedReturn = () => {
    if (!investmentAmount) return 0;
    return (investmentAmount * business.investmentDetails.targetReturn / 100) * business.investmentDetails.term;
  };

  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Back Button */}
        <Link 
          to="/businesses" 
          className="inline-flex items-center text-cosmic-purple font-semibold hover:underline mb-8"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to all businesses
        </Link>
        
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-2">
                <h1 className="text-3xl font-extrabold mr-3">{business.name}</h1>
                <div className="bg-beige-100 py-1 px-3 rounded-full flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span className="font-bold">{business.rating.toFixed(1)}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center text-gray-600">
                  <Building className="h-4 w-4 mr-1" />
                  <span>{business.industry}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{business.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Est. {business.yearFounded}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{business.employeeCount} Employees</span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">{business.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-beige-100 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Asking Price</p>
                  <p className="font-bold text-xl">€{business.askingPrice.toLocaleString()}</p>
                </div>
                <div className="bg-beige-100 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Annual Revenue</p>
                  <p className="font-bold text-xl">€{business.annualRevenue.toLocaleString()}</p>
                </div>
                <div className="bg-beige-100 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">EBITDA</p>
                  <p className="font-bold text-xl">€{business.ebitda.toLocaleString()}</p>
                </div>
                <div className="bg-beige-100 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Return Target</p>
                  <p className="font-bold text-xl">{business.investmentDetails.targetReturn}%</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="card-neumorphic p-6">
                <h3 className="text-xl font-bold mb-4">Investment Opportunity</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Minimum Investment</span>
                    <span className="font-semibold">€{business.investmentDetails.minimumInvestment.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Target Return</span>
                    <span className="font-semibold">{business.investmentDetails.targetReturn}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Term</span>
                    <span className="font-semibold">{business.investmentDetails.term} years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Risk Level</span>
                    <span className={`font-semibold ${
                      business.investmentDetails.riskLevel === 'Low' ? 'text-success-500' :
                      business.investmentDetails.riskLevel === 'Medium' ? 'text-warning-500' : 'text-error-500'
                    }`}>
                      {business.investmentDetails.riskLevel}
                    </span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-1">Funding Progress</p>
                  <div className="w-full bg-beige-300 rounded-full h-4 overflow-hidden">
                    <div 
                      className="bg-cosmic-gradient h-full rounded-full"
                      style={{ width: `${(business.investmentDetails.fundingProgress / business.investmentDetails.fundingGoal) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-1 text-sm">
                    <span>€{business.investmentDetails.fundingProgress.toLocaleString()} raised</span>
                    <span>{Math.round((business.investmentDetails.fundingProgress / business.investmentDetails.fundingGoal) * 100)}%</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="investment-amount" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Investment Amount (€)
                    </label>
                    <input
                      id="investment-amount"
                      type="number"
                      placeholder={`Min €${business.investmentDetails.minimumInvestment.toLocaleString()}`}
                      className="w-full px-4 py-2 rounded-lg border border-beige-300 focus:outline-none focus:ring-2 focus:ring-cosmic-purple"
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(e.target.value === '' ? '' : Number(e.target.value))}
                      min={business.investmentDetails.minimumInvestment}
                    />
                  </div>
                  
                  {investmentAmount !== '' && investmentAmount >= business.investmentDetails.minimumInvestment && (
                    <div className="bg-beige-100 p-3 rounded-lg">
                      <p className="text-sm text-gray-600">Estimated Total Return (over {business.investmentDetails.term} years)</p>
                      <p className="font-bold text-xl text-cosmic-purple">
                        €{calculateEstimatedReturn().toLocaleString()}
                      </p>
                    </div>
                  )}
                  
                  <Button
                    fullWidth
                    disabled={!investmentAmount || investmentAmount < business.investmentDetails.minimumInvestment || isSubmitting}
                    onClick={handleInvestSubmit}
                  >
                    {isSubmitting ? 'Processing...' : (
                      <>
                        <Wallet className="mr-2 h-5 w-5" />
                        Invest Now
                      </>
                    )}
                  </Button>
                  
                  {investmentAmount !== '' && investmentAmount < business.investmentDetails.minimumInvestment && (
                    <p className="text-error-500 text-sm flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      Minimum investment is €{business.investmentDetails.minimumInvestment.toLocaleString()}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Details Tabs */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Business Details</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <BarChart3 className="mr-2 h-5 w-5 text-cosmic-purple" />
                    Financial Overview
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {business.name} has demonstrated consistent financial performance with steady revenue growth and strong profitability metrics. The business has maintained a healthy EBITDA margin and has minimal debt.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-beige-100 p-3 rounded-lg">
                      <p className="text-sm text-gray-600">EBITDA Margin</p>
                      <p className="font-bold text-lg">{Math.round((business.ebitda / business.annualRevenue) * 100)}%</p>
                    </div>
                    <div className="bg-beige-100 p-3 rounded-lg">
                      <p className="text-sm text-gray-600">Revenue Growth</p>
                      <p className="font-bold text-lg">+12% YoY</p>
                    </div>
                    <div className="bg-beige-100 p-3 rounded-lg">
                      <p className="text-sm text-gray-600">Debt to EBITDA</p>
                      <p className="font-bold text-lg">1.2x</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Users className="mr-2 h-5 w-5 text-cosmic-purple" />
                    Management & Team
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The business has a stable management team with over 15 years of combined industry experience. Key employees have agreed to stay post-acquisition to ensure business continuity. The team has developed efficient operational processes that allow for scalable growth.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-cosmic-purple" />
                    Growth Potential
                  </h3>
                  <p className="text-gray-700 mb-4">
                    There are multiple growth vectors identified for this business, including geographic expansion, new product/service lines, and operational efficiencies. The business has captured approximately 15% of the addressable market, indicating significant room for expansion.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <div className="card-neumorphic p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <FileText className="mr-2 h-5 w-5 text-cosmic-purple" />
                    Due Diligence Documents
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between">
                      <span className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-gray-600" />
                        Financial Report
                      </span>
                      <a href="#" className="text-cosmic-purple hover:underline">
                        View
                      </a>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-gray-600" />
                        Market Analysis
                      </span>
                      <a href="#" className="text-cosmic-purple hover:underline">
                        View
                      </a>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-gray-600" />
                        Business Valuation
                      </span>
                      <a href="#" className="text-cosmic-purple hover:underline">
                        View
                      </a>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-gray-600" />
                        Risk Assessment
                      </span>
                      <a href="#" className="text-cosmic-purple hover:underline">
                        View
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="card-neumorphic p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-cosmic-purple" />
                    Timeline
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex">
                      <div className="mr-3 flex-shrink-0">
                        <div className="h-4 w-4 rounded-full bg-cosmic-purple"></div>
                        <div className="h-full w-0.5 bg-beige-300 mx-auto"></div>
                      </div>
                      <div>
                        <p className="font-semibold">DD Completed</p>
                        <p className="text-sm text-gray-600">April 15, 2025</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="mr-3 flex-shrink-0">
                        <div className="h-4 w-4 rounded-full bg-cosmic-purple"></div>
                        <div className="h-full w-0.5 bg-beige-300 mx-auto"></div>
                      </div>
                      <div>
                        <p className="font-semibold">Funding Deadline</p>
                        <p className="text-sm text-gray-600">May 30, 2025</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="mr-3 flex-shrink-0">
                        <div className="h-4 w-4 rounded-full border-2 border-cosmic-purple bg-white"></div>
                      </div>
                      <div>
                        <p className="font-semibold">Projected Closing</p>
                        <p className="text-sm text-gray-600">June 15, 2025</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-cosmic-gradient text-white p-6 rounded-2xl">
                  <div className="flex items-center mb-4">
                    <Shield className="h-6 w-6 mr-2" />
                    <h3 className="text-xl font-bold">bizzed.ai Assessment</h3>
                  </div>
                  <p className="mb-4">
                    This business has received a comprehensive assessment by bizzed.ai's expert team. The business shows strong fundamentals and meets our strict investment criteria.
                  </p>
                  <a 
                    href="https://bizzed.ai" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center font-semibold text-white hover:underline"
                  >
                    View Full Report
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-cosmic-gradient-soft rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Invest in {business.name}?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Join other crypto investors who are diversifying into thoroughly vetted German SMB acquisitions.
          </p>
          <Button 
            size="lg"
            onClick={() => document.getElementById('investment-amount')?.focus()}
          >
            <DollarSign className="mr-2 h-5 w-5" />
            Invest Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetailPage;