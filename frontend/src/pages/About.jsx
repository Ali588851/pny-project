import React from 'react';
import h9 from '../images/h9.jpg';
import h10 from '../images/h10.jpg';
import { UserIcon, BedDouble, Building2 } from 'lucide-react';

const About = () => {
  return (
    <div className="px-6 py-12 bg-gradient-to-br bg-white">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Text */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-red-600 drop-shadow-md">About Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to <span className="font-semibold">Ghurki Trust Teaching Hospital</span>, where compassion meets a robust 650-bed haven.
            Originating as a small clinic in 1997, we’ve blossomed into a comforting space, inspired by
            <span className="font-semibold"> Haji Muhammad Asghar Ghurki’s</span> vision.
            Proudly registered under <span className="italic">Societies Act, XXI of 1860</span>, Ref No. RP/4476/L/91/1018,
            and certified by the Pakistan Center for Philanthropists, we hold recognition from PMC and affiliations with UHS and CPSP.
            More than a medical center, we’re a teaching hospital, shaping future healthcare professionals.
            <span className="block mt-4 font-semibold italic text-red-600 text-lg">
              Our mission is simple: to lighten the healthcare burdens of the less fortunate in our society.
            </span>
          </p>
        </div>

        {/* Image */}
        <div className="h-full w-full">
          <img
            src={h9}
            alt="Ghurki Trust Teaching Hospital"
            loading="lazy"
            className="rounded-xl shadow-2xl w-full h-full object-cover transition duration-500 ease-in-out transform group-hover:scale-105 group-hover:rotate-[1deg]"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="my-14 border-t-2 border-red-200 w-32 mx-auto" />

      {/* Bottom Description */}
      <div className="max-w-5xl mx-auto text-center space-y-6 px-4 md:px-0">
        <h5 className="text-red-600 text-xl font-medium">Serving is Our Goal</h5>
        <h1 className="text-3xl font-bold text-gray-800">Certified Healthcare Institute</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          The hospital is <span className="font-semibold">ISO 9001-2015 certified</span>, recognized by
          <span className="font-semibold"> Punjab Healthcare Commission</span> and affiliated with
          <span className="font-semibold"> AOSPINE Switzerland</span> and
          <span className="font-semibold"> Charity Commissions UK-USA</span>. Our charity hospital provides
          basic modern health facilities to non-affording patients for free, and subsidized rates for affording ones.
          Located across the BRB Canal, we serve over <span className="font-semibold">112 villages</span> with a
          population of more than <span className="font-semibold">1.5 million</span>—as well as patients from across Pakistan.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 bg-white py-20 px-4">
        {[{
          icon: <UserIcon size={36} className="text-red-600 mb-3" />,
          title: "1925",
          subtitle: "Ghurki Team"
        }, {
          icon: <BedDouble size={36} className="text-red-600 mb-3" />,
          title: "650",
          subtitle: "Beds"
        }, {
          icon: <Building2 size={36} className="text-red-600 mb-3" />,
          title: "23",
          subtitle: "Departments"
        }].map((card, index) => (
          <div key={index} className="w-72 h-44 bg-white text-black shadow-xl rounded-2xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-red-100 hover:to-white cursor-pointer flex flex-col items-center justify-center">
            {card.icon}
            <h2 className="text-2xl font-bold">{card.title}</h2>
            <p className="text-sm mt-1">{card.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Chairman Message */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch bg-white mt-12">
        {/* Text */}
        <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
          <h2 className="text-4xl font-bold text-red-700 drop-shadow-md">Chairman Message</h2>
          <p className="font-semibold italic">
            “Come & test our claims and if we prove equal to the task support us.”
          </p>
          <p>
            Alhamdulillah: By Allah’s Grace and with the help of sincere friends and supporters, our Spine Center in Ghurki Trust Teaching Hospital has progressed by leaps and bounds. The workload has doubled already. Our latest MRI, CT scan and spinal cord monitoring machines are in operation.
          </p>
          <p>
            Our center has been recognized by AO Spine International as a training center in the Middle East. Fellows from Nigeria, West Indies, Nepal, Philippines, and Saudi Arabia have been trained. Local trainees are joining for hands-on experience.
          </p>
          <p>
            Our consultants are now on the AO international faculty, conducting courses abroad including the prestigious Davos Switzerland course.
          </p>
          <p>
            Five more modular operation theaters and 100 beds have been added to cope with the increasing workload. INSHA-ALLAH, we aim to serve all patients totally free, following the SIUT Karachi model.
          </p>
          <p className="font-semibold">Allah Hafiz!</p>
          <p className="text-right font-semibold">Prof. Dr. Amer Aziz</p>
        </div>

        {/* Image */}
        <div className="h-full w-full">
          <img
            src={h10}
            alt="Prof. Dr. Amer Aziz - Chairman of Ghurki Trust Teaching Hospital"
            loading="lazy"
            className="rounded-xl shadow-2xl w-full h-full object-cover transition duration-500 ease-in-out"
          />
        </div>
      </div>

      <div className="my-14 border-t-2 border-red-200 w-32 mx-auto" />
      {/* Why Ghurki & Superior Features */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-16 px-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Ghurki Hospital?</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Network of Ghurki Trust Teaching Hospital ensuring the most specialized and advanced services and unique care.</li>
            <li>Complete care for the family, offering a wide array of treatments across all major specialties.</li>
            <li>The best equipped hospital for mother & child care, including a neonatal department and excellent services.</li>
            <li>24/7 emergency and non-emergency care under expert medical practitioners.</li>
            <li>Conveniently located, providing high-quality healthcare at affordable costs.</li>
            <li>Committed to delivering the highest standards of healthcare through Continuous Quality Improvement programs.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">What Makes GTTH Superior?</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Leading Charity Hospital in Pakistan</li>
            <li>ISO 9001 – 2015 Certified</li>
            <li>Accredited Laboratories</li>
            <li>AO Spine International Certification</li>
            <li>Impeccable record of Zero infection rate</li>
            <li>Certified by the Pakistan Centre for Philanthropy</li>
            <li>Hospital Management Information System (HMIS)</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
