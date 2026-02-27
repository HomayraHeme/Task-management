import { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router';
import api from '../services/api';

export default function Login() {
    const [email, setEmail] = useState('user1@example.com');
    const [password, setPassword] = useState('password123');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/login', { email, password });
            login(res.data);
            navigate('/dashboard');
        } catch (err) {
            alert("Invalid credentials. Please use the default user1@example.com / password123.");
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
            <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Donezo Login</h1>
                <p className="text-slate-500 mb-8 text-sm">Welcome back! Please enter your details.</p>
                <form onSubmit={handleLogin} className="space-y-5">
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-4 border rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none" required />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-4 border rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none" required />
                    <button type="submit" className="w-full bg-[#1B4332] text-white py-4 rounded-2xl font-bold hover:bg-emerald-900 transition">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}