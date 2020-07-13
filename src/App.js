import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Header from "./header/Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <Header />
            <h1>Home Page</h1>
          </Route>
          <Route path="/login"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
