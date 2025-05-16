import { useState } from 'react';
import { Wallet, TrendingUp, ShieldCheck, BarChart4, Calendar, ArrowRight, ChevronRight, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { indexFunds, businesses } from '../data/mockData';

const IndexPage = () => {
  const [selectedFund, setSelectedFund] = useState(indexFunds[0]);
  const [investmentAmount, setInvestmentAmount] = useState<number | ''>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleFundChange = (fundId: string) => {
    const fund = indexFunds.find(f => f.id === fundId);
    if (fund) {
      setSelectedFund(fund);
      setInvestmentAmount('');
    }
  };
  
  const handleInvestSubmit = () => {
    if (!investmentAmount || investmentAmount < selectedFund.minimumInvestment) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert(`Investment of €${investmentAmount.toLocaleString()} in ${selectedFund.name} submitted successfully!`);
      setInvestmentAmount('');
    }, 1500);
  };
  
  const calculateEstimatedReturn = () => {
    if (!investmentAmount) return 0;
    return (investmentAmount * selectedFund.apy / 100);
  };

  return (
    <div className="py-12">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4">Index Fund Investments</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Diversify your investment across multiple carefully selected German SMBs with our curated index funds.
          </p>
        </div>
        
        {/* Fund Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {indexFunds.map(fund => (
            <motion.div
              key={fund.id}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                selectedFund.id === fund.id
                  ? 'bg-cosmic-gradient text-white shadow-lg'
                  : 'bg-white border border-beige-300 text-gray-800 hover:border-cosmic-purple'
              }`}
              onClick={() => handleFundChange(fund.id)}
            >
              <h3 className="text-xl font-bold mb-2">{fund.name}</h3>
              <div className="flex justify-between mb-4">
                <div>
                  <p className={selectedFund.id === fund.id ? 'text-white opacity-80' : 'text-gray-600'}>
                    Target APY
                  </p>
                  <p className="text-2xl font-bold">{fund.apy}%</p>
                </div>
                <div>
                  <p className={selectedFund.id === fund.id ? 'text-white opacity-80' : 'text-gray-600'}>
                    Risk Level
                  </p>
                  <p className={`font-bold ${
                    selectedFund.id !== fund.id &&
                    (fund.riskLevel === 'Low' ? 'text-success-500' :
                    fund.riskLevel === 'Medium' ? 'text-warning-500' : 'text-error-500')
                  }`}>
                    {fund.riskLevel}
                  </p>
                </div>
              </div>
              <p className={selectedFund.id === fund.id ? 'text-white opacity-90' : 'text-gray-600'}>
                Min Investment: €{fund.minimumInvestment.toLocaleString()}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Selected Fund Details */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            <div className="lg:col-span-2 p-8">
              <h2 className="text-2xl font-bold mb-4">{selectedFund.name}</h2>
              <p className="text-gray-700 mb-6">{selectedFund.description}</p>
              
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <BarChart4 className="mr-2 h-5 w-5 text-cosmic-purple" />
                Performance History
              </h3>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-beige-100 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Last Month</p>
                  <p className={`font-bold text-lg ${selectedFund.performance.month >= 0 ? 'text-success-500' : 'text-error-500'}`}>
                    {selectedFund.performance.month >= 0 ? '+' : ''}{selectedFund.performance.month}%
                  </p>
                </div>
                <div className="bg-beige-100 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Last Year</p>
                  <p className={`font-bold text-lg ${selectedFund.performance.year >= 0 ? 'text-success-500' : 'text-error-500'}`}>
                    {selectedFund.performance.year >= 0 ? '+' : ''}{selectedFund.performance.year}%
                  </p>
                </div>
                <div className="bg-beige-100 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">All Time</p>
                  <p className={`font-bold text-lg ${selectedFund.performance.allTime >= 0 ? 'text-success-500' : 'text-error-500'}`}>
                    {selectedFund.performance.allTime >= 0 ? '+' : ''}{selectedFund.performance.allTime}%
                  </p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <ShieldCheck className="mr-2 h-5 w-5 text-cosmic-purple" />
                Key Fund Benefits
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-cosmic-gradient rounded-full p-1 mr-3 flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Diversified Risk</p>
                    <p className="text-gray-600 text-sm">Spread investment across multiple businesses</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cosmic-gradient rounded-full p-1 mr-3 flex-shrink-0">
                    <ShieldCheck className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Expert Selection</p>
                    <p className="text-gray-600 text-sm">Businesses chosen by experienced analysts</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cosmic-gradient rounded-full p-1 mr-3 flex-shrink-0">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Quarterly Returns</p>
                    <p className="text-gray-600 text-sm">Regular distribution of profits</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cosmic-gradient rounded-full p-1 mr-3 flex-shrink-0">
                    <Wallet className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Lower Entry Point</p>
                    <p className="text-gray-600 text-sm">Access multiple businesses with smaller investment</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Businesses in this Fund</h3>
              <div className="space-y-4">
                {selectedFund.businesses.map(business => (
                  <div key={business.id} className="bg-beige-100 rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <h4 className="font-bold">{business.name}</h4>
                      <p className="text-gray-600 text-sm">{business.industry} · €{business.askingPrice.toLocaleString()}</p>
                    </div>
                    <a 
                      href={`/businesses/${business.id}`} 
                      className="flex items-center text-cosmic-purple hover:underline"
                    >
                      View
                      <ChevronRight className="h-5 w-5 ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-1 bg-beige-100 p-8">
              <div className="card-neumorphic p-6">
                <h3 className="text-xl font-bold mb-4">Invest in this Fund</h3>
                
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Target APY</span>
                      <span className="font-semibold">{selectedFund.apy}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Minimum Investment</span>
                      <span className="font-semibold">€{selectedFund.minimumInvestment.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Risk Level</span>
                      <span className={`font-semibold ${
                        selectedFund.riskLevel === 'Low' ? 'text-success-500' :
                        selectedFund.riskLevel === 'Medium' ? 'text-warning-500' : 'text-error-500'
                      }`}>
                        {selectedFund.riskLevel}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Distribution Frequency</span>
                      <span className="font-semibold">Quarterly</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Number of Businesses</span>
                      <span className="font-semibold">{selectedFund.businesses.length}</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-beige-300">
                    <label htmlFor="fund-investment-amount" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Investment Amount (€)
                    </label>
                    <input
                      id="fund-investment-amount"
                      type="number"
                      placeholder={`Min €${selectedFund.minimumInvestment.toLocaleString()}`}
                      className="w-full px-4 py-2 rounded-lg border border-beige-300 focus:outline-none focus:ring-2 focus:ring-cosmic-purple"
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(e.target.value === '' ? '' : Number(e.target.value))}
                      min={selectedFund.minimumInvestment}
                    />
                  </div>
                  
                  {investmentAmount !== '' && investmentAmount >= selectedFund.minimumInvestment && (
                    <div className="bg-beige-200 p-3 rounded-lg">
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-sm text-gray-600">Estimated Annual Return</p>
                        <div className="flex items-center">
                          <Info className="h-4 w-4 text-gray-500 mr-1" />
                          <span className="text-xs text-gray-500">Based on target APY</span>
                        </div>
                      </div>
                      <p className="font-bold text-xl text-cosmic-purple">
                        €{calculateEstimatedReturn().toLocaleString()} / year
                      </p>
                    </div>
                  )}
                  
                  <Button
                    fullWidth
                    disabled={!investmentAmount || investmentAmount < selectedFund.minimumInvestment || isSubmitting}
                    onClick={handleInvestSubmit}
                  >
                    {isSubmitting ? 'Processing...' : (
                      <>
                        <Wallet className="mr-2 h-5 w-5" />
                        Invest Now
                      </>
                    )}
                  </Button>
                  
                  {investmentAmount !== '' && investmentAmount < selectedFund.minimumInvestment && (
                    <p className="text-error-500 text-sm flex items-center">
                      <Info className="h-4 w-4 mr-1" />
                      Minimum investment is €{selectedFund.minimumInvestment.toLocaleString()}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="mt-6 bg-cosmic-gradient text-white p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-3">Why Choose This Fund?</h3>
                <p className="mb-4">
                  This fund offers exposure to multiple high-quality German SMBs that have passed rigorous due diligence by bizzed.ai. Perfect for investors seeking diversification with professional management.
                </p>
                <a 
                  href="https://bizzed.ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center font-semibold text-white hover:underline"
                >
                  Learn About Our Selection Process
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Fund Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-beige-300">
                  <th className="text-left py-4 px-4">Fund Name</th>
                  <th className="text-left py-4 px-4">Target APY</th>
                  <th className="text-left py-4 px-4">Risk Level</th>
                  <th className="text-left py-4 px-4">Min Investment</th>
                  <th className="text-left py-4 px-4"># of Businesses</th>
                  <th className="text-left py-4 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {indexFunds.map(fund => (
                  <tr 
                    key={fund.id} 
                    className={`border-b border-beige-200 hover:bg-beige-50 ${selectedFund.id === fund.id ? 'bg-beige-100' : ''}`}
                  >
                    <td className="py-4 px-4 font-semibold">{fund.name}</td>
                    <td className="py-4 px-4">{fund.apy}%</td>
                    <td className="py-4 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        fund.riskLevel === 'Low' ? 'bg-success-50 text-success-700' :
                        fund.riskLevel === 'Medium' ? 'bg-warning-50 text-warning-700' : 'bg-error-50 text-error-700'
                      }`}>
                        {fund.riskLevel}
                      </span>
                    </td>
                    <td className="py-4 px-4">€{fund.minimumInvestment.toLocaleString()}</td>
                    <td className="py-4 px-4">{fund.businesses.length}</td>
                    <td className="py-4 px-4">
                      <button 
                        className={`text-cosmic-purple hover:underline font-semibold ${selectedFund.id === fund.id ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={() => selectedFund.id !== fund.id && handleFundChange(fund.id)}
                        disabled={selectedFund.id === fund.id}
                      >
                        {selectedFund.id === fund.id ? 'Selected' : 'Select'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-cosmic-gradient-soft rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Diversify Your Crypto?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Invest in our expertly curated index funds for exposure to multiple high-quality German SMBs.
          </p>
          <Button 
            size="lg"
            onClick={() => document.getElementById('fund-investment-amount')?.focus()}
          >
            <Wallet className="mr-2 h-5 w-5" />
            Start Investing
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;