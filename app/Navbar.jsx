'use client';

import react, { useState } from 'react';
import Image from 'next/image';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header class="header">

            <a href="#" className="logo"><Image src='logo.svg' width={200} height={64} /></a>
            <nav className={`navbar ${isOpen && 'navbar active'}`}>
                <a href="#home">home</a>
                <a href="#about">about</a>
                <a href="#services">services</a>
                <a href="#team">team</a>
                <a href="#pricing">pricing</a>
                <a href="#blog">blog</a>
            </nav>

            <a href="#" className="btn"> Book an appointment </a>
            <div id="menu-btn"
                className={`fas fa-bars ${isOpen && 'fa-times'}`}
                onClick={() => setIsOpen(!isOpen)}></div>


        </header>
    )
}

export default Navbar