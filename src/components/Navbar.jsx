import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaFileDownload } from "react-icons/fa";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("about");

    const navLinks = [
        { name: "About", href: "#about", id: "about" },
        { name: "Skills", href: "#skills", id: "skills" },
        { name: "Projects", href: "#projects", id: "projects" },

        { name: "Certificates", href: "#certifications", id: "certifications" },

        { name: "Contact", href: "#contact", id: "contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                "about",
                "skills",
                "projects",
                "certifications",
                "contact",
            ];

            sections.forEach((section) => {
                const element = document.getElementById(section);

                if (element) {
                    const rect = element.getBoundingClientRect();

                    if (rect.top <= 160 && rect.bottom >= 160) {
                        setActiveSection(section);
                    }
                }
            });
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-4 left-0 right-0 z-50 px-4">
            <div className="max-w-6xl mx-auto bg-slate-950/80 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl shadow-blue-500/10">

                <div className="px-5 md:px-6 py-4 flex justify-between items-center">

                    {/* Logo */}
                    <a href="#" className="group">
                        <h1 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Rohan Garg
                        </h1>

                        <p className="text-xs text-slate-500 group-hover:text-slate-400 transition">
                            Full Stack Developer
                        </p>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-2 bg-slate-900/70 border border-slate-800 rounded-full px-2 py-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${activeSection === link.id
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Resume Button */}
                    <a
                        href="/ROHAN-GARG-RESUME.pdf"
                        download
                        className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm font-medium transition shadow-lg shadow-blue-500/20"
                    >
                        <FaFileDownload />
                        Resume
                    </a>

                    {/* Mobile Button */}
                    <button
                        className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-xl text-white hover:border-blue-500 transition"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden border-t border-slate-800 px-5 pb-5">
                        <div className="mt-4 bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-xl shadow-blue-500/10">

                            <div className="flex flex-col gap-2">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`px-4 py-3 rounded-xl font-medium transition ${activeSection === link.id
                                            ? "bg-blue-600 text-white"
                                            : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                            }`}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>

                            <a
                                href="/ROHAN_GARG_RESUME.pdf"
                                download
                                onClick={() => setIsOpen(false)}
                                className="mt-4 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-xl font-medium transition"
                            >
                                <FaFileDownload />
                                Download Resume
                            </a>

                        </div>
                    </div>
                )}

            </div>
        </nav>
    );
}

export default Navbar;