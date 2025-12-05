import React from "react";
import { Link } from "react-router-dom";

interface FooterProps {
  asSlide?: boolean;
}

const Footer: React.FC<FooterProps> = ({ asSlide = false }) => {
  const container = asSlide
    ? "snap-start min-h-full w-full flex items-center justify-center bg-black"
    : "w-full bg-black";

  return (
    <section className={container}>
      <footer className="relative w-full text-white">
        {/* Background image + overlays */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              "url('/assets/cinematic/city-4864747_1920.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

        {/* Gradient top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400" />

        <div className="relative max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center text-black font-bold">
                  N
                </div>
                <h2 className="text-xl font-bold">NEWGEOSHIFT</h2>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Exploring new horizons in global markets and innovation.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/markets"
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    Markets
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ngs-my-story"
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    NGS - My Story
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
                Resources
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
                Connect
              </h3>
              <div className="space-y-3 mb-4 text-sm text-gray-400">
                <p>
                  <span className="block font-medium text-white mb-1">
                    Email
                  </span>
                  info@newgeoshift.com
                </p>
                <p>
                  <span className="block font-medium text-white mb-1">
                    Phone
                  </span>
                  +49 123 456789
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="WhatsApp"
                >
                  {/* same WhatsApp svg as header */}
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2025 NEWGEOSHIFT. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
