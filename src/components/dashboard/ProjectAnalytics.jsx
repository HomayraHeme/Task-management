 import React, { useState } from 'react';

const chartData = [
    { label: 'S', value: 70, type: 'striped' },
    { label: 'M', value: 80, type: 'solid', color: '#2D7A4D' },
    { label: 'T', value: 74, type: 'solid', color: '#67C493' },
    { label: 'W', value: 95, type: 'solid', color: '#143D28' },
    { label: 'T', value: 85, type: 'striped' },
    { label: 'F', value: 65, type: 'striped' },
    { label: 'S', value: 75, type: 'striped' },
];

const ProjectAnalytics = ({ analytics }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const data = analytics?.chartData || chartData;

    return (
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 h-full flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-sm text-slate-800">Project Analytics</h3>

            </div>

            {/* Chart */}
            <div className="flex items-end justify-between gap-2 px-1" style={{ height: '7rem' }}>
                {data.map((item, i) => {
                    const label = typeof item === 'string' ? item : item.label;
                    const value = typeof item === 'string' ? 60 : item.value;
                    const type = typeof item === 'string' ? 'striped' : item.type;
                    const color = item.color || null;
                    const hasTooltip = item.hasTooltip || false;
                    const isHovered = hoveredIndex === i;

                    return (
                        <div
                            key={i}
                            className="flex flex-col items-center flex-1 h-full cursor-pointer"
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="w-full relative flex items-end h-full">
                                {/* Tooltip */}
                                {(hasTooltip || isHovered) && (
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 pointer-events-none">
                                        <div
                                            className="px-1.5 py-0.5 rounded-md text-[9px] font-bold shadow-sm border whitespace-nowrap"
                                            style={{
                                                background: color ? color : '#fff',
                                                color: color ? '#fff' : '#10b981',
                                                borderColor: color ? 'transparent' : '#d1fae5',
                                            }}
                                        >
                                            {value}%
                                        </div>
                                        <div
                                            className="w-0 h-0"
                                            style={{
                                                borderLeft: '4px solid transparent',
                                                borderRight: '4px solid transparent',
                                                borderTop: `4px solid ${color || '#d1fae5'}`,
                                            }}
                                        />
                                    </div>
                                )}

                                {/* Bar */}
                                <div
                                    className="w-full rounded-full transition-all duration-500"
                                    style={{
                                        height: `${value}%`,
                                        backgroundColor: type === 'solid' ? color : 'transparent',
                                        border: type === 'striped' ? 'none' : 'none',
                                        backgroundImage:
                                            type === 'striped'
                                                ? 'repeating-linear-gradient(135deg, #94A3B8 0px, #94A3B8 3px, white 3px, white 6px)'
                                                : 'none',
                                        transform: isHovered ? 'scaleX(1.12)' : 'scaleX(1)',
                                        opacity: hoveredIndex !== null && !isHovered ? 0.6 : 1,
                                    }}
                                />
                            </div>

                            {/* Day label */}
                            <span className="text-[10px] text-slate-400 mt-2 font-bold">{label}</span>
                        </div>
                    );
                })}
            </div>



        </div>
    );
};

export default ProjectAnalytics;