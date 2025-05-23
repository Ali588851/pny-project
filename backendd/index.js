const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('./db'); // Make sure this connects correctly
const Booking = require('./models/Booking');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

app.use(cors());
// Serve static files from frontend
app.use(express.static(path.join(__dirname, 'frontend/dist'))); // Adjust path if needed

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
});

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Hello from new project");
});

app.post('/api/appointments', async (req, res) => {
  const { name, email, phone, department, day, time } = req.body;

  if (!name || !email || !phone || !department || !day || !time) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const newBooking = new Booking({ name, email, phone, department, day, time });
    const savedBooking = await newBooking.save();

    // Email sending
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ahsanirfan141614@gmail.com',      // Replace with your Gmail
        pass: 'kwbz pmew bgcg uiqr'         // Use Gmail App Password
      }
    });

    let mailOptions = {
      from: 'yourgmail@gmail.com',
      to: email,
      subject: 'Appointment Confirmation',
      text: `Hello ${name},\n\nYour appointment has been successfully booked.\n\nDepartment: ${department}\nDay: ${day}\nTime: ${time}\n\nThank you!\nHospital Team`
    };

    // Await sendMail to catch errors properly
    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Appointment booked successfully, confirmation email sent.', booking: savedBooking });

  } catch (error) {
    console.error("Booking or Email error:", error);

    // Customize error message based on error type
    if (error.response && error.response.includes('Invalid login')) {
      return res.status(500).json({ error: 'Email authentication failed. Check your Gmail credentials or app password.' });
    }

    res.status(500).json({ error: 'Server error. Could not book appointment or send email.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
