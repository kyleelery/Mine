import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  text: string;
  author: string;
  role: string;
  company: string;
  stars: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      text: "We implemented CartGuardian and saw a 32% reduction in cart abandonment in the first month. The personalized offers feature has been absolutely game-changing for our conversion rates.",
      author: "Sarah Johnson",
      role: "E-commerce Director",
      company: "Fashion Forward",
      stars: 5
    },
    {
      text: "The AI detection is incredibly accurate. It seems to know exactly when our customers are about to leave and delivers just the right incentive to keep them engaged. Well worth the investment.",
      author: "Michael Chen",
      role: "Marketing Manager",
      company: "TechGadgets",
      stars: 5
    },
    {
      text: "As a small business, I was skeptical about the ROI, but CartGuardian paid for itself within the first week. The analytics dashboard is also extremely helpful for understanding customer behavior.",
      author: "Emily Rodriguez",
      role: "Owner",
      company: "Handcrafted Home",
      stars: 4
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-slate-600">
            See how businesses are reducing cart abandonment and increasing revenue with CartGuardian AI.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  className={`h-5 w-5 ${
                    i < testimonials[currentIndex].stars 
                      ? 'text-yellow-400 fill-yellow-400' 
                      : 'text-slate-300'
                  }`}
                />
              ))}
            </div>
            
            <p className="text-xl italic mb-8 text-slate-700 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </p>
            
            <div className="border-t border-slate-100 pt-6">
              <p className="font-bold text-slate-900 text-lg">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-slate-600">
                {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
              </p>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            <button 
              onClick={goToPrevious}
              className="p-2 rounded-full bg-white shadow-sm border border-slate-200 mr-2 hover:bg-slate-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-slate-600" />
            </button>
            
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full mx-1 ${
                  currentIndex === index ? 'bg-indigo-600' : 'bg-slate-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            
            <button 
              onClick={goToNext}
              className="p-2 rounded-full bg-white shadow-sm border border-slate-200 ml-2 hover:bg-slate-50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-slate-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;