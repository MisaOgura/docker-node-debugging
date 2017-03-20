const express = require('express')
const expressHandlebars = require('express-handlebars')
const http = require('http')

const port = 8000
const messages = [
  'this is a test sentence',
  'the spring is coming!',
  'hello avengers!',
  'i love Docker!',
]
let lineIndex = 0

const app = express()

app.engine('html', expressHandlebars())
app.set('view engine', 'html')
app.set('views', __dirname)

app.get('/', (req, res) => {
  const message = messages[lineIndex]

  lineIndex += 1
  if (lineIndex > messages.length) {
    lineIndex = 0
  }

  res.render('index', {message: message})
})

http.Server(app).listen(port, () => {
  console.log(`HTTP server listening on port ${port}`)
})
