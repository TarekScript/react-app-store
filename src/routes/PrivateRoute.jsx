import React, { use } from 'react';
import { Navigate } from 'react-router';
import Loader from '../pageses/Loader';
import { AuthContext } from '../provider/ContextProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    if (loading) {
        return <Loader></Loader>
    }
    if (!user) {
        return <Navigate to='/login'></Navigate>
    }
    return children;
};

export default PrivateRoute;