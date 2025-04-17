'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-[#0f0f0f] text-gray-400 py-6 px-4 text-center"
    >
      <p className="text-sm font-mono">
        © {new Date().getFullYear()} Rudraksh. Built with ❤️ using Next.js & Tailwind CSS
      </p>
    </motion.footer>
  );
};

export default Footer;
