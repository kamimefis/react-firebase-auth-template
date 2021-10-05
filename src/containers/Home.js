import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavTop from '../components/NavTop';
import Dashboard from './Dashboard';

const Home = () => {

    return (
        <>
            <NavTop />
            <Switch>
                <Route path='/' exact render={() => <Dashboard />} />
            </Switch>
        </>
    );
}

export default Home