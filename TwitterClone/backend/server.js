require("dotenv").config();
const cors = require('cors');

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const connectDB = require('./config/dbConfig');

connectDB();

app.use(express.json());

app.use(cors());

app.use("/tweet", require("./routes/tweetRoute"));

mongoose.connection.once('open', () => {
  console.log("connected to MongoDB");
  app.listen(port, () => console.log(`Server running on port ${port}`));
})