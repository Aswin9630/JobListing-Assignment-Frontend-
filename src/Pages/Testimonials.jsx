import React from "react";
import Navbar from "../components/Navbar";

const testimonials = [
  {
    name: "Aarav Sharma",
    position: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "This platform helped me land my dream job! The process was smooth and the UI is just amazing.",
  },
  {
    name: "Neha Mehta",
    position: "HR Manager",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote:
      "Our hiring process has become 10x faster since we started using this job portal. Highly recommended!",
  },
  {
    name: "Rahul Verma",
    position: "Backend Engineer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Super intuitive design and excellent support from the team. I found great opportunities here.",
  },
];

const Testimonials = () => {
  return (
    <div>
        <Navbar/>
    <div className="bg-white py-16 px-4 sm:px-8 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">What People Are Saying</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex flex-col items-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-blue-400"
                />
                <p className="text-gray-600 italic mb-4">"{t.quote}"</p>
                <h3 className="font-semibold text-lg text-blue-600">{t.name}</h3>
                <span className="text-sm text-gray-500">{t.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Testimonials;
