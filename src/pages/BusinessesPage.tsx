import { useState, useEffect } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import BusinessCard from '../components/ui/BusinessCard';
import { businesses } from '../data/mockData';

const BusinessesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [industryFilter, setIndustryFilter] = useState('All');
  const [filteredBusinesses, setFilteredBusinesses] = useState(businesses);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const industries = ['All', ...Array.from(new Set(businesses.map(b => b.industry)))];

  useEffect(() => {
    // Filter businesses based on search term and industry
    let filtered = businesses;
    
    if (searchTerm) {
      filtered = filtered.filter(b => 
        b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (industryFilter !== 'All') {
      filtered = filtered.filter(b => b.industry === industryFilter);
    }
    
    setFilteredBusinesses(filtered);
  }, [searchTerm, industryFilter]);

  return (
    <div className="py-12">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4">Investment Opportunities</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Browse our curated selection of thoroughly vetted German SMBs available for acquisition investment.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-auto flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search businesses..."
                className="pl-10 pr-4 py-3 w-full rounded-lg bg-white border border-beige-300 focus:outline-none focus:ring-2 focus:ring-cosmic-purple"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <button 
              className="flex items-center px-4 py-3 bg-white rounded-lg border border-beige-300 md:hidden w-full"
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            >
              <Filter className="h-5 w-5 mr-2 text-gray-700" />
              <span>Filters</span>
              <ChevronDown className={`h-5 w-5 ml-2 text-gray-700 transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`md:flex items-center space-x-4 ${isFiltersOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
              <div className="mt-4 md:mt-0">
                <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                <select
                  className="px-4 py-2 w-full md:w-auto rounded-lg bg-white border border-beige-300 focus:outline-none focus:ring-2 focus:ring-cosmic-purple"
                  value={industryFilter}
                  onChange={(e) => setIndustryFilter(e.target.value)}
                >
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredBusinesses.length} {filteredBusinesses.length === 1 ? 'business' : 'businesses'}
          </p>
        </div>

        {/* Businesses Grid */}
        {filteredBusinesses.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {filteredBusinesses.map(business => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl font-semibold text-gray-700">
              No businesses found matching your criteria.
            </p>
            <p className="text-gray-600 mt-2">
              Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessesPage;