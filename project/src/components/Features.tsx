import React from 'react';
import { Brain, TrendingUp, Zap, Lock, BarChart4, TestTube, Shuffle, Tablet as DeviceTablet } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
      <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Brain size={24} />,
      title: "AI Behavior Analysis",
      description: "Analyzes cursor movements, time spent, and form interactions to predict abandonment before it happens."
    },
    {
      icon: <Zap size={24} />,
      title: "Real-Time Interventions",
      description: "Delivers personalized messages, offers, and UI adjustments the moment they're needed most."
    },
    {
      icon: <Shuffle size={24} />,
      title: "Seamless Integration",
      description: "Connects to Stripe and other payment processors with just a few clicks. No coding required."
    },
    {
      icon: <BarChart4 size={24} />,
      title: "Conversion Analytics",
      description: "Tracks abandoned carts, successful interventions, and ROI in a comprehensive dashboard."
    },
    {
      icon: <TestTube size={24} />,
      title: "A/B Testing",
      description: "Tests different intervention strategies to optimize for maximum conversion rates."
    },
    {
      icon: <Lock size={24} />,
      title: "Privacy-Focused",
      description: "Processes all data securely and in compliance with GDPR, CCPA, and other privacy regulations."
    },
    {
      icon: <DeviceTablet size={24} />,
      title: "Multi-Device Support",
      description: "Works seamlessly across desktop, tablet, and mobile checkout experiences."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Continuous Learning",
      description: "Improves over time as the AI learns from successful and unsuccessful interventions."
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Intelligent Features to Boost Conversions</h2>
          <p className="text-lg text-slate-600">
            Our AI-powered platform offers everything you need to predict, prevent, and analyze cart abandonment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;