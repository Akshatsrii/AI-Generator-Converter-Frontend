import React, { useState } from "react";
import { Sparkles, Hash, Copy, RefreshCw, Check, ChevronRight, Lightbulb } from "lucide-react";

const BlogTitles = () => {
  const blogCategories = [
    { name: "General", icon: "📝", color: "slate" },
    { name: "Technology", icon: "💻", color: "blue" },
    { name: "Business", icon: "💼", color: "indigo" },
    { name: "Health", icon: "❤️", color: "red" },
    { name: "Lifestyle", icon: "✨", color: "pink" },
    { name: "Education", icon: "📚", color: "green" },
    { name: "Travel", icon: "✈️", color: "cyan" },
    { name: "Food", icon: "🍕", color: "orange" },
  ];

  const [selectedCategory, setSelectedCategory] = useState(blogCategories[0]);
  const [input, setInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedTitles, setGeneratedTitles] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      const dummyTitles = [
        "10 Revolutionary Ways AI is Transforming Our Daily Lives",
        "The Ultimate Guide to Understanding Artificial Intelligence",
        "Why AI Will Change Everything: A Comprehensive Analysis",
        "From Science Fiction to Reality: The AI Revolution",
        "How Artificial Intelligence is Reshaping the Future",
      ];
      setGeneratedTitles(dummyTitles);
      setIsGenerating(false);
    }, 2000);
  };

  const handleCopy = (title, index) => {
    navigator.clipboard.writeText(title);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleRegenerate = () => {
    onSubmitHandler({ preventDefault: () => {} });
  };

  return (
    <div className="h-full overflow-hidden">
      <div className="h-full overflow-y-scroll hide-scrollbar">
        <div className="p-6 md:p-8 max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/25">
                <Hash className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900">
                  Blog Title Generator
                </h1>
                <p className="text-slate-600 text-sm">
                  Create catchy, SEO-friendly titles in seconds
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* LEFT CARD - INPUT FORM */}
            <form
              onSubmit={onSubmitHandler}
              className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-purple-300 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                  <Sparkles className="w-5 text-purple-600" />
                </div>
                <h2 className="text-lg font-bold text-slate-900">
                  Title Settings
                </h2>
              </div>

              {/* KEYWORD INPUT */}
              <div className="mb-6">
                <label className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-purple-600" />
                  Blog Topic / Keyword
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="e.g., The future of artificial intelligence..."
                    required
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder:text-slate-400"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <Sparkles className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Enter your main topic or target keyword
                </p>
              </div>

              {/* CATEGORY SELECTION */}
              <div className="mb-6">
                <label className="text-sm font-semibold text-slate-700 mb-3 block">
                  Blog Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {blogCategories.map((item, index) => (
                    <button
                      type="button"
                      key={index}
                      onClick={() => setSelectedCategory(item)}
                      className={`relative p-3 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                        selectedCategory.name === item.name
                          ? "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-500 shadow-lg shadow-purple-500/20"
                          : "bg-white border-slate-200 hover:border-purple-300 hover:shadow-md"
                      }`}
                    >
                      <div className="text-xl mb-1">{item.icon}</div>
                      <div className={`text-xs font-semibold ${
                        selectedCategory.name === item.name ? "text-purple-700" : "text-slate-600"
                      }`}>
                        {item.name}
                      </div>
                      
                      {selectedCategory.name === item.name && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* GENERATE BUTTON */}
              <button
                type="submit"
                disabled={isGenerating}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white py-3.5 text-sm font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg shadow-purple-500/25 group"
              >
                {isGenerating ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Generating Titles...
                  </>
                ) : (
                  <>
                    <Hash className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    Generate Titles
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>

              {/* TIP */}
              <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
                <p className="text-xs text-purple-700">
                  <span className="font-semibold">💡 Pro Tip:</span> Include specific keywords for better SEO-optimized titles
                </p>
              </div>
            </form>

            {/* RIGHT CARD - GENERATED TITLES */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col hover:shadow-lg hover:border-pink-300 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-pink-50 flex items-center justify-center">
                    <Hash className="w-5 text-pink-600" />
                  </div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Generated Titles
                  </h2>
                </div>

                {generatedTitles.length > 0 && !isGenerating && (
                  <button
                    onClick={handleRegenerate}
                    className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-all duration-200 group"
                    title="Regenerate"
                  >
                    <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                  </button>
                )}
              </div>

              {/* CONTENT AREA */}
              <div className="flex-1">
                {isGenerating ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className="relative">
                      <div className="w-20 h-20 border-4 border-slate-200 border-t-purple-600 rounded-full animate-spin"></div>
                      <Sparkles className="w-8 h-8 text-purple-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                    </div>
                    <p className="mt-6 text-slate-600 font-medium">
                      Creating catchy titles...
                    </p>
                    <p className="text-sm text-slate-400 mt-2">
                      Analyzing your topic
                    </p>
                  </div>
                ) : generatedTitles.length > 0 ? (
                  <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scroll">
                    {generatedTitles.map((title, index) => (
                      <div
                        key={index}
                        className="group p-4 bg-slate-50 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 rounded-xl border border-slate-200 hover:border-purple-300 transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-purple-300 transition-colors">
                            <span className="text-sm font-bold text-purple-600">
                              {index + 1}
                            </span>
                          </div>
                          <p className="flex-1 text-sm text-slate-700 leading-relaxed font-medium">
                            {title}
                          </p>
                          <button
                            onClick={() => handleCopy(title, index)}
                            className="shrink-0 w-8 h-8 rounded-lg bg-white hover:bg-purple-100 border border-slate-200 hover:border-purple-300 flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                            title="Copy title"
                          >
                            {copiedIndex === index ? (
                              <Check className="w-4 h-4 text-green-600" />
                            ) : (
                              <Copy className="w-4 h-4 text-slate-600" />
                            )}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center mb-4">
                      <Hash className="w-10 h-10 text-slate-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      No titles yet
                    </h3>
                    <p className="text-sm text-slate-500 max-w-xs">
                      Enter a topic and click <span className="font-semibold text-purple-600">"Generate Titles"</span> to get started
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style>{`
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
        
        .custom-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: rgba(203, 213, 225, 0.5);
          border-radius: 10px;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(203, 213, 225, 0.8);
        }
      `}</style>
    </div>
  );
};

export default BlogTitles;