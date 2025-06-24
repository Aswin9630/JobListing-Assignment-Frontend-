import React from "react";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  return (
    <div>
        <Navbar/>
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-8 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Welcome to <span className="font-semibold text-blue-500">Cybermind works</span> — where we connect the best talent with the best opportunities.
          We are passionate about building tools that simplify hiring and empower professionals to grow their careers.
        </p>

        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Team"
          className="w-full h-80 object-cover rounded-xl shadow-md mb-10"
        />

        <div className="grid md:grid-cols-3 gap-8 mt-10 text-left">
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To bridge the gap between opportunity and talent through technology, innovation, and trust.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              A future where job discovery is seamless and fulfilling for everyone involved.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Why Us?</h3>
            <p className="text-gray-600">
              We bring a human touch to tech-driven hiring. Your success is our priority.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
