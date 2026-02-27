 import React from 'react';
import { Search, Mail, Bell } from 'lucide-react';

const Header = () => {
    return (
        <header className="flex justify-between items-center px-8 py-3 bg-[#F8F9FA] rounded-2xl shadow-sm border border-slate-100 mt-4">
            <div className="relative w-80 group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1B4332] transition-colors" size={16} />
                <input type="text" placeholder="Search task" className="w-full pl-10 pr-12 py-2 bg-white rounded-full text-sm outline-none shadow-sm border border-transparent focus:border-slate-200 transition-all font-medium" />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 bg-slate-50 border border-slate-100 px-2 py-1 rounded-full text-[10px] font-bold text-slate-400 pointer-events-none">
                    <span className="text-[12px] leading-none">⌘</span> <span>F</span>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <HeaderBtn icon={<Mail size={18} />} />
                <HeaderBtn icon={<Bell size={18} />} />
                <div className="flex items-center gap-3  pl-1 pr-4 py-1  hover:bg-slate-50 transition-colors">
                    <img src="https://ui-avatars.com/api/?name=Totok+Michael" className="w-8 h-8 rounded-full" alt="User" />
                    <div className="flex flex-col pr-2">
                        <div className="text-[10px] leading-tight font-bold">Totok Michael</div>
                        <div className="text-[8px] text-slate-400">tmichael@donezo.com</div>
                    </div>
                </div>
            </div>
        </header>
    );
};

const HeaderBtn = ({ icon }) => (
    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 cursor-pointer hover:bg-slate-50 transition-colors">
        {icon}
    </div>
);

export default Header;
