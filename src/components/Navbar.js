import React from "react";

import '../styles/Navbar.css';

export default function Navbar({ onNavClick }) {
    return (
        <nav>
            <ul>
                <li className="nav-item" onClick={() => onNavClick('page1')}>Page 1</li>
                <li className="nav-item" onClick={() => onNavClick('page2')}>Page 2</li>
                <li className="nav-item" onClick={() => onNavClick('page3')}>Page 3</li>
                <li className="nav-item" onClick={() => onNavClick('page4')}>Page 4</li>
            </ul>
        </nav>
    );
};