import React, { useState } from "react";
import { Image as ImageIcon, Sparkles, Download, RefreshCw, Wand2, Palette, ChevronRight, Zap } from "lucide-react";

const GenerateImages = () => {
  const styles = [
    { name: "Realistic", icon: "📷", description: "Photo-realistic images" },
    { name: "Cartoon", icon: "🎨", description: "Fun cartoon style" },
    { name: "3D", icon: "🎮", description: "3D rendered look" },
    { name: "Anime", icon: "🌸", description: "Japanese anime style" },
    { name: "Sketch", icon: "✏️", description: "Hand-drawn sketch" },
  ];

  const [prompt, setPrompt] = useState("");
  const [selectedStyle, setSelectedStyle] = useState(styles[0]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [isPublic, setIsPublic] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      setGeneratedImage("https://placehold.co/512x512/6366f1/white?text=AI+Generated+Image");
      setIsGenerating(false);
    }, 3000);
  };

  const handleDownload = () => {
    // Download logic here
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = 'ai-generated-image.png';
    link.click();
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
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/25">
                <Wand2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900">
                  AI Image Generator
                </h1>
                <p className="text-slate-600 text-sm">
                  Transform your words into stunning visuals
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* LEFT CARD - INPUT FORM */}
            <form
              onSubmit={onSubmitHandler}
              className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-green-300 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                  <Sparkles className="w-5 text-green-600" />
                </div>
                <h2 className="text-lg font-bold text-slate-900">
                  Image Settings
                </h2>
              </div>

              {/* PROMPT INPUT */}
              <div className="mb-5">
                <label className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                  <Palette className="w-4 h-4 text-green-600" />
                  Describe Your Image
                </label>
                <div className="relative">
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="A serene mountain landscape at sunset..."
                    required
                    rows={3}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-slate-400 resize-none"
                  />
                  <div className="absolute bottom-2 right-2">
                    <Zap className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-1.5">
                  Be detailed for better results
                </p>
              </div>

              {/* STYLE SELECTION */}
              <div className="mb-5">
                <label className="text-sm font-semibold text-slate-700 mb-2.5 block">
                  Art Style
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {styles.map((item, index) => (
                    <button
                      type="button"
                      key={index}
                      onClick={() => setSelectedStyle(item)}
                      className={`relative p-3 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                        selectedStyle.name === item.name
                          ? "bg-gradient-to-br from-green-50 to-emerald-50 border-green-500 shadow-lg shadow-green-500/20"
                          : "bg-white border-slate-200 hover:border-green-300 hover:shadow-md"
                      }`}
                    >
                      <div className="text-xl mb-1">{item.icon}</div>
                      <div className={`text-xs font-bold mb-0.5 ${
                        selectedStyle.name === item.name ? "text-green-700" : "text-slate-700"
                      }`}>
                        {item.name}
                      </div>
                      <div className={`text-xs leading-tight ${
                        selectedStyle.name === item.name ? "text-green-600" : "text-slate-500"
                      }`}>
                        {item.description}
                      </div>
                      
                      {selectedStyle.name === item.name && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* MAKE PUBLIC TOGGLE */}
              <div className="mb-5 flex items-center gap-2">
                <label className="relative cursor-pointer flex items-center gap-2">
                  <input
                    type="checkbox"
                    onChange={(e) => setIsPublic(e.target.checked)}
                    checked={isPublic}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-green-500 transition-all">
                    <span className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
                  </div>
                  <p className="text-sm text-slate-700 font-medium">Make this image Public</p>
                </label>
              </div>

              {/* GENERATE BUTTON */}
              <button
                type="submit"
                disabled={isGenerating}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white py-3 text-sm font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg shadow-green-500/25 group"
              >
                {isGenerating ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Creating Magic...
                  </>
                ) : (
                  <>
                    <ImageIcon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    Generate Image
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>

              {/* TIP */}
              <div className="mt-3 p-2.5 bg-green-50 rounded-lg border border-green-200">
                <p className="text-xs text-green-700">
                  <span className="font-semibold">💡 Tip:</span> Add details like "4K" or "highly detailed" for better results
                </p>
              </div>
            </form>

            {/* RIGHT CARD - GENERATED IMAGE */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col hover:shadow-lg hover:border-emerald-300 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <ImageIcon className="w-5 text-emerald-600" />
                  </div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Generated Image
                  </h2>
                </div>

                {generatedImage && !isGenerating && (
                  <div className="flex gap-2">
                    <button
                      onClick={handleRegenerate}
                      className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-all duration-200 group"
                      title="Regenerate"
                    >
                      <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                    </button>
                    <button
                      onClick={handleDownload}
                      className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors duration-200"
                      title="Download"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* IMAGE AREA */}
              <div className="flex-1 flex items-center justify-center">
                {isGenerating ? (
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 border-4 border-slate-200 border-t-green-600 rounded-full animate-spin"></div>
                      <Sparkles className="w-10 h-10 text-green-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                    </div>
                    <p className="text-slate-600 font-medium mb-2">
                      Generating your image...
                    </p>
                    <p className="text-sm text-slate-400">
                      This may take a few moments
                    </p>
                    <div className="mt-4 flex gap-1">
                      <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                ) : generatedImage ? (
                  <div className="w-full">
                    <div className="relative group">
                      <img
                        src={generatedImage}
                        alt="Generated"
                        className="w-full rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-4">
                        <p className="text-white text-sm font-medium">
                          {prompt.slice(0, 50)}...
                        </p>
                      </div>
                    </div>
                    
                    {/* Image Info */}
                    <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-600">
                          <span className="font-semibold">Style:</span> {selectedStyle.name}
                        </span>
                        <span className="text-slate-600">
                          <span className="font-semibold">Resolution:</span> 512×512
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center mb-4">
                      <ImageIcon className="w-10 h-10 text-slate-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      No image yet
                    </h3>
                    <p className="text-sm text-slate-500 max-w-xs">
                      Describe an image and click <span className="font-semibold text-green-600">"Generate Image"</span> to create your masterpiece
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

export default GenerateImages;