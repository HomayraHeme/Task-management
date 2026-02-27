 import React from 'react';

const TeamCollaboration = ({ users }) => {
    const team = users || [
        { id: 1, name: 'Totok Michael', role: 'UI/UX Designer', status: 'Completed' },
        { id: 2, name: 'Indra Kurniawan', role: 'Frontend Dev', status: 'In Progress' },
        { id: 3, name: 'Siti Aminah', role: 'Backend Dev', status: 'In Progress' },
        { id: 4, name: 'Budi Santoso', role: 'Project Manager', status: 'Completed' }
    ];

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-full pb-10">
            <div className="flex justify-between items-center ">
                <h3 className="font-bold text-sm">Team Collaboration</h3>
                <button className="text-xs  hover:underline text-green-600 border border-green-600 rounded-2xl px-2 py-1">+ Add Member</button>
            </div>
            <div className="space-y-4">
                {team.slice(0, 4).map((member) => (
                    <div key={member.id} className="flex items-center justify-between p-2 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                            <img src={`https://ui-avatars.com/api/?name=${member.name}`} className="w-8 h-8 rounded-full" alt="avatar" />
                            <div>
                                <p className="text-[10px] font-bold leading-tight">{member.name}</p>
                                <p className="text-[8px] text-slate-400">Working on {member.role || "System Design"}</p>
                            </div>
                        </div>
                        <span className={`text-[8px] font-bold px-2 py-0.5 rounded-full ${member.status === 'active' ? 'bg-emerald-50 text-emerald-600 border border-emerald-600' : 'bg-orange-50 text-orange-600 border border-orange-600'}`}>
                            {member.status || "In Progress"}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamCollaboration;
