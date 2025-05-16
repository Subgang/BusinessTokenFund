import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer = () => {
  return (
    <footer className="bg-accent bg-opacity-20 mt-16">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3">
              <Logo className="h-10 w-auto" />
              <span className="text-xl font-montserrat font-extrabold">BTF</span>
            </Link>
            <p className="mt-4 text-text max-w-md font-inconsolata">
              Connecting crypto liquidity to real-world businesses. Invest in German SMB acquisitions with transparent DD and verifiable credit assessments by bizzed.ai.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-text hover:text-cosmic-purple transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-text hover:text-cosmic-purple transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-text hover:text-cosmic-purple transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-text hover:text-cosmic-purple transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-montserrat font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/businesses" className="text-text hover:text-cosmic-purple transition-colors">
                  Businesses
                </Link>
              </li>
              <li>
                <Link to="/index" className="text-text hover:text-cosmic-purple transition-colors">
                  Index Fund
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-text hover:text-cosmic-purple transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-montserrat font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-text hover:text-cosmic-purple transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-text hover:text-cosmic-purple transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-text hover:text-cosmic-purple transition-colors">
                  API
                </a>
              </li>
              <li>
                <a href="https://bizzed.ai" target="_blank" rel="noopener noreferrer" className="text-text hover:text-cosmic-purple transition-colors">
                  bizzed.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-text">
            &copy; {new Date().getFullYear()} BTF. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm text-text hover:text-cosmic-purple transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-text hover:text-cosmic-purple transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-text hover:text-cosmic-purple transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;