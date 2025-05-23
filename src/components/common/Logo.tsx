import { Server, ShieldCheck } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative mr-2">
        <Server size={24} className="absolute -left-1" />
        <ShieldCheck size={24} className="absolute left-1" />
      </div>
      <span className="ml-6 text-xl font-bold tracking-tight">Pro<span className="text-secondary-500">IT</span></span>
    </div>
  );
};

export default Logo;