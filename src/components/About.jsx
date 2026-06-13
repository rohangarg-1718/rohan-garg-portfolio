import { motion } from "framer-motion";

function About() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            id="about"
            className="max-w-6xl mx-auto px-6 py-24"
        >
            <h2 className="text-4xl md:text-5xl font-bold mb-10">
                About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4 mb-8"></div>

            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 md:p-8 overflow-hidden">
                    <p className="text-slate-300 text-base md:text-lg leading-7 md:leading-8">
                        I'm <span className="text-blue-400 font-semibold">Rohan Garg</span>,
                        a Computer Science Engineering graduate and Full Stack Developer
                        passionate about building scalable web applications and solving
                        real-world problems through technology.
                    </p>

                    <p className="text-slate-300 text-base md:text-lg leading-7 md:leading-8 mt-6">
                        I have hands-on experience developing applications using React.js,
                        Next.js, Node.js, Express.js, MongoDB, Supabase, and REST APIs.
                        My strongest projects include a Flight Management Web Application
                        and an Online Food Ordering Platform.
                    </p>

                    <p className="text-slate-300 text-base md:text-lg leading-7 md:leading-8 mt-6">
                        I qualified
                        <span className="text-blue-400 font-semibold">
                            {" "}GATE CS 2026{" "}
                        </span>
                        with a score of 449 and 94.3 percentile, strengthening my
                        understanding of DSA, DBMS, Operating Systems, and Computer Networks.
                    </p>

                    <p className="text-slate-300 text-base md:text-lg leading-7 md:leading-8 mt-6">
                        Currently seeking Full Stack Developer, Software Developer,
                        and SDE opportunities where I can contribute, learn, and grow.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                        <div className="bg-slate-800 rounded-xl p-4 hover:border-blue-500 hover:-translate-y-2 transition duration-300">
                            <h4 className="text-blue-400 font-semibold">
                                🏆 GATE Qualified
                            </h4>
                            <p className="text-slate-400 text-sm mt-2">
                                94.3 Percentile
                            </p>
                        </div>

                        <div className="bg-slate-800 rounded-xl p-4 hover:border-blue-500 hover:-translate-y-2 transition duration-300">
                            <h4 className="text-blue-400 font-semibold">
                                💻 Full Stack Developer
                            </h4>
                            <p className="text-slate-400 text-sm mt-2">
                                MERN & Next.js
                            </p>
                        </div>

                        <div className="bg-slate-800 rounded-xl p-4 hover:border-blue-500 hover:-translate-y-2 transition duration-300">
                            <h4 className="text-blue-400 font-semibold">
                                🎓 B.Tech Graduate
                            </h4>
                            <p className="text-slate-400 text-sm mt-2">
                                Computer Science Engineering
                            </p>
                        </div>

                        <div className="bg-slate-800 rounded-xl p-4 hover:border-blue-500 hover:-translate-y-2 transition duration-300">
                            <h4 className="text-blue-400 font-semibold">
                                🚀 Immediate Joiner
                            </h4>
                            <p className="text-slate-400 text-sm mt-2">
                                Open to Relocation
                            </p>
                        </div>
                    </div>
                </div>
        
        </motion.section>
    );
}

export default About;