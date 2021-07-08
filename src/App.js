import './App.css';
import './components/Item'
import { Card, Avatar, makeStyles, Button, withStyles } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import GithubIcon from '@material-ui/icons/GitHub';


import Item from './components/Item';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: "80px",
    height: "80px",
    marginLeft: "auto",
    marginRight: "auto"
  },
}));

const useStylesButton = makeStyles((theme) => ({
  size: {
    width: "90%",
    height: "50px",
    marginTop: "10px"
  },
}));


function App() {
  const classes = useStyles();
  const classesButton = useStylesButton();
  return (
    <div className="App">


      <div className="avatar-layout center">
        <div className="avatar">
          <Avatar className={classes.large} alt="do-huu-toan" src="avatar.jpg"></Avatar>
        </div>
      </div>

      <div className="name-and-avatar">
        <Card className="card center">

          <div className="name">ĐỖ HỮU TOÀN</div>
          <div className="list-items">

            <a href="https://www.facebook.com/dohuutoannb">
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<FacebookIcon />}
                className={classesButton.size}
              >Facebook</Button>
            </a>

            <a href="https://www.instagram.com/dht_owo/">
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<InstagramIcon />}
                className={classesButton.size}
              >Instagram</Button>
            </a>

            <a href="https://github.com/do-huu-toan">
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<GithubIcon />}
                className={classesButton.size}
              >Github</Button>
            </a>

            <a href="mailto: dohuutoannb@gmail.com">
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<EmailIcon />}
                className={classesButton.size}
              >Email</Button>
            </a>

            <a href="tel:0947935024">
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<PhoneIcon />}
                className={classesButton.size}
              >Phone</Button>
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}
export default App;
