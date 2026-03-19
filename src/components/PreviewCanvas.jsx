import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { Download, Loader2, RefreshCw } from 'lucide-react';

const PreviewCanvas = ({ formData, isGenerating }) => {
  const [downloading, setDownloading] = useState(false);
  const previewRef = useRef(null);

  // Mock background image - in a real app this would come from FLUX.1 or DALL-E API
  const mockImage = "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1024&auto=format&fit=crop";

  const handleDownload = async () => {
    if (!previewRef.current) return;
    
    setDownloading(true);
    try {
      const canvas = await html2canvas(previewRef.current, {
        useCORS: true,
        scale: 2, // High resolution
        allowTaint: true,
      });
      
      const image = canvas.toDataURL("image/png", 1.0);
      const link = document.createElement("a");
      link.download = `Generated_Post_${formData.businessName.replace(/\s+/g, '_')}.png`;
      link.href = image;
      link.click();
    } catch (err) {
      console.error("Failed to generate image", err);
    } finally {
      setDownloading(false);
    }
  };

  if (isGenerating) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center justify-center min-h-[500px]">
        <Loader2 size={48} className="text-purple-600 animate-spin mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Generating with AI...</h3>
        <p className="text-gray-500 text-center max-w-sm">
          Please wait while our AI models create the perfect visual and copy based on your settings.
        </p>
      </div>
    );
  }

  // If not generating and we don't have targetAudience/tone, show a placeholder
  if (!formData.targetAudience && !formData.tone) {
      return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center justify-center min-h-[500px] border-dashed">
            <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-4">
                <RefreshCw size={24} className="text-purple-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">Waiting for configuration</h3>
            <p className="text-gray-500 text-sm">Fill out the form and click Generate to see your AI posts.</p>
        </div>
      );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Your AI Generated Post</h2>
        <button
          onClick={handleDownload}
          disabled={downloading}
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
        >
          {downloading ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
          Download
        </button>
      </div>

      {/* The actual canvas that sets the image and overlays text perfectly */}
      <div 
        ref={previewRef}
        className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl"
        style={{
          backgroundImage: `url(${mockImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay a strong gradient to ensure text is always readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent flex flex-col justify-end p-8 sm:p-12">
          
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-purple-600/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3 shadow-lg">
              {formData.businessName}
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4 drop-shadow-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
            {formData.targetAudience ? `Special Offer for ${formData.targetAudience}!` : 'The Ultimate Experience'}
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-200 font-medium drop-shadow-lg max-w-2xl mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
            {formData.tone ? `Discover our ${formData.tone} approach to bringing you the best flavors in town.` : 'Try our exciting new menu today.'}
          </p>
          
          {formData.includeLogo && (
            <div className="flex items-center justify-between border-t border-white/20 pt-6 mt-2">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-purple-600 shadow-xl">
                   {formData.businessName.charAt(0)}
                 </div>
                 <span className="text-white font-bold tracking-wide drop-shadow-md">
                   {formData.website.replace('https://', '')}
                 </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviewCanvas;
