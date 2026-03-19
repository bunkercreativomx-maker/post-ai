import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { Download, Loader2, RefreshCw, Maximize2, Share2, CornerUpRight } from 'lucide-react';

const PreviewCanvas = ({ formData, isGenerating }) => {
  const [downloading, setDownloading] = useState(false);
  const previewRef = useRef(null);

  const mockImage = "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1024&auto=format&fit=crop";

  const handleDownload = async () => {
    if (!previewRef.current) return;
    setDownloading(true);
    try {
      const canvas = await html2canvas(previewRef.current, {
        useCORS: true,
        scale: 4, 
        allowTaint: true,
        backgroundColor: null,
      });
      const image = canvas.toDataURL("image/png", 1.0);
      const link = document.createElement("a");
      link.download = `PostAI_${formData.businessName.replace(/\s+/g, '_')}.png`;
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
      <div className="h-full flex flex-col items-center justify-center space-y-8 animate-pulse">
        <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-slate-100 border-t-purple-600 animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <CornerUpRight size={32} className="text-purple-600" />
            </div>
        </div>
        <div className="text-center">
            <h3 className="text-2xl font-black text-slate-900 mb-2">Composing your vision</h3>
            <p className="text-slate-500 font-medium max-w-xs mx-auto">Our AI is rendering high-resolution assets and drafting pixel-perfect copy.</p>
        </div>
        <div className="flex gap-2">
            {[0,1,2].map(i => <div key={i} className="w-2 h-2 rounded-full bg-purple-200 animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}></div>)}
        </div>
      </div>
    );
  }

  if (!formData?.targetAudience && !formData?.tone) {
      return (
        <div className="h-full flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-[2.5rem] bg-white/50 p-12 transition-all hover:bg-white hover:border-purple-200 group">
            <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mb-8 border border-slate-100 group-hover:scale-110 group-hover:bg-purple-50 group-hover:border-purple-100 transition-all duration-500">
                <RefreshCw size={32} className="text-slate-300 group-hover:text-purple-400 group-hover:rotate-180 transition-all duration-700" />
            </div>
            <h3 className="text-xl font-black text-slate-800 mb-3">Canvas is Empty</h3>
            <p className="text-slate-500 font-medium text-center leading-relaxed">Complete the form to see your AI-generated campaign take shape here.</p>
        </div>
      );
  }

  return (
    <div className="space-y-8 animate-in fade-in zoom-in-95 duration-700">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
            <h2 className="text-2xl font-black text-slate-900">Preview</h2>
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                Instagram Square (1080x1080)
            </div>
        </div>
        <div className="flex gap-2">
            <button className="flex items-center justify-center w-11 h-11 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all duration-200 active:scale-95 shadow-sm">
                <Maximize2 size={18} />
            </button>
            <button className="flex items-center justify-center w-11 h-11 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all duration-200 active:scale-95 shadow-sm">
                <Share2 size={18} />
            </button>
            <button
                onClick={handleDownload}
                disabled={downloading}
                className="btn-primary !py-0 h-11 flex items-center gap-2 group shadow-purple-100"
            >
                {downloading ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />}
                <span className="text-sm">Download HQ</span>
            </button>
        </div>
      </div>

      {/* Mac-style Window Frame */}
      <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/20 to-indigo-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative bg-[#1e1e1e] rounded-[2rem] p-1 shadow-2xl overflow-hidden shadow-purple-900/10 transition-transform duration-500 hover:scale-[1.01]">
                {/* Dots */}
                <div className="flex gap-1.5 px-6 py-4">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                </div>

                <div 
                    ref={previewRef}
                    className="relative w-full aspect-square rounded-[1.5rem] bg-slate-900 overflow-hidden"
                    style={{
                        backgroundImage: `url(${mockImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    {/* Dynamic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent flex flex-col justify-end p-10 sm:p-14">
                        <div className="mb-6 mb-8 transform -translate-y-2 animate-in slide-in-from-bottom-2 duration-1000">
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[11px] font-black uppercase tracking-widest rounded-full shadow-2xl">
                                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                                {formData.businessName || 'PostAI Studio'}
                            </span>
                        </div>
                        
                        <h1 className="text-4xl sm:text-6xl font-black text-white leading-[1.05] mb-6 tracking-tight drop-shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                            {formData.targetAudience ? `Special Offer for ${formData.targetAudience}!` : 'Modern Post Design'}
                        </h1>
                        
                        <p className="text-xl sm:text-2xl text-slate-200/90 font-medium leading-relaxed drop-shadow-lg max-w-xl mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                            {formData.tone ? `Built with a ${formData.tone} focus for maximum digital impact.` : 'Elevate your brand presence with AI.'}
                        </p>
                        
                        {formData.includeLogo && (
                            <div className="flex items-center justify-between border-t border-white/10 pt-8 mt-2 animate-in fade-in duration-1000 delay-500">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center font-black text-purple-600 shadow-2xl text-xl rotate-3">
                                        {(formData.businessName || 'P').charAt(0).toUpperCase()}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-white font-black tracking-tight text-lg leading-tight uppercase">
                                            {formData.businessName || 'PostAI'}
                                        </span>
                                        <span className="text-slate-400 font-bold text-xs tracking-wider">
                                            {formData.website.replace('https://', '').replace('http://', '').split('/')[0] || 'studio.postai.app'}
                                        </span>
                                    </div>
                                </div>
                                <div className="hidden sm:block">
                                    <div className="px-5 py-2 rounded-xl bg-white text-black font-black text-xs uppercase tracking-widest hover:bg-slate-100 cursor-pointer transition-colors shadow-2xl">
                                        Learn More
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
          </div>
      </div>
    </div>
  );
};

export default PreviewCanvas;
