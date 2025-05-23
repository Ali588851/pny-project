import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import h3 from '../images/h3.jpg';

export default function ExampleForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneno: '',
    country: 'Pakistan',
    FSC_marks_percentage: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${h3})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>

      {/* Form Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8">
        <form
           onSubmit={handleSubmit}
           className="w-full max-w-3xl space-y-8 rounded-2xl  p-8   text-white "
>
          <h1 className="text-3xl font-bold text-center text-red-700">Apply Now for Admission</h1>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 text-red-700">

            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-xl font-medium">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-gray-300 py-2 px-4 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-xl font-medium">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-gray-300 py-2 px-4 text-red-500 shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* Phone No */}
            <div className="sm:col-span-2">
              <label htmlFor="phoneno" className="block text-xl font-medium">
                Phone No.
              </label>
              <input
                type="number"
                name="phoneno"
                id="phoneno"
                value={formData.phoneno}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-gray-300 py-2 px-4 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country" className="block text-xl font-medium">
                Country
              </label>
              <div className="relative mt-1">
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-4 pr-10 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                >
                  <option>Pakistan</option>
                  <option>India</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
                <ChevronDownIcon className="pointer-events-none absolute right-2 top-3 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* FSC Marks */}
            <div>
              <label htmlFor="FSC_marks_percentage" className="block text-xl font-medium">
                FSC Marks Percentage
              </label>
              <input
                type="text"
                name="FSC_marks_percentage"
                id="FSC_marks_percentage"
                value={formData.FSC_marks_percentage}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-gray-300 py-2 px-4 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block text-xl font-medium">
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-gray-300 py-2 px-4 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* State */}
            <div>
              <label htmlFor="state" className="block text-xl font-medium">
                State / Province
              </label>
              <input
                type="text"
                name="state"
                id="state"
                value={formData.state}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-gray-300 py-2 px-4 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* ZIP */}
            <div>
              <label htmlFor="zip" className="block text-xl font-medium">
                ZIP / Postal Code
              </label>
              <input
                type="text"
                name="zip"
                id="zip"
                value={formData.zip}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-gray-300 py-2 px-4 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-4 rounded-lg bg-red-600 px-6 py-2 text-xl font-semibold text-white shadow-md hover:bg-red-300 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    <div className='text-white bg-red-700 justify-center py-3 text-center my-2 font-serif  text-xl'>
      <h1 className='hover:scale-105'>Admission are Open Now!</h1>
    </div>
  <div className="flex flex-col md:flex-row justify-center items-center gap-8 bg-white py-20 px-4">
  
  {/* Affiliation Box */}
  <div className="w-72 h-44 bg-white text-black  shadow-lg p-4 transform transition duration-300 hover:scale-105 cursor-pointer ">
    <h2 className="text-xl font-bold mb-2">Affiliation</h2>
    <p className="text-sm">Affiliated By University of Sargodha.</p>
  </div>

  {/* Contact Detail Box */}
  <div className="w-72 h-44 bg-white text-black  shadow-lg p-4 transform transition duration-300 hover:scale-105 cursor-pointer ">
    <h2 className="text-xl font-bold mb-2">Contact Detail</h2>
    <p className="text-sm">Call / Whatsapp: 0349-1008583</p>
    <p className="text-sm">Call / Whatsapp: 0349-1008584</p>
    <p className="text-sm">Email: gchs@ghurkitrust.org.pk</p>
  </div>

  {/* Address Box */}
  <div className="w-72 h-44 bg-white text-black  shadow-lg p-4 transform transition duration-300 hover:scale-105 cursor-pointer ">
    <h2 className="text-xl font-bold mb-2">Address</h2>
    <p className="text-sm">Ghurki College of Health Sciences, Jallo Morr, Lahore, Pakistan.</p>
  </div>

  </div>

    </>
  );
}
