import React, { useEffect, useState } from 'react';
import { ArrowRight, ShoppingBag, BadgePercent, UserCheck } from 'lucide-react';
import Button from './common/Button';

const Hero: React.FC = () => {
  const [animationClass, setAnimationClass] = useState('opacity-0 translate-y-8');

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationClass('opacity-100 translate-y-0');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-[80vh] flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ease-out ${animationClass}`}>
          <div className="inline-block px-3 py-1 mb-4 bg-indigo-100 text-indigo-800 rounded-full font-medium text-sm">
            AI-Powered Checkout Optimization
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Stop Cart Abandonment Before It Happens
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Our AI predicts and prevents cart abandonment in real-time by analyzing customer behavior and delivering personalized interventions at the moment they matter most.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center">
            <Button size="lg">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="flex items-center justify-center">
              <div className="bg-indigo-100 p-2 rounded-full mr-3">
                <ShoppingBag className="h-5 w-5 text-indigo-600" />
              </div>
              <p className="text-slate-700 font-medium">
                Reduce abandonment by 25%
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-indigo-100 p-2 rounded-full mr-3">
                <BadgePercent className="h-5 w-5 text-indigo-600" />
              </div>
              <p className="text-slate-700 font-medium">
                Boost conversions by 15%
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-indigo-100 p-2 rounded-full mr-3">
                <UserCheck className="h-5 w-5 text-indigo-600" />
              </div>
              <p className="text-slate-700 font-medium">
                90-day money back
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;