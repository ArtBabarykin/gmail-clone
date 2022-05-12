import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { auth, provider } from "./firebase";
import { login } from "./features/userSlice";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png"
          alt=""
        />
        <Button onClick={signIn}>Login</Button>
      </div>
      <p>cloned by Art B.</p>
    </div>
  );
}

export default Login;
