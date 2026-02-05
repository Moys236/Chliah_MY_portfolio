import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-[#0d1117] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-gray-400">
                        I am currently looking for an internship or job opportunity.
                        Whether you have a question or just want to say hi, feel free to contact me!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-semibold text-blue-400 mb-6">Contact Information</h3>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 text-xl">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-200">Email</h4>
                                <a href="mailto:mohamdysn2365@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                                    mohamdysn2365@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400 text-xl">
                                <FaPhone />
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-200">Phone</h4>
                                <a href="tel:+212656857707" className="text-gray-400 hover:text-white transition-colors">
                                    +212 6 56 85 77 07
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 text-xl">
                                <FaLinkedin />
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-200">LinkedIn</h4>
                                <a href="https://www.linkedin.com/in/mohamed-yassine-chliah-24679733b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                    Mohamed Yassine Chliah
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center text-red-400 text-xl">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-200">Location</h4>
                                <span className="text-gray-400">Tangier, Morocco</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Simple Message Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#161b22] p-8 rounded-2xl border border-gray-800"
                    >
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                                <input type="text" id="name" className="w-full bg-[#0d1117] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Your Name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                                <input type="email" id="email" className="w-full bg-[#0d1117] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                                <textarea id="message" rows="4" className="w-full bg-[#0d1117] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Your message..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
