 import React from 'react';
import { Play } from 'lucide-react';

const Reminders = () => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-sm mb-4">Reminders</h3>
            <div className="  mb-4 p-2 ">
                <p className="font-bold  text-emerald-900 text-lg">Meeting with Arc Company</p>
                <p className="text-xs text-slate-400 mt-1">Time: 02.00 pm - 04.00 pm</p>
            </div>

            <button className="w-full  bg-gradient-to-r from-[#1B4332] to-[#276443] text-white py-3 rounded-2xl flex items-center justify-center gap-2 text-xs font-bold hover:bg-emerald-900 transition-colors shadow-lg shadow-emerald-900/10">
                <Play fill="white" size={14} /> Start Meeting
            </button>
        </div>
    );
};

export default Reminders;
