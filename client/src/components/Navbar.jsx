import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

// creates the navigation bar that links between the two pages
const Navbar = ({title, link1, link2, ref1, ref2}) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Button color="inherit" component={Link} to={ref1}>
          {link1}
        </Button>
        <Button color="inherit" component={Link} to={ref2}>
          {link2}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
