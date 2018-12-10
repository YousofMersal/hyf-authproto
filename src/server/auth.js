const passport = require('passport')
const GitHubStrategy = require('passport-github').Strategy

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.CALLBACK
    },
    function(acessToken, refreshtoken, profile, cb) {
      return cb(null, profile)
    }
  )
)
