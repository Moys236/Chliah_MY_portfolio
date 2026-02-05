import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#0b0e14] py-8 text-center border-t border-gray-800">
            <p className="text-gray-500 flex items-center justify-center gap-2">
                © {new Date().getFullYear()} Mohamed Yassine Chliah. Built with <FaHeart className="text-red-500" /> using React & Tailwind.
            </p>
        </footer>
    );
};

export default Footer;
