'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="px-6 py-20 max-w-4xl mx-auto text-center">
      <motion.h2
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-lg leading-relaxed mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        I'm a passionate <span className="text-teal-400">Web Developer</span> who loves building modern, clean, and fast websites using the latest technologies like <span className="text-teal-400">React</span>, <span className="text-teal-400">Next.js</span>, and <span className="text-teal-400">Tailwind CSS</span>. Coding is not just my skill—it's something I genuinely enjoy.
      </motion.p>

      <motion.p
        className="text-lg leading-relaxed mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Over time, I developed a deep interest in <span className="text-teal-400">UI/UX design</span>. I believe that good design is about more than looks—it's about creating intuitive and enjoyable experiences. I use tools like <span className="text-teal-400">Figma</span> and <span className="text-teal-400">Photoshop</span> to bring ideas to life with precision and style.
      </motion.p>

      <motion.p
        className="text-lg leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Beyond the screen, I’m also a <span className="text-teal-400">photography enthusiast</span>. Capturing real-life moments and translating stories through the lens has become an expressive outlet for me. My camera is where I find inspiration and creative peace.
      </motion.p>
    </section>
  );
};

export default About;
