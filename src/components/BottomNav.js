import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import StarsIcon from '@material-ui/icons/Stars';
import HomeIcon from '@material-ui/icons/Home';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

const useStyles = makeStyles({
    dynamicNav: {
        position: 'fixed', width: '100%', bottom: 0
    },
});

const MyBottomNavigationAction = withStyles({
    root: {
        color: "rgba(0, 0, 0, 0.54)",
        "&.Mui-selected": { color: "#ab12a7" }
    }
})(BottomNavigationAction);

const BottomNav = ({ setDisplayMode }) => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    return (
        <BottomNavigation value={value} onChange={(event, newValue) => { setValue(newValue) }} showLabels className={classes.dynamicNav}>
            <MyBottomNavigationAction onClick={() => setDisplayMode('first')} label="Primero" icon={<HomeIcon />} />
            <MyBottomNavigationAction onClick={() => setDisplayMode('second')} label="Segundo" icon={<StarsIcon />} />
            <MyBottomNavigationAction onClick={() => setDisplayMode('third')} label="Tercero" icon={<PersonOutlineIcon />} />
        </BottomNavigation>
    );
}

export default BottomNav;