import React from 'react';
import { Link } from 'react-router-dom';
import d3 from '../images/d3.jpg';

const OPHTHALMOLOGY = () => {
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
          src={d3}
          alt="Radiology"
          className="w-full max-w-[900px] h-auto max-h-[450px] object-cover rounded-md shadow-md"
        />

        {/* Text Below Image */}
        <div className="bg-[#A3272A] text-white mt-4 p-4 w-full max-w-[900px] rounded-md text-center">
          <p className="text-lg font-semibold">What services does the OPHTHALMOLOGY Department offer?</p>
        </div>
        <div className='ml-20 mr-20 mt-5 font-bold'>The Ophthalmology Department at our hospital provides comprehensive eye care services, including routine eye exams, cataract surgery, glaucoma management, and treatment for a variety of eye diseases. Our skilled ophthalmologists use advanced technology to diagnose and treat conditions that affect vision and eye health. We are dedicated to preserving and enhancing the eyesight of our patients through personalized care and modern treatments.</div>
        
      </div>

    </div>
  );
};

export default OPHTHALMOLOGY;
