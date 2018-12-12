const mysql = require('mysql')
const connection = mysql.createConnection(process.env.JAWSDB_URL)
const passport = require('passport')
const GitHubStrategy = require('passport-github')

passport.use(
  new GitHubStrategy(
    //strat options
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK
    },
    (accessToken, refreshToken, profile, done) => {
      //passport callbaack
      connection.connect()
      connection.query(
        'select * FROM users WHERE github_id = ?',
        [profile._json.id],
        (err, results, fields) => {
          if (err) {
            throw new Error('Something went wrong in fething a user!' + err)
          } else if (results === undefined || results.length === 0) {
            connection.query(
              'INSERT INTO users (github_id, name, github_login, type, avatar) VALUES( ?, ?, ?, ?, ?)',
              [
                profile._json.id,
                profile._json.name,
                profile._json.login,
                profile._json.type,
                profile._json.avatar_url
              ],
              (err, results, fields) => {
                if (err) {
                  throw new Error('Whoops! could not add GitHub User to DB!' + err)
                } else {
                  return results
                }
              }
            )
          } else {
            console.log(results)
          }
        }
      )
    }
  )
)