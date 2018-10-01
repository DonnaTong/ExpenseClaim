import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/common/navBar";
import LoginForm from "./components/loginForm";
import ClaimForm from "./components/claimForm";

class App extends Component {
  render() {
    const user = { name: "Donna" };
    return (
      <React.Fragment>
        <NavBar user={user} />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/expenseClaims/new" component={ClaimForm} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
