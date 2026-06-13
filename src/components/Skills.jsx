import { motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaCode,
    FaTools,
} from "react-icons/fa";

import { MdComputer } from "react-icons/md";
function Skills() {
    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                "React.js",
                "Next.js",
                "JavaScript",
                "Tailwind CSS",
                "HTML",
                "CSS",
            ],
        },

        {
            title: "Backend",
            skills: [
                "Node.js",
                "Express.js",
                "REST APIs",
            ],
        },

        {
            title: "Database",
            skills: [
                "MongoDB",
                "PostgreSQL",
                "Supabase",
            ],
        },

        {
            title: "Programming",
            skills: [
                "C++",
                "JavaScript",
            ],
        },

        {
            title: "Tools & Platforms",
            skills: [
                "Git",
                "GitHub",
                "Postman",
                "VS Code",
            ],
        },

        {
            title: "Core CS",
            skills: [
                "DSA",
                "OOP",
                "DBMS",
                "Operating Systems",
                "Computer Networks",
            ],
        },
    ];
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="skills"
            className="max-w-6xl mx-auto px-6 py-24"
        >
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
                Technical Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4 mb-8"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category) => (
                    <div
                        key={category.title}
                        className="bg-slate-900/70 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-blue-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 transition duration-300"
                    >
                        <>
                            {category.title === "Frontend" && (
                                <FaReact className="text-4xl text-cyan-400 mb-4" />
                            )}

                            {category.title === "Backend" && (
                                <FaNodeJs className="text-4xl text-green-400 mb-4" />
                            )}

                            {category.title === "Database" && (
                                <FaDatabase className="text-4xl text-yellow-400 mb-4" />
                            )}

                            {category.title === "Programming" && (
                                <FaCode className="text-4xl text-orange-400 mb-4" />
                            )}

                            {category.title === "Tools & Platforms" && (
                                <FaTools className="text-4xl text-pink-400 mb-4" />
                            )}

                            {category.title === "Core CS" && (
                                <MdComputer className="text-4xl text-purple-400 mb-4" />
                            )}

                            <h3 className="text-2xl font-semibold mb-5 text-blue-400">
                                {category.title}
                            </h3>
                        </>

                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="bg-slate-800/80 border border-slate-700 px-3 py-2 rounded-lg text-sm hover:border-blue-500 hover:text-blue-400 transition duration-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}

export default Skills;