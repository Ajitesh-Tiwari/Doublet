import React, { Component } from 'react';
import Login from '../login';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Doublet
          </a>
          <Login />
        </div>
      </nav>
    );
  }
}

export default Header;
