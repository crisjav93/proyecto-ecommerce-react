import { NavLink } from 'react-router-dom'
import styles from './navbar.module.css'
import CartWidget from '../CartWidget'

// const Navbar = () => {
//     const activeStyle = {
//         color: 'red',
//     }
//     return (
    // <nav className={styles.container}>
        
    //     <NavLink to='/category/men' >
    //         <p>Men's Cloth</p>
    //     </NavLink>
    //     <NavLink to='/category/women' >
    //         <p>Women's Cloth</p>
    //     </NavLink>
    //     <NavLink to='/category/electronics' >
    //         <p>Electronics</p>
    //     </NavLink>
    //     <NavLink to='/category/jewelery' >
    //         <p>Jewelery</p>
    //     </NavLink>
    //     <CartWidget></CartWidget>
    // </nav>
//     )
// }

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Drawer } from '@mui/material';
import NavListDrawer from './NavListDrawer'



export default function Navbar(){
    const [open, setOpen] = useState(false);
    return (
            <AppBar position="static">
                <Toolbar>
                    <Typography>
                        <img src="../../img/logo-infinity.png" alt="Infinity Library" width="112" height="28" />
                    </Typography>
                    <IconButton
                    color='inherit'
                    size='large'
                    onClick={() => setOpen(true)}
                    >
                        <MenuIcon />
                        <Typography variant='h6'>
                            MENU
                        </Typography>
                    </IconButton>
                </Toolbar>
                    <Drawer
                        open={open}
                        anchor='left'
                        onClose={() => setOpen(false)}
                    >
                        <NavListDrawer />
                    </Drawer>
            </AppBar>
    );
}