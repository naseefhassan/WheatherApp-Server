const express = require("express");
const app = express();
const port = 4444;
const bodyParser = require("body-parser");
require("dotenv").config();
require('./Config/config')
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const CommonRouter= require('./Router/CommonRouter')
const weatherRoutes= require('./Router/WheatherRouter')
const FavoriteRoutes= require('./Router/FavoriteRoutes')

app.use('/',CommonRouter)
app.use('/weather', weatherRoutes);
// app.use('/favorites', FavoriteRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
