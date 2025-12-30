import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

            <div className="text-center  p-10 rounded-xl shadow-lg max-w-md w-full">

                {/* 404 Number */}
                <h1 className="text-7xl font-extrabold text-black">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-4 text-2xl font-semibold text-black">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-3 text-gray-700 text-sm">
                    Sorry, the page you are looking for doesn’t exist or has been moved.
                </p>

                {/* Button */}
                <Link
                    to="/"
                    className="inline-block mt-6 px-6 py-3 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition"
                >
                    Go Back Home
                </Link>

            </div>
        </div>

    );
};

export default ErrorPage;