import React from 'react';
import {Link} from 'react-router-dom'
import heroImage from '../../assets/heroImage.png';

const HeroSection = () => {
  return (
    <section className="bg-white dark:bg-gray-100">
      <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 pt-10 lg:grid-cols-12">
        <div className="lg:col-span-5 lg:flex">
          <img src={heroImage} alt="mockup" />
        </div>
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl text-blue-900 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">India's Premier Homeopathy Clinic</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl">At Modern Homeopathic Clinic, we redefine wellness through personalized care and genuine healing. Our dedicated team, led by the esteemed Dr. Priyanka Maurya, is committed to delivering high-quality homeopathic treatment.</p>
          {/* <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Get started
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a> */}
          <Link className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border bg-blue-900 border-white rounded-full hover:bg-blue-800 focus:ring-4 focus:ring-gray-100">
          Contact Now
          </Link> 
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



// import React from 'react';
// import heroImage from '../../assets/heroImage.png';

// function HeroSection() {
//   return (
//     <div className="flex bg-gray-100 flex-col md:flex-row p-10 items-center h-screen justify-center w-screen">
//       <div className="md:w-2/5 relative overflow-hidden">
//         <img src={heroImage} alt="Clinic Image" className="w-full h-full object-cover md:object-cover lg:object-contain" />
//       </div>
//       <div className="md:w-3/5 flex flex-col justify-center items-center">
//         <div className="text-center md:text-start px-6">
//           <h1 className="text-4xl md:text-4xl lg:text-6xl text-blue-900 font-bold mb-4">India's Premier Homeopathy Clinic</h1>
//           <p className="text-lg lg:text-xl mb-8">
//             At Modern Homeopathic Clinic, we redefine wellness through personalized care and genuine healing. Our dedicated team, led by the esteemed Dr. Priyanka Maurya, is committed to delivering high-quality homeopathic treatment.
//           </p>
//           <button className='rounded-full bg-blue-900 py-2 px-4 lg:px-6 border-2 border-white text-sm lg:text-base font-semibold leading-6 text-white'>
//             Get Treatment
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;
