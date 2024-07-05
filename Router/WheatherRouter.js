const express = require("express");
const router = express.Router();
const { currentCity, forecast, historical, deleteFavorite } = require("../Controller/WheatherController");

router.get("/current/:city", currentCity);
router.get("/forecast/:city", forecast);
router.get("/historical/:city", historical);
router.delete("/delete/:DelId", deleteFavorite);

module.exports = router;
