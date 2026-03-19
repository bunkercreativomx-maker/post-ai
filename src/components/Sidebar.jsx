import React from 'react';
import { 
  LayoutDashboard, 
  Sparkles, 
  CalendarDays, 
  FileText, 
  Image as ImageIcon, 
  Users, 
  Settings,
  LogOut,
  ChevronDown
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: false },
    { icon: Sparkles, label: 'Generate Posts', active: true },
    { icon: CalendarDays, label: 'Calendar', active: false },
    { icon: FileText, label: 'All Posts', active: false },
    { icon: ImageIcon, label: 'Media Library', active: false },
    { icon: Users, label: 'Workspace', active: false },
  ];

  return (
    <aside className="w-72 h-screen bg-white border-r border-slate-100 flex flex-col z-20">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-200">
            <span className="text-white font-black text-xl">P</span>
          </div>
          <div>
            <span className="text-2xl font-black tracking-tight text-slate-900">PostAI</span>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">v1.2 Studio</span>
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <p className="px-4 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Main Menu</p>
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                item.active 
                  ? 'bg-purple-50 text-purple-700 shadow-sm shadow-purple-100/50' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon size={20} className={item.active ? 'text-purple-600' : 'text-slate-400 group-hover:text-slate-600'} />
                <span className="text-sm font-semibold">{item.label}</span>
              </div>
              {item.active && <div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div>}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-auto p-4 space-y-4">
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
             <div className="flex items-center justify-between mb-2">
                 <span className="text-xs font-bold text-slate-500">Usage Limit</span>
                 <span className="text-xs font-bold text-purple-600">80%</span>
             </div>
             <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                 <div className="h-full bg-purple-600 w-[80%]" />
             </div>
             <p className="text-[10px] text-slate-400 mt-2">Upgrade to Pro for unlimited AI generations</p>
        </div>

        <div className="p-4 bg-white border border-slate-100 rounded-2xl flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-slate-200 to-slate-300 flex items-center justify-center text-slate-600 font-bold overflow-hidden border-2 border-white ring-1 ring-slate-100">
            <img src="https://ui-avatars.com/api/?name=User&background=8b5cf6&color=fff" alt="User" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-slate-900 truncate">Account Manager</p>
            <p className="text-[10px] font-medium text-slate-400 truncate tracking-tight">workspace@postai.app</p>
          </div>
          <button className="text-slate-400 hover:text-slate-600 transition-colors">
            <Settings size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
