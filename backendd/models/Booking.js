const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  department: String,
  date: Date,    // just the type here
  time: String
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);

