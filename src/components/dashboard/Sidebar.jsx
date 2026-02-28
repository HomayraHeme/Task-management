 import React from 'react';
import { LayoutDashboard, CheckSquare, Calendar, BarChart2, Users, Settings, HelpCircle, LogOut } from 'lucide-react';
import { useAuth } from '../../Context/AuthContext';
import logo from "../../assets/donezo.png";
const Sidebar = () => {
    const { logout } = useAuth();
    return (
        <aside className="w-60 bg-[#F8F9FA] rounded-2xl p-6 mt-4 mx-4  flex flex-col shadow-sm border border-slate-100 hidden lg:flex h-full">
            <div className="flex items-center justify-center gap-2 mb-10 px-2 font-bold text-2xl text-black">
                <div className=" pb-2 rounded-lg text-white"><img src={logo} className='w-12 h-10' alt="" /></div>
               <div className='relative top-[-5px]'> Donezo</div>
            </div>
            <nav className="flex-1 space-y-1">
                <div className="text-sm  text-slate-400 uppercase px-4 mb-2">Menu</div>
                <NavItem icon={<LayoutDashboard size={24} />} label="Dashboard" active />
                <NavItem icon={<CheckSquare size={24} />} label="Tasks" badge="12+" />
                <NavItem icon={<Calendar size={24} />} label="Calendar" />
                <NavItem icon={<BarChart2 size={24} />} label="Analytics" />
                <NavItem icon={<Users size={24} />} label="Team" />
                <div className="pt-8"><p className="text-sm  text-slate-400 uppercase px-4 mb-2">  General</p></div>
                <NavItem icon={<Settings size={24} />} label="Settings" />
                <NavItem icon={<HelpCircle size={24} />} label="Help" />




                <button onClick={logout} className="w-full flex items-center gap-3 px-3 py-3 text-slate-400 hover:text-red-500 transition-colors">
                    <LogOut size={24} /> <span className="text-lg ">Logout</span>
                </button>
            </nav>

            {/* Sidebar Bottom Promo Card */}
            <div className="mt-30 ">
                <div className="relative overflow-hidden bg-gradient-to-br from-[#081C15] to-[#1B4332] p-4 rounded-2xl text-white">


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
    <div className={`relative flex items-center justify-between px-2 py-2.5 rounded-2xl cursor-pointer transition-all ${active ? 'none' : 'text-slate-400 hover:bg-white/60'}`}>
        {/* Left gradient accent bar */}
        {active && (
            <span
                className="absolute left-[-25px] top-1/2 -translate-y-1/2 w-[9px] h-10 rounded-r-full"
                style={{ background: 'linear-gradient(to bottom, #1B4332 , #52B788)' }}
            />
        )}
        <div className="flex items-center gap-3 pl-2">
            <span className={active ? 'text-[#1B4332]' : 'text-slate-400'}>{icon}</span>
            <span className={`text-lg ${active ? 'font-bold text-slate-800' : 'none'}`}>{label}</span>
        </div>
        {badge && <span className="text-[10px] bg-[#1B4332] text-white px-1.5 py-0.5 rounded-lg">{badge}</span>}
    </div>
);

export default Sidebar;
