import React, { useEffect, useState } from "react";
import { dummyCreationData } from "../assets/assets";
import CreationItem from "../components/CreationItem";
import { Sparkles, Gem, TrendingUp, Clock, ChevronRight } from "lucide-react";
import { Protect } from "@clerk/clerk-react";

const Dashboard = () => {
  const [creations, setCreations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getDashboardData = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setCreations(dummyCreationData);
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  // Calculate stats
  const thisWeekCreations = Math.floor(creations.length * 0.6);
  const growthRate = "+12%";

  return (
    <div className="h-full overflow-y-auto bg-gradient-to-br from-slate-50 via-white to-slate-50 custom-scrollbar">
      <div className="p-6 md:p-8 max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Welcome back! 👋
          </h1>
          <p className="text-slate-600">
            Here's what's happening with your AI creations today.
          </p>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* TOTAL CREATIONS */}
          <div className="group relative overflow-hidden bg-white rounded-2xl border border-slate-200 hover:border-blue-300 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex justify-center items-center shadow-lg shadow-blue-500/25">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
                  {growthRate}
                </span>
              </div>
              
              <p className="text-sm text-slate-600 mb-1">Total Creations</p>
              <h2 className="text-3xl font-bold text-slate-900">
                {isLoading ? (
                  <div className="w-16 h-8 bg-slate-200 rounded animate-pulse"></div>
                ) : (
                  creations.length
                )}
              </h2>
            </div>
          </div>

          {/* THIS WEEK */}
          <div className="group relative overflow-hidden bg-white rounded-2xl border border-slate-200 hover:border-purple-300 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-100 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white flex justify-center items-center shadow-lg shadow-purple-500/25">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>
              
              <p className="text-sm text-slate-600 mb-1">This Week</p>
              <h2 className="text-3xl font-bold text-slate-900">
                {isLoading ? (
                  <div className="w-16 h-8 bg-slate-200 rounded animate-pulse"></div>
                ) : (
                  thisWeekCreations
                )}
              </h2>
            </div>
          </div>

          {/* ACTIVE PLAN */}
          <div className="group relative overflow-hidden bg-white rounded-2xl border border-slate-200 hover:border-orange-300 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-orange-100 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white flex justify-center items-center shadow-lg shadow-orange-500/25">
                  <Gem className="w-6 h-6" />
                </div>
              </div>
              
              <p className="text-sm text-slate-600 mb-1">Active Plan</p>
              <h2 className="text-2xl font-bold text-slate-900">
                <Protect plan="premium" fallback="Free">
                  Premium
                </Protect>
              </h2>
            </div>
          </div>

          {/* QUICK ACTION */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/25 hover:-translate-y-1 cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm text-white flex justify-center items-center">
                  <Clock className="w-6 h-6" />
                </div>
                <ChevronRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
              
              <p className="text-sm text-white/90 mb-2">Quick Action</p>
              <h3 className="text-lg font-bold text-white">
                Create New
              </h3>
            </div>
          </div>
        </div>

        {/* RECENT CREATIONS */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-1">
                Recent Creations
              </h2>
              <p className="text-sm text-slate-600">
                Your latest AI-generated content
              </p>
            </div>
            
            <button className="px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors duration-200 flex items-center gap-2 group">
              View All
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {isLoading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl animate-pulse">
                  <div className="w-12 h-12 bg-slate-200 rounded-lg"></div>
                  <div className="flex-1 space-y-2">
                    <div className="w-1/3 h-4 bg-slate-200 rounded"></div>
                    <div className="w-1/2 h-3 bg-slate-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : creations.length > 0 ? (
            <div className="space-y-3">
              {creations.map((item) => (
                <CreationItem key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                No creations yet
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Start creating amazing content with AI
              </p>
              <button className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/25">
                Create Your First
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;