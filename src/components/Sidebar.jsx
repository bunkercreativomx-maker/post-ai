import React from 'react';
import { 
  LayoutDashboard, 
  Sparkles, 
  CalendarDays, 
  FileText, 
  Image as ImageIcon, 
  Users, 
  Settings,
  LogOut
} from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-50 border-r border-gray-200 flex flex-col justify-between">
      <div>
        <div className="p-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 border-none">PostAI</span>
          </div>
          <span className="text-xs text-gray-500 font-medium ml-10 -mt-1 block">Business Pro</span>
        </div>

        <div className="px-4 mb-6">
          <button className="w-full flex items-center justify-between px-3 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
            <span className="text-sm font-medium text-gray-700">Las Alitas</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <nav className="px-3 space-y-1">
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">
            <LayoutDashboard size={20} className="text-gray-400" />
            <span className="text-sm font-medium">Dashboard</span>
          </a>
          
          <a href="#" className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-purple-50 text-purple-700 transition-colors">
            <div className="flex items-center gap-3">
              <Sparkles size={20} className="text-purple-600" />
              <span className="text-sm font-medium">Generate Posts</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div>
          </a>

          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">
            <CalendarDays size={20} className="text-gray-400" />
            <span className="text-sm font-medium">Calendar</span>
          </a>

          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">
            <FileText size={20} className="text-gray-400" />
            <span className="text-sm font-medium">Posts</span>
          </a>

          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">
            <ImageIcon size={20} className="text-gray-400" />
            <span className="text-sm font-medium">Media Library</span>
          </a>

          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">
            <Users size={20} className="text-gray-400" />
            <span className="text-sm font-medium">Workspace</span>
          </a>

          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors pt-6">
            <Settings size={20} className="text-gray-400" />
            <span className="text-sm font-medium">Settings</span>
          </a>
        </nav>
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-medium text-sm">
            F
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Francisco</p>
            <p className="text-xs text-gray-500 font-mono truncate w-36">bunkercreativomx@gmail.c...</p>
          </div>
        </div>
        <button className="flex items-center gap-3 px-3 py-2 w-full text-gray-600 hover:text-gray-900 transition-colors">
          <LogOut size={18} className="text-gray-400" />
          <span className="text-sm font-medium">Sign out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
