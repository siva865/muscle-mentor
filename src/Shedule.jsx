import React from 'react';
import { FaClock, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const days = [
  { name: "Monday", classes: ["6:00 AM - Yoga", "9:00 AM - HIIT", "5:00 PM - CrossFit", "7:00 PM - Zumba"] },
  { name: "Tuesday", classes: ["6:00 AM - Cardio", "9:00 AM - Pilates", "5:00 PM - Strength", "7:00 PM - Spin"] },
  { name: "Wednesday", classes: ["6:00 AM - Yoga", "9:00 AM - Bootcamp", "5:00 PM - Boxing", "7:00 PM - Dance"] },
  { name: "Thursday", classes: ["6:00 AM - HIIT", "9:00 AM - Yoga", "5:00 PM - CrossFit", "7:00 PM - TRX"] },
  { name: "Friday", classes: ["6:00 AM - Cardio", "9:00 AM - Strength", "5:00 PM - Pilates", "7:00 PM - Spin"] },
  { name: "Saturday", classes: ["8:00 AM - Bootcamp", "10:00 AM - Yoga", "4:00 PM - Dance"] },
  { name: "Sunday", classes: ["9:00 AM - Yoga", "11:00 AM - Recovery"] }
];

const Schedule = () => {
  return (
    <section id="schedule" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Class <span className="text-red-500">Schedule</span></h2>
          <div className="flex justify-center items-center space-x-4">
            <FaCalendarAlt className="text-red-500" />
            <p className="text-gray-600">
              {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </motion.div>

        <div className="overflow-x-auto">
          <div className="min-w-max md:w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
              {days.map((day, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 rounded-lg shadow-md"
                >
                  <h3 className="font-bold text-lg mb-3 text-center">{day.name}</h3>
                  <ul className="space-y-2">
                    {day.classes.map((cls, i) => (
                      <li key={i} className="flex items-start">
                        <FaClock className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                        <span>{cls}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105">
            Download Full Schedule
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;