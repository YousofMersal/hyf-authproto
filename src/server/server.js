require('dotenv').config()
const express = require('express')
const authRouter = require('./auth/routes.js')
const path = require('path')
const passportSetup = require('./auth/passport-setup')
const cookieSession = require('cookie-session')
const passport = require('passport')
const port = process.env.PORT || 9001
const buildPath = path.join(__dirname, '../../build')
const app = express()
app.use(express.static(buildPath))
app.use(
  cookieSession({
    maxAge: 7 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
  })
)
app.use(passport.initialize())
app.use(passport.session())
app.use('/auth', authRouter.router)

app.post('/api/profile', authRouter.authCheck, (req, res) => {
  res.send(req.user)
})

app.get('/*', (req, res) => {
  const indexPath = path.join(buildPath, 'index.html')
  res.sendFile(indexPath)
})

app.listen(port, () => {
  console.log(`app being served on port ${port}`)
})
