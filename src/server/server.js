require('dotenv').config()
const express = require('express')
const app = express()
const authRouter = require('./auth/routes.js')
const path = require('path')
const port = process.env.PORT || 9001
const buildPath = path.join(__dirname, '../../build')
const passportSetup = require('./auth/passport-setup')
app.use(express.static(buildPath))
app.use('/auth', authRouter)

app.get('/*', (req, res) => {
  const indexPath = path.join(buildPath, 'index.html')
  res.sendFile(indexPath)
})

app.listen(port, () => {
  console.log(`app being served on port ${port}`)
})
