import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const navBase =
    "hover:text-gray-300 transition-colors border-b-2 border-transparent pb-1 text-xs md:text-sm uppercase tracking-wider font-medium";
  const activeClasses = "text-white border-blue-500";

  return (
    <header className="bg-black text-white py-4 px-6 relative z-50">
      {/* gradient bottom border (like HTML header::after) */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400" />

      <div className="max-w-6xl mx-auto flex items-center justify-between relative">
        {/* Logo & brand */}
        <Link to="/" className="flex items-center gap-3">
          {/* Placeholder logo */}
          <div className="w-10 h-10 bg-white rounded flex items-center justify-center text-black font-bold text-lg">
            N
          </div>
          <h1 className="text-xl font-bold tracking-wide">NEWGEOSHIFT</h1>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${navBase} ${isActive ? activeClasses : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/markets"
            className={({ isActive }) =>
              `${navBase} ${isActive ? activeClasses : ""}`
            }
          >
            Markets
          </NavLink>
          {/* Placeholder route you can implement later */}
          <NavLink
            to="/ngs-my-story"
            className={({ isActive }) =>
              `${navBase} ${isActive ? activeClasses : ""}`
            }
          >
            NGS - My Story
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${navBase} ${isActive ? activeClasses : ""}`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Social icons (desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition-colors"
            aria-label="WhatsApp"
          >
            {/* WhatsApp icon */}
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            {/* LinkedIn icon */}
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          {open ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden mt-4 flex flex-col gap-4 border-t border-gray-800 pt-4 px-6">
          <NavLink
            to="/"
            end
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${navBase} ${isActive ? "text-blue-400" : ""} border-none`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/markets"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${navBase} ${isActive ? "text-blue-400" : ""} border-none`
            }
          >
            Markets
          </NavLink>
          <NavLink
            to="/ngs-my-story"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${navBase} ${isActive ? "text-blue-400" : ""} border-none`
            }
          >
            NGS - My Story
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${navBase} ${isActive ? "text-blue-400" : ""} border-none`
            }
          >
            Contact
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;
