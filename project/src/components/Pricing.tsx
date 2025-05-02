import React, { useState } from 'react';
import { Check, X, InfoIcon } from 'lucide-react';
import Button from './common/Button';

interface PlanFeature {
  name: string;
  includedIn: ('basic' | 'pro' | 'enterprise')[];
  tooltip?: string;
}

interface PricingPlan {
  name: string;
  id: 'basic' | 'pro' | 'enterprise';
  price: string;
  description: string;
  cta: string;
  popular?: boolean;
}

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  
  const plans: PricingPlan[] = [
    {
      name: 'Basic',
      id: 'basic',
      price: billingCycle === 'monthly' ? '$14.99' : '$149.90',
      description: 'Essential features for small stores starting out with abandonment prevention.',
      cta: 'Start Basic Plan'
    },
    {
      name: 'Pro',
      id: 'pro',
      price: billingCycle === 'monthly' ? '$24.99' : '$249.90',
      description: 'Advanced features for growing businesses serious about conversions.',
      cta: 'Start Pro Plan',
      popular: true
    },
    {
      name: 'Enterprise',
      id: 'enterprise',
      price: billingCycle === 'monthly' ? '$59.99' : '$599.90',
      description: 'Comprehensive solution for large stores with complex needs.',
      cta: 'Contact Sales'
    }
  ];
  
  const features: PlanFeature[] = [
    { name: 'Abandonment risk prediction', includedIn: ['basic', 'pro', 'enterprise'] },
    { name: 'Real-time behavior analysis', includedIn: ['basic', 'pro', 'enterprise'] },
    { name: 'Basic intervention templates', includedIn: ['basic', 'pro', 'enterprise'] },
    { name: 'Stripe integration', includedIn: ['basic', 'pro', 'enterprise'] },
    { name: '1,000 checkout sessions/month', includedIn: ['basic'] },
    { name: 'Unlimited checkout sessions', includedIn: ['enterprise'] },
    { name: 'Personalized discount offers', includedIn: ['pro', 'enterprise'] },
    { name: 'Simplified form suggestions', includedIn: ['pro', 'enterprise'] },
    { name: 'A/B testing for interventions', includedIn: ['pro', 'enterprise'] },
    { name: 'Advanced analytics dashboard', includedIn: ['enterprise'], tooltip: 'Includes conversion funnels, revenue impact, and intervention effectiveness metrics' },
    { name: 'Multi-store support', includedIn: ['enterprise'] },
    { name: 'Custom intervention designs', includedIn: ['enterprise'] },
    { name: 'API access for custom integrations', includedIn: ['enterprise'] },
    { name: 'Dedicated account manager', includedIn: ['enterprise'] },
  ];
  
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-slate-600 mb-8">
            Choose the plan that fits your business needs, with no hidden fees or long-term contracts.
          </p>
          
          <div className="bg-slate-100 p-1 rounded-lg inline-flex mb-8">
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                billingCycle === 'monthly' 
                  ? 'bg-white shadow-sm' 
                  : 'text-slate-600 hover:bg-white/50'
              }`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly Billing
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                billingCycle === 'annual' 
                  ? 'bg-white shadow-sm' 
                  : 'text-slate-600 hover:bg-white/50'
              }`}
              onClick={() => setBillingCycle('annual')}
            >
              Annual Billing
              <span className="ml-1 bg-emerald-100 text-emerald-700 text-xs px-1.5 py-0.5 rounded">
                Save 20%
              </span>
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`bg-white rounded-xl shadow-sm border ${
                plan.popular 
                  ? 'border-indigo-200 shadow-indigo-100/50 relative' 
                  : 'border-slate-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-slate-600 text-sm mb-4">{plan.description}</p>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-slate-600">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                </div>
                
                <Button 
                  fullWidth 
                  variant={plan.popular ? 'primary' : 'outline'}
                  className={plan.id === 'enterprise' ? 'border-indigo-300 text-indigo-700 hover:bg-indigo-50' : ''}
                >
                  {plan.cta}
                </Button>
              </div>
              
              <div className="border-t border-slate-200 p-6">
                <ul className="space-y-3">
                  {features.map((feature, index) => {
                    const included = feature.includedIn.includes(plan.id);
                    
                    return (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          {included ? (
                            <Check className="h-5 w-5 text-emerald-500" />
                          ) : (
                            <X className="h-5 w-5 text-slate-300" />
                          )}
                        </div>
                        <div className="ml-3 flex items-center">
                          <span className={included ? 'text-slate-700' : 'text-slate-400'}>
                            {feature.name}
                          </span>
                          {feature.tooltip && included && (
                            <div className="group relative">
                              <InfoIcon className="h-4 w-4 ml-1 text-slate-400 cursor-help" />
                              <div className="hidden group-hover:block absolute left-0 bottom-full mb-2 w-60 bg-slate-800 text-white text-xs rounded p-2 shadow-lg z-10">
                                {feature.tooltip}
                                <div className="absolute top-full left-3 transform -translate-x-1/2 -translate-y-1/2 border-4 border-transparent border-t-slate-800"></div>
                              </div>
                            </div>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-indigo-50 border border-indigo-100 rounded-lg p-6 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Start with our Free Tier</h3>
              <p className="text-slate-600">
                Try CartGuardian with up to 200 checkout sessions/month, absolutely free.
              </p>
            </div>
            <Button className="mt-4 md:mt-0">
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;