'use client'
import React from 'react';

const Navbar = () => {

    const scrollView = (id, offset = 100) => {
        const element = document.getElementById(id);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    const handleView = (event, id) => {
        event.preventDefault()
        scrollView(id, -100)
    }

    return (
        <nav id='navbar-id' className="bg-gray-800 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                {/* Logo */}
                {/* <div className="flex-shrink-0">
                    <img src="/path/to/your/logo.png" alt="Logo" className="h-8" />
                </div> */}
                {/* Links */}
                <div className="flex justify-end w-full">
                    <a onClick={(e) => handleView(e, "inicio")} href="#inicio" className="text-white font-bold hover:text-red-300 mr-4">Início</a>
                    <a onClick={(e) => handleView(e, "sobre-mim")} href="#sobre-mim" className="text-white font-bold hover:text-red-300 mr-4">Sobre Mim</a>
                    <a onClick={(e) => handleView(e, "projetos")} href="#projetos" className="text-white font-bold hover:text-red-300 mr-4">Aplicações</a>
                    <a onClick={(e) => handleView(e, "contato")} href="#contato" className="text-white font-bold hover:text-red-300">Contato</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar