import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import neelam from '../../assets/neelam.png'
import yadunath from '../../assets/yadunath.png'
import shivangi from '../../assets/shivangi.png'

const MassageSection = () => {
  const testimonialData = [
    {
      image: neelam,
      text: 'I am immensely grateful for the outstanding care you\'ve provided. Your unique approach, combining expert medical advice with genuine concern for my well-being, truly sets you apart. Your clinic is undoubtedly the best in homeopathic medicine in this area. Thank you for being an inspiration to others in the medical field.',
      name: 'Neelam Yadav',
      role: 'Our Client',
    },
    {
      image: yadunath,
      text: 'Thank you, Dr. Priyanka Maurya Homeopathy Clinic, for the excellent care since 1982. Your well-behaved staff and precise diagnosis have been crucial to my health. Grateful for your dedication to healing. Wishing you continued success in serving and curing. All the best!',
      name: 'Yadunath Kushwaha',
      role: 'Our Client',
    },
    {
      image:  shivangi,
      text: 'Dr. Priyanka Maurya Homeopathy Clinic is undeniably one of the best in town. The exceptional doctors and staff efficiently treated my cervical concerns. I extend my heartfelt thanks to Priyanka for her generosity. Wishing her continued success and excellence in healing. Grateful for the outstanding care received.',
      name: 'Shivangi Gupta',
      role: 'Our Client',
    },
    // Add more testimonial data as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i, active) {
      return (
        <div
          className={`slick-dot ${active ? 'active' : ''}`}
        ></div>
      );
    },
  };

  return (
    <section className="rounded-md p-6 text-center shadow-lg md:p-12 md:text-left">
      <div className="flex justify-center">
        <div className="max-w-5xl w-full">
          <Slider {...settings}>
            {testimonialData.map((testimonial, index) => (
              <div key={index} className="block rounded-lg bg-white p-6 md:flex md:items-center">
                <div className="mx-auto mb-6 w-36 flex-shrink-0">
                  <img
                    src={testimonial.image}
                    className="rounded-full shadow-md dark:shadow-black/30 mx-auto"
                    alt="woman avatar"
                  />
                </div>
                <div className="md:ml-6">
                  <p className="mb-6 font-light text-blue-500">
                    {testimonial.text}
                  </p>
                  <p className="mb-2 text-xl text-center font-semibold text-blue-800">
                    {testimonial.name}
                  </p>
                  <p className="mb-0 text-center font-semibold text-gray-300">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default MassageSection;