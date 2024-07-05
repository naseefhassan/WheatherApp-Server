const express = require('express')
const router = express.Router()
const {favorites, getFavorites}= require('../Controller/FavoritesController')

router.post('/',favorites)
router.get('/',getFavorites)


module.exports = router