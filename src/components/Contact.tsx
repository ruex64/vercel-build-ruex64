'use client';

import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';


const Contact = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2
          className="text-4xl font-bold mb-6"
          style={{ fontFamily: '"Press Start 2P", cursive' }}
        >
          Contact Me
        </h2>
        <p className="text-gray-400 mb-12 font-mono">
          Have a project, idea, or just want to say hi? Feel free to drop a message!
        </p>

        <form
          action="https://formsubmit.co/mrudraksh0604@gmail.com"
          method="POST"
          className="flex flex-col gap-6 font-mono"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="http://localhost:3000" />

          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={5}
            className="p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          ></textarea>
          <button
            type="submit"
            className="bg-white text-black py-3 px-6 rounded-md font-semibold hover:bg-gray-300 transition-all"
          >
            Send Message
          </button>
        </form>


        <motion.div
          className="flex justify-center gap-6 mt-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a
            href="https://www.instagram.com/ruex64"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-pink-500 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/ruex64"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-blue-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/ruex64"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-gray-400 transition-colors"
          >
            <FaGithub />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
