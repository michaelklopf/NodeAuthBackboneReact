/**
* @jsx React.DOM
*/

// static/js/views/footer.js

var app = app || {};

app.FooterComponent = React.createClass({
  render : function() {
    return(
      <div id="footer">
        <div className="container">
          <p className="text-muted credit">Page made by me,
            <a href="http://twitter.com/authorname/">@authorname</a>
          </p>
        </div>
      </div>
    );
  }
});
