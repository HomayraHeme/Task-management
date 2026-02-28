 import React from 'react';

const ProjectProgress = ({ analytics }) => {
    const progress = analytics?.progress || 75;
    const completed = analytics?.completedCount || 1;
    const inProgress = analytics?.inProgressCount || 2;

    const total = completed + inProgress;
    const pending = 1;

    // Segment percentages
    const completedPercent = total > 0 ? (completed / total) * progress : 0;
    const inProgressPercent = total > 0 ? (inProgress / total) * progress : 0;
    const pendingPercent = 100 - progress;

     
    const cx = 110, cy = 100, r = 90;
    const semiCircumference = Math.PI * r;

    const completedArc = (completedPercent / 100) * semiCircumference;
    const inProgressArc = (inProgressPercent / 100) * semiCircumference;
    const pendingArc = (pendingPercent / 100) * semiCircumference;

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-full flex flex-col">
            <h3 className="font-bold text-sm mb-1">Project Progress</h3>

            <div className="flex flex-col items-center flex-1 justify-center">
                {/* Gauge */}
                <div className="relative" style={{ width: 220, height: 120 }}>
                    <svg
                        viewBox="0 0 220 110"
                        width="220"
                        height="110"
                        style={{ overflow: 'visible' }}
                    >
                        <defs>
                            <pattern id="stripes" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
                                <rect width="3" height="6" fill="#94A3B8" />
                                <rect x="3" width="3" height="6" fill="white" />
                            </pattern>
                        </defs>

                        {/* Track */}
                        <path
                            d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
                            fill="none"
                            stroke="#F1F5F9"
                            strokeWidth="42"
                            strokeLinecap="round"
                        />

                        {/* Pending (striped) */}
                        <path
                            d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
                            fill="none"
                            stroke="url(#stripes)"
                            strokeWidth="42"
                            strokeLinecap="round"
                            strokeDasharray={`${pendingArc} ${semiCircumference}`}
                            strokeDashoffset={-(completedArc + inProgressArc)}
                        />

                        {/* In Progress (dark green) */}
                        <path
                            d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
                            fill="none"
                            stroke="#085123"
                            strokeWidth="42"
                            strokeLinecap="round"
                            strokeDasharray={`${inProgressArc} ${semiCircumference}`}
                            strokeDashoffset={-completedArc}
                            className="transition-all duration-1000 ease-out"
                        />

                        {/* Completed (light green) */}
                        <path
                            d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
                            fill="none"
                            stroke= "#28864b"
                            strokeWidth="42"
                            strokeLinecap="round"
                            strokeDasharray={`${completedArc} ${semiCircumference}`}
                            className="transition-all duration-1000 ease-out"
                        />
                    </svg>

                    {/* Center text */}
                    <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center" style={{ bottom: -8 }}>
                        <span className="text-3xl font-black text-slate-900 leading-none">{progress}%</span>
                        <span className="text-[9px] text-slate-400 uppercase font-bold tracking-wider mt-1">Project Ended</span>
                    </div>
                </div>

                {/* Legend */}
                <div className="flex items-center gap-5 mt-5 text-[9px] font-bold text-slate-500 uppercase tracking-wide">
                    <div className="flex items-center gap-1.5">
                        <span className="w-3.5 h-3.5 rounded-full bg-[#28864b] flex-shrink-0" />
                        Completed  
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="w-3.5 h-3.5 rounded-full bg-[#085123] flex-shrink-0" />
                        In Progress  
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="w-3.5 h-3.5 rounded-full flex-shrink-0" style={{
                            background: 'repeating-linear-gradient(135deg,#94A3B8 0,#94A3B8 2px,white 2px,white 4px)'
                        }} />
                        Pending  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectProgress;