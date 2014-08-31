/**
* @jsx React.DOM
*/
// static/js/index.js

var app = app || {};

var FooterComponent = app.FooterComponent;
var HeaderComponent = app.HeaderComponent;

app.IndexComponent = React.createClass({
  mixins: [app.RouteMixin],
  proceedWithLogin : function() {
    this.navigateToProfile();
  },
  stopLogin : function(message) {
    this.refs.email.getDOMNode().value = '';
    this.refs.password.getDOMNode().value = '';
    $("#loginAlert").html(message).show();
  },
  handleLogin : function() {
    var email = this.refs.email.getDOMNode().value.trim();
    var password = this.refs.password.getDOMNode().value.trim();
    var auth = {email : email, password : password};
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: auth,
      success: function(data) {
        if (data.success === true) {
          this.proceedWithLogin();
        } else {
          if (data.success === false) {
            this.stopLogin(data.message);
          } else {
            console.log("An error occured");
          }
        }
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
    return false;
  },
  render : function() {
    return(
      <div id="content">
        <div id="wrap">
          <HeaderComponent router={this.props.router}/>
          <div className="container">
            <div className="page-header">
              <h1 className="span fa fa-sign-in">Login</h1>
              <div className="alert alert-danger" role="alert" id="loginAlert" hidden></div>
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
              <p>Need an account? <a onClick={this.navigateToSignUp}>Sign Up</a></p>
              <p>Or go <a onClick={this.navigateToHome}>home.</a></p>
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }
});
