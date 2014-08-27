/**
* @jsx React.DOM
*/
// static/js/react_profile.js

var app = app || {};

var ExampleComponent = app.ExampleComponent;

var PageComponent = React.createClass({
  render : function() {
    return (
      <div>
        <div className="page-header">
          <h1>Welcome to the template.</h1>
          <p className="lead">This is a lead:</p>
          <ExampleComponent data={collection} />
        </div>
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
