const axios = require("axios");
const WeatherSchema = require("../Model/WeatherSchema");

const object = {
  currentCity: async (req, res) => {
    try {
      const { city } = req.params;
      const apiKey = process.env.API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
      const response = await axios.get(url);

      res.status(200).json({ message: "Success", data: response.data });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "weather fecthing failed" });
    }
  },
  forecast: async (req, res) => {
    try {
      const { city } = req.params;
      const apiKey = process.env.API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
      const response = await axios.get(url);
      res.status(200).json({ message: "Success", data: response.data });

    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "forecast weather fecthing failed" });
    }
  },
  historical:async(req,res)=>{
    try {
      const {city } = req.params
      const apikey = process.env.HISTORY_KEY
      const url =`https://api.tomorrow.io/v4/weather/history/recent?location=${city}&apikey=${apikey}&startTime=YYYY-MM-DDT00:00:00Z&endTime=YYYY-MM-DDT23:59:59Z`
      const response = await axios.get(url)
      console.log(response);
      res.status(200).json({ message: "Success",data: response.data });

    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "history weather fecthing failed" }); 
    }
  },
   deleteFavorite : async (req, res) => {
    try {
      const { DelId} = req.params
      const deleteFav = await WeatherSchema.findByIdAndDelete(DelId);      
      res.status(200).json({ message: "Favorite deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Deletion failed" });
    }
   }
    
};

module.exports = object;
