import React from 'react';
import { FiPhoneCall, FiMapPin, FiMail } from 'react-icons/fi';

const Contact = () => {
  return (
    <>
      {/* Contact Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Get In Touch</h2>
          <p className="mt-2 text-gray-500">We’re here to help and answer any question you might have.</p>
        </div>

        {/* Cards Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Phone Card */}
          <div className="bg-white shadow-md hover:shadow-xl transition duration-300 rounded-2xl p-6 flex flex-col items-start text-left border border-gray-100">
            <div className="text-red-600 text-4xl mb-4">
              <FiPhoneCall />
            </div>
            <h3 className="text-xl font-semibold mb-1">Call Us</h3>
            <p className="text-gray-600 text-sm">We are available during working hours.</p>
            <p className="mt-2 text-red-600 font-medium cursor-pointer">+92 42 111 348 348</p>
          </div>

          {/* Location Card */}
          <div className="bg-white shadow-md hover:shadow-xl transition duration-300 rounded-2xl p-6 flex flex-col items-start text-left border border-gray-100">
            <div className="text-red-600 text-4xl mb-4">
              <FiMapPin />
            </div>
            <h3 className="text-xl font-semibold mb-1">Head Office</h3>
            <p className="text-gray-600 text-sm">G.T RD-Burki Rd Link, Band Road,</p>
            <p className="text-gray-600 text-sm">Jallo Morr, Lahore, Pakistan</p>
          </div>

          {/* Email Card */}
          <div className="bg-white shadow-md hover:shadow-xl transition duration-300 rounded-2xl p-6 flex flex-col items-start text-left border border-gray-100">
            <div className="text-red-600 text-4xl mb-4">
              <FiMail />
            </div>
            <h3 className="text-xl font-semibold mb-1">Email Us</h3>
            <p className="text-gray-600 text-sm">Feel free to drop us a message</p>
            <p className="mt-2 text-red-600 font-medium cursor-pointer">info@ghurkitrust.org.pk</p>
          </div>
        </div>
      </section>

      {/* Map Section - Full Width */}
      <section className="w-screen">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Our Location</h2>
        <div className="w-full h-[400px]">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13617.620420254776!2d74.46773190000001!3d31.5880615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903b35c17e8a5%3A0x5c622a9d3eb3db03!2sGhurki%20Trust%20Teaching%20Hospital!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
