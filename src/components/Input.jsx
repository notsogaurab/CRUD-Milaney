import React from 'react';

const Input = ({ label, id, name, type, value, onChange, error }) => {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block mb-1">
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full p-2 border border-gray-300 rounded-md"
            />
            {error && <p className="text-red-500 mt-1">{error}</p>}
        </div>
    );
};

export default Input;
