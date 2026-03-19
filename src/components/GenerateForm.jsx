import React, { useState } from 'react';
import { Globe, Bot, Upload } from 'lucide-react';

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
    <div className="max-w-3xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Posts</h1>
        <p className="text-gray-500">Step 1 of 2: Configure your AI post generation settings.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Top Header Gradient/Color block */}
        <div className="h-20 bg-gradient-to-br from-[#c8a2f8] to-[#e4d4fc] w-full"></div>
        
        <div className="p-8">
          <form className="space-y-6">
            
            {/* Business Name Input */}
            <div>
              <label className="block text-sm justify-between flex text-gray-700 font-medium mb-1.5">
                Business Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full border-gray-200 border rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-shadow outline-none"
                  placeholder="e.g. Las Alitas"
                />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-green-50 rounded-full border border-green-200 flex items-center justify-center text-green-700 hover:bg-green-100 transition-colors">
                  <Bot size={16} />
                </button>
              </div>
            </div>

            {/* Website URL Input */}
            <div>
              <label className="block text-sm text-gray-700 font-medium mb-1.5">
                Website URL
              </label>
              <div className="relative">
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full border-gray-200 border rounded-lg pl-4 pr-10 py-3 text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-shadow outline-none"
                  placeholder="https://example.com"
                />
                <Globe size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Grid for Target Audience & Tone */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-700 font-medium mb-1.5">
                  Target Audience
                </label>
                <textarea
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleChange}
                  rows={3}
                  className="w-full border-gray-200 border rounded-lg pl-4 pr-4 py-3 text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-shadow outline-none resize-none"
                  placeholder="Describe your ideal customer..."
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 font-medium mb-1.5">
                  Tone & Style
                </label>
                <textarea
                  name="tone"
                  value={formData.tone}
                  onChange={handleChange}
                  rows={3}
                  className="w-full border-gray-200 border rounded-lg pl-4 pr-4 py-3 text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-shadow outline-none resize-none"
                  placeholder="e.g. Professional, Witty, Casual..."
                />
              </div>
            </div>

            {/* Number of Posts */}
            <div>
              <label className="block text-sm text-gray-700 font-medium mb-1.5">
                Number of Posts
              </label>
              <div className="relative w-48">
                <select
                  name="numPosts"
                  value={formData.numPosts}
                  onChange={handleChange}
                  className="w-full border-gray-200 border rounded-lg pl-4 pr-10 py-3 text-gray-900 appearance-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none bg-white"
                >
                  <option>1 Post</option>
                  <option>3 Posts</option>
                  <option>5 Posts</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Product Photo Upload Area */}
            <div>
              <label className="block text-sm text-gray-700 font-medium mb-1.5 flex items-center gap-2">
                Product Photo <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="flex-1 border border-dashed border-gray-200 hover:border-purple-400 hover:bg-purple-50 rounded-xl h-14 flex items-center justify-center gap-2 text-sm text-gray-400 transition-colors"
                >
                  <Upload size={18} />
                  Upload new (PNG, JPG, WebP - max 5MB)
                </button>
                <button
                  type="button"
                  className="flex-1 border border-dashed border-gray-200 hover:border-purple-400 hover:bg-purple-50 rounded-xl h-14 flex items-center justify-center gap-2 text-sm text-gray-400 transition-colors"
                >
                  <ImageIcon size={18} />
                  Pick from library
                </button>
              </div>
            </div>

            {/* Brand Logo Checkbox */}
            <div className="flex items-center p-4 rounded-lg bg-[#eafbf0] border-transparent mt-2">
              <input
                type="checkbox"
                name="includeLogo"
                id="includeLogo"
                checked={formData.includeLogo}
                onChange={handleChange}
                className="w-4 h-4 text-green-600 bg-white border-green-300 rounded focus:ring-green-500 focus:ring-2"
              />
              <label htmlFor="includeLogo" className="ml-3 text-sm font-medium text-green-800">
                Brand logo from workspace will be included in generated posts
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={() => onGenerate(formData)}
              className="w-full mt-2 bg-gradient-to-r from-[#9b51e0] to-[#b070f0] hover:from-[#8a42cf] hover:to-[#9c5ee0] text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-purple-200"
            >
              <Sparkles size={18} />
              Generate {formData.numPosts}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default GenerateForm;
