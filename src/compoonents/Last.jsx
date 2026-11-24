
import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ArrowUp,
  Heart
} from 'lucide-react';

const Last = () => {
  return (
    <footer className="bg-[#0b1320] text-white px-6 md:px-12 pt-14 pb-6">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

        {/* Portfolio Info */}
        <div className="space-y-5">
          <h1 className="text-3xl font-bold">
            Port<span className="text-purple-400">folio.</span>
          </h1>

          <p className="text-gray-400 leading-7 max-w-sm">
            Hi, I'm <span className="text-purple-400 font-semibold">Aniket</span>.
            An aspiring AI & ML Engineer and Full Stack Developer
            passionate about building innovative digital solutions.
          </p>

          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full bg-purple-500/10 border border-purple-400/20 hover:bg-purple-600 hover:-translate-y-1 transition-all"
            >
              <Github size={20} />
            </a>

            <a
              href="https://linkedin.com/in/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full bg-purple-500/10 border border-purple-400/20 hover:bg-purple-600 hover:-translate-y-1 transition-all"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-5">
          <h2 className="text-xl font-bold border-b border-purple-500/40 pb-3 inline-block">
            Quick Links
          </h2>

          <ul className="space-y-3 text-gray-400">
            {[
              ['Home', '#Home'],
              ['About', '#About'],
              ['Skills', '#skills'],
              ['Projects', '#projects'],
              ['Contact', '#contact']
            ].map(([name, link]) => (
              <li key={name}>
                <a
                  href={link}
                  className="hover:text-purple-400 hover:translate-x-2 inline-block transition-all duration-300"
                >
                  → {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="space-y-5">
          <h2 className="text-xl font-bold border-b border-purple-500/40 pb-3 inline-block">
            Contact Me
          </h2>

          <div className="space-y-5 text-gray-400">

            <a
              href="mailto:aniketghosh0606@gmail.com"
              className="flex items-center gap-3 hover:text-purple-400 transition-colors"
            >
              <Mail className="text-purple-400" size={20} />
              <span className="break-all">aniketghosh0606@gmail.com</span>
            </a>

            <a
              href="tel:+917501559792"
              className="flex items-center gap-3 hover:text-purple-400 transition-colors"
            >
              <Phone className="text-purple-400" size={20} />
              <span>+91 7501559792</span>
            </a>

            <div className="flex items-center gap-3">
              <MapPin className="text-purple-400" size={20} />
              <span>Kolkata, India</span>
            </div>

          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto border-t border-purple-500/20 mt-12 pt-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">

          <p>
            © {new Date().getFullYear()} Aniket Ghosh. All Rights Reserved.
          </p>

          <p className="flex items-center gap-1">
            Made with <Heart size={15} className="text-purple-500 fill-purple-500" />
            by <span className="text-purple-400">Aniket</span>
          </p>

          <a
            href="#Home"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            Back to Top <ArrowUp size={16} />
          </a>

        </div>
      </div>

    </footer>
  );
};

export default Last;
