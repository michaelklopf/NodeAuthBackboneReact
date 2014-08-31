/**
* @jsx React.DOM
*/
// static/js/signup.js

var app = app || {};

var FooterComponent = app.FooterComponent;
var HeaderComponent = app.HeaderComponent;

app.SignupComponent = React.createClass({
  mixins: [app.RouteMixin],
  proceedWithSignUp : function() {
    this.navigateToProfile();
  },
  stopSignUp : function() {
    this.refs.email.getDOMNode().value = '';
    this.refs.password.getDOMNode().value = '';
    // TODO Show flash message
  },
  handleSubmit : function() {
    var email = this.refs.email.getDOMNode().value.trim();
    var password = this.refs.password.getDOMNode().value.trim();
    var auth = {email : email, password : password};
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: auth,
      success: function(data) {
        if (data.status === true) {
          this.proceedWithSignUp();
        } else {
          if (data.status === false) {
            console.log(data.message);
            this.stopSignUp();
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
          <HeaderComponent router={this.props.router} />
          <div className="container">
              <div className="page-header">
                <div className="page-header">
                  <h1 className="span fa fa-sign-in">Signup</h1>
                  <form>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="text" name="email" className="form-control" ref="email"/>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" name="password" className="form-control" ref="password"/>
                    </div>
                    <button className="btn btn-warning btn-lg" onClick={this.handleSubmit}>SignUp</button>
                  </form>
                  <hr />
                  <p>Already have an account? <a onClick={this.navigateToLogin}>Login</a></p>
                  <p>Or go <a onClick={this.navigateToHome}>home.</a></p>
                </div>
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }
});