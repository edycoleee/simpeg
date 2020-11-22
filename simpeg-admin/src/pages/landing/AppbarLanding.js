import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EcoTwoToneIcon from "@material-ui/icons/EcoTwoTone";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function AppbarLanding() {
  const classes = useStyles();
  return (
    <AppBar position="relative" style={{ background: '#4E4B2B' }}>
      <Toolbar>
        <EcoTwoToneIcon className={classes.icon} fontSize="large" />
        <Typography variant="h6" color="inherit" noWrap className={classes.title}>
          Bebas
        </Typography>
        <Button variant="contained" color="default">
          <Link to="/">HOME</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default AppbarLanding;
