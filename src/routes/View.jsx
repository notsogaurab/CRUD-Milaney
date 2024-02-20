import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getInterns } from '../requests/axios';
import RouteButton from '../components/RouteButton';

const View = () => {
    const [interns, setInterns] = useState([]);

    useEffect(() => {
        getInterns()
            .then((data) => setInterns(data))
            .catch((error) => console.error('Error fetching interns:', error));
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-semibold mb-8">Interns Data</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {interns.map((intern) => (
                        <div key={intern.id} className="bg-white p-6 rounded-md shadow-md transition duration-300 transform hover:scale-105">
                            <h3 className="text-lg font-semibold mb-2">{intern.name}</h3>
                            <p className="text-gray-600 mb-2">Address: {intern.address}</p>
                            <p className="text-gray-600 mb-2">Date of Birth: {intern.dob}</p>
                            <p className="text-gray-600 mb-2">Selected: <span className={` text-${intern.selection ? 'green-500' : 'red-600'} `}>{intern.selection ? 'Yes' : 'No'}</span></p>
                            <Link to={`/edit/${intern.id}`} className="text-blue-500 hover:underline">Edit</Link>
                        </div>
                    ))}
                </div>
                <div className="mt-8">
                    <RouteButton to="/form" backgroundColor="blue-500" textColor="white">Add Intern</RouteButton>
                </div>
            </div>
        </div>
    );
};

export default View;
