import React, { useState } from 'react';
import { Globe, Bot, Upload, Sparkles, Image as ImageIcon, Check, ChevronDown } from 'lucide-react';

const GenerateForm = ({ onGenerate }) => {
  const [formData, setFormData] = useState({
    businessName: 'Las Alitas',
    website: 'https://app.lasalitasdesiempre.com/homemenu',
    targetAudience: '',
    tone: '',
    numPosts: '3 Posts',
    includeLogo: true
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  return (
    <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-8 flex items-end justify-between">
        <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Create New Content</h1>
            <p className="text-slate-500 font-medium">Configure your AI engine to generate unique social media posts.</p>
        </div>
        <div className="bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm flex items-center gap-2">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Engine Power</span>
            <div className="flex gap-0.5">
                {[1,2,3,4].map(i => <div key={i} className="w-1.5 h-3 bg-purple-500 rounded-full" />)}
                <div className="w-1.5 h-3 bg-slate-200 rounded-full" />
            </div>
        </div>
      </div>

      <div className="premium-card overflow-hidden bg-white">
        <div className="h-2.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 w-full animate-gradient-x"></div>
        
        <div className="p-10">
          <form className="space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Business Name Input */}
                <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    Brand Identity <span className="text-rose-500 text-xs font-black">*</span>
                </label>
                <div className="relative group">
                    <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="input-field pr-12 group-focus-within:ring-purple-500/20"
                    placeholder="e.g. Las Alitas"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 group-focus-within:text-purple-500 group-focus-within:bg-purple-50 transition-colors">
                        <Bot size={18} />
                    </div>
                </div>
                </div>

                {/* Website URL Input */}
                <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">
                    Source URL <span className="text-slate-300 font-normal ml-1">(Optional)</span>
                </label>
                <div className="relative group">
                    <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="input-field pr-12"
                    placeholder="https://app.example.com"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-300">
                        <Globe size={18} />
                    </div>
                </div>
                </div>
            </div>

            {/* Grid for Target Audience & Tone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Target Audience</label>
                <textarea
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleChange}
                  rows={3}
                  className="input-field resize-none scrollbar-hide"
                  placeholder="e.g. Young professionals in tech..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Visual & Text Tone</label>
                <textarea
                  name="tone"
                  value={formData.tone}
                  onChange={handleChange}
                  rows={3}
                  className="input-field resize-none scrollbar-hide"
                  placeholder="e.g. Bold, minimal, high-contrast..."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                {/* Number of Posts */}
                <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Batch Volume</label>
                <div className="relative group">
                    <select
                    name="numPosts"
                    value={formData.numPosts}
                    onChange={handleChange}
                    className="input-field appearance-none cursor-pointer"
                    >
                    <option>1 Single Post</option>
                    <option>3 Post Bundle</option>
                    <option>5 Full Series</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                        <ChevronDown size={18} />
                    </div>
                </div>
                </div>

                <div className="flex items-center p-3 rounded-xl bg-slate-50 border border-slate-100 transition-all hover:bg-slate-100/50">
                    <label className="relative flex items-center cursor-pointer flex-1 group">
                        <input
                            type="checkbox"
                            name="includeLogo"
                            checked={formData.includeLogo}
                            onChange={handleChange}
                            className="sr-only peer"
                        />
                        <div className="w-10 h-6 bg-slate-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                        <span className="ml-3 text-sm font-bold text-slate-600">Overlay Master Logo</span>
                    </label>
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-purple-600 shadow-sm">
                        <Check size={16} />
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
                <button
                    type="button"
                    onClick={() => onGenerate(formData)}
                    className="btn-primary w-full flex items-center justify-center gap-3 py-4 text-lg group"
                >
                    <Sparkles size={20} className="animate-pulse" />
                    <span>Generate AI Post Collection</span>
                    <div className="absolute inset-0 bg-white/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
                </button>
                <p className="text-center text-[10px] text-slate-400 mt-4 font-bold uppercase tracking-[0.15em]">Powered by FLUX.1 + GPT-4o Vision</p>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default GenerateForm;
