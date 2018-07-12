import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';

class UserProfileCard extends Component {
  render() {
    return (
      <div className="container-fluid">
        {this.props.isSignedIn && (
          <div className="row card text-white bg-dark">
            <img src={this.props.userProfile.photoURL} alt="Profile Picture" />
            <div className="card-body">
              <h5 className="card-title">
                {this.props.userProfile.displayName}
              </h5>
              <p className="card-text email">{this.props.userProfile.email}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.isSignedIn,
    userProfile: state.userProfile
  };
};

export default connect(mapStateToProps)(UserProfileCard);
