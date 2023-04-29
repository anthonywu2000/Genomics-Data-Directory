import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Navbar = ({title, link1, link2}) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Button color="inherit" component={Link} to="/">
          {link1}
        </Button>
        <Button color="inherit" component={Link} to="/database">
          {link2}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
