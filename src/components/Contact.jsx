import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaPhone,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

function Contact() {
    const contacts = [
        {
            icon: <FaEnvelope />,
            title: "Email",
            value: "rohangarg6396@gmail.com",
            link: "mailto:rohangarg6396@gmail.com",
        },
        {
            icon: <FaPhone />,
            title: "Phone",
            value: "+91 6396239354",
            link: "tel:+916396239354",
        },
        {
            icon: <FaGithub />,
            title: "GitHub",
            value: "rohangarg-1718",
            link: "https://github.com/rohangarg-1718",
        },
        {
            icon: <FaLinkedin />,
            title: "LinkedIn",
            value: "Rohan Garg",
            link: "https://www.linkedin.com/in/rohan-garg-a81a0529b",
        },
        {
            icon: <SiLeetcode />,
            title: "LeetCode",
            value: "Rohan_Garg_1718",
            link: "https://leetcode.com/u/Rohan_Garg_1718/",
        },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="contact"
            className="max-w-6xl mx-auto px-6 py-24"
        >
            <div className="text-center mb-14">
                <h2 className="text-4xl font-bold">
                    Let's Build Something Amazing Together
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4 mb-8"></div>

                <p className="text-blue-400 mt-4 font-medium">
                    Currently seeking Full Stack Developer, Software Developer, and SDE opportunities.
                </p>

                <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
                    Passionate about building scalable web applications and solving real-world problems through technology. Feel free to connect with me.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contacts.map((contact) => (
                    <a
                        key={contact.title}
                        href={contact.link}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 hover:-translate-y-2 transition duration-300"
                    >
                        <div className="text-3xl text-blue-400 mb-4">
                            {contact.icon}
                        </div>

                        <h3 className="font-bold text-lg">
                            {contact.title}
                        </h3>

                        <p className="text-slate-400 mt-2 break-all">
                            {contact.value}
                        </p>
                    </a>
                ))}
            </div>
        </motion.section>
    );
}

export default Contact;