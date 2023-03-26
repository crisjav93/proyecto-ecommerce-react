import {Box} from '@mui/system'
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import InboxIcon from '@mui/icons-material/InBox'


export default function NavListDrawer({ NavArrayLinks }){
    return <Box sx={ {width: 250, bgcolor:'lightslategray'}}>
        <nav>
            <List>
                <ListItem disablePadding>
                    <ListItemButton> 
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                        <ListItemText primary='Inbox'/>
                    </ListItemButton>
                </ListItem>
            </List>
        </nav>
        <Divider />
        <nav>
            <List>
                <ListItem disablePadding>
                    <ListItemButton> 
                        <ListItemText primary='Inbox'/>
                    </ListItemButton>
                </ListItem>
            </List>
        </nav>
    </Box>
}