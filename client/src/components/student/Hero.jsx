import React from 'react';
import { assets } from '../../assets/assets';
import SearchBar from '../../components/student/SearchBar';

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-b from-cyan-100/70 to-white py-20 md:py-36 px-5 md:px-0 text-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-8">
        <h1 className="text-gray-800 font-extrabold relative md:text-5xl text-3xl leading-tight md:leading-tight">
          Empower your future with the courses designed to
          <span className="text-blue-600"> fit your choice.</span>
          <img
            src={assets.sketch}
            alt="Sketch underline"
            className="absolute md:block hidden -bottom-6 right-0 w-32"
          />
        </h1>

        <p className="text-gray-600 text-base md:text-lg max-w-2xl">
          We bring together world-class instructors, interactive content, and a
          supportive community to help you achieve your personal and professional goals.
        </p>

        {/* Mobile-only shorter text */}
        <p className="text-gray-600 text-sm md:hidden max-w-sm">
          Learn from top instructors and interactive content to reach your goals.
        </p>

        <div className="w-full md:max-w-xl">
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default Hero;
