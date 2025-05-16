import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronRight, Check, TrendingUp, Shield, BarChart3, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { businesses } from '../data/mockData';
import BusinessCard from '../components/ui/BusinessCard';

const HomePage = () => {
  const navigate = useNavigate();
  const featuredBusinesses = businesses.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-24 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-montserrat font-extrabold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="gradient-text">BTF</span> <br />
              Business Token Fund
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-text mb-8 font-inconsolata"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Invest in thoroughly vetted German businesses with transparent due diligence and reliable credit assessments by bizzed.ai.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                onClick={() => navigate('/businesses')}
              >
                Explore Businesses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="secondary"
                size="lg"
                onClick={() => navigate('/index')}
              >
                View Index Fund
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Businesses */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Featured Opportunities</h2>
            <a 
              href="/businesses" 
              className="flex items-center text-cosmic-purple font-semibold hover:underline"
            >
              View All
              <ChevronRight className="h-5 w-5 ml-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBusinesses.map(business => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-text max-w-xl mx-auto">
              A simple process to diversify your crypto into thoroughly vetted German SMB acquisitions.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="bg-background p-8 rounded-xl shadow-sm" variants={itemVariants}>
              <div className="bg-cosmic-gradient rounded-full h-12 w-12 flex items-center justify-center mb-4">
                <RefreshCw className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Connect Your Wallet</h3>
              <p className="text-text">
                Link your crypto wallet to access our platform and view investment opportunities.
              </p>
            </motion.div>

            <motion.div className="bg-background p-8 rounded-xl shadow-sm" variants={itemVariants}>
              <div className="bg-cosmic-gradient rounded-full h-12 w-12 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Choose Your Investment</h3>
              <p className="text-text">
                Browse individual businesses with detailed credit reports or select our curated index funds.
              </p>
            </motion.div>

            <motion.div className="bg-background p-8 rounded-xl shadow-sm" variants={itemVariants}>
              <div className="bg-cosmic-gradient rounded-full h-12 w-12 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Earn Returns</h3>
              <p className="text-text">
                Track your investments and receive regular returns as businesses generate profit.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Invest With Us</h2>
            <p className="text-lg text-text max-w-xl mx-auto">
              We combine the best of crypto with thoroughly vetted real-world business investments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-accent bg-opacity-10 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">For Crypto Investors</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-cosmic-purple mr-2 mt-1 flex-shrink-0" />
                  <span className="text-text">Access to real-world yield from established German businesses</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-cosmic-purple mr-2 mt-1 flex-shrink-0" />
                  <span className="text-text">Portfolio diversification beyond digital assets</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-cosmic-purple mr-2 mt-1 flex-shrink-0" />
                  <span className="text-text">Transparent due diligence reports and risk assessments</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-cosmic-purple mr-2 mt-1 flex-shrink-0" />
                  <span className="text-text">Liquidity options not available in traditional private equity</span>
                </li>
              </ul>
            </div>

            <div className="bg-accent bg-opacity-10 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Our Advantages</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-cosmic-purple mr-2 mt-1 flex-shrink-0" />
                  <span className="text-text">Rigorous credit assessment and due diligence by bizzed.ai</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-cosmic-purple mr-2 mt-1 flex-shrink-0" />
                  <span className="text-text">Focus on stable, cash-flowing German SMBs</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-cosmic-purple mr-2 mt-1 flex-shrink-0" />
                  <span className="text-text">Lower minimum investment thresholds than traditional PE</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-cosmic-purple mr-2 mt-1 flex-shrink-0" />
                  <span className="text-text">Smart contract automation for efficient distribution of returns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cosmic-gradient text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Investing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join other crypto investors who are diversifying into thoroughly vetted German SMB acquisitions.
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => navigate('/businesses')}
          >
            Explore Investment Opportunities
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;