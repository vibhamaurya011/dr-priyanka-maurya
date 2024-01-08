import React, { useState } from 'react';
import { motion } from 'framer-motion';

function HeroSection() {
  const [showText, setShowText] = useState(true);

  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <div className="flex items-center justify-center w-full h-80 bg-gray-100 relative z-0">
      <div className="flex w-full max-w-6xl">
        {/* Left Div */}
        <div className={`w-1/2 p-5 ${showText ? 'visible' : 'hidden'}`}>
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Clinic</h1>
          <p className="text-lg mb-6">
            Providing the best treatments and care for your health.
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={toggleText}
          >
            Get Treatment
          </button>
        </div>

        {/* Right Div */}
        <div className="w-1/2 relative">
          {/* Dummy Image */}
          <img
            src="https://via.placeholder.com/400x300"
            alt="Clinic Image"
            className="w-full"
          />

          {/* Small div with text */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow-md"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p className="text-sm">Treatment Types</p>
            <p className="text-sm">Diagnostics</p>
            <p className="text-sm">Preventive Care</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
