import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Header from "./header/Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <h1>Login</h1>
          </Route>
          <Route path="/checkout">
            <h1>CheckOut</h1>
          </Route>
          <Route path="/">
            <Header />
            <h1>Home Page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
