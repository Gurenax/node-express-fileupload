const express = require('express')
const router = express.Router()

// Upload a file
router.post('/upload', (req, res) => {
  console.log('Uploading a file')
})

module.exports = router