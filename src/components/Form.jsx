import React, { useState, useEffect } from 'react';
import { addIntern, updateIntern } from '../requests/axios';
import { toast, Toaster } from 'react-hot-toast';
import RouteButton from '../components/RouteButton';
import Input from './Input.jsx';

const Form = ({ mode, internData }) => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        dob: '',
        selection: false,
    });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (mode === 'edit' && internData) {
            setFormData(internData);
        }
    }, [mode, internData]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === 'checkbox' ? checked : value;
        setFormData({ ...formData, [name]: fieldValue });
        setErrors({ ...errors, [name]: fieldValue || name === 'selection' ? '' : `Please enter your ${name}.` });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key] && key !== 'selection') {
                formErrors[key] = `Please enter your ${key}.`;
            }
        });
        setErrors(formErrors);
        if (Object.keys(formErrors).length === 0) {
            setSubmitting(true);
            const submitFunction = mode === 'add' ? addIntern : updateIntern;
            const submitPromise = mode === 'add' ? submitFunction(formData) : submitFunction(internData.id, formData);
            submitPromise
                .then((response) => {
                    console.log('Intern', mode === 'add' ? 'added' : 'updated', ':', response);
                    setSubmitting(false);
                    mode === 'add' && setFormData({
                        name: '',
                        address: '',
                        dob: '',
                        selection: false,
                    });
                    toast.success(`Intern ${mode === 'add' ? 'added' : 'updated'} successfully.`);
                })
                .catch((error) => {
                    console.error('Error', mode === 'add' ? 'adding' : 'updating', 'intern:', error);
                    setSubmitting(false);
                    toast.error(`Error ${mode === 'add' ? 'adding' : 'updating'} intern.`);
                });
            console.log('Form submitted:', formData);
        } else {
            console.log('Form contains errors. Please fix them before submitting.');
        }
    };


    return (
        <>
            <Toaster />
            <div className="min-h-screen bg-gray-100 py-8">
                <div className="max-w-6xl mx-auto px-4">
                    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-md shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">{mode === 'add' ? 'Registration Form' : 'Edit Form'}</h2>
                        <Input
                            label="Name"
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            error={errors.name}
                        />
                        <Input
                            label="Address"
                            id="address"
                            name="address"
                            type="text"
                            value={formData.address}
                            onChange={handleChange}
                            error={errors.address}
                        />
                        <Input
                            label="Date of Birth"
                            id="dob"
                            name="dob"
                            type="date"
                            value={formData.dob}
                            onChange={handleChange}
                            error={errors.dob}
                        />
                        <div className="mb-4">
                            <label htmlFor="selection" className="flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    id="selection"
                                    name="selection"
                                    checked={formData.selection}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                <span>Is the Intern Selected?</span>
                            </label>
                        </div>
                        <button type="submit" disabled={submitting} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            {submitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                    <div className="mt-8">
                        <RouteButton to="/table" backgroundColor="blue-500" textColor="white">View Data</RouteButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Form;
