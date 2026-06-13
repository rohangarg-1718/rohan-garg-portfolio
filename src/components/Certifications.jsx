import { motion } from "framer-motion";



import trainImg from "../assets/certifications/naviotech-training.jpg";
import internImg from "../assets/certifications/naviotech-internship.jpg";
import nptelImg from "../assets/certifications/nptel-cloud.jpg";
import pythonImg from "../assets/certifications/nasscom-python-ai.jpg";
import reactImg from "../assets/certifications/react-music-app.jpg";
import cyberImg from "../assets/certifications/cyber-security.jpg";
import researchImg from "../assets/certifications/research-conference.jpg";
import zonalImg from "../assets/certifications/aktu-zonal-gold.jpg";
import stateImg from "../assets/certifications/aktu-state-bronze.jpg";
import participationImg from "../assets/certifications/aktu-participation.jpg";



function Certifications() {
    const certifications = [
        {
            image: trainImg,
            title: "AI Training Completion",
            issuer: "Naviotech Solution Pvt. Ltd.",
            badge: "Artificial Intelligence",
            year: "2025",
        },
        {
            image: internImg,
            title: "AI Internship Completion",
            issuer: "Naviotech Solution Pvt. Ltd.",
            badge: "Internship Certificate",
            year: "2025",
        },
        {
            image: nptelImg,
            title: "Cloud Computing",
            issuer: "IIT Kharagpur • NPTEL",
            badge: "Elite Certified ⭐",
            year: "2024",
        },
        {
            image: pythonImg,
            title: "Python Programming for AI",
            issuer: "NASSCOM",
            badge: "Gold Category ⭐",
            year: "2026",
        },
        {
            image: reactImg,
            title: "Build Music App in React JS",
            issuer: "SkillRisers",
            badge: "React Development",
            year: "2023",
        },
        {
            image: cyberImg,
            title: "Cyber Security Awareness",
            issuer: "AKTU & UP Police",
            badge: "Workshop",
            year: "2023",
        },
        {
            image: researchImg,
            title: "National Conference on AI",
            issuer: "Maharishi University",
            badge: "Research Presentation",
            year: "2026",
        },
        {
            image: zonalImg,
            title: "AKTU Ad Mad Show",
            issuer: "AKTU",
            badge: "🥇 Zonal Winner",
            year: "2024",
        },
        {
            image: stateImg,
            title: "AKTU Ad Mad Show",
            issuer: "AKTU",
            badge: "🥉 State Bronze",
            year: "2024",
        },
        {
            image: participationImg,
            title: "AKTU Ad Mad Show",
            issuer: "AKTU",
            badge: "Participation",
            year: "2024",
        },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            id="certifications"
            className="max-w-7xl mx-auto px-6 py-24 overflow-hidden"
        >
            <h2 className="text-4xl md:text-6xl font-extrabold text-center">
                Certifications
            </h2>

            <p className="text-slate-400 text-center mb-12">
                Industry Certifications, Technical Training & Professional Achievements
            </p>

            <div className="flex gap-8 animate-scroll">
                {[...certifications, ...certifications].map((cert, index) => (
                    <motion.div
                        key={index}
                        whileHover={{
                            scale: 1.03,
                            y: -5,
                        }}
                        className="
            min-w-[280px] md:min-w-[340px]
bg-gradient-to-b
from-slate-900/95
to-slate-950/95
backdrop-blur-xl
border
border-slate-800
rounded-3xl
overflow-hidden
hover:border-blue-500
hover:shadow-2xl
hover:shadow-blue-500/20
transition-all
duration-500
group
            overflow-hidden
            hover:border-blue-500
            hover:shadow-xl
            hover:shadow-blue-500/20
            transition-all
            duration-500
            "
                    >
                        <a
                            href={cert.image}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="
                    w-full
h-60
object-contain
bg-gradient-to-b
from-slate-950
to-slate-900
p-4
group-hover:scale-105
transition-all
duration-500
                    "
                            />
                        </a>

                        <div className="p-5">
                            <h3 className="text-xl font-bold text-white">
                                {cert.title}
                            </h3>

                            <p className="text-blue-400 text-sm mt-2 font-medium">
                                {cert.issuer}
                            </p>

                            <div className="
inline-flex
items-center
mt-3
px-3
py-1
rounded-full
bg-yellow-500/10
text-yellow-400
text-xs
font-semibold
border
border-yellow-500/20
">
                                {cert.badge}
                            </div>

                            <span className="
inline-flex
items-center
mt-4
bg-blue-500/10
border
border-blue-500/20
text-blue-400
px-3
py-1
rounded-full
text-xs
font-medium
">
                                {cert.year}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}

export default Certifications;