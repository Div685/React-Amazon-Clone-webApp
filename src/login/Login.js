import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../login/Login.css";
import { auth } from "../services/firebase";


function Login() {
  const history = useHistory();

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const login = (event) => {
    event.preventDefault(); //this stops referss
    //do the login logic.....
    auth.signInWithEmailAndPassword(email, password).then((auth) => {
      // logged in , redirect to home page
      history.push("/");
    }).catch(
      (e) => alert(e.message)
    );
  };

  const register = (event) => {
    register.preventDefault(); //this stops referss
    //do the login logic...
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      //created a user and logged in
      history.push("/"); 
    })
    .catch((e) => alert(e.message));
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
          <input type="email" name="" value={email} onChange={event => setEmail(event.target.value)} />
          <h5>Password</h5>
          <input type="password" name="" value={password} onChange={event => setPassword(event.target.value)} />
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
