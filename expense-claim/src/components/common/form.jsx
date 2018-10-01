import React, { Component } from "react";

class Form extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(this, "Submitted");
  };

  renderInput(id, label, ...rest) {
    return;
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest} type="text" className="form-control" />
    </div>;
  }

  renderButton(label) {
    return (
      <div className="form-group">
        <button onClick={this.handleSubmit} className="btn btn-primary">
          {label}
        </button>
      </div>
    );
  }
}

export default Form;
