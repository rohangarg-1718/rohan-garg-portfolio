import profile from "../assets/profile.jpg";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
function Hero() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} className="relative overflow-hidden max-w-6xl mx-auto px-6 pt-32 pb-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>

            <div className="relative flex flex-col lg:flex-row items-center gap-14">
                <div className="flex-1">
                    <span className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm border border-blue-500/30">
                        🏆 GATE CS Qualified • 94.3 Percentile
                    </span>
                    <div className="mt-4">
                        <span className="bg-green-500/20 text-green-400 border border-green-500/30 px-4 py-2 rounded-full text-sm">
                            🟢 Available for Full-Time Opportunities
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mt-6">
                        Rohan Garg
                    </h1>

                    <TypeAnimation
                        sequence={[
                            "Full Stack Developer",
                            2000,
                            "Software Developer",
                            2000,
                            "MERN Stack Developer",
                            2000,
                            "React Developer",
                            2000,
                        ]}
                        wrapper="h2"
                        speed={50}
                        repeat={Infinity}
                        className="text-2xl md:text-3xl text-slate-300 mt-4 font-semibold"
                    />

                    <p className="text-slate-400 mt-6 leading-relaxed max-w-2xl">
                        Computer Science Engineering graduate skilled in React.js,
                        Node.js, Express.js, MongoDB, Supabase, SQL and REST APIs.
                        I build scalable web applications, responsive user interfaces,
                        and database-driven solutions.
                    </p>

                    <div className="flex flex-wrap gap-3 mt-6">
                        {["React.js", "Node.js", "Express.js", "MongoDB", "Next.js", "C++"].map(
                            (skill) => (
                                <span
                                    key={skill}
                                    className="bg-slate-800/80 border border-slate-700 px-3 py-2 rounded-lg text-sm"
                                >
                                    {skill}
                                </span>
                            )
                        )}
                    </div>

                    <div className="flex gap-4 mt-8 flex-wrap">
                        <a
                            href="/ROHAN-GARG-RESUME.pdf"
                            download
                            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition"
                        >
                            Download Resume
                        </a>

                        <a
                            href="https://github.com/rohangarg-1718"
                            target="_blank"
                            className="border border-slate-700 px-5 py-3 rounded-lg hover:bg-slate-800 transition flex items-center gap-2"
                        >
                            <FaGithub /> GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/rohan-garg-a81a0529b"
                            target="_blank"
                            className="border border-slate-700 px-5 py-3 rounded-lg hover:bg-slate-800 transition flex items-center gap-2"
                        >
                            <FaLinkedin /> LinkedIn
                        </a>

                        <a
                            href="https://leetcode.com/u/Rohan_Garg_1718/"
                            target="_blank"
                            className="border border-slate-700 px-5 py-3 rounded-lg hover:bg-slate-800 transition flex items-center gap-2"
                        >
                            <SiLeetcode /> LeetCode
                        </a>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3 text-slate-400">

                        <span className="bg-slate-800 px-3 py-2 rounded-lg">
                            📍 Muzaffarnagar, Uttar Pradesh
                        </span>

                        <span className="bg-slate-800 px-3 py-2 rounded-lg">
                            🟢 Open To Relocation
                        </span>

                        <span className="bg-slate-800 px-3 py-2 rounded-lg">
                            💼 Immediate Joiner
                        </span>

                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-full blur-3xl opacity-50 animate-pulse"></div>

                        <img
                            src={profile}
                            alt="Rohan Garg"
                            className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-slate-700 shadow-2xl"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-md">
                        {[
                            ["94.3%ile", "GATE Percentile"],
                            ["3+", "Projects"],
                            ["81.34%", "B.Tech Percentage"],
                            ["2026", "CSE Graduate"],
                        ].map(([value, label]) => (
                            <div
                                key={label}
                                className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 text-center hover:scale-105 transition duration-300"
                            >
                                <h3 className="text-2xl font-bold text-blue-400">{value}</h3>
                                <p className="text-slate-400 text-sm mt-1">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Hero;