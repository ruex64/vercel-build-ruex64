'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'DevBlogs',
    description: 'A simple yet powerful documentation and blog platform.',
    tech: 'React, TailwindCSS, Firebase',
    img: 'https://res.cloudinary.com/dp4aozqfy/image/upload/fl_preserve_transparency/v1744134302/devblogs_gaubai.jpg',
    live: 'https://ruex64-blogs.netlify.app/',
    code: 'https://github.com/ruex64/ruex64-blogs',
  },
  {
    title: 'Expensy Expense Tracker',
    description: 'Track your daily expenses with clean UI and full authentication.',
    tech: 'React, Firebase, CSS',
    img: 'https://res.cloudinary.com/dp4aozqfy/image/upload/fl_preserve_transparency/v1744134729/expensy_ozmxri.jpg',
    live: 'https://expensy-gamma.vercel.app/',
    code: 'https://github.com/ruex64/expensy',
  },
  {
    title: 'Recipie Search App',
    description: 'A very simple app to find your favourite food recipie.',
    tech: 'HTML, CSS, JS',
    img: 'https://res.cloudinary.com/dp4aozqfy/image/upload/fl_preserve_transparency/v1744134311/recipie_t4qvaz.jpg',
    live: 'https://ruex64.github.io/JsRecipieApp/',
    code: 'https://github.com/ruex64/JsRecipieApp',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto">
      <motion.h2
        className="text-2xl sm:text-4xl mb-12 text-center"
        style={{ fontFamily: '"Press Start 2P", cursive' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="grid sm:grid-cols-2 gap-10"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.2, // Staggered fade-in effect
            },
          },
        }}
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#111] border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Image
              src={project.img}
              alt={project.title}
              width={600}
              height={300}
              className="w-full h-60 object-cover"
            />

            <div className="p-5 text-gray-300">
              <h3
                className="text-lg mb-2 text-white"
                style={{ fontFamily: '"Press Start 2P", cursive' }}
              >
                {project.title}
              </h3>
              <p className="text-sm mb-2" style={{ fontFamily: '"Share Tech Mono", monospace' }}>
                {project.description}
              </p>
              <p className="text-xs text-gray-400 mb-4">{project.tech}</p>

              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 hover:underline"
                >
                  Live
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-pink-400 hover:underline"
                >
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
