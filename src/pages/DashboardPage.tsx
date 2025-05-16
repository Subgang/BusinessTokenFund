import { useState } from 'react';
import { PieChart, Wallet, Banknote, TrendingUp, ArrowUpRight, ArrowDownRight, Plus, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { mockPortfolio } from '../data/mockData';

const DashboardPage = () => {
  const [timeframe, setTimeframe] = useState<'all' | 'year' | 'month'>('all');
  
  const getTimeframeLabel = () => {
    switch (timeframe) {
      case 'month': return 'Last 30 Days';
      case 'year': return 'Past Year';
      case 'all': return 'All Time';
    }
  };
  
  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="text-3xl font-extrabold mb-8">Your Investment Dashboard</h1>
        
        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div 
            className="bg-white rounded-xl shadow-sm p-6"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Total Invested</h3>
              <Wallet className="h-5 w-5 text-cosmic-purple" />
            </div>
            <p className="text-3xl font-bold mb-2">€{mockPortfolio.totalInvested.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Across {mockPortfolio.investments.length} investments</p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl shadow-sm p-6"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Current Value</h3>
              <Banknote className="h-5 w-5 text-cosmic-purple" />
            </div>
            <p className="text-3xl font-bold mb-2">€{mockPortfolio.totalReturn.toLocaleString()}</p>
            <div className="flex items-center">
              <ArrowUpRight className="h-4 w-4 text-success-500 mr-1" />
              <p className="text-sm text-success-500">+€{(mockPortfolio.totalReturn - mockPortfolio.totalInvested).toLocaleString()}</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl shadow-sm p-6"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Overall ROI</h3>
              <TrendingUp className="h-5 w-5 text-cosmic-purple" />
            </div>
            <p className="text-3xl font-bold mb-2">+{mockPortfolio.roi}%</p>
            <p className="text-sm text-gray-600">Average annual return: ~12.8%</p>
          </motion.div>
        </div>
        
        {/* Portfolio Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Portfolio Performance</h2>
              <div className="flex bg-beige-100 rounded-lg overflow-hidden">
                <button 
                  className={`px-3 py-1.5 text-sm ${timeframe === 'month' ? 'bg-cosmic-gradient text-white' : 'hover:bg-beige-200'}`}
                  onClick={() => setTimeframe('month')}
                >
                  Month
                </button>
                <button 
                  className={`px-3 py-1.5 text-sm ${timeframe === 'year' ? 'bg-cosmic-gradient text-white' : 'hover:bg-beige-200'}`}
                  onClick={() => setTimeframe('year')}
                >
                  Year
                </button>
                <button 
                  className={`px-3 py-1.5 text-sm ${timeframe === 'all' ? 'bg-cosmic-gradient text-white' : 'hover:bg-beige-200'}`}
                  onClick={() => setTimeframe('all')}
                >
                  All
                </button>
              </div>
            </div>
            
            <div className="h-64 flex items-center justify-center">
              <div className="text-center">
                <PieChart className="h-16 w-16 text-cosmic-purple mx-auto mb-4" />
                <p className="text-lg font-semibold">Performance Chart ({getTimeframeLabel()})</p>
                <p className="text-sm text-gray-600">Chart placeholder - in production this would show a detailed performance graph</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold mb-4">Portfolio Breakdown</h2>
            <div className="space-y-4">
              <div className="bg-beige-100 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Individual Businesses</h3>
                  <span className="bg-cosmic-gradient text-white text-xs px-2 py-1 rounded-full">
                    {Math.round((mockPortfolio.investments.filter(i => i.business).length / mockPortfolio.investments.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-beige-300 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-cosmic-gradient h-full rounded-full"
                    style={{ width: `${(mockPortfolio.investments.filter(i => i.business).length / mockPortfolio.investments.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="bg-beige-100 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Index Funds</h3>
                  <span className="bg-cosmic-gradient text-white text-xs px-2 py-1 rounded-full">
                    {Math.round((mockPortfolio.investments.filter(i => i.index).length / mockPortfolio.investments.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-beige-300 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-cosmic-gradient h-full rounded-full"
                    style={{ width: `${(mockPortfolio.investments.filter(i => i.index).length / mockPortfolio.investments.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="font-semibold mb-3">Risk Exposure</h3>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-success-50 p-2 rounded-lg">
                  <p className="text-success-700 font-semibold">Low</p>
                  <p className="text-sm">40%</p>
                </div>
                <div className="bg-warning-50 p-2 rounded-lg">
                  <p className="text-warning-700 font-semibold">Medium</p>
                  <p className="text-sm">35%</p>
                </div>
                <div className="bg-error-50 p-2 rounded-lg">
                  <p className="text-error-700 font-semibold">High</p>
                  <p className="text-sm">25%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Your Investments */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Your Investments</h2>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Investment
            </Button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-beige-300">
                  <th className="text-left py-3 px-4">Investment</th>
                  <th className="text-left py-3 px-4">Type</th>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Amount</th>
                  <th className="text-left py-3 px-4">Current Value</th>
                  <th className="text-left py-3 px-4">ROI</th>
                  <th className="text-left py-3 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {mockPortfolio.investments.map((investment, index) => (
                  <tr key={index} className="border-b border-beige-200 hover:bg-beige-50">
                    <td className="py-4 px-4 font-semibold">
                      {investment.business 
                        ? investment.business.name 
                        : investment.index?.name}
                    </td>
                    <td className="py-4 px-4">
                      {investment.business ? 'Business' : 'Index Fund'}
                    </td>
                    <td className="py-4 px-4">
                      {new Date(investment.date).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-4">
                      €{investment.amount.toLocaleString()}
                    </td>
                    <td className="py-4 px-4">
                      €{investment.currentValue.toLocaleString()}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        {investment.roi > 0 
                          ? <ArrowUpRight className="h-4 w-4 text-success-500 mr-1" />
                          : <ArrowDownRight className="h-4 w-4 text-error-500 mr-1" />
                        }
                        <span className={investment.roi > 0 ? 'text-success-500' : 'text-error-500'}>
                          {investment.roi > 0 ? '+' : ''}{investment.roi}%
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <a 
                        href={investment.business 
                          ? `/businesses/${investment.business.id}` 
                          : `/index`
                        } 
                        className="text-cosmic-purple hover:underline inline-flex items-center"
                      >
                        Details
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-10">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          
          <div className="space-y-4">
            <div className="flex items-start border-b border-beige-200 pb-4">
              <div className="bg-cosmic-gradient rounded-full p-2 mr-4">
                <Wallet className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold">Investment made in German SMB Growth Index</p>
                <p className="text-sm text-gray-600">€30,000 - December 5, 2023</p>
              </div>
            </div>
            
            <div className="flex items-start border-b border-beige-200 pb-4">
              <div className="bg-cosmic-gradient rounded-full p-2 mr-4">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold">Quarterly dividend payment received</p>
                <p className="text-sm text-gray-600">€1,250 from Müller Manufacturing GmbH - November 30, 2023</p>
              </div>
            </div>
            
            <div className="flex items-start border-b border-beige-200 pb-4">
              <div className="bg-cosmic-gradient rounded-full p-2 mr-4">
                <Wallet className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold">Investment made in TechSolutions AG</p>
                <p className="text-sm text-gray-600">€30,000 - September 22, 2023</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-cosmic-gradient rounded-full p-2 mr-4">
                <Wallet className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold">Investment made in Müller Manufacturing GmbH</p>
                <p className="text-sm text-gray-600">€25,000 - November 15, 2023</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-cosmic-gradient text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Expand Your Portfolio?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Discover new investment opportunities in thoroughly vetted German SMBs.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Button variant="secondary" size="lg">
              Browse Businesses
            </Button>
            <Button variant="outline" size="lg">
              Explore Index Funds
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;