/**
* @jsx React.DOM
*/
// static/js/react_profile.js

var app = app || {};

var ExampleComponent = app.ExampleComponent;
var FooterComponent = app.FooterComponent;
var HeaderComponent = app.HeaderComponent;

var PageComponent = React.createClass({
  render : function() {
    return (
      <div id="content">
        <div id="wrap">
          <HeaderComponent />
          <div className="container">
            <div className="page-header">
              <h1>Welcome to the template.</h1>
              <p className="lead">This is a lead:</p>
              <ExampleComponent data={collection} />
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }
});

var collection = new app.Examples();
collection.fetch();

React.renderComponent(
  <PageComponent />,
  document.querySelector("#container")
);
