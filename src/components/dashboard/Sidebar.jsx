 import React from 'react';
import { LayoutDashboard, CheckSquare, Calendar, BarChart2, Users, Settings, HelpCircle, LogOut } from 'lucide-react';
import { useAuth } from '../../Context/AuthContext';
 
const Sidebar = () => {
    const { logout } = useAuth();
    return (
        <aside className="w-64 bg-[#F8F9FA] rounded-[32px] p-6 m-4 flex flex-col shadow-sm border border-slate-100 hidden lg:flex h-[900px]">
            <div className="flex items-center gap-2 mb-10 px-2 font-bold text-xl text-[#1B4332]">
                <div className="bg-[#1B4332] p-1.5 rounded-lg text-white"><CheckSquare size={18} /></div>
                Donezo
            </div>
            <nav className="flex-1 space-y-1">
                <NavItem icon={<LayoutDashboard size={18} />} label="Dashboard" active />
                <NavItem icon={<CheckSquare size={18} />} label="Tasks" badge="12+" />
                <NavItem icon={<Calendar size={18} />} label="Calendar" />
                <NavItem icon={<BarChart2 size={18} />} label="Analytics" />
                <NavItem icon={<Users size={18} />} label="Team" />
                <div className="pt-8"><p className="text-[10px] font-bold text-slate-400 uppercase px-3 mb-2">General</p></div>
                <NavItem icon={<Settings size={18} />} label="Settings" />
                <NavItem icon={<HelpCircle size={18} />} label="Help" />

                {/* Sidebar Bottom Promo Card */}


                <button onClick={logout} className="w-full flex items-center gap-3 px-3 py-3 text-slate-400 hover:text-red-500 transition-colors">
                    <LogOut size={18} /> <span className="text-sm font-medium">Logout</span>
                </button>
            </nav>
            <div className="mt-auto px-2 mb-6">
                <div className="relative overflow-hidden bg-gradient-to-br from-[#081C15] to-[#1B4332] p-4 rounded-[24px] text-white">
                    {/* Abstract background shapes */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="scale-150">
                            <path fill="#52B788" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.1,72.6,41.4C63.8,53.7,51.8,63.7,38.4,70.5C25,77.3,10.2,80.8,-4.2,88.1C-18.6,95.3,-37.2,106.3,-50.2,101.3C-63.1,96.3,-70.5,75.3,-76.3,58.3C-82.1,41.2,-86.3,28.1,-89.1,14.2C-91.8,0.3,-93.1,-14.4,-88.7,-27.9C-84.3,-41.4,-74.1,-53.8,-61.7,-61.9C-49.3,-70,-34.7,-73.8,-20.5,-77.9C-6.2,-82,7.7,-86.4,23.5,-85.4C39.3,-84.4,56.9,-77.9,44.7,-76.4Z" transform="translate(100 100)" />
                        </svg>
                    </div>

                    <div className="relative z-10">
                        {/* Small Icon/Logo */}
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mb-3">
                            <div className="w-2 h-2 bg-white rounded-full" />
                        </div>

                        <h4 className="text-sm font-bold leading-tight mb-1">
                            Download our<br />Mobile App
                        </h4>
                        <p className="text-[10px] text-white/60 mb-4 font-medium">
                            Get easy in another way
                        </p>

                        <button className="w-full bg-[#52B788] hover:bg-[#40916c] text-white py-2 rounded-full text-[11px] font-bold transition-all">
                            Download
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
};

const NavItem = ({ icon, label, active, badge }) => (
    <div className={`flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all ${active ? 'bg-[#1B4332] text-white shadow-lg shadow-[#1B4332]/20' : 'text-slate-400 hover:bg-slate-50'}`}>
        <div className="flex items-center gap-3">
            {icon} <span className="text-sm font-medium">{label}</span>
        </div>
        {badge && <span className="text-[10px] bg-[#1B4332] text-white px-1.5 py-0.5 rounded-lg border border-white/20">{badge}</span>}
    </div>
);

export default Sidebar;
