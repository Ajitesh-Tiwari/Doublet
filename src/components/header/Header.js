import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Doublet
          </a>
        </div>
      </nav>
    );
  }
}

export default Header;
