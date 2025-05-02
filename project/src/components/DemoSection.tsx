import React, { useState, useEffect } from 'react';
import { CheckCircle2, X, AlertCircle, BadgePercent } from 'lucide-react';
import Button from './common/Button';

const DemoSection: React.FC = () => {
  const [stage, setStage] = useState(0);
  const [showIntervention, setShowIntervention] = useState(false);
  const [abandonmentRisk, setAbandonmentRisk] = useState(45);
  
  useEffect(() => {
    if (stage === 2) {
      const timer = setTimeout(() => {
        setAbandonmentRisk(78);
      }, 1500);
      
      const interventionTimer = setTimeout(() => {
        setShowIntervention(true);
      }, 3000);
      
      return () => {
        clearTimeout(timer);
        clearTimeout(interventionTimer);
      };
    } else {
      setShowIntervention(false);
      setAbandonmentRisk(45);
    }
  }, [stage]);
  
  const resetDemo = () => {
    setStage(0);
    setShowIntervention(false);
    setAbandonmentRisk(45);
  };
  
  return (
    <section id="demo" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See It In Action</h2>
          <p className="text-lg text-slate-600">
            Experience how our AI prevents cart abandonment in real-time with this interactive demo.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 bg-indigo-600 p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Demo Steps</h3>
              
              <div className="space-y-4">
                <div 
                  className={`flex items-start p-3 rounded-lg cursor-pointer ${
                    stage === 0 ? 'bg-indigo-500' : 'hover:bg-indigo-700/30'
                  }`}
                  onClick={() => setStage(0)}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                    stage >= 0 ? 'bg-white text-indigo-600' : 'bg-indigo-400 text-indigo-100'
                  }`}>
                    {stage > 0 ? <CheckCircle2 size={16} /> : '1'}
                  </div>
                  <div>
                    <p className="font-medium">Start checkout</p>
                    <p className="text-sm text-indigo-200 mt-1">Customer begins the checkout process</p>
                  </div>
                </div>
                
                <div 
                  className={`flex items-start p-3 rounded-lg cursor-pointer ${
                    stage === 1 ? 'bg-indigo-500' : stage > 1 ? 'hover:bg-indigo-700/30' : 'opacity-60'
                  }`}
                  onClick={() => stage >= 0 ? setStage(1) : null}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                    stage > 1 ? 'bg-white text-indigo-600' : 'bg-indigo-400 text-indigo-100'
                  }`}>
                    {stage > 1 ? <CheckCircle2 size={16} /> : '2'}
                  </div>
                  <div>
                    <p className="font-medium">Enter information</p>
                    <p className="text-sm text-indigo-200 mt-1">Customer fills out shipping details</p>
                  </div>
                </div>
                
                <div 
                  className={`flex items-start p-3 rounded-lg cursor-pointer ${
                    stage === 2 ? 'bg-indigo-500' : stage > 2 ? 'hover:bg-indigo-700/30' : 'opacity-60'
                  }`}
                  onClick={() => stage >= 1 ? setStage(2) : null}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                    stage > 2 ? 'bg-white text-indigo-600' : 'bg-indigo-400 text-indigo-100'
                  }`}>
                    {stage > 2 ? <CheckCircle2 size={16} /> : '3'}
                  </div>
                  <div>
                    <p className="font-medium">Show hesitation</p>
                    <p className="text-sm text-indigo-200 mt-1">Customer hesitates at payment stage</p>
                  </div>
                </div>
                
                <div 
                  className={`flex items-start p-3 rounded-lg cursor-pointer ${
                    stage === 3 ? 'bg-indigo-500' : 'opacity-60'
                  }`}
                  onClick={() => stage >= 2 && showIntervention ? setStage(3) : null}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                    stage > 3 ? 'bg-white text-indigo-600' : 'bg-indigo-400 text-indigo-100'
                  }`}>
                    4
                  </div>
                  <div>
                    <p className="font-medium">Complete purchase</p>
                    <p className="text-sm text-indigo-200 mt-1">Customer completes the purchase</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  variant="outline" 
                  onClick={resetDemo}
                  className="bg-indigo-700 text-white border-indigo-400 hover:bg-indigo-800"
                >
                  Reset Demo
                </Button>
              </div>
            </div>
            
            <div className="md:col-span-3 p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Modern Fashion Store</h3>
                <div className="flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-2 ${
                    abandonmentRisk > 70 ? 'bg-red-500' : 'bg-emerald-500'
                  }`}></div>
                  <span className="text-sm font-medium">AI Active</span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm text-slate-600 mb-1">
                  <span>Abandonment Risk</span>
                  <span className={
                    abandonmentRisk > 70 ? 'text-red-600 font-medium' : 'text-slate-600'
                  }>
                    {abandonmentRisk}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-1000 ${
                      abandonmentRisk > 70 ? 'bg-red-500' : 'bg-emerald-500'
                    }`} 
                    style={{ width: `${abandonmentRisk}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="border border-slate-200 rounded-lg overflow-hidden mb-6">
                {stage === 0 && (
                  <div className="p-4">
                    <h4 className="font-medium mb-4">Your Cart (3 items)</h4>
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-slate-100 rounded"></div>
                          <span className="ml-3 text-sm">Premium T-Shirt</span>
                        </div>
                        <span className="text-sm">$29.99</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-slate-100 rounded"></div>
                          <span className="ml-3 text-sm">Slim Fit Jeans</span>
                        </div>
                        <span className="text-sm">$59.99</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-slate-100 rounded"></div>
                          <span className="ml-3 text-sm">Canvas Sneakers</span>
                        </div>
                        <span className="text-sm">$49.99</span>
                      </div>
                    </div>
                    
                    <div className="border-t border-slate-200 pt-3 mb-4">
                      <div className="flex justify-between items-center font-medium">
                        <span>Total</span>
                        <span>$139.97</span>
                      </div>
                    </div>
                    
                    <Button 
                      fullWidth 
                      onClick={() => setStage(1)}
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                )}
                
                {stage === 1 && (
                  <div className="p-4">
                    <h4 className="font-medium mb-4">Shipping Information</h4>
                    <div className="space-y-3 mb-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm text-slate-600 mb-1">First Name</label>
                          <input type="text" className="w-full p-2 border border-slate-300 rounded" defaultValue="John" />
                        </div>
                        <div>
                          <label className="block text-sm text-slate-600 mb-1">Last Name</label>
                          <input type="text" className="w-full p-2 border border-slate-300 rounded" defaultValue="Doe" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-slate-600 mb-1">Address</label>
                        <input type="text" className="w-full p-2 border border-slate-300 rounded" defaultValue="123 Main St" />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm text-slate-600 mb-1">City</label>
                          <input type="text" className="w-full p-2 border border-slate-300 rounded" defaultValue="New York" />
                        </div>
                        <div>
                          <label className="block text-sm text-slate-600 mb-1">ZIP Code</label>
                          <input type="text" className="w-full p-2 border border-slate-300 rounded" defaultValue="10001" />
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      fullWidth 
                      onClick={() => setStage(2)}
                    >
                      Continue to Payment
                    </Button>
                  </div>
                )}
                
                {stage === 2 && (
                  <div className="p-4 relative">
                    <h4 className="font-medium mb-4">Payment Information</h4>
                    <div className="space-y-3 mb-4">
                      <div>
                        <label className="block text-sm text-slate-600 mb-1">Card Number</label>
                        <input type="text" className="w-full p-2 border border-slate-300 rounded" placeholder="0000 0000 0000 0000" />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm text-slate-600 mb-1">Expiration Date</label>
                          <input type="text" className="w-full p-2 border border-slate-300 rounded" placeholder="MM/YY" />
                        </div>
                        <div>
                          <label className="block text-sm text-slate-600 mb-1">Security Code</label>
                          <input type="text" className="w-full p-2 border border-slate-300 rounded" placeholder="CVC" />
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      fullWidth 
                      onClick={() => showIntervention ? setStage(3) : null}
                      disabled={!showIntervention}
                    >
                      Complete Purchase
                    </Button>
                    
                    {/* AI Intervention */}
                    {showIntervention && (
                      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-slate-800/50 p-4">
                        <div className="bg-white p-5 rounded-lg shadow-lg max-w-md w-full relative">
                          <button 
                            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600"
                            onClick={() => setShowIntervention(false)}
                          >
                            <X size={20} />
                          </button>
                          
                          <div className="flex items-start mb-4">
                            <div className="bg-indigo-100 p-2 rounded-full mr-3">
                              <BadgePercent className="h-5 w-5 text-indigo-600" />
                            </div>
                            <div>
                              <h4 className="font-bold text-lg">Special Offer Just For You!</h4>
                              <p className="text-slate-600 text-sm">Complete your purchase now and get:</p>
                            </div>
                          </div>
                          
                          <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-3 mb-4">
                            <div className="flex items-center">
                              <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2" />
                              <p className="font-medium">15% OFF your entire order</p>
                            </div>
                            <div className="flex items-center mt-2">
                              <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2" />
                              <p className="font-medium">Free shipping on this order</p>
                            </div>
                          </div>
                          
                          <div className="text-sm text-slate-500 mb-4">
                            This offer expires in <span className="font-bold">10:00</span> minutes
                          </div>
                          
                          <Button 
                            fullWidth 
                            onClick={() => setStage(3)}
                          >
                            Apply Discount & Complete Order
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                {stage === 3 && (
                  <div className="p-4 text-center">
                    <div className="my-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                        <CheckCircle2 className="h-8 w-8 text-emerald-500" />
                      </div>
                      <h4 className="font-bold text-xl mb-2">Order Complete!</h4>
                      <p className="text-slate-600 mb-4">
                        Thank you for your purchase. Your order has been successfully processed.
                      </p>
                      <div className="bg-indigo-50 p-3 rounded-lg inline-block">
                        <div className="flex items-center">
                          <AlertCircle className="h-5 w-5 text-indigo-600 mr-2" />
                          <p className="text-sm font-medium text-indigo-700">
                            Cart abandonment prevented by AI intervention!
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      onClick={resetDemo}
                    >
                      Restart Demo
                    </Button>
                  </div>
                )}
              </div>
              
              {stage >= 1 && (
                <div className="bg-slate-50 p-3 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">AI Analysis:</h4>
                  <p className="text-sm text-slate-600">
                    {stage < 2 && "Monitoring user behavior. Normal checkout progress detected."}
                    {stage === 2 && !showIntervention && "Detecting signs of hesitation at payment step..."}
                    {stage === 2 && showIntervention && "High abandonment risk detected! Deploying personalized intervention."}
                    {stage === 3 && "Success! Intervention prevented abandonment and secured the sale."}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;