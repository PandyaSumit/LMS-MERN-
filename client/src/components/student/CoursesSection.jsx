import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';

const CoursesSection = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <section className="w-full py-16 px-6 md:px-20 lg:px-36 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Learn from the Best
        </h2>
        <p className="text-gray-500 md:text-base text-sm max-w-2xl mx-auto mb-12">
          Explore our top-rated courses across technology, design, business, and personal growth. Each course is expertly crafted to empower your learning journey.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allCourses.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link
          to="/course-list"
          onClick={() => scrollTo(0, 0)}
          className="text-sm md:text-base border border-gray-400 text-gray-700 px-6 py-3 rounded hover:bg-gray-100 transition duration-300"
        >
          View All Courses
        </Link>
      </div>
    </section>
  );
};

export default CoursesSection;
