import React from "react";

import '../styles/Navbar.css';

export default function Navbar({ onNavClick }) {
    return (
        <nav>
            <ul>
                <li className="nav-item" onClick={() => onNavClick('about')}>About Me</li>
                <li className="nav-item" onClick={() => onNavClick('portfolio')}>Portfolio</li>
                <li className="nav-item" onClick={() => onNavClick('contact')}>Contact</li>
                <li className="nav-item" onClick={() => onNavClick('resume')}>Resume</li>
            </ul>
        </nav>
    );
};