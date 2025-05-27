const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('./db');  // your mongoose connection file
const Booking = require('./models/Booking');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// API route for booking appointment
app.post('/api/appointments', async (req, res) => {
  const { name, email, phone, department, date, time } = req.body;  // <-- use date here

  if (!name || !email || !phone || !department || !date || !time) {
    return res.status(400).json({ error: 'All fields required' });
  }

  try {
    // Check if appointment with same department, date, and time exists
    const existingBooking = await Booking.findOne({ department, date, time });
    if (existingBooking) {
      return res.status(409).json({ error: 'This appointment slot is already booked for this department. Please choose a different time or date.' });
    }

    const newBooking = new Booking({ name, email, phone, department, date, time });
    const savedBooking = await newBooking.save();

    // Nodemailer config
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ah4642767@gmail.com',
        pass: 'czekiqwptefmdtni'  // use your app password here
      }
    });

    const mailOptions = {
      from: 'ah4642767@gmail.com',
      to: email,
      subject: 'Appointment Confirmation',
      text: `Hello ${name},\n\nYour appointment is confirmed.\n\n${department}, ${date} at ${time}\n\nThank you!`
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Booked & Email Sent', booking: savedBooking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
});

// Serve frontend fallback route
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/dist/index.html'));
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
