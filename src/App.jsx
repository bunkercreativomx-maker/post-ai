import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import GenerateForm from './components/GenerateForm';
import PreviewCanvas from './components/PreviewCanvas';

function App() {
  const [generatedData, setGeneratedData] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = (data) => {
    // Simulate API Call for Image Generation
    setIsGenerating(true);
    setGeneratedData(data); // Pre-fill data to show generating state properly if needed
    
    setTimeout(() => {
      setIsGenerating(false);
    }, 3500); // 3.5 seconds fake delay
  };

  return (
    <div className="flex h-screen bg-[#f3f4f6] font-sans overflow-hidden">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto w-full h-full p-8 xl:p-12 transition-all">
        <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-12">
          
          {/* Left Column: Form */}
          <div className="flex-1 max-w-3xl">
            <GenerateForm onGenerate={handleGenerate} />
          </div>

          {/* Right Column: Preview & Results */}
          <div className="flex-1 xl:max-w-2xl pt-14">
            {isGenerating || generatedData ? (
              <PreviewCanvas formData={generatedData} isGenerating={isGenerating} />
            ) : (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 flex flex-col items-center justify-center min-h-[500px] border-dashed">
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Ready to create magic</h3>
                <p className="text-gray-500 text-center">Fill out your brand details on the left and click Generate to see your AI-powered posts.</p>
              </div>
            )}
          </div>
          
        </div>
      </main>
    </div>
  );
}

export default App;
