const mongoose = require('mongoose')
require('dotenv').config()

const uri = process.env.MONGODB_URI

mongoose
  .connect(uri)
  .then(() => console.log("Successfully connection created"))
  .catch((err) => console.error("Connection error", err));