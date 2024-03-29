import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {

    const {user , isLoading} = useAuth();

    console.log(isLoading);
    
    if(isLoading){
        return <Spinner animation="border" variant="primary" />
    }
    
    return (
        <Route
        {...rest}
        render={({ location }) =>
            user?.email ? (
            children
            ) : (
            <Redirect
                to={{
                pathname: "/login",
                state: { from: location }
                }}
            />
            )
        }
        />
    );
};

export default PrivateRoute;