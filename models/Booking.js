const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

  expertName: {
    type: String,
    required: true,
  },

  expertRole: {
    type: String,
    required: true,
  },

  expertImage: {
    type: String,
  },

  userName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  time: {
    type: String,
    required: true,
  },

  notes: {
    type: String,
  },

  status: {
    type: String,
    default: "Confirmed",
  },

}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);