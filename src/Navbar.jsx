import React, { useState } from 'react';
import { FaBars, FaTimes, FaDumbbell } from 'react-icons/fa';
import { GiMuscleUp } from 'react-icons/gi';
import { MdFitnessCenter } from 'react-icons/md';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="fixed w-full bg-gray-900 text-white z-50 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <GiMuscleUp className="text-3xl text-red-500" />
            <h1 className="text-2xl font-bold">
              <span className="text-red-500">Muscle</span>Mentor
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-red-500 transition duration-300 flex items-center">
              <MdFitnessCenter className="mr-1" /> Home
            </a>
            <a href="#services" className="hover:text-red-500 transition duration-300">Services</a>
            <a href="#schedule" className="hover:text-red-500 transition duration-300">Schedule</a>
            <a href="#trainers" className="hover:text-red-500 transition duration-300">Trainers</a>
            <a href="#testimonials" className="hover:text-red-500 transition duration-300">Testimonials</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white z-40 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out shadow-lg md:hidden`}>
        <div className="p-4 flex flex-col h-full">
          <div className="flex items-center space-x-2 mb-8 pt-12">
            <GiMuscleUp className="text-3xl text-red-500" />
            <h1 className="text-xl font-bold">
              <span className="text-red-500">Muscle</span>Mentor
            </h1>
          </div>
          <nav className="flex flex-col space-y-6">
            <a href="#home" className="hover:text-red-500 transition duration-300 flex items-center" onClick={toggleMenu}>
              <MdFitnessCenter className="mr-2" /> Home
            </a>
            <a href="#services" className="hover:text-red-500 transition duration-300" onClick={toggleMenu}>Services</a>
            <a href="#schedule" className="hover:text-red-500 transition duration-300" onClick={toggleMenu}>Schedule</a>
            <a href="#trainers" className="hover:text-red-500 transition duration-300" onClick={toggleMenu}>Trainers</a>
            <a href="#testimonials" className="hover:text-red-500 transition duration-300" onClick={toggleMenu}>Testimonials</a>
          </nav>
          <div className="mt-auto pb-8">
            <p className="text-sm text-gray-400">© 2023 MuscleMentor</p>
          </div>
        </div>
      </div>
      
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;