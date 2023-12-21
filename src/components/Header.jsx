/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [open, setOpen] = useState(false);

    const handleMenu = () => {
        setOpen(!open);
    };

    return (
        <header>
            <a href="/" className="logo">
                Christmas.
            </a>

            <ul className="nav">
                <li>
                    <a href="#">
                        <i className="bi bi-house"></i>
                    </a>
                </li>
                <li><a href="#">Gifts</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            {open ? (
                <a href="#" className="menu" onClick={handleMenu}>
                    <i className="bi bi-x-lg"></i>
                </a>
            ) : (
                <a href="#" className="menu" onClick={handleMenu}>
                    <i className="bi bi-list"></i>
                </a>
            )}
        </header>
    );
};

export default Header;
