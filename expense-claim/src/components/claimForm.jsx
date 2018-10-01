import React, { Component } from "react";

class ClaimForm extends Component {
  state = {};
  render() {
    return (
      <form>
        <div className="row justify-content-center">
          <h1> New Claim </h1>
        </div>
        <span>
          <h4> Information </h4>
        </span>
        <div className="row">
          <div className="form-group col">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="form-control"
              disabled={true}
              placeholder="populated from Database"
            />
          </div>
          <div className="form-group col">
            <label htmlFor="employeeId">Employee ID</label>
            <input
              id="employeeId"
              type="text"
              className="form-control"
              disabled={true}
              placeholder="populated from Database"
            />
          </div>
        </div>
        <div className="form-group">
          <button onClick={this.handleLogin} className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default ClaimForm;
