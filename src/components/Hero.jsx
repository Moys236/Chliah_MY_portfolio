import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-[#0d1117] relative overflow-hidden pt-16">
            {/* Background/Gradient Blobs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-4 block">
                        Welcome to my portfolio
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight min-h-[1.2em] flex flex-wrap justify-center gap-x-2 md:gap-x-4">
                        {/* Static "Hi, I'm" */}
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            Hi, I'm
                        </motion.span>

                        {/* Typewriter "Mohamed Yassine" */}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 flex items-center">
                            {"CHLIAH Mohamed Yassine".split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, display: "none" }}
                                    animate={{ opacity: 1, display: "inline" }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                            {/* Blinking Cursor */}
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                                className="w-[3px] h-[0.8em] bg-blue-400 ml-1 inline-block"
                            />
                        </span>
                    </h1>
                    <h2 className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Full-Stack Developer Intern & Digital Development Student.
                        <br className="hidden md:block" />
                        Passionate about building modern web solutions.
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center gap-2 transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
                    >
                        View My Work <FaArrowRight size={14} />
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 rounded-full border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 font-medium flex items-center gap-2 transition-all hover:scale-105 backdrop-blur-sm"
                    >
                        Contact Me
                    </a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500"
                >
                    <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
                        <div className="w-1 h-2 bg-gray-500 rounded-full"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
