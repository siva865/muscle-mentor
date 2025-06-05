import React from 'react';
import { FaDumbbell, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Forge Your <span className="text-red-500">Strength</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl mb-8"
            >
              At MuscleCraft, we help you sculpt your body and mind with state-of-the-art facilities and expert trainers.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105">
                Join Now
              </button>
              <button className="border-2 border-white hover:border-red-500 text-white hover:text-red-500 px-6 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105">
                Learn More
              </button>
            </motion.div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-red-500 rounded-lg p-6 shadow-2xl transform rotate-1 hover:rotate-0 transition duration-500">
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center mb-6">
                  <FaDumbbell className="text-3xl text-red-500 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold">Today's Special</h3>
                    <p className="text-gray-300">Power Lifting Workshop</p>
                  </div>
                </div>
                <div className="flex items-center mb-6">
                  <FaClock className="text-3xl text-red-500 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold">Current Time</h3>
                    <p className="text-gray-300">{currentTime}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-3xl text-red-500 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold">Location</h3>
                    <p className="text-gray-300">123 Fitness St, Gym City</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;