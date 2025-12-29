import React, { useState } from "react";
import { Sparkles, Edit, Wand2, FileText, Zap, Copy, Download, ChevronRight } from "lucide-react";

const WriteArticle = () => {
  const articleLength = [
    { length: 600, text: "Short", description: "300-600 words", icon: "📝" },
    { length: 900, text: "Medium", description: "600-900 words", icon: "📄" },
    { length: 1200, text: "Long", description: "900+ words", icon: "📚" },
  ];

  const [selectedLength, setSelectedLength] = useState(articleLength[0]);
  const [input, setInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedArticle, setGeneratedArticle] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      setGeneratedArticle("Your AI-generated article will appear here...");
      setIsGenerating(false);
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedArticle);
  };

  return (
    <div className="h-full overflow-hidden">
      <div className="h-full overflow-y-scroll hide-scrollbar">
        <div className="p-6 md:p-8 max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
                <Wand2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900">
                  AI Article Writer
                </h1>
                <p className="text-slate-600 text-sm">
                  Create professional articles with AI in seconds
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* LEFT CARD – INPUT FORM */}
            <form
              onSubmit={onSubmitHandler}
              className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Sparkles className="w-5 text-blue-600" />
                </div>
                <h2 className="text-lg font-bold text-slate-900">
                  Article Settings
                </h2>
              </div>

              {/* ARTICLE TOPIC */}
              <div className="mb-6">
                <label className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-600" />
                  Article Topic
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="e.g., The future of artificial intelligence"
                    required
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <Zap className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Be specific for better results
                </p>
              </div>

              {/* ARTICLE LENGTH */}
              <div className="mb-6">
                <label className="text-sm font-semibold text-slate-700 mb-3 block">
                  Article Length
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {articleLength.map((item, index) => (
                    <button
                      type="button"
                      key={index}
                      onClick={() => setSelectedLength(item)}
                      className={`relative p-4 rounded-xl border-2 transition-all duration-300 text-center group hover:scale-105 ${
                        selectedLength.text === item.text
                          ? "bg-gradient-to-br from-blue-50 to-purple-50 border-blue-500 shadow-lg shadow-blue-500/20"
                          : "bg-white border-slate-200 hover:border-blue-300 hover:shadow-md"
                      }`}
                    >
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <div className={`text-sm font-bold mb-1 ${
                        selectedLength.text === item.text ? "text-blue-700" : "text-slate-700"
                      }`}>
                        {item.text}
                      </div>
                      <div className={`text-xs ${
                        selectedLength.text === item.text ? "text-blue-600" : "text-slate-500"
                      }`}>
                        {item.description}
                      </div>
                      
                      {selectedLength.text === item.text && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
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
                className="w-full mt-6 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-3.5 text-sm font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg shadow-blue-500/25 group"
              >
                {isGenerating ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    Generate Article
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>

              {/* INFO */}
              <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-xs text-blue-700">
                  <span className="font-semibold">💡 Tip:</span> Use detailed topics for more accurate and relevant content
                </p>
              </div>
            </form>

            {/* RIGHT CARD – GENERATED ARTICLE */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col hover:shadow-lg hover:border-purple-300 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                    <FileText className="w-5 text-purple-600" />
                  </div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Generated Article
                  </h2>
                </div>

                {generatedArticle && (
                  <div className="flex gap-2">
                    <button
                      onClick={handleCopy}
                      className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors duration-200"
                      title="Copy to clipboard"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    <button
                      className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors duration-200"
                      title="Download"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* CONTENT AREA */}
              <div className="flex-1 relative">
                {isGenerating ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className="relative">
                      <div className="w-20 h-20 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
                      <Sparkles className="w-8 h-8 text-blue-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                    </div>
                    <p className="mt-6 text-slate-600 font-medium">
                      Crafting your article...
                    </p>
                    <p className="text-sm text-slate-400 mt-2">
                      This may take a few seconds
                    </p>
                  </div>
                ) : generatedArticle ? (
                  <div className="prose prose-sm max-w-none">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 min-h-[400px]">
                      <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                        {generatedArticle}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center mb-4">
                      <Edit className="w-10 h-10 text-slate-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      No article yet
                    </h3>
                    <p className="text-sm text-slate-500 max-w-xs">
                      Enter a topic and click <span className="font-semibold text-blue-600">"Generate Article"</span> to create your content
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
      `}</style>
    </div>
  );
};

export default WriteArticle;