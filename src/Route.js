import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {
    LoginScreen,
    RegisterScreen,
    Dashboard
} from 'screen';

import { PublicRoute, PrivateRoute } from 'components';
const history = createBrowserHistory();

export const Routing = () => (
    <>
        <Router history={history}>
            <Switch>
                <PublicRoute exact path="/" component={LoginScreen} />
                <PublicRoute exact path="/auth/login" component={LoginScreen} />
                <PublicRoute exact path="/auth/register" component={RegisterScreen} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
        </Router>
    </>
);
