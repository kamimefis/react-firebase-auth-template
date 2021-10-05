import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import LockIcon from '@material-ui/icons/Lock';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
    root: { flexGrow: 1 },
    items: { background: '#fafafa' },
    title: { flexGrow: 1, fontSize: 15, display: 'flex', color: '#ab12a7' },
}));

const NavTop = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <div className={classes.root}>
            <AppBar position="fixed" color="inherit">
                <Toolbar>
                    <Typography className={classes.title}>
                        <strong>My App</strong>
                    </Typography>
                    <div>
                        <MenuIcon onClick={handleMenu} type="button" />
                        <Menu
                            style={{ zIndex: 1450 }}
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem>
                                <IconButton aria-label="logout" className={classes.items}>
                                    <LockIcon style={{ color: '#ab12a7' }} />
                                </IconButton>&nbsp;Cerrar sesión
                            </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );

}
export default NavTop
