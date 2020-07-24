import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Header from "./header/Header";
import Home from "./home/Home";
import CheckOut from "./checkout/CheckOut";
import Login from "./login/Login";
import { useStateValue } from './services/StateProvider';
import { auth } from "./services/firebase";

function App() {
  const[{ user }, dispatch] = useStateValue();

  //useEffect <<<<<<<<< 
  //Piece of code which runs based on given conditions

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        //is user logged in ....
        dispatch(
          {
            type: "SET_USER",
            user: authUser
          }
        )
      }else {
        //is user logged out...
        dispatch({
          type:"SET_USER",
          user: null,
        });
      }
    });

    return () => {

      unsubscribe();
    };
  }, []);


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <CheckOut />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
