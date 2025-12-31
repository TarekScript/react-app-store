import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import Loader from '../pageses/Loader';
import { AuthContext } from '../provider/ContextProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loader></Loader>
    }
    if (!user) {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
    return children;
};

export default PrivateRoute;