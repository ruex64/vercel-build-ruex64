'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-center bg-gradient-to-br from-black to-gray-900 text-white px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl"
      >
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          style={{ fontFamily: '"Press Start 2P", cursive' }}
        >
          Hey, I’m Rudraksh
        </h1>
        <p className="text-lg sm:text-xl font-mono text-gray-300 mb-8">
          A passionate developer crafting clean UI/UX, smart systems, and creative tools.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://drive.google.com/file/d/1x2x3x4x5x6x7x8x9x/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-all"
          >
            Download CV
          </a>

          <Link
            href="#contact"
            className="px-6 py-2 rounded-xl border border-white text-white hover:bg-white hover:text-black transition-all"
          >
            Contact Me
          </Link>
          <a
            href="photography"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-all"
          >
            Photography
          </a>
        </div>
      </motion.div>
    </section>
  );
}
