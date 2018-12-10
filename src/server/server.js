const express = require('express')
const path = require('path')

const port = process.env.PORT || 9001
const app = express()
const buildPath = path.join(__dirname, '../../build')
app.use(express.static(buildPath))

app.listen(port, () => {
  console.log(`app being served on port ${port}`)
})
