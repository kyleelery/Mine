import React from 'react';
import { Eye, MessageSquare, Target, LineChart } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => {
  return (
    <div className="flex items-start">
      <div className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold mr-4">
        {number}
      </div>
      <div>
        <div className="flex items-center mb-2">
          <div className="text-indigo-600 mr-2">
            {icon}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-slate-600">
            CartGuardian uses advanced AI to monitor, predict, and prevent cart abandonment in real-time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-10">
            <Step 
              number={1}
              title="Monitor Behavior"
              description="Our AI tracks user interactions like cursor movements, scroll patterns, and form interactions to detect signs of abandonment."
              icon={<Eye size={22} />}
            />
            
            <Step 
              number={2}
              title="Predict Abandonment"
              description="Using machine learning models, we calculate an abandonment risk score based on real-time behavioral patterns."
              icon={<Target size={22} />}
            />
            
            <Step 
              number={3}
              title="Intervene Immediately"
              description="When abandonment risk is high, the system automatically triggers personalized interventions like special offers or simplified checkout."
              icon={<MessageSquare size={22} />}
            />
            
            <Step 
              number={4}
              title="Analyze & Optimize"
              description="Review conversion data and A/B test results to continuously improve abandonment prevention strategies."
              icon={<LineChart size={22} />}
            />
          </div>
          
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      <span className="text-sm font-medium">High Risk Customer</span>
                    </div>
                    <span className="text-sm text-slate-500">Now</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-start">
                      <img 
                        src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="User avatar" 
                        className="w-10 h-10 rounded-full mr-3 object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium">Behavior: Extended inactivity on shipping form</p>
                        <p className="text-xs text-slate-500 mt-1">Abandonment Risk: 87%</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                      <span className="text-sm font-medium">AI Response</span>
                    </div>
                    <span className="text-sm text-slate-500">Now</span>
                  </div>
                  <div className="p-3 bg-emerald-50 rounded-lg">
                    <p className="text-sm font-medium">Intervention: Free shipping offer displayed</p>
                    <div className="flex items-center mt-2">
                      <div className="w-full bg-slate-200 rounded-full h-1.5">
                        <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <span className="text-xs text-slate-600 ml-2">65% effective</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                      <span className="text-sm font-medium">Backup Strategy</span>
                    </div>
                  </div>
                  <div className="p-3 bg-indigo-50 rounded-lg">
                    <p className="text-sm font-medium">If no response in 15s:</p>
                    <p className="text-xs text-slate-600 mt-1">Trigger simplified one-step checkout (89% effective)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;