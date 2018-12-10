require('dotenv').config()
const express = require('express')
const path = require('path')
// const passport = require('passport')
// const GitHubStrategy = require('passport-github').Strategy
const port = process.env.PORT || 9001
const app = express()
const buildPath = path.join(__dirname, '../../build')
app.use(express.static(buildPath))

app.get('/*', (req, res) => {
  const indexPath = path.join(buildPath, 'index.html')
  res.sendFile(indexPath)
})

app.listen(port, () => {
  console.log(`app being served on port ${port}`)
})
