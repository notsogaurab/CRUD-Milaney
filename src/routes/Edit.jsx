import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Form from '../components/Form';
import { getIntern } from '../requests/axios';

const Edit = () => {
    const { id } = useParams();
    const [internData, setInternData] = useState(null);

    useEffect(() => {
        getIntern(id)
            .then((data) => {
                console.log('Intern data:', data);
                setInternData(data);
            })
            .catch((error) => console.error('Error fetching intern:', error));
    }, [id]);

    return (
        <div >
            {internData && <Form mode="edit" internData={internData} />}
        </div>
    );
};

export default Edit;
