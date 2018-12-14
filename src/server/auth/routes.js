const router = require('express').Router()
const passport = require('passport')

const authCheck = (req, res, next) => {
  if (!req.user) {
    const user = { result: false }
    res.json(user)
    // res.redirect('/auth/github')
  } else {
    next()
  }
}

router.get('/github', passport.authenticate('github', { scope: ['profile'] }))

router.get('/github/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

router.get('/github/redirect', passport.authenticate('github'), (req, res) => {
  res.redirect('/')
})

module.exports = { router, authCheck }
