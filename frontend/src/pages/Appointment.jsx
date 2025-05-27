import React, { useState, useEffect } from 'react';
import A1 from '../images/A1.png';

const departments = [
  'Nephrology',
  'Ophthalmology',
  'Gastroenterology',
  'Plastic Surgery',
  'Physiotherapy',
  'Radiology',
];

const times = ['09:00 AM', '10:30 AM', '12:00 PM', '02:00 PM', '04:00 PM'];

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    date: '',
    time: '',
  });

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isFormValid = formData.name && formData.email && formData.phone && formData.department && formData.date && formData.time;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) return; // extra safety check

    try {
      const response = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Appointment booked successfully!\n\nName: ${data.booking.name}\nDate: ${data.booking.date}\nTime: ${data.booking.time}`);
        setFormData({
          name: '',
          email: '',
          phone: '',
          department: '',
          date: '',
          time: '',
        });
      } else {
        const errorData = await response.json();
        alert('Error: ' + (errorData.error || 'Something went wrong.'));
      }
    } catch (error) {
      alert('Network error: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white font-serif overflow-hidden">
      {/* Image Side */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-6 md:p-10 h-64 md:h-auto">
        <img
          src={A1}
          alt="Appointment Illustration"
          className="max-w-full max-h-full rounded-lg transform hover:scale-105 transition-transform duration-500 object-contain"
        />
      </div>

      {/* Form Side */}
      <div
        className={`md:w-1/2 w-full flex items-center justify-center p-4 sm:p-6 md:p-10 transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
      >
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-red-800 border-b border-gray-300 pb-2 sm:pb-3">
            Book Appointment
          </h2>

          {/* Name */}
          <label className="block mb-4">
            <span className="text-gray-700 font-medium">Full Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 bg-transparent text-gray-900"
            />
          </label>

          {/* Email */}
          <label className="block mb-4">
            <span className="text-gray-700 font-medium">Email Address</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 bg-transparent text-gray-900"
            />
          </label>

          {/* Phone */}
          <label className="block mb-4">
            <span className="text-gray-700 font-medium">Phone Number</span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+92 300 1234567"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 bg-transparent text-gray-900"
            />
          </label>

          {/* Select Fields Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {/* Department */}
            <label className="block">
              <span className="text-gray-700 font-medium">Department</span>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm cursor-pointer focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 bg-transparent text-gray-900"
              >
                <option value="" disabled>Select Department</option>
                {departments.map(dep => (
                  <option key={dep} value={dep}>{dep}</option>
                ))}
              </select>
            </label>

            {/* Date */}
            <label className="block">
              <span className="text-gray-700 font-medium">Date</span>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}  // disable past dates
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm cursor-pointer focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 bg-transparent text-gray-900"
              />
            </label>

            {/* Time */}
            <label className="block">
              <span className="text-gray-700 font-medium">Time</span>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm cursor-pointer focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 bg-transparent text-gray-900"
              >
                <option value="" disabled>Select Time</option>
                {times.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-3 rounded-lg font-semibold transition ${
              isFormValid ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-400 cursor-not-allowed text-gray-700'
            }`}
          >
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;

