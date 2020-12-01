import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './Auth';


function PrivateRoute({ component: RouteComponent, ...props }) {
    const { user } = useContext(AuthContext);
    return (
        <Route {...props} render={routeProps =>
            !!user ? (
                <RouteComponent {...routeProps} />
            ) : (
                    <Redirect to='/login' />
                )
        } />
    );
};

export default PrivateRoute;
