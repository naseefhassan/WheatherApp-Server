const WeatherSchema = require("../Model/WeatherSchema");

const object = {
  favorites: async (req, res) => {
    try {
      const { weather, temp, description, feelsLike, wind, humidity } = req.body;
      const Weather = new WeatherSchema({
        weather,
        temp,
        description,
        feelsLike,
        wind,
        humidity
      });
      Weather.save();
      res.status(200).json({ message: "favorite Saved" });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "favorite saving failed" });
    }
  },
  getFavorites: async (req, res) => {
    try {
      const response = await WeatherSchema.find();
      res.status(200).json({ message: "favorite Fecthing success", response });
    } catch (error) {
      res.status(400).json({ message: "favorite fecthing failed" });
    }
  },
};

module.exports = object;
