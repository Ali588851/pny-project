import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faUsers, faBed } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import hospital from '../images/hospital.jpg';
import { Link } from 'react-router-dom';

const stats = [
  { icon: faCircleUser, count: 1588771, label: 'Visited Patients', start: 200 },
  { icon: faUsers, count: 1925, label: 'Ghurki Team', start: 10 },
  { icon: faBed, count: 650, label: 'Beds', start: 10 },
  { icon: faBuilding, count: 311, label: 'Departments', start: 10 },
];

const departments = [
  { title: "NEPHROLOGY", desc: "Cutting-edge care by dynamic leadership..." },
  { title: "OPHTHALMOLOGY", desc: "Led by Prof. Dr. Shafique, our pioneer department..." },
  { title: "GASTROENTEROLOGY", desc: "Excellence in digestive health..." },
];

const highlights = [
  { title: "CyberKnife", desc: "Pakistan's 2nd robotic radiosurgery unit." },
  { title: "Spine Center", desc: "1st Largest Spine Center in Pakistan." },
  { title: "Dialysis Center", desc: "Free renal care with 14-bed capacity." },
  { title: "Musafir Khana", desc: "Comfort for patient attendants." },
];

const testimonials = [
  {
    name: "Uzma Jilani",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=256&h=256&q=80",
    text: "The care I received was far more than expected. The staff was caring, highly skilled & professional. A truly comforting experience.",
  },
  {
    name: "Ahmed Raza",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    text: "Exceptional service and staff. The environment is clean and well-managed. A big thanks to the Dialysis Center team!",
  },
  {
    name: "Fatima Noor",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "From Musafir Khana to advanced surgery, everything was seamless. I’m grateful for the dedication of the entire hospital team.",
  },
];

const Home = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <>
      {/* Hero Video */}
      <div className="relative w-full h-0 pb-[56.25%] px-4 sm:px-6">
        <iframe
          className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/cvjzdrw_RyE?autoplay=1&mute=1&loop=1&playlist=cvjzdrw_RyE&controls=0&rel=0&showinfo=0"
          title="Hospital Introduction Video"
          allow="autoplay; encrypted-media"
          loading="lazy"
          allowFullScreen
        />
      </div>

      {/* Counter Section */}
      <section ref={ref} className="bg-[#A3272A] text-white py-14 px-4">
        <div className="container mx-auto flex flex-wrap justify-evenly text-center font-semibold">
          {stats.map((item, index) => (
            <div 
              key={index} 
              className="w-full sm:w-1/2 md:w-1/4 py-8 flex flex-col items-center hover:scale-105 transform transition duration-500 ease-in-out"
            >
              <FontAwesomeIcon 
                icon={item.icon} 
                size="3x" 
                className="mb-4 text-white drop-shadow-md" 
                aria-label={item.label} 
              />
              {inView && (
                <CountUp 
                  start={item.start} 
                  end={item.count} 
                  duration={3.5} 
                  separator="," 
                  className="text-3xl font-extrabold leading-none drop-shadow-md"
                />
              )}
              <p className="mt-3 text-xl tracking-widest uppercase drop-shadow-sm">{item.label}</p>
              <div className="w-12 h-1 bg-white mt-4 rounded-full" />
            </div>
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="px-4 sm:px-6 py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-black mb-4 leading-tight">
            Welcome to <span className="text-[#A3272A]">Ghurki Trust Teaching Hospital</span>
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Millions of people in Pakistan suffer from health problems due to a lack of basic necessities. We are committed to serving with compassion, innovation, and care.
          </p>
        </div>
      </section>

      {/* Departments Section */}
      <section className="bg-white py-16 px-4">
        <h2 className="text-center text-4xl font-bold text-[#A3272A] mb-12">Departments</h2>
        <div className="container mx-auto flex flex-wrap justify-center gap-8">
          {departments.map((dept, i) => (
            <div 
              key={i} 
              className="bg-[#F7F7F7] w-full sm:w-[48%] md:w-[30%] p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-400 ease-in-out"
            >
              <div className="w-20 h-20 mx-auto bg-[#A3272A] rounded-full mb-6 flex items-center justify-center text-white text-3xl font-bold select-none">
                {dept.title.charAt(0)}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{dept.title}</h3>
              <p className="text-gray-700 mb-6 min-h-[72px]">{dept.desc}</p>
              <Link
                to={`/${dept.title.toLowerCase().replace(/\s+/g, '')}`}
                className="inline-block px-6 py-2 border-2 border-[#A3272A] rounded-full text-[#A3272A] font-medium hover:bg-[#A3272A] hover:text-white transition"
              >
                Read more
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-14">
          <Link 
            to="/department" 
            className="inline-block px-8 py-3 border-2 border-[#A3272A] rounded-full text-[#A3272A] font-semibold hover:bg-[#A3272A] hover:text-white transition"
          >
            See all Departments
          </Link>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="flex flex-wrap gap-6 px-4 sm:px-6 py-14 justify-center bg-[#A3272A] text-white">
        <div className="w-full md:w-[30%]">
          <h2 className="text-3xl font-bold mb-6">Why Choose Ghurki?</h2>
          <p className="leading-relaxed text-lg">
            Our goal is more than just providing free medical care. From CyberKnife to Pakistan’s 1st Spine Center and our renowned Dialysis services, we deliver hope through innovation. Your support makes it possible, like the comfortable Musafir Khana for patients’ attendants.
          </p>
        </div>

        <div className="w-full md:w-[30%]">
          <img
            src={hospital}
            alt="Exterior view of Ghurki Hospital"
            className="w-full max-h-72 object-cover rounded-2xl shadow-xl border-4 border-white"
          />
        </div>

        <div className="w-full md:w-[30%] space-y-6">
          {highlights.map((item, i) => (
            <div 
              key={i} 
              className="group border-l-4 border-white pl-5 hover:bg-white hover:text-[#A3272A] rounded-lg transition duration-300 p-4 shadow-md hover:shadow-xl"
            >
              <p className="font-extrabold text-lg">{item.title}</p>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20 px-4">
        <h2 className="text-4xl font-bold text-[#A3272A] text-center mb-8">People Say About Us</h2>
        <hr className="w-24 border-t-4 border-[#A3272A] mx-auto mb-12" />

        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#A3272A] scrollbar-track-gray-200">
          {testimonials.map((person, index) => (
            <div 
              key={index} 
              className="min-w-[90%] sm:min-w-[300px] bg-white rounded-xl shadow-lg p-6 snap-center flex-shrink-0 hover:shadow-2xl transition duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={person.image}
                  alt={person.name}
                  onError={(e) => (e.target.src = "/default-avatar.jpg")}
                  className="w-16 h-16 rounded-full object-cover border-4 border-[#A3272A]"
                />
                <div>
                  <p className="font-semibold text-lg text-gray-900">{person.name}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{person.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
