'use client';

import { motion } from 'framer-motion';
import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiArduino,
  SiLinux,
  SiGit,
  SiGithub,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiAdobephotoshop,
  SiAdobelightroom,
  SiFigma,
} from 'react-icons/si';
import { FaCameraRetro } from 'react-icons/fa';

const skills = [
  { name: 'ReactJS', icon: <SiReact className="text-cyan-400" /> },
  { name: 'NodeJS', icon: <SiNodedotjs className="text-green-500" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss className="text-teal-300" /> },
  { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-500" /> },
  { name: 'HTML', icon: <SiHtml5 className="text-orange-600" /> },
  { name: 'CSS', icon: <SiCss3 className="text-blue-500" /> },
  { name: 'Arduino', icon: <SiArduino className="text-blue-400" /> },
  { name: 'Linux', icon: <SiLinux className="text-white" /> },
  { name: 'Git', icon: <SiGit className="text-orange-500" /> },
  { name: 'GitHub', icon: <SiGithub className="text-white" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-400" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
  { name: 'Express', icon: <SiExpress className="text-gray-300" /> },
  { name: 'Lightroom', icon: <SiAdobelightroom className="text-blue-300" /> },
  { name: 'Photoshop', icon: <SiAdobephotoshop className="text-blue-400" /> },
  { name: 'Figma', icon: <SiFigma className="text-pink-400" /> },
  { name: 'Photography', icon: <FaCameraRetro className="text-white" /> },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-20 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ fontFamily: '"Press Start 2P", cursive' }}>
          My Skills
        </h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800 rounded-xl p-5 flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform"
              variants={item}
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <p className="text-sm sm:text-base font-mono">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
