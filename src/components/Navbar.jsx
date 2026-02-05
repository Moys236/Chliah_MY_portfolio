import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { title: 'About', href: '#about' },
        { title: 'Skills', href: '#skills' },
        { title: 'Experience', href: '#experience' },
        { title: 'Projects', href: '#projects' },
        { title: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        { icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/mohamed-yassine-chliah-24679733b/' },
        { icon: <FaGithub size={20} />, href: 'https://github.com' }, // GitHub placeholder or if provided
    ];

    return (
        <nav className="fixed w-full z-50 bg-[#0d1117]/90 backdrop-blur-md border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex-shrink-0 cursor-pointer"
                    >
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                            MOYSIN CH
                        </h1>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.title}
                                    href={link.href}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-gray-800/50"
                                >
                                    {link.title}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Social Icons Desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, color: "#60a5fa" }}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none p-2"
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#0d1117] border-b border-gray-800 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    onClick={() => setTimeout(() => setIsOpen(false), 600)}
                                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800"
                                >
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
