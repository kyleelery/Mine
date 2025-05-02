import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqItems: FAQItem[] = [
    {
      question: "How does CartGuardian predict cart abandonment?",
      answer: "CartGuardian uses machine learning to analyze real-time user behavior like cursor movements, scrolling patterns, form field interactions, and time spent on checkout pages. Our AI models compare this behavior to patterns from millions of checkout sessions to calculate an abandonment risk score with up to 93% accuracy."
    },
    {
      question: "Will it work with my existing checkout system?",
      answer: "Yes! CartGuardian integrates seamlessly with all major e-commerce platforms and payment processors including Stripe, PayPal, Shopify, WooCommerce, and more. Installation typically takes less than 15 minutes with our one-click integration options and doesn't require any code changes to your existing checkout."
    },
    {
      question: "How much can I expect to reduce cart abandonment?",
      answer: "Our customers typically see a 15-30% reduction in cart abandonment within the first month. Results vary based on your industry, current abandonment rate, and the specific interventions you enable. Our analytics dashboard will show you exactly how much revenue CartGuardian is recovering for your business."
    },
    {
      question: "What types of interventions does CartGuardian offer?",
      answer: "CartGuardian offers several intervention types including personalized discount offers, shipping incentives, trust badges, simplified checkout options, urgency messages, and exit-intent popups. These are all fully customizable and can be A/B tested to determine which work best for your specific audience."
    },
    {
      question: "Is there a limit to how many checkout sessions I can monitor?",
      answer: "Each plan includes a specific number of monitored checkout sessions per month: 1,000 for Basic, 5,000 for Pro, and unlimited for Enterprise. A 'session' counts as a single customer going through your checkout process. If you exceed your limit, you'll be notified and have the option to upgrade."
    },
    {
      question: "Does CartGuardian comply with privacy regulations?",
      answer: "Absolutely. CartGuardian is fully compliant with GDPR, CCPA, and other privacy regulations. We don't collect personally identifiable information unless explicitly permitted, and all data is encrypted and stored securely. You can customize exactly what data is collected to meet your specific compliance needs."
    }
  ];
  
  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600">
            Have questions about CartGuardian? Find answers to the most common questions below.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="border border-slate-200 rounded-lg overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-slate-50 transition-colors"
                  onClick={() => toggleOpen(index)}
                >
                  <span className="font-medium text-slate-900">{item.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-slate-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-500" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="p-5 bg-slate-50 border-t border-slate-200">
                    <p className="text-slate-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Still have questions?</p>
            <a 
              href="#contact" 
              className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
            >
              Contact our support team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;