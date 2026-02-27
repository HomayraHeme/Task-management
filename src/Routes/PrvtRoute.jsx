import { useContext } from 'react';

import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Spinner from '../components/Spinner';

const PrvtRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    // console.log(location);

    if (loading) {
        return <Spinner></Spinner>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace />;

};

export default PrvtRoutes;