import React from "react";
import { Link } from "react-router-dom";
import "../login/Login.css";

function Login() {
  const login = (event) => {
    event.preventDefault(); //this stops referss
    //do the login este
  };

  const register = (event) => {
    register.preventDefault(); //this stops referss
    //do the login este
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>

        <form>
          <h5>E-mail</h5>
          <input type="email" name="" value="" />
          <h5>Password</h5>
          <input type="password" name="" value="" />
          <button onClick={login} className="login__signInButton" type="submit">
            Sign In
          </button>
        </form>

        <p>
          By Signing-in you agree to Amazon's conditions of Use & Sale. Please
          see our Privacy Notice, Our Cookies Notice and our interest-Based Ads
          Notice.
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
