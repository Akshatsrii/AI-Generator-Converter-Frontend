import React from "react";
import { PricingTable, useUser, useClerk } from "@clerk/clerk-react";
import { Lock, Crown, Check, Zap, Shield, ArrowRight } from "lucide-react";

const Plan = () => {
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();

  if (!isSignedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          {/* LOCK ICON */}
          <div className="inline-flex mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-3xl shadow-lg">
              <Lock className="w-16 h-16 text-white" strokeWidth={2} />
            </div>
          </div>

          {/* HEADING */}
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Unlock Premium Features
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Sign in to explore our pricing plans and start creating amazing content.
          </p>

          {/* SIGN IN BUTTON */}
          <button
            onClick={openSignIn}
            className="group inline-flex items-center gap-3 px-8 py-4 
            bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-2xl
            shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Lock className="w-5 h-5" />
            Sign In to Continue
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* FEATURES */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Crown, title: "Premium Features" },
              { icon: Zap, title: "Instant Results" },
              { icon: Shield, title: "Secure & Private" }
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-base font-semibold text-gray-900">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative">
        
        {/* TOP BADGE */}
        <div className="flex justify-center mb-8">
          <span className="inline-block text-sm font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-5 py-2 rounded-full">
            Pricing Plans
          </span>
        </div>

        {/* MAIN HEADING */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start for free and scale up as you grow. Find the perfect plan for your content creation needs.
          </p>
        </div>

        {/* FEATURES STRIP */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[
            { icon: Check, text: "No credit card required" },
            { icon: Zap, text: "Upgrade anytime" },
            { icon: Shield, text: "Cancel anytime" }
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-gray-200 shadow-sm"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <item.icon className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-sm font-semibold text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>

        {/* CLERK PRICING TABLE WITH CUSTOM STYLING */}
        <div className="max-w-6xl mx-auto mb-20">
          <style>{`
            /* Clean styling for Clerk Pricing Table */
            .cl-pricingTable {
              --cl-colorPrimary: rgb(59 130 246);
              --cl-colorBackground: white;
              --cl-borderRadius: 1.5rem;
            }
            
            .cl-pricingTable-card {
              border-radius: 1.5rem !important;
              border: 1px solid #e5e7eb !important;
              box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1) !important;
              transition: all 0.3s ease !important;
              background: white !important;
            }
            
            .cl-pricingTable-card:hover {
              box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1) !important;
              transform: translateY(-4px) !important;
            }
            
            .cl-pricingTable-popularBadge {
              background: linear-gradient(to right, rgb(59 130 246), rgb(147 51 234)) !important;
              border-radius: 9999px !important;
              padding: 0.5rem 1rem !important;
              font-weight: 600 !important;
            }
            
            .cl-pricingTable-button {
              border-radius: 1rem !important;
              padding: 0.75rem 2rem !important;
              font-weight: 600 !important;
              transition: all 0.3s ease !important;
            }
            
            .cl-pricingTable-button:hover {
              transform: scale(1.05) !important;
            }
            
            .cl-pricingTable-price {
              font-size: 3rem !important;
              font-weight: 700 !important;
              background: linear-gradient(to right, rgb(59 130 246), rgb(147 51 234)) !important;
              -webkit-background-clip: text !important;
              -webkit-text-fill-color: transparent !important;
              background-clip: text !important;
            }
            
            .cl-pricingTable-featureList {
              gap: 0.75rem !important;
            }
            
            .cl-pricingTable-feature {
              display: flex !important;
              align-items: center !important;
              gap: 0.5rem !important;
              padding: 0.5rem 0 !important;
            }
          `}</style>
          <PricingTable />
        </div>

        {/* TRUST BADGES */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          {[
            { icon: Check, text: "Secure Payments" },
            { icon: Shield, text: "Money-back Guarantee" },
            { icon: Zap, text: "Instant Access" },
            { icon: Crown, text: "24/7 Support" }
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-sm font-semibold text-gray-900 text-center">{item.text}</span>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default Plan;