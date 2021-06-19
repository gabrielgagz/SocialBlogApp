import React from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Home } from '../views/Home';

export const AppRouter = () => {

    return (
        <Router>
            <>
                <Switch>
                    <Route exact path='/' component={ Home } />
                    <Redirect to='/' />
                </Switch>
            </>
        </Router>
    )
}