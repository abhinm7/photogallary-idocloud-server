const express = require('express')
const router = express.Router()
const { liked, images } = require('../controllers/primarycontroller')

router.get('/getimages', images)
router.post('/liked', liked);

module.exports = router