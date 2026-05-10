const mongoose = require("mongoose");

const expertSchema = new mongoose.Schema({

  name: String,
  role: String,
  location: String,
  experience: String,
  rating: String,
  image: String,

});

module.exports = mongoose.model("Expert", expertSchema);