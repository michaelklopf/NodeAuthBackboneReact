// app/routes/auth.js

module.exports = function(app, passport) {
  app.post('/login', function(req, res, next) {
    passport.authenticate('local-login', function(err, user, info) {
      if (err) {
        return res.send(err);
      }
      if (!user) {
        var answer = {message : req.flash('loginMessage'), success : false};
        return res.send(answer);
      }
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        return res.send({user : req.user, success : true});
      });
    })(req, res, next);
  });

  app.post('/signup', function(req, res, next) {
    passport.authenticate('local-signup', function(err, user, info) {
      if (err) {
        return res.send(err);
      }
      if (!user) {
        var answer = {message : req.flash('signupMessage'), success : false};
        return res.send(answer);
      }
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        return res.send({user : req.user, success : true});
      });
    })(req, res, next);
  });

  app.get('/logout', function(req, res) {
    req.logout();
    res.send({message : "Successfully logged out."});
  });
};
