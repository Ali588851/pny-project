import React from 'react';
import { Link } from 'react-router-dom';
import d2 from '../images/d2.jpg';

const NEPHROLOGY = () => {
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
          src={d2}
          alt="Radiology"
          className="w-full max-w-[900px] h-auto max-h-[450px] object-cover rounded-md shadow-md"
        />

        {/* Text Below Image */}
        <div className="bg-[#A3272A] text-white mt-4 p-4 w-full max-w-[900px] rounded-md text-center">
          <p className="text-lg font-semibold">What services does the NEPHROLOGY Department offer?</p>
        </div>
        <div className='ml-20 mr-20 mt-5 font-bold'> The Nephrology Department provides comprehensive care for patients with kidney-related issues. Our team of nephrologists specializes in diagnosing and treating chronic kidney disease (CKD), acute kidney injuries, kidney infections, and hypertension-related kidney problems. We offer services like dialysis, kidney transplant evaluation, and management, as well as post-transplant care. Our aim is to improve the quality of life for our patients by preventing kidney failure, slowing disease progression, and providing compassionate care throughout their treatment journey.</div>
        
      </div>

    </div>
  );
};

export default NEPHROLOGY;
