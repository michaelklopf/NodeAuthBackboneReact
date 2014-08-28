/**
* @jsx React.DOM
*/

// static/js/views/header.js

var app = app || {};

app.HeaderComponent = React.createClass({
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
            <a href="/" className="navbar-brand">Node Auth</a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><a href="/">Home</a></li>
              <li className="active"><a href="/profile">My Profile</a></li>
              <li><a href="/logout">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});
