import { createBrowserRouter, Navigate, } from "react-router";
import PrvtRoutes from "./PrvtRoute";
import Login from "../Pages/login";
import Dashboard from "../Dashboard";
import App from "../App";

// Create the router configuration
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Navigate to="/dashboard" replace />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "dashboard",
                element: (
                    <PrvtRoutes>
                        <Dashboard />
                    </PrvtRoutes>
                )
            },
            // Catch all unmatched routes
            {
                path: "*",
                element: <Navigate to="/dashboard" replace />
            }
        ]
    }
]);

 
