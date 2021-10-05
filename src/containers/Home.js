import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import NavTop from '../components/NavTop'
import Dashboard from './Dashboard'
import { auth } from '../firebase'

const Home = () => {
    const [loggedin, setLoggedin] = useState(null)
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const fetchUser = () => {
            auth.onAuthStateChanged(user => {
                setUser(user)
                if (user) {
                    setLoggedin(true);
                    setLoading(false);
                } else {
                    setLoggedin(false);
                    setLoading(false);
                }
            })
        }
        fetchUser()
    }, [])

    // console.log(user, 'user!');
    return (
        <>
            {loggedin ? <NavTop /> : null}
            <Switch>
                <Route path='/' exact render={() => <Dashboard user={user} loading={loading} loggedin={loggedin} />} />
            </Switch>
        </>
    );
}

export default Home