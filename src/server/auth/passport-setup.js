const mysql = require('mysql')
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
})
// const connection = mysql.createConnection(process.env.JAWSDB_URL)
const passport = require('passport')
const GitHubStrategy = require('passport-github').Strategy

passport.serializeUser((user, done) => {
  done(null, user.github_id)
})

passport.deserializeUser((id, done) => {
  pool.query(
    'select * FROM users where github_id = ?',
    [id],
    (err, results, fields) => {
      if (err) {
        throw new Error('Something went wrong while retriving a users id!\n' + err)
      } else {
        done(null, results[0])
      }
    }
  )
})

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
      pool.query(
        'select * FROM users WHERE github_id = ?',
        [profile._json.id],
        (err, results, fields) => {
          if (err) {
            throw new Error('Something went wrong in fething a user!' + err)
          } else if (results === undefined || results.length === 0) {
            pool.query(
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
                  done(null, results[0])
                  return results
                }
              }
            )
          } else {
            done(null, results[0])
          }
        }
      )
    }
  )
)
