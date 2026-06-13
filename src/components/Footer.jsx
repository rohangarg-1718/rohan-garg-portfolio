import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <h3 className="text-2xl font-bold">
          Rohan Garg
        </h3>

        <p className="text-slate-400 mt-3">
          Full Stack Developer | GATE CS Qualified
        </p>

        <div className="flex gap-5 mt-6 text-2xl">

          <a
            href="https://github.com/rohangarg-1718"
            target="_blank"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/rohan-garg-a81a0529b"
            target="_blank"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://leetcode.com/u/Rohan_Garg_1718/"
            target="_blank"
          >
            <SiLeetcode />
          </a>

        </div>

        <p className="text-slate-500 mt-8">
          © 2026 Rohan Garg. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;