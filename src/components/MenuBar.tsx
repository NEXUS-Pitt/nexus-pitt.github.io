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
    <nav className="pitt-bg-blue border-b border-gray-200 shadow-sm sticky top-0 z-50">
            <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-18">
                {/* Left: Home logo and title */}
                <Link to="/" className="flex items-center gap-3">
                    <img src="/images/pitt_shield_white-home.png" alt="Pitt Shield" className="h-10" />
                    <div className="bitcount-single text-2xl leading-tight md:text-3xl text-white whitespace-nowrap">
                        N
                        <span className="pitt-gold">E</span>
                        X
                        <span className="pitt-gold">U</span>
                        S
                        <span className="ml-2">Lab</span>
                    </div>
                </Link>
                {/* Center/Right: Main navigation links and GitHub icon */}
                <div className="hidden lg:flex items-center space-x-4 flex-1 justify-end">
                    {/* Render navigation links */}
                    {navLinks.map((link, idx) => (
                        <Link
                            key={idx}
                            to={link.to}
                            className="px-3 py-2 rounded hover:bg-blue-900 font-medium text-lg text-white"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                {/* Hamburger menu for mobile and tablet */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white focus:outline-none cursor-pointer"
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
                <div className="lg:hidden pitt-bg-blue border-t border-gray-200">
                    {/* Render navigation links in drawer */}
                    {navLinks.map((link, idx) => (
                        <Link
                            key={idx}
                            to={link.to}
                            className="block px-4 py-2 hover:bg-blue-900 font-medium text-lg text-white"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default MenuBar;
