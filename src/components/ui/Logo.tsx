import { CreditCard, Landmark } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "h-8 w-8" }: LogoProps) => {
  return (
    <div className={`relative ${className}`}>
      <Landmark className="absolute text-cosmic-purple" />
      <CreditCard className="absolute text-cosmic-blue opacity-70 translate-x-1 translate-y-1" />
    </div>
  );
};

export default Logo;