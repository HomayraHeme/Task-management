 import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const ProjectList = ({ products }) => {
    const list = (products || []).map(p => ({
        id: p.id,
        name: p.name || p.title || 'Unnamed Product',
        deadline: p.deadline || p.category || 'N/A',
        status: p.status || (p.price ? `$${p.price}` : 'Available')
    })).slice(0, 5); // Limit to 5 for compact dashboard view if no list provided

    const displayList = list.length > 0 ? list : [
        { id: 1, name: 'AI Platform', deadline: '20 Nov, 2024', status: 'In Progress' },
        { id: 2, name: 'Mobile App', deadline: '22 Nov, 2024', status: 'Completed' },
        { id: 3, name: 'Web Dashboard', deadline: '25 Nov, 2024', status: 'In Progress' }
    ];

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-sm">Project</h3>
                <div className='border rounded-2xl text-green-600 border-green-600 text-xs px-2 py-1'>+ New</div>
             </div>
            <div className="space-y-4">
                {displayList.map(project => (
                    <div key={project.id} className="flex flex-col gap-1 pb-3 border-b border-slate-50 last:border-0 last:pb-0">
                        <div className="flex justify-between items-start">
                            <p className="text-[11px] font-bold text-slate-800">{project.name}</p>
                            <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-md ${project.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-600'}`}>
                                {project.status}
                            </span>
                        </div>
                        <p className="text-[9px] text-slate-400 italic">Deadline: {project.deadline}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
