const axios = require('axios');

const object = {
  currentCity: async (req, res) => {
    try {
      const { city } = req.params;
      const apiKey = process.env.API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
      const response = await axios.get(url);

      res.status(200).json({ message: 'Success', data: response.data });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "weather fecthing failed" });
    }
  },
};

module.exports = object;
