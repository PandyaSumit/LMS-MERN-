import React from 'react';
import { assets, dummyTestimonial } from '../../assets/assets';

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6 md:px-20 lg:px-36 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What Our Learners Say
        </h2>
        <p className="text-gray-500 md:text-base text-sm max-w-2xl mx-auto">
          Real stories of growth, learning, and success. Discover how our platform has impacted lives around the world.
        </p>
      </div>

      <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className="rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100 bg-white overflow-hidden flex flex-col"
          >
            <div className="flex items-center gap-4 px-6 py-5 bg-gray-100">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    className="h-5 w-5"
                    src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                    alt="star"
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm flex-grow">{testimonial.feedback}</p>
              <a href="#" className="text-sm text-blue-600 mt-4 inline-block hover:underline">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
