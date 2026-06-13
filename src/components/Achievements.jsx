import { motion } from "framer-motion";

import {
    FaMedal,
    FaAward,
    FaCertificate,
    FaTrophy,
} from "react-icons/fa";

function Achievements() {
    const achievements = [
        {
            icon: <FaTrophy />,
            title: "GATE CS 2026 Qualified",
            subtitle: "Score 449 • 94.3 Percentile",
            color: "text-yellow-400",
        },

        {
            icon: <FaCertificate />,
            title: "NPTEL Cloud Computing",
            subtitle: "IIT Kharagpur",
            color: "text-green-400",
        },

        {
            icon: <FaMedal />,
            title: "Gold Medal",
            subtitle: "AKTU Zonal Ad-Mad Show",
            color: "text-yellow-500",
        },

        {
            icon: <FaAward />,
            title: "Bronze Medal",
            subtitle: "AKTU State Ad-Mad Show",
            color: "text-orange-400",
        },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="achievements"
            className="max-w-6xl mx-auto px-6 py-24"
        >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Highlights & Achievements
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4 mb-8"></div>

            <p className="text-slate-400 mb-14">
                Academic achievements, certifications, and milestones that
                reflect my learning journey and technical growth.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                {achievements.map((item) => (
                    <div
                        key={item.title}
                        className="group bg-slate-900/70 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 hover:-translate-y-2 transition duration-300"
                    >
                        <div
                            className={`text-4xl mb-5 ${item.color}`}
                        >
                            {item.icon}
                        </div>

                        <h3 className="font-bold text-lg">
                            {item.title}
                        </h3>

                        <p className="text-slate-400 mt-3">
                            {item.subtitle}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8">

                <h3 className="text-2xl font-bold">
                    Key Academic Highlight
                </h3>

                <p className="text-slate-300 mt-4 leading-7">
                    Qualified GATE CS 2026 with a score of
                    <span className="text-blue-400 font-semibold">
                        {" "}449{" "}
                    </span>
                    and
                    <span className="text-blue-400 font-semibold">
                        {" "}94.3 percentile
                    </span>,
                    demonstrating strong understanding of Computer Science
                    fundamentals including DSA, DBMS, Operating Systems,
                    and Computer Networks.
                </p>

            </div>
        </motion.section>
    );
}

export default Achievements;