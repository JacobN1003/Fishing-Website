import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar'; 
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import SettingsIcon from '@material-ui/icons/Settings';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuDrawer from './MenuDrawer.js';

const useStyles = makeStyles({
    root:{
        backgroundColor:'rgba(0,0,0, .6)',
    },
    title:{
        fontSize:'25px',
        fontWeight:'800',
        fontFamily:'papyrus',
        textShadow: '2px 2px #000000',
        marginTop:'0px'
    },
    social_btn:{
        color:'white',
    },
    nav_btn:{
        color:'white'
    },
    menu_btn:{
        color:'white'
    }
})

export const MenuDrawerContext = React.createContext('false')

export default function Navbar() {
    const classes = useStyles();
    const [drawer, setDrawer] = useState(false);

    return (
        <AppBar className={classes.root}>
            <Toolbar>
                <Grid container item spacing={2} >
                    <Grid item align='center'>
                        <Typography className={classes.title}>MuskyTracker Guide Service</Typography>
                    </Grid>
                    <Hidden only={['xs','md','sm']}>
                        <Grid item>
                            <Button className={classes.nav_btn}>Fish/Photos</Button>
                        </Grid>
                        <Grid item>
                            <Button className={classes.nav_btn}>About</Button>
                        </Grid>
                        <Grid item>
                            <Button className={classes.nav_btn}>Contact</Button>
                        </Grid>
                    </Hidden>
                </Grid>
                <Hidden only={['xs','md','sm']}>
                    <Grid container item justify="flex-end" xs={2}>
                        <Button>
                            <FacebookIcon className={classes.social_btn}/>
                        </Button>
                        <Button>
                            <EmailIcon className={classes.social_btn}/>
                            {/* muskytracker@yahoo.com */}

                        </Button>
                        <Button>
                            <SettingsIcon className={classes.social_btn}/>
                        </Button>
                    </Grid>
                </Hidden>
                <Hidden only={['xl','lg']}>
                    <IconButton className={classes.menu_btn} edge="end" onClick={()=>setDrawer(true)}>
                        <MenuIcon fontSize="large"/>
                    </IconButton>
                    <MenuDrawerContext.Provider value={{drawer, setDrawer}}>
                        <MenuDrawer />
                    </MenuDrawerContext.Provider>
                </Hidden>
            </Toolbar>
        </AppBar>
    )
}
