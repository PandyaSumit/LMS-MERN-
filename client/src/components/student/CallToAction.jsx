import React from 'react';
import { assets } from '../../assets/assets';

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6 md:px-20 lg:px-36 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 leading-tight">
          Learn anything, anytime, anywhere
        </h1>
        <p className="text-sm sm:text-base text-gray-500">
          Access expert-led courses that fit into your lifestyle and learning goals—on your schedule, wherever you are.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <button className="px-8 py-3 text-white font-medium bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300">
            Get started
          </button>
          <button className="flex items-center gap-2 text-blue-600 hover:underline">
            Learn more
            <img src={assets.arrow_icon} alt="arrow icon" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
