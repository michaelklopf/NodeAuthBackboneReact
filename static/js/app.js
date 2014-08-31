/**
* @jsx React.DOM
*/
// static/js/react_profile.js

var app = app || {};

var PageComponent = app.PageComponent;
var IndexComponent = app.IndexComponent;
var SignupComponent = app.SignupComponent;

var Router = Backbone.Router.extend({
  routes : {
    "" : "index",
    "profile" : "profile",
    "signup" : "signup"
  },
  index : function() {
    React.renderComponent(
      <IndexComponent router={router} url="/login" />,
      document.querySelector("#container")
    );
  },
  profile : function() {
    React.renderComponent(
      <PageComponent router={router} url="/"/>,
      document.querySelector("#container")
    );
  },
  signup : function() {
    React.renderComponent(
      <SignupComponent router={router} url="/signup"/>,
      document.querySelector("#container")
    );
  }
});

var router = new Router();

React.renderComponent(
  <IndexComponent router={router} url="/login" />,
  document.querySelector("#container")
);

Backbone.history.start();
