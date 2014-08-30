/**
* @jsx React.DOM
*/
// static/routes/routes.js

var app = app || {};

app.RouteMixin = {
  navigateToSignUp : function() {
    this.props.router.navigate(
      "#/signup",
      {trigger: true}
    );
  },
  navigateToLogin : function() {
    this.props.router.navigate(
      "#/",
      {trigger: true}
    );
  },
  navigateToHome : function() {
    this.props.router.navigate(
      "#/",
      {trigger: true}
    );
  },
  navigateToProfile : function() {
    this.props.router.navigate(
      "#/profile",
      {trigger: true}
    );
  }
};
