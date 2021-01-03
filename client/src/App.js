import Navbar from './components/Navbar.js';
import Contact from './components/Contact.js';
import { makeStyles } from '@material-ui/core/styles';
import lake2 from './photos/lake2.jpg'


const useStyles = makeStyles({
  root:{
    backgroundImage: `url(${lake2})`,
    backgroundSize: 'cover',
    height: '100vh'
  }
})

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Navbar/>
      <Contact/>
    </div>
  );
}

export default App;
