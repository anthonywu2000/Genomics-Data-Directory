import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          ORCESTRA PSets
        </Typography>
        <Button color="inherit" component={Link} to="/">
          API
        </Button>
        <Button color="inherit" component={Link} to="/database">
          Database
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;