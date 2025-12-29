import React, { useState } from "react";
import { Eraser, Image as ImageIcon, Upload, CheckCircle, Download, Sparkles } from "lucide-react";

const RemoveBackground = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!file) return;
    setLoading(true);
    
    setTimeout(() => {
      setResult(preview);
      setLoading(false);
    }, 1500);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const selected = e.dataTransfer.files[0];
    if (selected && selected.type.startsWith('image/')) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
      setResult(null);
    }
  };

  const handleDownload = () => {
    if (result) {
      const link = document.createElement('a');
      link.href = result;
      link.download = 'background-removed.png';
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-14 h-14 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30">
              <Eraser className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                Background Remover
              </h1>
              <p className="text-gray-600 text-base">Remove backgrounds from your images instantly</p>
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* LEFT PANEL - Upload & Settings */}
          <div className="bg-white rounded-3xl border border-purple-100 p-8 shadow-lg shadow-purple-100/50">
            
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-purple-600" />
              <h2 className="text-xl font-bold text-gray-900">Image Settings</h2>
            </div>

            <form onSubmit={onSubmitHandler} className="space-y-6">
              
              {/* Upload Section */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                  <ImageIcon className="w-4 h-4 text-purple-600" />
                  Upload Your Image
                </label>
                
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`
                    relative border-2 border-dashed rounded-2xl p-8 transition-all duration-200
                    ${isDragging 
                      ? 'border-purple-400 bg-purple-50' 
                      : preview 
                        ? 'border-purple-400 bg-purple-50/50'
                        : 'border-gray-300 bg-gradient-to-br from-gray-50 to-purple-50/30 hover:border-purple-300'
                    }
                  `}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const selected = e.target.files[0];
                      if (selected) {
                        setFile(selected);
                        setPreview(URL.createObjectURL(selected));
                        setResult(null);
                      }
                    }}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  
                  <div className="flex flex-col items-center gap-3 text-center pointer-events-none">
                    {preview ? (
                      <>
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-fuchsia-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-8 h-8 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-purple-700 mb-1">
                            Image uploaded successfully!
                          </p>
                          <p className="text-xs text-gray-500 truncate max-w-xs">{file?.name}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-fuchsia-100 rounded-full flex items-center justify-center">
                          <Upload className="w-8 h-8 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-1">
                            Drop your image here or <span className="text-purple-600 font-semibold">browse</span>
                          </p>
                          <p className="text-xs text-gray-500">
                            Supports JPG, PNG, WebP and other formats
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {preview && (
                  <div className="mt-4 rounded-2xl overflow-hidden border-2 border-purple-200 shadow-md">
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                )}

                <p className="text-xs text-gray-500 mt-3">
                  Upload a clear image for best results
                </p>
              </div>

              {/* Quality Options */}
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-3 block">
                  Output Quality
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    className="p-4 rounded-xl border-2 border-purple-500 bg-gradient-to-br from-purple-50 to-fuchsia-50 text-center transition-all hover:shadow-lg hover:shadow-purple-200"
                  >
                    <div className="text-2xl mb-2">⚡</div>
                    <div className="text-xs font-bold text-purple-700">Fast</div>
                    <div className="text-xs text-gray-600">Quick processing</div>
                  </button>
                  <button
                    type="button"
                    className="p-4 rounded-xl border-2 border-gray-200 bg-white text-center transition-all hover:border-purple-300 hover:shadow-md hover:shadow-purple-100"
                  >
                    <div className="text-2xl mb-2">🎯</div>
                    <div className="text-xs font-bold text-gray-700">Standard</div>
                    <div className="text-xs text-gray-600">Balanced quality</div>
                  </button>
                  <button
                    type="button"
                    className="p-4 rounded-xl border-2 border-gray-200 bg-white text-center transition-all hover:border-purple-300 hover:shadow-md hover:shadow-purple-100"
                  >
                    <div className="text-2xl mb-2">✨</div>
                    <div className="text-xs font-bold text-gray-700">HD</div>
                    <div className="text-xs text-gray-600">Best quality</div>
                  </button>
                </div>
              </div>

              {/* Generate Button */}
              <button
                type="submit"
                disabled={loading || !file}
                className={`
                  w-full flex justify-center items-center gap-3
                  bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600
                  text-white px-6 py-4 rounded-2xl font-bold text-base
                  shadow-lg shadow-purple-500/30 transition-all duration-200
                  ${loading || !file 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:shadow-xl hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98]'
                  }
                `}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Eraser className="w-5 h-5" />
                    <span>Remove Background</span>
                    <span className="ml-auto">›</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* RIGHT PANEL - Result */}
          <div className="bg-white rounded-3xl border border-pink-100 p-8 shadow-lg shadow-pink-100/50">
            
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-6">
              <ImageIcon className="w-6 h-6 text-fuchsia-600" />
              <h2 className="text-xl font-bold text-gray-900">Generated Image</h2>
            </div>

            {/* Result Display */}
            <div className="rounded-2xl border-2 border-purple-100 bg-gradient-to-br from-gray-50 to-purple-50/30 min-h-[500px] flex items-center justify-center p-8">
              {!result ? (
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-fuchsia-100 rounded-full flex items-center justify-center shadow-inner">
                    <ImageIcon className="w-12 h-12 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900 mb-2">
                      No image yet
                    </p>
                    <p className="text-sm text-gray-600">
                      Upload an image and click <span className="font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">"Remove Background"</span>
                      <br />to create your masterpiece
                    </p>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full flex flex-col items-center justify-center gap-6">
                  <img
                    src={result}
                    alt="Processed"
                    className="max-w-full max-h-[400px] rounded-xl shadow-2xl shadow-purple-500/20 object-contain animate-fadeIn"
                  />
                  
                  {/* Download Button */}
                  <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105"
                  >
                    <Download className="w-5 h-5" />
                    Download Image
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default RemoveBackground;