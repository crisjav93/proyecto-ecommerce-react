import {Box} from '@mui/system'
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import InboxIcon from '@mui/icons-material/InBox'


export default function NavListDrawer({ NavArrayLinks }){
    return <Box sx={ {width: 250, bgcolor:'lightslategray'}}>
        <nav>
            <List>
            <ListItem disablePadding>
                    <ListItemButton
                        component='a'
                        href='/home'
                    > 
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                        <ListItemText primary='Show All'/>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton
                        component='a'
                        href='/category/men'
                    > 
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                        <ListItemText primary='Men'/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    component='a'
                    href='/category/women'
                    > 
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                        <ListItemText primary='Women'/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    component='a'
                    href='/category/electronics'
                    > 
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                        <ListItemText primary='Electronics'/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    component='a'
                    href='/category/jewelery'
                    > 
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                        <ListItemText primary='Jewelery'/>
                    </ListItemButton>
                </ListItem>

            </List>
        </nav>
        <Divider />
        {/* <nav>
            <List>
                <ListItem disablePadding>
                    <ListItemButton> 
                        <ListItemText primary='Inbox'/>
                    </ListItemButton>
                </ListItem>
            </List>
        </nav> */}
    </Box>
}