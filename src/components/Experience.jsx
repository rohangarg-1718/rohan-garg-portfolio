import { motion } from "framer-motion";
function Experience() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="experience"
            className="max-w-6xl mx-auto px-6 py-24"
        >
            <h2 className="text-4xl md:text-5xl font-bold mb-14">
                Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4 mb-8"></div>

            <div className="relative border-l-2 border-blue-500 pl-10">

                <div className="absolute -left-[11px] top-2 w-5 h-5 bg-blue-500 rounded-full"></div>

                <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition duration-300">

                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">

                        <div>
                            <h3 className="text-2xl font-bold">
                                AI Intern & Campus Ambassador
                            </h3>

                            <p className="text-blue-400 mt-2 text-lg">
                                Naviotech Solution Pvt. Ltd.
                            </p>
                        </div>

                        <span className="mt-4 md:mt-0 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm">
                            Aug 2025 – Oct 2025
                        </span>

                    </div>

                    <p className="text-slate-400 mt-6 leading-7">
                        Worked on AI-based initiatives and gained practical exposure
                        to software development workflows, collaboration, and
                        technical problem solving in a professional environment.
                    </p>

                    <div className="grid md:grid-cols-3 gap-4 mt-8">

                        <div className="bg-slate-800/70 rounded-xl p-4">
                            <h4 className="font-semibold text-blue-400">
                                AI Projects
                            </h4>

                            <p className="text-sm text-slate-400 mt-2">
                                Contributed to AI-focused development tasks.
                            </p>
                        </div>

                        <div className="bg-slate-800/70 rounded-xl p-4">
                            <h4 className="font-semibold text-blue-400">
                                Team Collaboration
                            </h4>

                            <p className="text-sm text-slate-400 mt-2">
                                Worked closely with teams to implement solutions.
                            </p>
                        </div>

                        <div className="bg-slate-800/70 rounded-xl p-4">
                            <h4 className="font-semibold text-blue-400">
                                Campus Ambassador
                            </h4>

                            <p className="text-sm text-slate-400 mt-2">
                                Improved student engagement and outreach.
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </motion.section>
    );
}

export default Experience;