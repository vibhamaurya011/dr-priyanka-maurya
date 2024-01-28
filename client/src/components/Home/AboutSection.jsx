import React from 'react';
import about from '../../assets/about.png'

const AboutSection = () => {
  return (
    <div id="about" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className=" pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </svg>

          <div className="pt-1"></div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                About me
              </h2>

              <p className='p-4'>
              Dr. Priyanka Maurya, a Homeopathy Physician from Lucknow with 8+ years of experience, holds a B.H.M.S. degree from Gwalior University. Followed by 5 lakh people on social media, she is not only a BJP politician but also actively engages in social work with the Indian Roti Bank. Dr. Maurya initiated the Sanjeevani Free Medical Consultation during the COVID-19 pandemic and plans to organize health camps nationwide. Her mission extends beyond healthcare, focusing on creating awareness about hygiene, cleanliness, and nutrition in society.              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={about}
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutSection;
