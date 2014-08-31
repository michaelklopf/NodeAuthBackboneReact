// app/routes/auth.js

module.exports = function(app, passport) {
  app.post('/login', function(req, res, next) {
    passport.authenticate('local-login', function(err, user, info) {
      console.log("Entering login auth with" + req.body.password + req.body.email);
      if (err) {
        console.log("First error part");
        return res.send(err);
      }
      if (!user) {
        console.log("User exists part");
        var answer = {message : req.flash('loginMessage'), status : false};
        return res.send(answer);
      }
      req.logIn(user, function(err) {
        console.log("User login");
        if (err) {
          return next(err);
        }
        console.log("Letting user login");
        return res.send({user : req.user, status : true});
      });
    })(req, res, next);
  });

  app.post('/signup', function(req, res, next) {
    passport.authenticate('local-signup', function(err, user, info) {
      console.log("Enterhing auth with" + req.body.password + req.body.email);
      if (err) {
        console.log("First error part");
        return res.send(err);
      }
      if (!user) {
        console.log("User exists part");
        var answer = {message : req.flash('signupMessage'), status : false};
        return res.send(answer);
      }
      req.logIn(user, function(err) {
        console.log("User login");
        if (err) {
          return next(err);
        }
        console.log("Letting user login");
        return res.send({user : req.user, status : true});
      });
    })(req, res, next);
  });

  app.get('/logout', function(req, res) {
    req.logout();
    console.log("Logging out");
    res.send({message : "Successfully logged out."});
  });
};

/*
var isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated())
    return next();

  res.redirect('/');
};
*/
