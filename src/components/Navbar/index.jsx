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
import CartWidget from '../CartWidget'
import { ThemeProvider } from '@mui/material/styles';
import theme from './NavbarStyle'



export default function Navbar(){
    const [open, setOpen] = useState(false);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={theme}>
                <AppBar position="static">
                        <Toolbar>
                            <IconButton
                            color='inherit'
                            size='large'
                            onClick={() => setOpen(true)}
                            sx={{ml:-3 }}
                            >
                                <MenuIcon />
                                <Typography 
                                variant='h6'
                                >
                                MENU
                                </Typography>
                            </IconButton>
                            <Box sx={{ mx: 'auto', width: 200 }}>
                                <img src="../../img/logo-infinity.png" alt="Infinity Library" width="112" height="28" />
                            </Box>
                            <Box sx={{ }}>
                                <CartWidget />
                            </Box>
                        </Toolbar>
                <Drawer
                open={open}
                anchor='left'
                onClose={() => setOpen(false)}
            >
                <NavListDrawer setOpen={setOpen}/>
                
                
                </Drawer>
                </AppBar>
            </ThemeProvider>
        </Box>
    );
}