import React, { useState } from "react";
import { Mail, Send, Facebook, Twitter, Instagram, Linkedin, Github, MapPin, Phone, CheckCircle2, AlertCircle, Sparkles, ArrowRight } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setTimeout(() => setStatus(null), 3000);
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      setStatus('success');
      setEmail("");
      setIsSubmitting(false);
      setTimeout(() => setStatus(null), 3000);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubscribe();
    }
  };

  const companyLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "#privacy" }
  ];

  const resourceLinks = [
    { name: "Documentation", href: "#docs" },
    { name: "API Reference", href: "#api" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" },
    { icon: Github, href: "#", label: "Github", color: "hover:bg-gray-900" }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative px-6 md:px-16 lg:px-24 xl:px-32 pt-10 pb-6 w-full">
        
        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row justify-between w-full gap-8 border-b border-slate-200 pb-8">
          
          {/* LEFT - BRAND */}
          <div className="lg:max-w-md">
            <div className="flex items-center gap-3 mb-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Quick.AI
              </span>
            </div>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Experience the power of AI with QuickAI. Transform your content creation with our suite of premium AI tools.
            </p>

            {/* CONTACT INFO */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-all duration-300">
                  <MapPin className="w-4 h-4 text-indigo-600 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">
                    KOTA RAJASTHAN, 324010
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-all duration-300">
                  <Phone className="w-4 h-4 text-indigo-600 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Phone</p>
                  <p className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">
                    9461548562
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-all duration-300">
                  <Mail className="w-4 h-4 text-indigo-600 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">
                    akshatrai422@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - LINKS & NEWSLETTER */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* COMPANY LINKS */}
            <div>
              <h3 className="font-bold text-slate-900 mb-4 text-sm flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
                Company
              </h3>
              <ul className="space-y-2">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-600 hover:text-indigo-600 transition-all duration-200 text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-0 h-3 text-indigo-500 group-hover:w-3 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* RESOURCES */}
            <div>
              <h3 className="font-bold text-slate-900 mb-4 text-sm flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
                Resources
              </h3>
              <ul className="space-y-2">
                {resourceLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-600 hover:text-indigo-600 transition-all duration-200 text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-0 h-3 text-indigo-500 group-hover:w-3 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* NEWSLETTER */}
            <div>
              <h3 className="font-bold text-slate-900 mb-4 text-sm flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
                Newsletter
              </h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Subscribe for updates and exclusive content.
              </p>
              
              <div className="space-y-2">
                <div className="relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2.5 pr-10 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                    disabled={isSubmitting}
                  />
                  <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                </div>
                
                <button
                  onClick={handleSubscribe}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white py-2.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-md shadow-indigo-500/20"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="mt-3 p-2.5 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-sm text-green-700 animate-in fade-in slide-in-from-top-2 duration-300">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Successfully subscribed!</span>
                </div>
              )}
              
              {status === 'error' && (
                <div className="mt-3 p-2.5 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-sm text-red-700 animate-in fade-in slide-in-from-top-2 duration-300">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Please enter a valid email</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} <span className="font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Quick.AI</span>. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className={`w-9 h-9 rounded-lg bg-slate-100 hover:bg-gradient-to-br hover:from-indigo-500 hover:to-purple-600 flex items-center justify-center text-slate-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5 shadow-sm hover:shadow-md`}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;