const express = require('express')
const router = express.Router()
const {currentCity}= require('../Controller/WheatherController')


router.get('/current/:city',currentCity)

module.exports = router