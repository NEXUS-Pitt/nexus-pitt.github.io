import React, { useState } from "react";
import { Link } from "react-router-dom";

// MenuBar component: responsive navigation bar for all pages
const MenuBar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Navigation links
    const navLinks = [
        { to: "/people", label: "People" },
        { to: "/publications", label: "Publications" },
        { to: "/projects", label: "Projects" },
        { to: "/teaching", label: "Teaching" },
        { to: "/awards", label: "Awards" },
        { to: "/service", label: "Service" },
    ];

    return (
        <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
            <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-18">
                {/* Left: Home logo and title */}
				<Link to="/" className="bitcount-single mr-8 text-2xl leading-tight">
				  <span className="block">
				    <span className="inline-flex items-baseline gap-2 whitespace-nowrap">
				      <span className="nd-blue">
				        <span className="font-bold underline">N</span>eural
				      </span>
				      <span className="nd-gold">
				        <span className="font-bold underline">E</span>mbedded
				      </span>
				    </span>
				  </span>
				  <span className="block">
				    <span className="inline-flex gap-2 whitespace-nowrap">
				      <span><span className="font-bold underline">X</span>&#8209;Disciplinary</span>
				      <span className="nd-gold"><span className="font-bold underline">U</span>nified</span>
				      <span className="nd-blue"><span className="font-bold underline">S</span>ystems</span>
				    </span>
				  </span>
				</Link>
                {/* Center/Right: Main navigation links and GitHub icon */}
                <div className="hidden lg:flex items-center space-x-4 flex-1 justify-end">
                    {/* Render navigation links */}
                    {navLinks.map((link, idx) => (
                        <Link
                            key={idx}
                            to={link.to}
                            className="px-3 py-2 rounded hover:bg-gray-100 font-medium text-lg"
                        >
                            {link.label}
                        </Link>
                    ))}
                    {/* GitHub icon as the last nav item */}
                    <a
                        href="https://github.com/SCL-ND"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center ml-2 hover:opacity-80"
                        aria-label="GitHub"
                    >
                        <img src="github.svg" alt="GitHub Logo" height={28} width={28} />
                    </a>
                </div>
                {/* Hamburger menu for mobile and tablet */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-gray-700 focus:outline-none cursor-pointer"
                        aria-label="Toggle menu"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-200">
                    {/* Render navigation links in drawer */}
                    {navLinks.map((link, idx) => (
                        <Link
                            key={idx}
                            to={link.to}
                            className="block px-4 py-2 hover:bg-gray-100 font-medium text-lg"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    {/* GitHub icon in drawer menu */}
                    <a
                        href="https://github.com/SCL-ND"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-gray-100 font-medium text-lg flex items-center"
                        aria-label="GitHub"
                        onClick={() => setMenuOpen(false)}
                    >
                        <img src="github.svg" alt="GitHub Logo" height={20} width={20} className="mr-2" />
                        GitHub
                    </a>
                </div>
            )}
        </nav>
    );
};

export default MenuBar;
