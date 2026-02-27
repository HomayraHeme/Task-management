 import React from 'react';
import { ArrowUpRight, CheckSquare } from 'lucide-react';

const StatCards = ({ overview }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            <StatCard label="Total Projects" val={overview?.totalProjects || "4"} sub="Increased from last month" dark />
            <StatCard label="Ended Projects" val={overview?.endedProjects || "1"} sub="Increased from last month" />
            <StatCard label="Running Projects" val={overview?.runningProjects || "2"} sub="Increased from last month" />
            <StatCard label="Pending Projects" val={overview?.pendingProjects || "1"} sub="On Discuss" />
        </div>
    );
};

const StatCard = ({ label, val, sub, dark }) => (
    <div className={`p-6 rounded-2xl shadow-sm relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${dark ? 'bg-[#1B4332] text-white' : 'bg-white text-slate-900 border border-slate-100'}`}>
        <p className="text-[10px] font-bold uppercase opacity-60 mb-2">{label}</p>
        <p className="text-4xl font-black mb-4">{val}</p>
        <div className="flex items-center gap-1 opacity-50 text-[10px]">
            <CheckSquare size={10} /> {sub}
        </div>
        <ArrowUpRight className="absolute top-6 right-6 opacity-30" size={18} />
    </div>
);

export default StatCards;
