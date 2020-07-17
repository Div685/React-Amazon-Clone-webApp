import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Header from "./header/Header";
import Home from "./home/Home";
import CheckOut from "./checkout/CheckOut";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <h1>Login</h1>
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
