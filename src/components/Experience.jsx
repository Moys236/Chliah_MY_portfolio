import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
    const education = [
        {
            id: 1,
            degree: "Digital Development – Full-Stack",
            school: "CMC – Tangier",
            period: "2024 – 2026",
            details: "Excellence Class"
        },
        {
            id: 2,
            degree: "PIE Certificate – Programme d'Innovation et d'Entrepreneuriat",
            school: "CMC – Tangier",
            period: "2025 – 2026",
            details: ""
        },
        {
            id: 3,
            degree: "Baccalaureate in Physical Sciences (French option)",
            school: "Lycée Abdelmoumen El Mouahidi – Tangier",
            period: "2023",
            details: ""
        }
    ];

    const experience = [
        {
            id: 1,
            role: "Freelance Web Developer",
            company: "Self-Employed",
            period: "2024 - Present",
            description: [
                "Developed two showcase websites for local clients.",
                "Built a website with a custom CMS.",
                "Managed deployment, hosting configuration, and basic optimization."
            ]
        },
        {
            id: 2,
            role: "Fablab Project: Quality Control System",
            company: "CMC Tangier",
            period: "2025",
            description: [
                "Built a quality control system based on image recognition.",
                "Integrated the ML model into a functional application."
            ]
        },
        {
            id: 3,
            role: "End-of-Training Project: Schedio, School Timetable Management",
            company: "CMC Tangier",
            period: "2025 - 2026",
            description: [
                "Developed a school timetable management platform, live in production at schedio.ma.",
                "Built the application with Laravel and React, with real-time updates via WebSockets (Laravel Reverb) and Redis-backed queues.",
                "Integrated a Python solver for automated scheduling and designed rules for exam session planning, including conflict detection and room reassignment.",
                "Implemented email notifications to keep users informed of updates that concern them.",
                "Containerized the stack with Docker and deployed it on a server using Git, GitHub, and SSH."
            ]
        },
        {
            id: 4,
            role: "Web Development Internship",
            company: "Hostino",
            period: "May - June 2026",
            description: [
                "Developed websites using Astro JS, within the company's development teams.",
                "Collaborated with developers on real client projects under the guidance of the supervisors.",
                "Gained hands-on experience with a modern web workflow in a professional environment."
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-[#0d1117] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 border-l-4 border-pink-500 pl-4">
                        Experience & Education
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Education Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <FaGraduationCap className="text-3xl text-pink-500" />
                            <h3 className="text-2xl font-bold">Education</h3>
                        </div>
                        <div className="space-y-8 border-l-2 border-gray-800 ml-3 pl-8 relative">
                            {education.map((edu) => (
                                <motion.div
                                    key={edu.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-pink-500 border-4 border-[#0d1117]"></span>
                                    <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                                    <p className="text-pink-400 font-medium mb-1">{edu.school}</p>
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                                        <span className="flex items-center gap-1"><FaCalendarAlt /> {edu.period}</span>
                                        <span className="flex items-center gap-1"><FaMapMarkerAlt /> Tangier</span>
                                    </div>
                                    {edu.details && <p className="text-gray-400 text-sm italic">{edu.details}</p>}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Experience Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <FaBriefcase className="text-3xl text-blue-500" />
                            <h3 className="text-2xl font-bold">Experience</h3>
                        </div>
                        <div className="space-y-12 border-l-2 border-gray-800 ml-3 pl-8 relative">
                            {experience.map((exp) => (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-blue-500 border-4 border-[#0d1117]"></span>
                                    <h4 className="text-xl font-semibold text-white">{exp.role}</h4>
                                    <p className="text-blue-400 font-medium mb-1">{exp.company}</p>
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                        <span className="flex items-center gap-1"><FaCalendarAlt /> {exp.period}</span>
                                    </div>
                                    <ul className="list-disc list-outside text-gray-400 space-y-2 ml-4">
                                        {exp.description.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
