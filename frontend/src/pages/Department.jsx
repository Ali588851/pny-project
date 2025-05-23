import React from 'react';
import d1 from '../images/d1.jpg';
import d2 from '../images/d2.jpg';
import d3 from '../images/d3.jpg';
import d4 from '../images/d4.webp';
import d5 from '../images/d5.webp';
import d6 from '../images/d6.jpg';

import { Link } from 'react-router-dom';

function Department() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      <div className="flex flex-col items-center">
        <img src={d1} alt="Radiology" className="w-full h-auto object-cover rounded-lg" />
        <hr className="w-40 border-t-4 border-red-600 my-4" />
        <h1 className="font-bold text-center">
          <Link to="/RADIOLOGY">RADIOLOGY</Link>
        </h1>
      </div>

      <div className="flex flex-col items-center">
        <img src={d2} alt="Nephrology" className="w-full h-auto object-cover rounded-lg" />
        <hr className="w-40 border-t-4 border-red-600 my-4" />
        <h1 className="font-bold text-center">
          <Link to="/NEPHROLOGY">NEPHROLOGY</Link>
        </h1>
      </div>

      <div className="flex flex-col items-center">
        <img src={d3} alt="Ophthalmology" className="w-full h-auto object-cover rounded-lg" />
        <hr className="w-40 border-t-4 border-red-600 my-4" />
        <h1 className="font-bold text-center">
          <Link to="/OPHTHALMOLOGY">OPHTHALMOLOGY</Link>
        </h1>
      </div>

      <div className="flex flex-col items-center">
        <img src={d4} alt="Gastroenterology" className="w-full h-auto object-cover rounded-lg" />
        <hr className="w-40 border-t-4 border-red-600 my-4" />
        <h1 className="font-bold text-center">
          <Link to="/GASTROENTEROLOGY">GASTROENTEROLOGY</Link>
        </h1>
      </div>

      <div className="flex flex-col items-center">
        <img src={d5} alt="Physiotherapy" className="w-full h-auto object-cover rounded-lg" />
        <hr className="w-40 border-t-4 border-red-600 my-4" />
        <h1 className="font-bold text-center">
          <Link to="/Physiotherapy">PHYSIOTHERAPY</Link>
        </h1>
      </div>

      <div className="flex flex-col items-center">
        <img src={d6} alt="Plastic Surgery" className="w-full h-auto object-cover rounded-lg" />
        <hr className="w-40 border-t-4 border-red-600 my-4" />
        <h1 className="font-bold text-center">
          <Link to="/PlasticSurgery">PLASTIC SURGERY</Link>
        </h1>
      </div>
    </div>
  );
}

export default Department;
