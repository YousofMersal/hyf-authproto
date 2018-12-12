const passport = require('passport')
const router = require('express').Router()

router.post('/login', (req, res) => {
  res.send(req.User)
})

router.get(
  '/github',
  passport.authenticate('github', {
    scope: ['profile']
  })
)

router.get('/github/redirect', passport.authenticate('github'), (req, res) => {
  res.send('you reached the callback uri')
})

module.exports = router
