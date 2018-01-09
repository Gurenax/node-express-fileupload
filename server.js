const express = require('express')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

const server = express()

// Middleware Plugins
server.use(bodyParser.json())
server.use(fileUpload())
server.use(express.static('public')) // Just for testing, use a static html

// Routes
server.use('/', [
  require('./routes/fileupload')
])

// Start the server
server.listen(7000, error => {
  if (error) console.error('Error starting', error)
  else console.log('Started at http://localhost:7000')
})