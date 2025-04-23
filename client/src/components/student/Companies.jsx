import React from 'react';
import { assets } from '../../assets/assets';

const Companies = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <p className="text-sm md:text-base text-gray-500 tracking-wide uppercase">
          Trusted by learners from top companies
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <img className="w-20 md:w-28 grayscale hover:grayscale-0 transition duration-300" src={assets.microsoft_logo} alt="Microsoft" />
          <img className="w-20 md:w-28 grayscale hover:grayscale-0 transition duration-300" src={assets.walmart_logo} alt="Walmart" />
          <img className="w-20 md:w-24 grayscale hover:grayscale-0 transition duration-300" src={assets.accenture_logo} alt="Accenture" />
          <img className="w-20 md:w-24 grayscale hover:grayscale-0 transition duration-300" src={assets.adobe_logo} alt="Adobe" />
          <img className="w-20 md:w-24 grayscale hover:grayscale-0 transition duration-300" src={assets.paypal_logo} alt="Paypal" />
        </div>
      </div>
    </section>
  );
};

export default Companies;
