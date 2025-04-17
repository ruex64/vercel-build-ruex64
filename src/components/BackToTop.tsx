'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 bg-black text-white p-3 rounded-full shadow-md ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity`}
    >
      &#8593; {/* Arrow up icon */}
    </motion.button>
  );
};

export default BackToTop;
