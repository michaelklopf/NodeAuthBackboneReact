/**
* @jsx React.DOM
*/
// static/js/page.js

var app = app || {};

var ExampleComponent = app.ExampleComponent;
var FooterComponent = app.FooterComponent;
var HeaderComponent = app.HeaderComponent;

var collection = new app.Examples();
collection.fetch();

app.PageComponent = React.createClass({
  render : function() {
    console.log(this);
    return (
      <div id="content">
        <div id="wrap">
          <HeaderComponent router={this.props.router} />
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
