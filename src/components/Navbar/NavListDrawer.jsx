import {Box} from '@mui/system'
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import InboxIcon from '@mui/icons-material/InBox'
import { NavLink } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import theme from './NavbarStyle'



const navArrayLinks= [
    {
    title: 'Home',
    path: '/home',
    },
    {
    title: "Men's clothing",
    path: '/category/men',
    },
    {
    title: "Women's clothing",
    path: '/category/women',
    },
    {
    title: "Electronics",
    path: '/category/electronics',
    },
    {
    title: "Jewelery",
    path: '/category/jewelery',
    },
]

export default function NavListDrawer({setOpen}){
    return <Box sx={ {width: 250}}>
        <ThemeProvider theme={theme}>
        <nav>
            <List>
                {
                    navArrayLinks.map(item => (
                        <ListItem disablePadding key={item.title}>
                                <ListItemButton
                                    component={NavLink}
                                    to={item.path}
                                    onClick={() => setOpen(false)}
                                > 
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                    <ListItemText>{item.title}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                    ))
                }
            </List>
        </nav>
        <Divider />
        </ThemeProvider>
    </Box>
}