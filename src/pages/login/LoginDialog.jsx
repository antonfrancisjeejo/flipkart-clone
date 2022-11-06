import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
  component: {
    height: "70vh",
    width: "80vh",
    maxWidth: "unset !important",
  },
  image: {
    backgroundImage: `url(${"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"})`,
    background: "#2874f0",
    backgroundPosition: "center 85%",
    backgroundRepeat: "no-repeat",
    height: "70vh",
    width: "40%",
    padding: "45px 35px",
    "& > *": {
      color: "#FFFFFF",
      fontWeight: 600,
    },
  },
  login: {
    padding: "15px 35px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    "& > *": {
      marginTop: 20,
    },
  },
  loginbtn: {
    textTransform: "none",
    color: "#fff",
    height: 48,
    borderRadius: 2,
  },
  requestbtn: {
    textTransform: "none",
    background: "#fff",
    color: "#2874f0",
    height: 48,
    borderRadius: 2,
    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)",
  },
  text: {
    color: "#878787",
    fontSize: 12,
  },
  createText: {
    margin: "auto 0 5px 0",
    textAlign: "center",
    color: "#2874f0",
    fontWeight: 600,
    fontSize: 14,
    cursor: "pointer",
  },
  error: {
    fontSize: 10,
    color: "#ff6161",
    lineHeight: 0,
    marginTop: 10,
    fontWeight: 600,
  },
});

const loginInitialValues = {
  email: "",
  password: "",
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here",
    subHeading: "Signup to get started",
  },
};

const LoginDialog = ({ open, setOpen }) => {
  const classes = useStyle();
  const [login, setLogin] = useState(loginInitialValues);
  const [signup, setSignup] = useState(signupInitialValues);
  const [error, showError] = useState(false);
  const [account, toggleAccount] = useState(accountInitialValues.login);

  useEffect(() => {
    showError(false);
  }, [login]);

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {};

  const signupUser = async () => {};

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent sx={{ padding: "0px" }} className={classes.component}>
        <Box style={{ display: "flex" }}>
          <Box className={classes.image}>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {account.subHeading}
            </Typography>
          </Box>
          {account.view === "login" ? (
            <Box className={classes.login}>
              <TextField
                onChange={(e) => onValueChange(e)}
                name="email"
                label="Enter Email/Mobile number"
              />
              {error && (
                <Typography className={classes.error}>
                  Please enter valid Email ID/Mobile number
                </Typography>
              )}
              <TextField
                sx={{ marginTop: "20px" }}
                onChange={(e) => onValueChange(e)}
                name="password"
                label="Enter Password"
              />
              <Typography
                sx={{ color: "#878787", fontSize: 12, marginTop: "8px" }}
              >
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Typography>
              <button
                style={{
                  margin: "15px 0 15px 0",
                  background: "#fb641b",
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 500,
                }}
                className={classes.loginbtn}
                onClick={() => loginUser()}
              >
                Login
              </button>
              <Typography
                style={{ textAlign: "center", color: "#878787", fontSize: 12 }}
              >
                OR
              </Typography>
              <Button
                sx={{ margin: "15px 0 15px 0" }}
                className={classes.requestbtn}
              >
                Request OTP
              </Button>
              <Typography
                className={classes.createText}
                onClick={() => toggleSignup()}
              >
                New to Flipkart? Create an account
              </Typography>
            </Box>
          ) : (
            <Box className={classes.login}>
              <TextField
                onChange={(e) => onInputChange(e)}
                name="firstname"
                label="Enter Firstname"
              />
              <TextField
                sx={{ marginTop: "10px" }}
                onChange={(e) => onInputChange(e)}
                name="lastname"
                label="Enter Lastname"
              />
              <TextField
                sx={{ marginTop: "10px" }}
                onChange={(e) => onInputChange(e)}
                name="username"
                label="Enter Username"
              />
              <TextField
                sx={{ marginTop: "10px" }}
                onChange={(e) => onInputChange(e)}
                name="email"
                label="Enter Email"
              />
              <TextField
                sx={{ marginTop: "10px" }}
                onChange={(e) => onInputChange(e)}
                name="password"
                label="Enter Password"
              />
              <TextField
                sx={{ marginTop: "10px" }}
                onChange={(e) => onInputChange(e)}
                name="phone"
                label="Enter Phone"
              />
              <button
                style={{
                  background: "#fb641b",
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 500,
                }}
                className={classes.loginbtn}
                onClick={() => signupUser()}
              >
                Continue
              </button>
            </Box>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
