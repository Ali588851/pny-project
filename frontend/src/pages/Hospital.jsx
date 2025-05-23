import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import h1 from '../images/h1.jpg';
import h2 from '../images/h2.jpg';
import h3 from '../images/h3.jpg';
import h4 from '../images/h4.jpg';
import h5 from '../images/h5.jpg';
import h6 from '../images/h6.jpg';
import h7 from '../images/h7.jpg';

const Hospital = () => {
  const [sliderRef1, instanceRef1] = useKeenSlider({ loop: true });
  const [sliderRef2, instanceRef2] = useKeenSlider({ loop: true });
  const [sliderRef3, instanceRef3] = useKeenSlider({ loop: true });

  return (
    <>
      <div className="min-h-screen overflow-hidden items-start justify-center bg-white-100 px-6 pb-6">
        {/* First Section */}
        <div className="flex flex-col md:flex-row bg-white overflow-hidden max-w-5xl w-full mb-8">
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 text-red-700">Jam-e-Masjid</h2>
            <p className="text-gray-700 mb-2">
              Jame Masjid at Ghurki Trust Teaching Hospital, a sacred space isn’t just for daily prayers; it warmly welcomes everyone for Jumma congregations. The thoughtful design ensures a traffic-free and clear atmosphere during Jumma prayer times, allowing for a seamless and undisturbed experience. With its mix of traditional and modern design, this is a symbol of unity and cultural diversity. Jumma prayers start promptly at 1:15 pm, ensuring a timely and convenient prayer for everyone.
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <div ref={sliderRef1} className="keen-slider h-48 md:h-72"> {/* Adjusted height */}
              <div className="keen-slider__slide number-slide1">
                <img src={h1} alt="Slide 1" className="w-full h-full object-cover" />
              </div>
              <div className="keen-slider__slide number-slide2">
                <img src={h2} alt="Slide 2" className="w-full h-full object-cover" />
              </div>
            </div>
            <button
              onClick={() => instanceRef1.current?.prev()}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
            >
              &#8592;
            </button>
            <button
              onClick={() => instanceRef1.current?.next()}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row bg-white overflow-hidden max-w-5xl w-full mb-8">
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 text-red-700">Musafir Khana</h2>
            <p className="text-gray-700 mb-2">
              Ghurki Hospital’s Musafir Khana is a place where families are embraced with warmth during challenging times. With an investment of 40 million Rupees, this haven offers more than just lodging; it’s a heartwarming experience with free meals, clean water, and the warmth of a home away from home. Accommodating up to 300 individuals, Musafir Khana blends comfort, security, and convenience, ensuring every moment spent is a step towards healing. Join us in this journey of care – your support through donations can amplify our reach, touching more lives in their time of need.
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <div ref={sliderRef2} className="keen-slider h-48 md:h-72"> {/* Adjusted height */}
              <div className="keen-slider__slide number-slide1">
                <img src={h5} alt="Slide 1" className="w-full h-full object-cover" />
              </div>
              <div className="keen-slider__slide number-slide2">
                <img src={h3} alt="Slide 2" className="w-full h-full object-cover" />
              </div>
              <div className="keen-slider__slide number-slide2">
                <img src={h4} alt="Slide 2" className="w-full h-full object-cover" />
              </div>
            </div>
            <button
              onClick={() => instanceRef2.current?.prev()}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
            >
              &#8592;
            </button>
            <button
              onClick={() => instanceRef2.current?.next()}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Third Section */}
        <div className="flex flex-col md:flex-row bg-white overflow-hidden max-w-5xl w-full mb-8">
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 text-red-700">Water Filtration Plants</h2>
            <p className="text-gray-700 mb-2">
              Ghurki Trust Teaching Hospital recently celebrated a significant addition to its facilities – a new Water Purification Plant, officially inaugurated by the Ambassador of the Czech Republic, Mr. Smentanka. The project, supported by the Czech Republic and Bata Pakistan, ensures that both patients and their families have access to safe and purified water, a basic yet crucial necessity for health. This significant step, supported by international collaboration, reflects Ghurki Hospital’s dedication to superior healthcare and community well-being.
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <div ref={sliderRef3} className="keen-slider h-48 md:h-72"> {/* Adjusted height */}
              <div className="keen-slider__slide number-slide1">
                <img src={h6} alt="Slide 1" className="w-full h-full object-cover" />
              </div>
              <div className="keen-slider__slide number-slide2">
                <img src={h7} alt="Slide 2" className="w-full h-full object-cover" />
              </div>
            </div>
            <button
              onClick={() => instanceRef3.current?.prev()}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
            >
              &#8592;
            </button>
            <button
              onClick={() => instanceRef3.current?.next()}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hospital;
