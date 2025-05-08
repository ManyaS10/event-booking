const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

// Get all events
router.get("/", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

// (Optional) Add event
router.post("/", async (req, res) => {
  const { title, description, date, price } = req.body;
  const newEvent = new Event({ title, description, date, price });
  await newEvent.save();
  res.json(newEvent);
});

module.exports = router;
