import React from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/gradientBackground.png";
import { assets } from "../assets/assets";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="px-4 sm:px-10 lg:px-20 xl:px-32 relative flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat min-h-screen overflow-hidden"
    >
      {/* ANIMATED GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/30 pointer-events-none"></div>

      {/* FLOATING ELEMENTS */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* BADGE */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI-Powered Content Creation
            </span>
          </div>
        </div>

        {/* HEADING */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight animate-slide-up">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Create amazing content
            </span>
            <br />
            <span className="relative inline-block mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient">
                with AI tools
              </span>
              {/* UNDERLINE DECORATION */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C50 5 100 2 150 3C200 4 250 7 298 10"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="animate-draw"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#9333EA" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <p className="mt-8 text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-delay">
            Transform your content creation with our suite of premium AI tools.
            Write articles, generate images, and enhance your workflow with cutting-edge technology.
          </p>
        </div>

        {/* BUTTON SECTION */}
        <div className="flex flex-wrap justify-center gap-5 mt-10 animate-fade-in-delay-2">
          <button
            onClick={() => navigate("/ai")}
            className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-base font-semibold rounded-xl 
            shadow-lg shadow-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/60
            transform hover:scale-105 active:scale-95 transition-all duration-300
            overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start creating now
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            {/* SHINE EFFECT */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
          </button>

          <button className="group px-10 py-4 bg-white/90 backdrop-blur-sm text-gray-800 text-base font-semibold rounded-xl 
          border-2 border-gray-300 shadow-md hover:shadow-xl hover:border-gray-400
          transform hover:scale-105 active:scale-95 transition-all duration-300
          flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch demo
          </button>
        </div>

        {/* TRUSTED USERS SECTION */}
        <div className="flex items-center justify-center gap-3 mt-12 animate-fade-in-delay-3">
          <div className="relative">
            <img
              src={assets.user_group}
              alt="Trusted users"
              className="h-10 drop-shadow-lg"
            />
            {/* GLOW EFFECT */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl opacity-30"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-800">10,000+ Happy Users</span>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <span className="flex text-yellow-400">★★★★★</span>
              <span>4.9/5 rating</span>
            </div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* CUSTOM ANIMATIONS */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-draw {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: draw 2s ease forwards;
          animation-delay: 0.5s;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease forwards;
        }
        .animate-fade-in-delay {
          opacity: 0;
          animation: fade-in 0.8s ease forwards;
          animation-delay: 0.2s;
        }
        .animate-fade-in-delay-2 {
          opacity: 0;
          animation: fade-in 0.8s ease forwards;
          animation-delay: 0.4s;
        }
        .animate-fade-in-delay-3 {
          opacity: 0;
          animation: fade-in 0.8s ease forwards;
          animation-delay: 0.6s;
        }
        .animate-slide-up {
          animation: slide-up 1s ease forwards;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </div>
  );
};

export default Hero;