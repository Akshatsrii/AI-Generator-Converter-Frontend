import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useClerk, useUser } from "@clerk/clerk-react";
import {
  LayoutDashboard,
  PenLine,
  Hash,
  Image,
  Eraser,
  Scissors,
  FileText,
  LogOut,
  Sparkles,
  Crown,
  ChevronRight,
  Settings,
  Home,
} from "lucide-react";

const Sidebar = ({ sidebar, setSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();
  const [hoveredItem, setHoveredItem] = useState(null);

  // Plan logic
  const plan = user?.publicMetadata?.plan === "premium" ? "Premium" : "Free";
  const isPremium = plan === "Premium";

  const menuItems = [
    { name: "Dashboard", path: "/ai", icon: LayoutDashboard, color: "from-blue-500 to-cyan-500" },
    { name: "Write Article", path: "/ai/write-article", icon: PenLine, color: "from-purple-500 to-pink-500" },
    { name: "Blog Titles", path: "/ai/blog-titles", icon: Hash, color: "from-orange-500 to-red-500" },
    { name: "Generate Images", path: "/ai/generate-images", icon: Image, color: "from-green-500 to-emerald-500" },
    { name: "Remove Background", path: "/ai/remove-background", icon: Eraser, color: "from-indigo-500 to-purple-500" },
    { name: "Remove Object", path: "/ai/remove-object", icon: Scissors, color: "from-pink-500 to-rose-500" },
    { name: "Review Resume", path: "/ai/review-resume", icon: FileText, color: "from-yellow-500 to-orange-500" },
    { name: "Community", path: "/ai/community", icon: Hash, color: "from-teal-500 to-cyan-500" },
  ];

  return (
    <aside
      className={`
        fixed sm:static top-0 left-0 w-72 h-screen
        ${sidebar ? "translate-x-0" : "-translate-x-full"}
        sm:translate-x-0 transition-all duration-500 ease-out
        flex flex-col
        bg-white dark:bg-slate-950
        border-r border-slate-200 dark:border-slate-800
        shadow-2xl sm:shadow-none
        z-50
      `}
    >
      {/* HOME ARROW & USER PROFILE */}
      <div className="relative border-b border-slate-200 dark:border-slate-800">
        {/* Home Button - Absolute positioned */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-lg
                     bg-gradient-to-br from-slate-100 to-slate-200
                     dark:from-slate-800 dark:to-slate-900
                     hover:from-blue-500 hover:to-purple-600
                     flex items-center justify-center
                     hover:shadow-lg
                     transform hover:scale-110 active:scale-95
                     transition-all duration-300 ease-out
                     group"
          title="Go to Home"
        >
          <Home className="w-4 h-4 text-slate-600 dark:text-slate-400 
                          group-hover:text-white
                          transition-colors duration-300" />
        </button>

        {/* User Profile */}
        <div
          onClick={openUserProfile}
          className="px-5 py-4 pr-14 flex items-center gap-3 cursor-pointer
                     hover:bg-slate-50 dark:hover:bg-slate-900/50
                     transition-all duration-300 ease-out
                     group"
        >
          <div className="relative">
            <img
              src={user?.imageUrl}
              alt="user"
              className="w-11 h-11 rounded-full ring-2 ring-slate-200 dark:ring-slate-700 
                         group-hover:ring-blue-400 
                         transition-all duration-300"
            />
            {isPremium && (
              <div className="absolute -top-1 -right-1 w-5 h-5 
                             bg-gradient-to-br from-yellow-400 to-orange-500 
                             rounded-full flex items-center justify-center
                             ring-2 ring-white dark:ring-slate-950
                             shadow-lg">
                <Crown className="w-3 h-3 text-white" />
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h1 className="text-sm font-bold truncate text-slate-900 dark:text-white">
              {user?.fullName}
            </h1>
            <span className={`text-xs font-medium ${
              isPremium 
                ? "text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500" 
                : "text-slate-500 dark:text-slate-400"
            }`}>
              {isPremium ? "Premium" : "Free Plan"}
            </span>
          </div>

          <ChevronRight className="w-4 h-4 text-slate-400 
                                   group-hover:text-slate-600 dark:group-hover:text-slate-300
                                   group-hover:translate-x-1 
                                   transition-all duration-300" />
        </div>
      </div>

      {/* MENU */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => {
          const isActive =
            item.path === "/ai"
              ? location.pathname === "/ai"
              : location.pathname.startsWith(item.path);
          
          const isHovered = hoveredItem === item.name;

          return (
            <button
              key={item.name}
              onClick={() => {
                navigate(item.path);
                setSidebar(false);
              }}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-xl
                transition-all duration-300 ease-out
                relative overflow-hidden group
                ${isActive 
                  ? "bg-gradient-to-r " + item.color + " text-white shadow-md" 
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900/50"
                }
              `}
            >
              {/* Hover shimmer effect */}
              {!isActive && isHovered && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-200/50 dark:via-slate-700/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              )}

              <item.icon className={`w-5 h-5 relative z-10 ${
                !isActive && "group-hover:scale-110"
              } transition-transform duration-300`} />
              
              <span className="flex-1 text-left font-medium text-sm relative z-10">
                {item.name}
              </span>

              <ChevronRight className={`w-4 h-4 relative z-10 transition-all duration-300 ${
                isActive ? "opacity-0" : "group-hover:translate-x-1"
              }`} />
              
              {isActive && (
                <div className="w-2 h-2 rounded-full bg-white relative z-10" />
              )}
            </button>
          );
        })}
      </nav>

      {/* PREMIUM UPGRADE BANNER (for free users) */}
      {!isPremium && (
        <div 
          onClick={openUserProfile}
          className="mx-3 mb-3 p-4 rounded-xl 
                     bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 
                     text-white relative overflow-hidden cursor-pointer
                     hover:shadow-xl hover:scale-[1.02] 
                     active:scale-[0.98]
                     transition-all duration-300 group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <div className="relative flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm 
                           flex items-center justify-center shrink-0
                           group-hover:rotate-12 transition-transform duration-300">
              <Crown className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-sm mb-0.5">
                Upgrade to Premium
              </h3>
              <p className="text-xs text-white/90">Unlock unlimited features</p>
            </div>
            <ChevronRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      )}
      
      {/* PREMIUM SETTINGS (for premium users) */}
      {isPremium && (
        <button
          onClick={openUserProfile}
          className="mx-3 mb-3 flex items-center gap-3 px-4 py-3 rounded-xl
                     bg-gradient-to-r from-yellow-50 to-orange-50
                     dark:from-yellow-950/20 dark:to-orange-950/20
                     border border-yellow-200 dark:border-yellow-900/30
                     text-yellow-700 dark:text-yellow-400
                     hover:shadow-lg hover:scale-[1.02]
                     active:scale-[0.98]
                     transition-all duration-300 group"
        >
          <div className="w-9 h-9 rounded-full 
                         bg-gradient-to-br from-yellow-400 to-orange-500 
                         flex items-center justify-center shrink-0
                         group-hover:rotate-12 transition-transform duration-300">
            <Crown className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1 text-left min-w-0">
            <h3 className="font-bold text-xs">Premium Member</h3>
            <p className="text-xs opacity-70">Manage subscription</p>
          </div>
          <Settings className="w-4 h-4 shrink-0 group-hover:rotate-90 transition-transform duration-300" />
        </button>
      )}

      {/* LOGOUT */}
      <button
        onClick={() => signOut(() => navigate("/"))}
        className="mx-3 mb-4 flex items-center gap-3 px-4 py-3 rounded-xl
                   text-slate-600 dark:text-slate-400
                   hover:bg-red-50 dark:hover:bg-red-950/20
                   hover:text-red-600 dark:hover:text-red-400
                   transition-all duration-300 ease-out
                   group border border-transparent
                   hover:border-red-200 dark:hover:border-red-900/30"
      >
        <LogOut className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
        <span className="font-medium text-sm flex-1 text-left">Logout</span>
      </button>

      {/* Custom CSS for animations */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(148, 163, 184, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(148, 163, 184, 0.5);
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;