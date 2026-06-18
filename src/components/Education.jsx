import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="education"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12">
        Education
      </h2>

      <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition duration-300">

        <div className="flex items-start gap-5">

          <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center">
            <FaGraduationCap className="text-2xl text-blue-400" />
          </div>

          <div>
            <h3 className="text-2xl font-bold">
              B.Tech - Computer Science & Engineering
            </h3>

            <p className="text-blue-400 mt-2">
              IIMT Engineering College, Meerut
            </p>

            <p className="text-slate-400 mt-2">
              Dr. A.P.J. Abdul Kalam Technical University (AKTU)
            </p>

            <div className="flex flex-wrap gap-3 mt-5">

              <span className="bg-slate-800 px-3 py-2 rounded-lg text-sm">
                🎓 Graduation: 2026
              </span>

              <span className="bg-slate-800 px-3 py-2 rounded-lg text-sm">
                📊 81.34%
              </span>

              <span className="bg-slate-800 px-3 py-2 rounded-lg text-sm">
                🏆 GATE CS 2026 Qualified
              </span>

            </div>
          </div>

        </div>

      </div>
    </motion.section>
  );
}

export default Education;