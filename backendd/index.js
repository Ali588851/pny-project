const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const mongoose = require('./db');  // just import mongoose connection (no connect here)
const Booking = require('./models/Booking');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.post('/api/appointments', async (req, res) => {
  const { name, email, phone, department, date, time } = req.body;

  if (!name || !email || !phone || !department || !date || !time) {
    return res.status(400).json({ error: 'All fields required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  try {
    const existingBooking = await Booking.findOne({ department, date, time });
    if (existingBooking) {
      return res.status(409).json({ error: 'This slot is already booked.' });
    }

    const newBooking = new Booking({ name, email, phone, department, date, time });
    const savedBooking = await newBooking.save();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Appointment Confirmation',
      text: `Hello ${name},\n\nYour appointment is confirmed.\n\n${department}, ${date} at ${time}\n\nThank you!`
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Booked & Email Sent', booking: savedBooking });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ error: 'Server Error' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/dist/index.html'));
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
