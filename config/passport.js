// config/passport.js

// http://stackoverflow.com/questions/9119648/securing-my-node-js-apps-rest-api
// http://stackoverflow.com/questions/15496915/how-to-implement-a-secure-rest-api-with-node-js?rq=1
// http://stackoverflow.com/questions/319530/restful-authentication

var LocalStrategy = require('passport-local').Strategy;

var User = require('../app/models/user');

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use('local-signup', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  },
  function(req, email, password, done) {
    process.nextTick(function() {
      User.findOne({'local.email' : email}, function(err, user) {
        if (err)
          return done(err);

        if (user) {
          return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
        } else {
          var newUser = new User();

          newUser.local.email = email;
          newUser.local.password = newUser.generateHash(password);

          newUser.save(function(err) {
            if (err)
              throw err;

            return done(null, newUser);
          });
        }
      }); // close user handling
    }); // close nextTick
  })); // first close function, then close signup

  passport.use('local-login', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  },
  function(req, email, password, done) {
    User.findOne({'local.email' : email}, function(err, user) {
      if (err)
        return done(err);

      if (!user)
        return done(null, false, req.flash('loginMessage', 'No user found.'));

      if (!user.validPassword(password))
        return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));

      return done(null, user); // all is well
    });
  })); // close login

}; // close export
