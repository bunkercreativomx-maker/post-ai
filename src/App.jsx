import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import GenerateForm from './components/GenerateForm';
import PreviewCanvas from './components/PreviewCanvas';

function App() {
  const [generatedData, setGeneratedData] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = (data) => {
    setIsGenerating(true);
    // Visual feedback for generation
    setGeneratedData(data); 
    
    setTimeout(() => {
      setIsGenerating(false);
    }, 4500); 
  };

  return (
    <div className="flex h-screen bg-[#f8fafc] text-slate-900 font-sans overflow-hidden">
      {/* Sidebar Navigation - Fixed */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto w-full h-full relative selection:bg-purple-100">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-100/30 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

        <div className="max-w-[1600px] mx-auto p-12 xl:p-16">
          <div className="flex flex-col xl:flex-row gap-16 items-start">
            
            {/* Left Column: Form Configuration */}
            <div className="w-full xl:w-[600px] shrink-0">
              <GenerateForm onGenerate={handleGenerate} />
            </div>

            {/* Right Column: Dynamic Preview Display */}
            <div className="w-full flex-1 min-h-[700px]">
                <PreviewCanvas formData={generatedData} isGenerating={isGenerating} />
            </div>
          </div>
        </div>

        {/* Support Footer */}
        <footer className="px-12 pb-8 text-slate-400 font-medium text-xs flex gap-6 items-center">
            <span className="hover:text-slate-600 cursor-pointer transition-colors">Documentation</span>
            <span className="hover:text-slate-600 cursor-pointer transition-colors">API Reference</span>
            <span className="hover:text-slate-600 cursor-pointer transition-colors">Support</span>
            <div className="ml-auto flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                All systems operational
            </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
