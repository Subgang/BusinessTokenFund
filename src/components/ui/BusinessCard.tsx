import { ChevronRight, Star, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Business } from '../../types';

interface BusinessCardProps {
  business: Business;
}

const BusinessCard = ({ business }: BusinessCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="card-neumorphic overflow-hidden h-full"
    >
      <div className="h-40 bg-cosmic-gradient-soft relative">
        <div className="absolute bottom-0 left-0 bg-white py-1 px-3 rounded-tr-lg">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 mr-1" />
            <span className="font-bold">{business.rating.toFixed(1)}</span>
          </div>
        </div>
        <Briefcase className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16 text-white opacity-20" />
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold">{business.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{business.industry} · {business.location}</p>
          </div>
          <div className="bg-cosmic-gradient text-white rounded-full p-1 flex-shrink-0">
            <ChevronRight className="h-5 w-5" />
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-gray-700 line-clamp-3">{business.description}</p>
        </div>
        
        <div className="mt-6 border-t border-beige-300 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600 text-sm">Asking Price</p>
              <p className="font-bold text-lg">€{business.askingPrice.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Annual Revenue</p>
              <p className="font-bold text-lg">€{business.annualRevenue.toLocaleString()}</p>
            </div>
          </div>
        </div>
        
        {business.externalUrl ? (
          <a 
            href={business.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block text-cosmic-purple font-semibold hover:underline"
          >
            View Investment Opportunity
          </a>
        ) : (
          <Link 
            to={`/businesses/${business.id}`}
            className="mt-6 block text-cosmic-purple font-semibold hover:underline"
          >
            View Investment Opportunity
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default BusinessCard;