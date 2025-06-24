import { useState } from 'react';
import { Link } from 'react-router-dom';
import CreateJobForm from '../Pages/CreateJobForm';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = ({ onJobAdded }) => {
  const [showForm, setShowForm] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Find Jobs', path: '/' },
    { name: 'Find Talents', path: '/' },
    { name: 'About Us', path: '/aboutus' },
    { name: 'Testimonials', path: '/testimonials' },
  ];

  return (
    <div>
      <nav>
        <div className="rounded-full my-5 bg-white shadow-[0_-2px_4px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.1)]  w-full sm:max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex justify-center gap-5 md:h-20 h-16 items-center ">
            <Link to="/">
              <img
                src="https://www.cybermindworks.com/images/cmwlogo.svg"
                alt="Logo"
                className="h-8 w-auto"
              />
            </Link>
            <div className="hidden sm:flex space-x-6 items-center text-base font-medium">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} className="hover:text-purple-700">
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => setShowForm(true)}
                className="bg-purple-700 text-white px-4 lg:py-2 rounded-full hover:bg-purple-800 cursor-pointer"
              >
                Create Jobs
              </button>
            </div>
            <div className="sm:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-800 focus:outline-none"
              >
                {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden px-4 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block text-gray-700 py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setShowForm(true);
                setMenuOpen(false);
              }}
              className="w-full bg-purple-700 text-white px-4 py-2 rounded-full"
            >
              Create Jobs
            </button>
          </div>
        )}
      </nav>

      {showForm && (
        <div className="fixed inset-0 z-50 flex justify-center bg-[rgba(0,0,0,0.5)] items-center">
          <div className="relative w-full max-w-3xl mx-auto p-2">
            <CreateJobForm onClose={() => setShowForm(false)} onJobAdded={onJobAdded} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;