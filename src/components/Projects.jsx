import flightImg from "../assets/projects/flight-home.png";
import foodImg from "../assets/projects/food-home.png";
import computerImg from "../assets/projects/computer-home.png";
import { motion } from "framer-motion";

function Projects() {
    const projects = [
        {
            title: "Flight Management Web App",
            image: flightImg,
            tech: ["Next.js", "TypeScript", "Supabase", "Zustand"],
            description:
                "Developed a complete flight booking and reservation system with authentication, seat selection, booking confirmation, cancellation, and real-time seat availability tracking.",
            github:
                "https://github.com/rohangarg-1718/flight-management-web-app",
            demo:
                "https://skyroute-india.netlify.app/",
            featured: true,
        },

        {
            title: "Online Food Ordering Website",
            image: foodImg,
            tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
            description:
                "Full-stack food ordering platform with user authentication, cart management, order processing, and responsive design.",
            github:
                "https://github.com/rohangarg-1718/Online-Food-Ordering-MERN",
            demo: "#",
            featured: false,
            featuredSecondary: true,
        },

        {
            title: "Computer Center Organization Website",
            image: computerImg,
            tech: ["HTML", "CSS", "JavaScript"],
            description:
                "Responsive multi-page organization website with modern UI, form validation, and cross-browser compatibility.",
            github:
                "https://github.com/rohangarg-1718/computer-center-organization",
            demo: "#",
            featured: false,
        },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="projects"
            className="max-w-6xl mx-auto px-6 py-24"
        >
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
                Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4 mb-8"></div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <motion.div
                        key={project.title}
                        whileHover={{
                            y: -10,
                            scale: 1.02,
                        }}
                        transition={{ duration: 0.3 }}
                        className={`bg-slate-900/70 border rounded-2xl overflow-hidden hover:border-blue-500 ${project.featured
                            ? "border-blue-500 ring-2 ring-blue-500/30"
                            : project.featuredSecondary
                                ? "border-green-500 ring-2 ring-green-500/20"
                                : "border-slate-800"
                            }`}
                    >
                        <div className="aspect-video overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover object-top hover:scale-105 transition duration-500"
                            />
                        </div>

                        <div className="p-6">
                            {project.featured && (
                                <span className="inline-flex items-center gap-2 mb-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs border border-cyan-500/20">
                                    🚀 Featured Full Stack Project
                                </span>
                            )}
                            {project.featuredSecondary && (
                                <span className="inline-flex items-center gap-2 mb-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 px-3 py-1 rounded-full text-xs border border-green-500/20">
                                    🍔 Featured MERN Project
                                </span>
                            )}
                            <h3 className="text-xl font-bold">
                                {project.title}
                            </h3>

                            <div className="flex flex-wrap gap-2 mt-3">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-xs"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <p className="text-slate-400 mt-4">
                                {project.description}
                            </p>

                            <div className="flex gap-3 mt-6">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-4 py-2 border border-slate-700 rounded-lg hover:bg-slate-800"
                                >
                                    GitHub
                                </a>

                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}

export default Projects;