import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const trainers = [
  {
    name: "Alex Johnson",
    specialty: "Strength Training",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    bio: "Certified personal trainer with 10+ years of experience in strength and conditioning."
  },
  {
    name: "Sarah Miller",
    specialty: "Yoga & Pilates",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    bio: "Yoga instructor specializing in vinyasa flow and therapeutic yoga practices."
  },
  {
    name: "Mike Rodriguez",
    specialty: "CrossFit",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    bio: "CrossFit Level 3 Trainer with multiple competition wins under his belt."
  },
  {
    name: "Emily Chen",
    specialty: "Nutrition & Fitness",
    image: "https://images.unsplash.com/photo-1519482816305-2c3d3cb0b1a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    bio: "Registered dietitian and certified personal trainer focusing on holistic health."
  }
];

const Trainers = () => {
  return (
    <section id="trainers" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-red-500">Trainers</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our team of certified professionals dedicated to your fitness journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{trainer.name}</h3>
                <p className="text-red-500 font-semibold mb-3">{trainer.specialty}</p>
                <p className="text-gray-600 mb-4">{trainer.bio}</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-500 hover:text-red-500 transition duration-300">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-red-500 transition duration-300">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-red-500 transition duration-300">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;