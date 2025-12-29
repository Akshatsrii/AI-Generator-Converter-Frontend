import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useUser, SignIn } from "@clerk/clerk-react";

import { assets } from "../assets/assets";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user } = useUser();

  // Scroll detection for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // If user is NOT logged in → show enhanced Clerk SignIn
  if (!user) {
    return (
      <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
        </div>

        {/* Sign in container */}
        <div className="relative z-10">
          <SignIn />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/20">
      {/* ENHANCED NAVBAR */}
      <nav
        className={`
        w-full px-8 h-20 flex items-center justify-between 
        border-b bg-white/80 backdrop-blur-xl
        flex-shrink-0 relative z-30
        transition-all duration-500
        ${
          scrolled
            ? "border-purple-200/50 shadow-xl shadow-purple-500/10"
            : "border-gray-200/50 shadow-sm"
        }
      `}
      >
        {/* Gradient line at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-60">
          <div className="h-full w-1/3 bg-white animate-shimmer" />
        </div>

        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="relative group cursor-pointer"
        >
          {/* Glow effect on hover */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition duration-500" />

          <img
            src={assets.logo}
            alt="logo"
            className="relative h-14 transition-all duration-500 group-hover:scale-110 drop-shadow-lg"
          />
        </div>

        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setSidebar(!sidebar)}
          className="sm:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-purple-50 hover:to-pink-50 border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
        >
          {sidebar ? (
            <X className="w-6 h-6 text-gray-700 group-hover:text-purple-600 transition-colors duration-300 group-hover:rotate-90" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700 group-hover:text-purple-600 transition-colors duration-300" />
          )}
        </button>
      </nav>

      {/* BODY */}
      <div className="flex-1 w-full flex overflow-hidden relative">
        {/* SIDEBAR */}
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />

        {/* PAGE CONTENT - Hidden scrollbar but scrollable */}
        <div className="flex-1 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50/10 relative">
          <div className="h-full overflow-y-scroll hide-scrollbar">
            {/* Subtle animated background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
              <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <Outlet />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        /* Hide scrollbar but keep functionality */
        .hide-scrollbar::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
        .hide-scrollbar::-webkit-scrollbar-thumb {
          background: transparent;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Layout;