import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, FaDatabase, FaGitAlt, FaGithub, FaGitlab, FaJira, FaServer, FaLaravel } from 'react-icons/fa';
import { SiAstro, SiDocker, SiMysql, SiMongodb, SiSonarqube } from 'react-icons/si';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend & Backend",
            skills: [
                { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
                { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
                { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
                { name: "Astro JS", icon: <SiAstro className="text-orange-400" /> },
                { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
                { name: "React", icon: <FaReact className="text-blue-400" /> },
                { name: "Laravel", icon: <FaLaravel className="text-red-600" /> },
            ]
        },
        {
            title: "Database",
            skills: [
                { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
            ]
        },
        {
            title: "Tools & Collaboration",
            skills: [
                { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
                { name: "GitHub", icon: <FaGithub className="text-white" /> },
                { name: "GitLab", icon: <FaGitlab className="text-orange-400" /> },
                { name: "Jira", icon: <FaJira className="text-blue-500" /> },
                { name: "SonarQube", icon: <SiSonarqube className="text-blue-400" /> },
                { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
            ]
        },
        {
            title: "Other",
            skills: [
                { name: "Web Hosting", icon: <FaServer className="text-green-400" /> },
                { name: "Custom CMS", icon: <FaServer className="text-purple-400" /> }, // Reusing icon using general server icon
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section id="skills" className="py-20 bg-[#0d1117] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 border-l-4 border-purple-500 pl-4">
                        Technical Skills
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="bg-[#161b22] p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
                        >
                            <h3 className="text-lg font-semibold text-gray-200 mb-6">{category.title}</h3>
                            <div className="space-y-4">
                                {category.skills.map((skill, sIdx) => (
                                    <motion.div
                                        key={sIdx}
                                        variants={itemVariants}
                                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors"
                                    >
                                        <span className="text-2xl">{skill.icon}</span>
                                        <span className="text-gray-400 font-medium">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
