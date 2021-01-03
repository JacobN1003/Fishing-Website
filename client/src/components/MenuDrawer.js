import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InfoIcon from '@material-ui/icons/Info';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import {MenuDrawerContext} from './Navbar.js';

const useStyles = makeStyles({
    drawer:{
        backgroundColor:"transparent"
    },
    menu_title:{
        color:"white",
        justifyContent: 'center',
        marginBottom:'20px',
        fontWeight:'600',
        fontSize:'35px'
    },
    list:{
        backgroundColor:'rgba(0,0,0, .5)',
        width:'250px',
        fontSize:'22px',
        color:'white',
        height:'100%'
    },
    divider:{
        margin:'30px',
        backgroundColor: 'white'
    },
    icons:{
        color:'white'
    }
})

export default function MenuDrawer() {
    const drawer = useContext(MenuDrawerContext);
    const classes = useStyles();

    return (
        <Drawer 
            classes={{paper: classes.drawer}}
            anchor="right" 
            open={drawer.drawer} 
            onClose={()=>drawer.setDrawer(false)}>
            <List className={classes.list}>
                <ListItem className={classes.menu_title} divider={true}>
                    Menu
                </ListItem>
                <ListItem button={true} >
                    <ListItemIcon>
                        <PhotoLibraryIcon fontSize="large" className={classes.icons}/>
                    </ListItemIcon>
                    Fish/Photos
                </ListItem>
                <ListItem button={true}>
                    <ListItemIcon>
                        <InfoIcon fontSize="large" className={classes.icons}/>
                    </ListItemIcon>
                    About
                </ListItem>
                <ListItem button={true}>
                    <ListItemIcon>
                        <PermContactCalendarIcon fontSize="large" className={classes.icons}/>
                    </ListItemIcon>
                    Contact
                </ListItem>
                <Divider className={classes.divider} />
                <ListItem button={true}>
                    <ListItemIcon>
                        <FacebookIcon fontSize="large" className={classes.icons}/>
                    </ListItemIcon>
                    Facebook
                </ListItem>
                <ListItem button={true}>
                    <ListItemIcon>
                        <EmailIcon fontSize="large" className={classes.icons}/>
                    </ListItemIcon>
                    Email 
                    {/* muskytracker@yahoo.com */}
                </ListItem>
            </List>
        </Drawer>
    )
}
