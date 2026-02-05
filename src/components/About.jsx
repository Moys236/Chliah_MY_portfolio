import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-[#0d1117] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 border-l-4 border-blue-500 pl-4">
                        About Me
                    </h2>
                    <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
                        I am a <span className="text-blue-400 font-semibold">Full-Stack Digital Development intern (Excellence Class)</span>, passionate about web development and modern technologies.
                        Motivated, detail-oriented, and solution-driven, I am looking for opportunities to apply my technical skills and grow in a professional environment.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#161b22] p-8 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-colors">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-semibold mb-4 text-purple-400">Soft Skills</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Organization</li>
                            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Punctuality</li>
                            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Stress management</li>
                            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Learning mindset</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-semibold mb-4 text-pink-400">Languages</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-gray-300">Arabic</span>
                                    <span className="text-green-400">Native</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-gray-300">French</span>
                                    <span className="text-blue-400">B2 (Advanced)</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-gray-300">English</span>
                                    <span className="text-blue-400">B1 (Intermediate)</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" style={{ width: '55%' }}></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
