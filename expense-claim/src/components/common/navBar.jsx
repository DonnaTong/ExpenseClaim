import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Coast Capital Saving
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="col">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/expenseClaims/new">
              <span className="sr-only">(current)</span>
              Expense Claim
            </NavLink>
            <NavLink className="nav-item nav-link" to="/rentals">
              Rentals
            </NavLink>
          </div>
        </div>
        <div className="col-3">
          {user ? (
            <div className="row">
              <NavLink className="nav-item nav-link" to="/customers">
                {`Hi, ${user.name} `}
              </NavLink>
              <NavLink className="nav-item nav-link" to="/login">
                Logout
              </NavLink>
            </div>
          ) : (
            <NavLink className="nav-item nav-link" to="/login">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
