 import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import PrvtRoutes from './Routes/PrvtRoute';
import { useAuth } from './Context/AuthContext';
import Login from './Pages/login';
import Dashboard from './Dashboard';



export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={
                    <PrvtRoutes>
                        <Dashboard />
                    </PrvtRoutes>
                } />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}