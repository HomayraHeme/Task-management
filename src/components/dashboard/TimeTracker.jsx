import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import timeImg from '../../assets/time.png'; 

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
        <div 
            className="p-6 rounded-2xl text-white shadow-xl shadow-emerald-900/20 flex flex-col justify-between h-full bg-cover bg-center bg-no-repeat relative overflow-hidden"
            style={{ backgroundImage: `url(${timeImg})` }}  
        >
            
            <div className="absolute inset-0  z-0"></div>

            <div className="relative z-10">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-medium opacity-90">Time Tracker</h3>
                </div>
                <div className="flex flex-col items-center py-4">
                    <div className="text-4xl font-black mb-1 tabular-nums tracking-wider">
                        {format(seconds)}
                    </div>
                </div>
            </div>

            <div className="flex gap-4 items-center justify-center relative z-10">
                <button
                    onClick={() => setIsRunning(prev => !prev)}
                    className="flex items-center justify-center bg-white text-[#1B4332] rounded-full w-12 h-12 hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 shadow-lg"
                >
                    {isRunning
                        ? <Pause size={24} fill="#1B4332" />
                        : <Play size={24} className="ml-1" fill="#1B4332" />
                    }
                </button>
                <button
                    onClick={handleStop}
                    className="w-12 h-12 bg-red-500/90 rounded-full flex items-center justify-center hover:bg-red-500 transition-all hover:scale-105 active:scale-95 shadow-lg"
                >
                    <div className="w-4 h-4 bg-white rounded-sm" />
                </button>
            </div>
        </div>
    );
};

export default TimeTracker;