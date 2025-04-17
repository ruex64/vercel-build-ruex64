'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Certification {
  title: string;
  date: string;
  img: string;
}

const certifications: Certification[] = [
  {
    title: 'Meta Front-End Developer',
    date: 'Apr 2025',
    img: 'https://res.cloudinary.com/dp4aozqfy/image/upload/fl_preserve_transparency/v1744302603/Meta_Frontend_WebDevloper_lkyjfy.jpg',
  },
  {
    title: 'Google UX Certificate',
    date: 'Aug 2024',
    img: 'https://res.cloudinary.com/dp4aozqfy/image/upload/fl_preserve_transparency/v1744133918/Google_Ux_certificate_hpwzdz.jpg',
  },
  {
    title: 'IBM Git-Github Certificate',
    date: 'Feb 2025',
    img: 'https://res.cloudinary.com/dp4aozqfy/image/upload/fl_preserve_transparency/v1744133917/IBM_Git-Github_Certificate_xbojhq.jpg',
  },
];

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (img: string) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="min-h-screen bg-black text-white px-6 py-20" id="certifications">
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
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="relative">
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-48 object-cover rounded-lg cursor-pointer"
                onClick={() => openModal(cert.img)}
              />
              <h3 className="text-lg font-semibold mt-2" style={{ fontFamily: '"Share Tech Mono", monospace' }}>{cert.title}</h3>
              <p className="text-gray-400" style={{ fontFamily: '"Share Tech Mono", monospace' }}>{cert.date}</p>
            </div>
          ))}
        </div>

        {/* Modal for image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center"
            onClick={closeModal}
          >
            <motion.div
              className="relative bg-white p-4 rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-2 right-2 text-black font-bold text-xl"
                onClick={closeModal}
              >
                &times;
              </button>
              <img
                src={selectedImage}
                alt="Certificate"
                className="max-w-[90vw] max-h-[80vh] object-contain"
              />
            </motion.div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Certifications;
