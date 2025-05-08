const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Booking = require("../models/Booking");

// Book an event
router.post("/:eventId", auth, async (req, res) => {
  const { eventId } = req.params;
  const userId = req.user.id;

  const existingBooking = await Booking.findOne({ userId, eventId });
  if (existingBooking) return res.status(400).json({ msg: "Already booked" });

  const booking = new Booking({ userId, eventId });
  await booking.save();
  res.json({ msg: "Event booked", booking });
});

// View user’s bookings
router.get("/", auth, async (req, res) => {
  const bookings = await Booking.find({ userId: req.user.id }).populate("eventId");
  res.json(bookings);
});

// Cancel booking
router.delete("/cancel/:id", auth, async (req, res) => {
  await Booking.findByIdAndUpdate(req.params.id, { status: "Canceled" });
  res.json({ msg: "Booking canceled" });
});

module.exports = router;
