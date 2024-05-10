import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                {/* Logo */}
                {/* <div className="flex-shrink-0">
                    <img src="/path/to/your/logo.png" alt="Logo" className="h-8" />
                </div> */}
                {/* Links */}
                <div className="flex justify-end w-full">
                    <a href="#inicio" className="text-white font-bold hover:text-red-300 mr-4">Início</a>
                    <a href="#sobre-mim" className="text-white font-bold hover:text-red-300 mr-4">Sobre Mim</a>
                    <a href="#projetos" className="text-white font-bold hover:text-red-300 mr-4">Aplicações</a>
                    <a href="#contato" className="text-white font-bold hover:text-red-300">Contato</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar