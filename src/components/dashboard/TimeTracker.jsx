 import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

const TimeTracker = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [isRunning]);

    const format = (totalSeconds) => {
        const h = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
        const m = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
        const s = (totalSeconds % 60).toString().padStart(2, '0');
        return `${h}:${m}:${s}`;
    };

    const handleStop = () => {
        clearInterval(intervalRef.current);
        setSeconds(0);
        setIsRunning(false);
    };

    return (
        <div className="bg-gradient-to-b from-[#1B4332] via-[#276443] to-[#3C7A5C] p-6 rounded-2xl text-white shadow-xl shadow-emerald-900/20 flex flex-col justify-between h-full">
            <div>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl">Time Tracker</h3>
                </div>
                <div className="flex flex-col items-center py-4">
                    <div className="text-4xl font-black mb-1 tabular-nums">
                        {format(seconds)}
                    </div>
                    
                </div>
            </div>
            <div className="flex gap-2 items-center justify-center">
                <button
                    onClick={() => setIsRunning(prev => !prev)}
                    className="flex items-center justify-center bg-white text-[#1B4332] rounded-full w-12 h-12 hover:bg-slate-100 transition-colors"
                >
                    {isRunning
                        ? <Pause size={24} fill="#1B4332" />
                        : <Play size={24} fill="#1B4332" />
                    }
                </button>
                <button
                    onClick={handleStop}
                    className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
                >
                    <div className="w-5 h-5 bg-white rounded" />
                </button>
            </div>
        </div>
    );
};

export default TimeTracker;
