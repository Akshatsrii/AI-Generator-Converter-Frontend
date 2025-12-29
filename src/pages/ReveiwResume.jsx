import React, { useState } from "react";
import { FileText, Upload, CheckCircle, Download, Sparkles, Search, TrendingUp } from "lucide-react";

const ResumeReview = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!file) return;
    setLoading(true);
    
    // Simulate API call for resume analysis
    setTimeout(() => {
      setResult({
        score: 85,
        strengths: [
          "Strong technical skills section",
          "Clear work experience descriptions",
          "Well-organized layout"
        ],
        improvements: [
          "Add more quantifiable achievements",
          "Include relevant keywords for ATS",
          "Expand on leadership experience"
        ],
        suggestions: [
          "Consider adding a professional summary",
          "Optimize for applicant tracking systems",
          "Include industry-specific certifications"
        ]
      });
      setLoading(false);
    }, 2000);
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
    if (selected && selected.type === 'application/pdf') {
      setFile(selected);
      setPreview(selected.name);
      setResult(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                Resume Review
              </h1>
              <p className="text-gray-600 text-base">Get AI-powered feedback to improve your resume</p>
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* LEFT PANEL - Upload */}
          <div className="bg-white rounded-3xl border border-orange-100 p-8 shadow-lg shadow-orange-100/50">
            
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-orange-600" />
              <h2 className="text-xl font-bold text-gray-900">Resume Review</h2>
            </div>

            <form onSubmit={onSubmitHandler} className="space-y-6">
              
              {/* Upload Section */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                  <FileText className="w-4 h-4 text-orange-600" />
                  Upload Resume
                </label>
                
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`
                    relative border-2 border-dashed rounded-2xl p-8 transition-all duration-200
                    ${isDragging 
                      ? 'border-orange-400 bg-orange-50' 
                      : preview 
                        ? 'border-orange-400 bg-orange-50/50'
                        : 'border-gray-300 bg-gradient-to-br from-gray-50 to-orange-50/30 hover:border-orange-300'
                    }
                  `}
                >
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => {
                      const selected = e.target.files[0];
                      if (selected) {
                        setFile(selected);
                        setPreview(selected.name);
                        setResult(null);
                      }
                    }}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  
                  <div className="flex flex-col items-center gap-3 text-center pointer-events-none">
                    {preview ? (
                      <>
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-8 h-8 text-orange-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-orange-700 mb-1">
                            Resume uploaded successfully!
                          </p>
                          <p className="text-xs text-gray-500 truncate max-w-xs">{file?.name}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full flex items-center justify-center">
                          <Upload className="w-8 h-8 text-orange-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-1">
                            Choose File <span className="text-orange-600 font-semibold">No file chosen</span>
                          </p>
                          <p className="text-xs text-gray-500">
                            Supports PDF resume only
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <p className="text-xs text-gray-500 mt-3">
                  Supports PDF resume only
                </p>
              </div>

              {/* Analysis Options */}
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-3 block">
                  Analysis Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="p-4 rounded-xl border-2 border-orange-500 bg-gradient-to-br from-orange-50 to-yellow-50 text-center transition-all hover:shadow-md"
                  >
                    <div className="text-2xl mb-2">⚡</div>
                    <div className="text-xs font-bold text-orange-700">Quick Scan</div>
                    <div className="text-xs text-gray-600">Basic review</div>
                  </button>
                  <button
                    type="button"
                    className="p-4 rounded-xl border-2 border-gray-200 bg-white text-center transition-all hover:border-orange-300 hover:shadow-md"
                  >
                    <div className="text-2xl mb-2">🎯</div>
                    <div className="text-xs font-bold text-gray-700">Deep Analysis</div>
                    <div className="text-xs text-gray-600">Detailed insights</div>
                  </button>
                </div>
              </div>

              {/* Tips Section */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-4 border border-orange-100">
                <p className="text-xs font-semibold text-orange-900 mb-2">💡 What we analyze:</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• ATS compatibility and keyword optimization</li>
                  <li>• Content quality and achievements</li>
                  <li>• Format and visual presentation</li>
                  <li>• Grammar and professional language</li>
                </ul>
              </div>

              {/* Review Button */}
              <button
                type="submit"
                disabled={loading || !file}
                className={`
                  w-full flex justify-center items-center gap-3
                  bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500
                  text-white px-6 py-4 rounded-2xl font-bold text-base
                  shadow-lg shadow-orange-500/30 transition-all duration-200
                  ${loading || !file
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:shadow-xl hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98]'
                  }
                `}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Analyzing Resume...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    <span>Review Resume</span>
                    <span className="ml-auto">›</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* RIGHT PANEL - Results */}
          <div className="bg-white rounded-3xl border border-yellow-100 p-8 shadow-lg shadow-yellow-100/50">
            
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-yellow-600" />
              <h2 className="text-xl font-bold text-gray-900">Analysis Results</h2>
            </div>

            {/* Result Display */}
            <div className="rounded-2xl border-2 border-orange-100 bg-gradient-to-br from-gray-50 to-orange-50/30 min-h-[500px] flex items-center justify-center p-8">
              {!result ? (
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full flex items-center justify-center shadow-inner">
                    <FileText className="w-12 h-12 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900 mb-2">
                      No results yet
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Upload a resume and click{" "}
                      <span className="font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                        "Review Resume"
                      </span>
                      {" "}to get started
                    </p>
                  </div>
                </div>
              ) : (
                <div className="w-full space-y-6 animate-fadeIn">
                  
                  {/* Score Card */}
                  <div className="bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl p-6 text-white text-center shadow-lg">
                    <p className="text-sm font-semibold mb-2">Overall Score</p>
                    <p className="text-5xl font-bold mb-1">{result.score}</p>
                    <p className="text-sm opacity-90">out of 100</p>
                  </div>

                  {/* Strengths */}
                  <div className="bg-white rounded-xl p-5 border border-green-200 shadow-sm">
                    <h3 className="text-sm font-bold text-green-700 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Strengths
                    </h3>
                    <ul className="space-y-2">
                      {result.strengths.map((item, idx) => (
                        <li key={idx} className="text-xs text-gray-700 flex items-start gap-2">
                          <span className="text-green-500 mt-0.5">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Improvements */}
                  <div className="bg-white rounded-xl p-5 border border-orange-200 shadow-sm">
                    <h3 className="text-sm font-bold text-orange-700 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Areas to Improve
                    </h3>
                    <ul className="space-y-2">
                      {result.improvements.map((item, idx) => (
                        <li key={idx} className="text-xs text-gray-700 flex items-start gap-2">
                          <span className="text-orange-500 mt-0.5">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Download Button */}
                  <button
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105"
                  >
                    <Download className="w-5 h-5" />
                    Download Full Report
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

export default ResumeReview;