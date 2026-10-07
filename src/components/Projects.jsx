import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaImages, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import projectsData from '../data/projects.json';

const Projects = () => {
    const [galleryProject, setGalleryProject] = useState(null);
    const [galleryIndex, setGalleryIndex] = useState(0);
    const closeButtonRef = useRef(null);
    const galleryTriggerRef = useRef(null);
    const linkIcons = {
        "GitHub": <FaGithub />,
        "Live Demo": <FaExternalLinkAlt />
    };

    useEffect(() => {
        if (!galleryProject) return undefined;

        const previousOverflow = document.body.style.overflow;
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') setGalleryProject(null);
            if (event.key === 'ArrowLeft') {
                setGalleryIndex((index) => (index - 1 + galleryProject.gallery.length) % galleryProject.gallery.length);
            }
            if (event.key === 'ArrowRight') {
                setGalleryIndex((index) => (index + 1) % galleryProject.gallery.length);
            }
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);
        closeButtonRef.current?.focus();

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKeyDown);
            galleryTriggerRef.current?.focus();
        };
    }, [galleryProject]);

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

                <div className="flex flex-wrap justify-center gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333333%-1.333333rem)] bg-[#161b22] rounded-xl overflow-hidden border border-gray-800 hover:border-green-500/50 transition-all duration-300 flex flex-col group"
                        >
                            {/* Project Image Placeholder - using gradient/pattern if no image */}
                            <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-gray-800 group-hover:to-green-900/20 transition-colors flex items-center justify-center relative overflow-hidden">
                                {project.img ? (
                                    <img src={project.img} alt="" className="w-full h-full object-cover" />
                                ) : (
                                    <div>
                                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                        <FaCode className="text-5xl text-gray-700 group-hover:text-green-500/50 transition-colors transform group-hover:scale-110 duration-500" />
                                    </div>
                                )}
                                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-green-400 font-mono border border-green-500/30">
                                    {project.category}
                                </div>
                                {project.gallery?.length > 0 && (
                                    <button
                                        type="button"
                                        onClick={(event) => {
                                            galleryTriggerRef.current = event.currentTarget;
                                            setGalleryIndex(0);
                                            setGalleryProject(project);
                                        }}
                                        className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-3 py-2 text-sm text-white backdrop-blur-sm transition-colors hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                                        aria-label={`View ${project.title} screenshots`}
                                    >
                                        <FaImages aria-hidden="true" /> View screenshots
                                    </button>
                                )}
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

                                {project.links.length !== 0 && (
                                    <div className="flex gap-4 pt-4 border-t border-gray-800 mt-auto">
                                        {project.links.map((link, i) => (
                                            <a
                                                key={i}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                            >
                                                {linkIcons[link.type]} {link.name}
                                            </a>

                                        )
                                        )}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            {galleryProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${galleryProject.title} screenshots`}
                    onClick={() => setGalleryProject(null)}
                >
                    <div
                        className="relative flex h-[95vh] w-full max-w-6xl flex-col rounded-xl border border-gray-700 bg-[#0d1117] p-4 sm:p-6"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="mb-4 flex items-center justify-between gap-4">
                            <div>
                                <h2 className="text-xl font-bold text-white">{galleryProject.title} gallery</h2>
                                <p className="text-sm text-gray-400">
                                    Image {galleryIndex + 1} of {galleryProject.gallery.length}
                                </p>
                            </div>
                            <button
                                ref={closeButtonRef}
                                type="button"
                                onClick={() => setGalleryProject(null)}
                                className="rounded-full p-3 text-gray-300 transition-colors hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                                aria-label="Close gallery"
                            >
                                <FaTimes aria-hidden="true" />
                            </button>
                        </div>

                        <div className="relative flex min-h-0 flex-1 items-center justify-center">
                            <img
                                src={galleryProject.gallery[galleryIndex]}
                                alt={`${galleryProject.title} screenshot ${galleryIndex + 1}`}
                                className="max-h-[65vh] max-w-full rounded-lg object-contain"
                            />
                            <button
                                type="button"
                                onClick={() => setGalleryIndex((index) => (index - 1 + galleryProject.gallery.length) % galleryProject.gallery.length)}
                                className="absolute left-2 rounded-full bg-black/70 p-3 text-white transition-colors hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 sm:left-4"
                                aria-label="Previous image"
                            >
                                <FaChevronLeft aria-hidden="true" />
                            </button>
                            <button
                                type="button"
                                onClick={() => setGalleryIndex((index) => (index + 1) % galleryProject.gallery.length)}
                                className="absolute right-2 rounded-full bg-black/70 p-3 text-white transition-colors hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 sm:right-4"
                                aria-label="Next image"
                            >
                                <FaChevronRight aria-hidden="true" />
                            </button>
                        </div>

                        <div className="mt-4 flex gap-3 overflow-x-auto pb-1" aria-label="Choose an image">
                            {galleryProject.gallery.map((image, index) => (
                                <button
                                    key={image}
                                    type="button"
                                    onClick={() => setGalleryIndex(index)}
                                    className={`h-16 w-24 shrink-0 overflow-hidden rounded-md border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 ${
                                        index === galleryIndex ? 'border-green-400' : 'border-gray-700 hover:border-gray-400'
                                    }`}
                                    aria-label={`Show image ${index + 1}`}
                                    aria-current={index === galleryIndex ? 'true' : undefined}
                                >
                                    <img src={image} alt="" className="h-full w-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
