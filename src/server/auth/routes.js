const passport = require('passport')
const router = require('express').Router()

router.get(
  '/github',
  passport.authenticate('github', {
    scope: ['profile']
  })
)

router.get('/github/redirect', passport.authenticate('github'), (req, res) => {
  res.redirect('/')
})

module.exports = router
