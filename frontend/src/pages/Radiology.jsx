import React from 'react';
import { Link } from 'react-router-dom';
import d1 from '../images/d1.jpg';

const Radiology = () => {
  return (
    <div className="flex flex-col lg:flex-row p-4 gap-6">

      {/* Sidebar */}
      <div className="bg-[#A3272A] w-full lg:w-60 p-4 rounded-md">
        <div className="flex flex-col">
          <span className="font-bold text-white text-2xl mb-4">Departments</span>
          <hr className="w-full border-t-2 border-white my-2" />

          {[
            ['RADIOLOGY', '/Radiology'],
            ['PHYSIOTHERAPY', '/Physiotherapy'],
            ['NEPHROLOGY', '/NEPHROLOGY'],
            ['OPHTHALMOLOGY', '/OPHTHALMOLOGY'],
            ['PLASTIC SURGERY', '/PlasticSurgery'],
            ['GASTROENTEROLOGY', '/GASTROENTEROLOGY'],
          ].map(([name, path], index) => (
            <React.Fragment key={index}>
              <Link to={path} className="font-bold text-white hover:underline mb-3 ml-1">
                {name}
              </Link>
              <hr className="w-full border-t-2 border-white my-2" />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Main Content (Image + Text Below) */}
      <div className="flex-1 flex flex-col items-center">
        {/* Image */}
        <img
          src={d1}
          alt="Radiology"
          className="w-full max-w-[900px] h-auto max-h-[450px] object-cover rounded-md shadow-md"
        />

        {/* Text Below Image */}
        <div className="bg-[#A3272A] text-white mt-4 p-4 w-full max-w-[900px] rounded-md text-center">
          <p className="text-lg font-semibold">What services does the Radiology Department offer?</p>
        </div>
        <div className='ml-20 mr-20 mt-5 font-bold'>The Radiology Department provides a comprehensive range of imaging technologies, including MRI, CT scan, USG, Doppler studies, X-rays, and USG-guided procedures.     The Radiology Department at our hospital offers state-of-the-art diagnostic imaging services including X-rays, CT scans, MRI, ultrasound, and interventional radiology procedures. Our experienced radiologists and technicians use advanced technology to ensure accurate diagnosis and effective patient care. We are committed to providing timely reports and working closely with referring physicians to support comprehensive treatment plans.</div>
        
      </div>

    </div>
  );
};

export default Radiology;
