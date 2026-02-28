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
        <div className="flex bg-white rounded-2xl shadow-xl overflow-hidden min-h-screen">
            {/* Sidebar usually hidden on mobile or needs a toggle - assuming standard Sidebar */}
            <Sidebar className="hidden lg:block" />
            
            <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
                <Header />
                
                <main className="flex-1 px-4 md:px-4 pt-6 pb-4 bg-[#F8F9FA] rounded-2xl mt-4 shadow-sm border border-slate-100 mx-2 md:mx-1 mb-4">
                    
                    {/* Dashboard Title & Buttons */}
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Dashboard</h1>
                            <p className="text-slate-400 mt-1 text-sm md:text-base">Plan, prioritize, and accomplish your tasks with ease.</p>
                        </div>
                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gradient-to-r from-[#1B4332] to-[#276443] text-white px-5 py-2.5 rounded-3xl text-sm font-semibold hover:opacity-90 transition-all shadow-lg shadow-emerald-900/10">
                                <Plus className="w-4 h-4" /> <span className="whitespace-nowrap">Add Project</span>
                            </button>
                            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 border border-green-600 bg-white text-green-700 px-5 py-2.5 rounded-3xl text-sm font-semibold hover:bg-emerald-50 transition-all shadow-sm">
                                <span className="whitespace-nowrap">Import Data</span>
                            </button>
                        </div>
                    </div>

                    {/* Stat Cards Section */}
                    <div className="mt-5">
                        <StatCards overview={{ ...data?.overview, totalProjects: products.length }} />
                    </div>

                    {/* Middle Grid: Analytics, Reminders, Project List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 items-start">
                        {/* Project Analytics: Large-e 2 col, Mobile-e auto height */}
                        <div className="md:col-span-2 lg:h-[230px]">
                            <ProjectAnalytics
                                analytics={data?.analytics}
                                className="h-full"
                            />
                        </div>

                        {/* Reminders: Fixed height only on Large */}
                        <div className="lg:h-[320px]">
                            <Reminders className="h-full" />
                        </div>

                        {/* Project List */}
                        <div className="md:col-span-2 lg:col-span-1">
                            <ProjectList products={products} />
                        </div>
                    </div>

                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 mt-4 lg:mt-4 items-start lg:-mb-[80px]">
                        
                        <div className="lg:col-span-4 lg:relative lg:-top-[90px] lg:h-[310px]">
                            <TeamCollaboration users={data?.users} />
                        </div>

                        <div className="lg:col-span-5 lg:relative lg:-top-[90px] lg:h-[310px]">
                            <ProjectProgress analytics={data?.analytics} />
                        </div>

                        <div className="md:col-span-2 lg:col-span-3">
                            <TimeTracker />
                        </div>
                    </div>

                    
                    <div className="h-10 lg:hidden"></div>
                </main>
            </div>
        </div>
    );
};

export default Index;