import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import projectsData from '../data/projects.json';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-[#0d1117] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 border-l-4 border-green-500 pl-4">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400">A selection of my academic and freelance work.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#161b22] rounded-xl overflow-hidden border border-gray-800 hover:border-green-500/50 transition-all duration-300 flex flex-col group"
                        >
                            {/* Project Image Placeholder - using gradient/pattern if no image */}
                            <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-gray-800 group-hover:to-green-900/20 transition-colors flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                <FaCode className="text-5xl text-gray-700 group-hover:text-green-500/50 transition-colors transform group-hover:scale-110 duration-500" />
                                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-green-400 font-mono border border-green-500/30">
                                    {project.category}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">{project.title}</h3>
                                    <span className="text-gray-500 text-sm">{project.year}</span>
                                </div>

                                <p className="text-gray-400 text-sm mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-4 border-t border-gray-800 mt-auto">
                                    <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                                        <FaGithub /> Code
                                    </button>
                                    <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                                        <FaExternalLinkAlt /> Live Demo
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
