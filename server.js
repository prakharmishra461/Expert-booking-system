const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Booking = require("./models/Booking");
const Expert = require("./models/Expert");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/expertBookingDB")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("API Running");
});


// ================= EXPERT APIs =================

app.post("/api/experts", async (req, res) => {

  const expert = new Expert(req.body);

  await expert.save();

  res.json(expert);

});

app.get("/api/experts", async (req, res) => {

  const experts = await Expert.find();

  res.json(experts);

});


// ================= BOOKING APIs =================

app.post("/api/bookings", async (req, res) => {

  try {

    // Check Existing Booking
    const existingBooking = await Booking.findOne({

      expertName: req.body.expertName,
      date: req.body.date,
      time: req.body.time,

    });

    // Slot Already Booked
    if (existingBooking) {

      return res.status(400).json({
        success: false,
        message: "This slot is already booked for this expert.",
      });

    }

    // Create Booking
    const booking = new Booking(req.body);

    await booking.save();

    res.status(201).json({
      success: true,
      booking,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

});

app.get("/api/bookings", async (req, res) => {

  try {

    const bookings = await Booking.find();

    res.json(bookings);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});


// ================= SERVER =================

app.listen(5000, () => {
  console.log("Server running on port 5000");
});