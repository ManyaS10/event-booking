const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
  status: { type: String, default: "Booked" },
});
module.exports = mongoose.model("Booking", bookingSchema);
