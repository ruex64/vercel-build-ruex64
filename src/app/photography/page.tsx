// app/photography/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const photos = [
  {
    src: 'https://res.cloudinary.com/dp4aozqfy/image/upload/v1744905580/DSCF1377_vu17r4.jpg',
    alt: 'Photo 1',
  },
  {
    src: 'https://res.cloudinary.com/dp4aozqfy/image/upload/v1744905577/DSCF1119_1_jktyig.jpg',
    alt: 'Photo 2',
  },
  {
    src: 'https://res.cloudinary.com/dp4aozqfy/image/upload/v1744905572/DSCF1100_klpz7h.jpg',
    alt: 'Photo 3',
  },
  {
    src: 'https://res.cloudinary.com/dp4aozqfy/image/upload/v1744905563/DSCF1198_p5bk0x.jpg',
    alt: 'Photo 4',
  },
  {
    src: 'https://res.cloudinary.com/dp4aozqfy/image/upload/v1744905538/DSC_7108_xhe2kx.jpg',
    alt: 'Photo 5',
  },
  {
    src: 'https://res.cloudinary.com/dp4aozqfy/image/upload/v1744905532/DSCF1912_lh0ebs.jpg',
    alt: 'Photo 6',
  },
];

export default function Photography() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold" style={{ fontFamily: '"Press Start 2P", cursive' }}>My Photography</h1>
        <Link href="/" className="text-sm underline hover:text-gray-400" style={{ fontFamily: '"Share Tech Mono", monospace' }}>
          ← Back to Dev
        </Link>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelected(index)}
            className="cursor-pointer overflow-hidden rounded-lg"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={500}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full p-4"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <Image
                src={photos[selected].src}
                alt={photos[selected].alt}
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-red-500"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
