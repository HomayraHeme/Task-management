 import { useEffect, useState } from "react";
import { Plus, Download } from "lucide-react";
import Reminders from "./components/dashboard/Reminders";
import { useAuth } from "./Context/AuthContext";
import Header from "./components/dashboard/Header";
import api from "./services/api";
import TeamCollaboration from "./components/dashboard/TeamCollaboration";
import Sidebar from "./components/dashboard/Sidebar";
import ProjectAnalytics from "./components/dashboard/ProjectAnalytics";
import StatCards from "./components/dashboard/StatCards";
import ProjectList from "./components/dashboard/ProjectList";
import TimeTracker from "./components/dashboard/TimeTracker";
import ProjectProgress from "./components/dashboard/ProjectProgress";

const Index = () => {
    const { user } = useAuth();
    const [data, setData] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const [dashboardRes, productsRes] = await Promise.all([
                    api.get("/dashboard"),
                    api.get("/products")
                ]);
                setData(dashboardRes.data);
                setProducts(productsRes.data);
            } catch (err) {
                console.error("Data fetch error", err);
            }
        };
        if (user?.token) fetchDashboardData();
    }, [user]);

    return (
        <div className="flex min-h-screen bg-white rounded-2xl shadow-xl overflow-hidden">
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0">
                <Header />
                <main className="flex-1 p-6 overflow-auto custom-scrollbar bg-[#F8F9FA] rounded-2xl mt-4 shadow-sm border border-slate-100">
                    {/* Dashboard Title & Buttons */}
                    <div className="flex items-start justify-between  ">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
                            <p className="text-slate-400 mt-1 italic">Plan, prioritize, and accomplish your tasks with ease.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="flex items-center gap-2 bg-[#1B4332] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-900 transition-all shadow-lg shadow-emerald-900/10">
                                <Plus className="w-4 h-4" /> Add Project
                            </button>
                            <button className="flex items-center gap-2 border border-slate-200 bg-white text-slate-700 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-all">
                                <Download className="w-4 h-4" /> Import Data
                            </button>
                        </div>
                    </div>

                    {/* Stat Cards Section */}
                   <div className="mt-5">
                     <StatCards overview={{ ...data?.overview, totalProjects: products.length }} />
                   </div>


                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4 items-start">
                        <div className="lg:col-span-2 h-[230px] ">
                            <ProjectAnalytics
                                analytics={data?.analytics}
                                className="h-full"
                            />
                        </div>

                        <div className="h-[320px]">
                            <Reminders className="h-full" />
                        </div>

                        <div className="lg:col-span-1">
                            <ProjectList products={products} />
                        </div>
                    </div>
                   
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-6 items-start">
                        
                        <div className="lg:col-span-4 relative -top-[90px] h-[310px] gap-4">
                            <TeamCollaboration users={data?.users} />
                        </div>

                       
                        <div className="lg:col-span-5 relative -top-[90px] h-[310px] gap-4">
                            <ProjectProgress analytics={data?.analytics} />
                        </div>

                        
                        <div className="lg:col-span-3">
                            <TimeTracker />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Index;