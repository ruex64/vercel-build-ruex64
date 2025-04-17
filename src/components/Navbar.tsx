'use client';

import { motion } from 'framer-motion';

const navItems = [
  { label: 'About', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1
          className="text-white text-xl sm:text-2xl"
          style={{ fontFamily: '"Press Start 2P", cursive' }}
        >
          Ruex64
        </h1>

        <ul className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-300">
          {navItems.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <a
                href={item.href}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
