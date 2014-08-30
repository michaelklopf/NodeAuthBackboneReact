/**
* @jsx React.DOM
*/
// static/js/index.js

var app = app || {};

var FooterComponent = app.FooterComponent;
var HeaderComponent = app.HeaderComponent;

app.IndexComponent = React.createClass({
  mixins: [app.RouteMixin],
  handleLogin : function() {

  },
  render : function() {
    return(
      <div id="content">
        <div id="wrap">
          <HeaderComponent router={this.props.router}/>
          <div className="container">
            <div className="page-header">
              <h1 className="span fa fa-sign-in">Login</h1>
              <form>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" name="email" className="form-control" ref="email"/>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" name="password" className="form-control" ref="password" />
                </div>
                <button type="submit" className="btn btn-warning btn-lg" onClick={this.handleLogin}>Login</button>
              </form>
              <hr />
              <p>Need an account? <a onClick={this.navigateToSignUp}>Signup</a></p>
              <p>Or go <a onClick={this.navigateToHome}>home.</a></p>
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }
});
