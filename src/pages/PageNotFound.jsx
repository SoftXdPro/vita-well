import React from 'react';

const PageNotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-4xl font-bold text-yellow-500 mb-4">404 - Page Not Found</h1>
            <p className="text-lg text-center">The page you're looking for does not exist.</p>
        </div>
    );
};

export default PageNotFound;
