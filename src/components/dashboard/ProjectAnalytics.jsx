 import React from 'react';

const ProjectAnalytics = ({ analytics }) => {
    return (
         <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 h-full flex flex-col justify-between">
            <h3 className="font-bold text-sm ">Project Analytics</h3>

             <div className="flex items-end justify-between h-28 gap-2 px-1">
                {(analytics?.chartData || ['S', 'M', 'T', 'W', 'T', 'F', 'S']).map((item, i) => {
                    const label = typeof item === 'string' ? item : item.label;
                    const value = typeof item === 'string' ? (40 + Math.random() * 50) : item.value;

                    return (
                        <div key={i} className="flex flex-col items-center flex-1 group h-full">
                            <div className="w-full relative flex items-end h-full">
                                <div
                                    className={`w-full rounded-3xl transition-all duration-500 ${i === 3 ? 'bg-[#1B4332]' : 'bg-emerald-100 group-hover:bg-emerald-200'
                                        }`}
                                    style={{ height: `${value}%` }}
                                />
                            </div>
                            <span className="text-[10px] text-slate-400 mt-2 font-bold">{label}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectAnalytics;