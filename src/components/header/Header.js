import React, { Component } from 'react';
import LoginContainer from '../login/LoginContainer';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Doublet
          </a>
          <LoginContainer />
        </div>
      </nav>
    );
  }
}

export default Header;
