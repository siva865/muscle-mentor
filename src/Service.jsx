import React from 'react';
import { FaDumbbell, FaHeartbeat, FaRunning, FaUserFriends, FaTshirt, FaSwimmer } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <FaDumbbell className="text-4xl mb-4 text-red-500" />,
    title: "Weight Training",
    description: "State-of-the-art equipment for all your strength training needs."
  },
  {
    icon: <FaRunning className="text-4xl mb-4 text-red-500" />,
    title: "Cardio Programs",
    description: "Burn fat and improve endurance with our cardio equipment."
  },
  {
    icon: <FaHeartbeat className="text-4xl mb-4 text-red-500" />,
    title: "Personal Training",
    description: "One-on-one sessions with certified fitness experts."
  },
  {
    icon: <FaUserFriends className="text-4xl mb-4 text-red-500" />,
    title: "Group Classes",
    description: "Fun and motivating group workout sessions."
  },
  {
    icon: <FaTshirt className="text-4xl mb-4 text-red-500" />,
    title: "Fitness Apparel",
    description: "High-quality workout gear in our pro shop."
  },
  {
    icon: <FaSwimmer className="text-4xl mb-4 text-red-500" />,
    title: "Recovery Zone",
    description: "Sauna and massage services for muscle recovery."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-red-500">Services</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive fitness solutions to help you achieve your goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;