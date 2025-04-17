'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: 'Work Displayed and Acknowledged At Canva Photography Competition',
    date: 'Nov 2024',
    img: 'https://res.cloudinary.com/dp4aozqfy/image/upload/v1744900933/WhatsApp_Image_2025-04-17_at_7.53.37_PM_rh17oa.jpg',
  },
  {
    title: 'Second runner up at a GD competition held by Center of Professional Enhancement LPU.',
    date: 'Oct 2024',
    img: 'https://res.cloudinary.com/dp4aozqfy/image/upload/v1744900933/WhatsApp_Image_2025-04-17_at_7.55.34_PM_z8a5p1.jpg',
  },
];

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (img: string) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="min-h-screen bg-black text-white px-6 py-20" id="achievements">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2
          className="text-4xl font-bold mb-6"
          style={{ fontFamily: '"Press Start 2P", cursive' }}
        >
          Achievements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {achievements.map((ach, index) => (
            <div key={index} className="relative">
              <img
                src={ach.img}
                alt={ach.title}
                className="w-full h-48 object-cover rounded-lg cursor-pointer"
                onClick={() => openModal(ach.img)}
              />
              <h3 className="text-lg font-semibold mt-2" style={{ fontFamily: '"Share Tech Mono", monospace' }}>{ach.title}</h3>
              <p className="text-gray-400" style={{ fontFamily: '"Share Tech Mono", monospace' }}>{ach.date}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <motion.div
            className="relative bg-white p-4 rounded-lg max-w-[90vw] max-h-[90vh]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking on modal itself
          >
            <button
              className="absolute top-2 right-2 text-black font-bold text-xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Achievement"
              className="max-w-full max-h-[80vh] object-contain rounded"
            />
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
