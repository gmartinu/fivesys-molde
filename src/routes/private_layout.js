import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils';
import Layout from '../components/layout/index'
const LayoutRoute = ({title, component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isLogin() ?
                <Layout title={title}>
                    <Component {...props} />
                </Layout>
            : <Redirect to="/" />
        )} />
    );
};

export default LayoutRoute;