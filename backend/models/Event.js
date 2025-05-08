const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String,
  price: Number,
});
module.exports = mongoose.model("Event", eventSchema);
