import React, { Component } from "react";

class LoginForm extends Component {
  handleLogin = e => {
    e.preventDefault();
    console.log("Login");
  };

  render() {
    return (
      <form>
        <h1> Login </h1>
        <div className="form-group">
          <label htmlFor="emailInput">Username</label>
          <input id="emailInput" type="email" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="passwordInput">Password</label>
          <input id="passwordInput" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <button
            onClick={this.handleLogin}
            className="btn btn-primary btn-block"
          >
            Login
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
