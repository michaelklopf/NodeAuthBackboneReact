/**
* @jsx React.DOM
*/

// static/js/views/header.js

var app = app || {};

app.HeaderComponent = React.createClass({
  mixins: [app.RouteMixin],
  render : function() {
    return(
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" data-toggle="collapse" data-target=".navbar-collapse" className="navbar-toggle">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a onClick={this.navigateToHome} className="navbar-brand">Node Auth</a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><a onClick={this.navigateToHome}>Home</a></li>
              <li><a onClick={this.navigateToLogin}>Login</a></li>
              <li><a onClick={this.navigateToSignUp}>SignUp</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

//<li><a onClick={this.navigateToProfile}>My Profile</a></li>
//<li><a onClick={this.navigateToLogout}>Logout</a></li>
