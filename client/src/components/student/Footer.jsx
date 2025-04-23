import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="md:px-36 px-8 py-14 border-b border-white/10 grid md:grid-cols-3 gap-12">
        {/* Logo and Description */}
        <div className="flex flex-col gap-4">
          <img src={assets.logo_dark} alt="Logo" className="w-36" />
          <p className="text-sm text-white/70 leading-relaxed">
            Empowering learners worldwide with practical, real-world skills through high-quality, accessible online education.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-4 justify-start">
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="text-sm text-white/70 space-y-2">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Stay Updated</h3>
          <p className="text-sm text-white/70">
            Get the latest courses, tips, and insights delivered straight to your inbox.
          </p>
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-gray-800 text-white/70 placeholder-white/50 text-sm px-4 py-2 rounded w-full outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 rounded text-sm hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-5 text-xs md:text-sm text-white/50">
        © {new Date().getFullYear()} LMS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
