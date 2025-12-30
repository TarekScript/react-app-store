import React from 'react';

const Footer = () => {
    return (
        <div className="bg-gray-300 py-8 px-6 relative mt-8">

            {/* Top border line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gray-400"></div>

            {/* Footer content */}
            <p className="text-center text-gray-800 text-sm hover:text-gray-900 transition-colors">
                © {new Date().getFullYear()} All rights reserved by Sohorab Hossain Tarek
            </p>

            {/* Optional subtle shadow at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200"></div>
        </div>
    );
};

export default Footer;