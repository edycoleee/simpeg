import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect, useParams } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import MuiAlert from "@material-ui/lab/Alert";
import { Link } from "react-router-dom";
import { Develop } from "../../util/firebase";
//material ui
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AlertSnackbar from "../../components/AlertSnackbar";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginLink = ({ history }) => {
    const {name, pass} = useParams()

  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [errMessage, setErrMessage] = useState("");
  const [open, setOpen] = useState(false);
  const { currentUser, login } = useContext(AuthContext);

  const handleLogin = useCallback(
    async (event) => {
      if (Develop) {
        console.log("STEP : LOGIN");
      }
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        setLoading(false);
        await login(email.value, password.value);
        history.push("/sampah3r");
      } catch (error) {
        setErrMessage(error);
        setOpen(true);
        setLoading(true);
      }
    },
    [history, login]
  );

  if (currentUser) {
    return <Redirect to="/sampah3r" />;
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            defaultValue={name && name}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            defaultValue={pass && pass}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!loading}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="register"> {"Sign Up"}</Link> {" - "}
              <Link to="forgot-password"> {"Forgot Password?"}</Link>
            </Grid>
            <Grid item>
              <Link to="/"> Landing Page</Link>
            </Grid>
          </Grid>
          <Box mt={2}></Box>
          <Grid container>
            <Grid item>
              <span>
                {errMessage.code ? (
                  <Alert severity="error">
                    `Error Code : ${errMessage.code}`
                  </Alert>
                ) : (
                  ""
                )}
              </span>
              <br />
              <span>
                {errMessage.message ? (
                  <Alert severity="error">
                    `Error Message : ${errMessage.message}`
                  </Alert>
                ) : (
                  ""
                )}
              </span>
            </Grid>
          </Grid>
        </form>
      </div>
      <AlertSnackbar
        open={open}
        handleClose={handleClose}
        errMessage={errMessage}
      />
    </Container>
  );
};

export default withRouter(LoginLink);
