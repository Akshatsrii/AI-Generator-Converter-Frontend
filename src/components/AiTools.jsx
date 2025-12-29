import React from "react";
import { useNavigate } from "react-router-dom";
import { AiToolsData } from "../assets/assets";

const AiTools = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-10 lg:px-20 xl:px-32 py-20 bg-gradient-to-b from-gray-50 to-white">
      {/* HEADING */}
      <div className="text-center mb-20">
        <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-6">
          <span className="text-blue-600 text-sm font-semibold tracking-wide uppercase">
            AI-Powered Solutions
          </span>
        </div>
        <h2 className="text-slate-900 text-5xl sm:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
          Powerful AI Tools
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-light">
          Everything you need to create, enhance, and optimize your content with
          cutting-edge AI technology.
        </p>
      </div>

      {/* TOOLS GRID - 3 PER ROW */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {AiToolsData.map((tool, index) => (
          <div
            key={index}
            className="group relative p-8 rounded-3xl bg-white shadow-md border-2 border-gray-100
            hover:shadow-2xl hover:-translate-y-3 hover:border-transparent
            transition-all duration-700 ease-out cursor-pointer overflow-hidden
            before:absolute before:inset-0 before:rounded-3xl before:opacity-0 
            before:bg-gradient-to-br before:from-blue-50/50 before:via-purple-50/50 before:to-pink-50/50
            hover:before:opacity-100 before:transition-opacity before:duration-700
            after:absolute after:inset-0 after:rounded-3xl after:opacity-0
            after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent
            after:translate-x-[-200%] hover:after:translate-x-[200%] 
            after:transition-transform after:duration-1000"
            onClick={() => navigate(tool.path)}
          >
            <div className="relative z-10">
              {/* ICON WITH ENHANCED STYLING */}
              <div className="inline-flex mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
                <tool.Icon
                  className="relative w-16 h-16 p-3.5 text-white rounded-2xl shadow-xl
                  transform group-hover:scale-110 group-hover:rotate-6
                  transition-all duration-700 ease-out"
                  style={{
                    background: `linear-gradient(135deg, ${tool.bg.from}, ${tool.bg.to})`,
                  }}
                />
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-bold text-slate-900 mb-4 
              group-hover:text-transparent group-hover:bg-clip-text 
              group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600
              transition-all duration-500">
                {tool.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-base leading-relaxed mb-6
              group-hover:text-gray-700 transition-colors duration-500">
                {tool.description}
              </p>

              {/* HOVER INDICATOR WITH ARROW */}
              <div className="flex items-center gap-2 text-sm font-semibold
              opacity-0 group-hover:opacity-100 transform translate-y-4 
              group-hover:translate-y-0 transition-all duration-500 delay-100">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Try it now
                </span>
                <svg 
                  className="w-5 h-5 text-blue-600 transform group-hover:translate-x-2 transition-transform duration-500" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* DECORATIVE CORNER ACCENT */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/0 via-purple-100/20 to-pink-100/0 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiTools;