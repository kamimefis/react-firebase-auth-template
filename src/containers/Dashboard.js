import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FirstPage from '../components/FirstPage'
import SecondPage from '../components/SecondPage'
import ThirdPage from '../components/ThirdPage'
import BottomNav from '../components/BottomNav';

const useStyles = makeStyles({
    divContent: { margin: '60px 0px 80px', textAlign: 'center' },
});

const Dashboard = () => {
    const classes = useStyles();
    const [displayMode, setDisplayMode] = useState('start')

    return (
        <div>
            {displayMode === 'first' && <div className={classes.divContent}><FirstPage /></div>}
            {displayMode === 'second' && <div className={classes.divContent}><SecondPage /></div>}
            {displayMode === 'third' && <div className={classes.divContent}><ThirdPage /></div>}
            <BottomNav setDisplayMode={setDisplayMode} />
        </div>
    );
}

export default Dashboard;
