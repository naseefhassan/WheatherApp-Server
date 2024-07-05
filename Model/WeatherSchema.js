const mongoose = require("mongoose");

const Weather = new mongoose.Schema({
  weather: { type: String, required: true },
  temp: { type: String, required: true },
  description: { type: String, required: true },
  feelsLike: { type: String, required: true },
  wind: { type: String, required: true },
  humidity: { type: String, required: true },
});

const WeatherSchema = new mongoose.model("Weather", Weather);

module.exports = WeatherSchema;
