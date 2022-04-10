import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BusinessListing from "./containers/BusinessListing";
import Header from "./containers/Header";
import "./App.css";
import BusinessDetails from "./containers/BusinessDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={BusinessListing} />
          <Route path="/product/:productId" component={BusinessDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
