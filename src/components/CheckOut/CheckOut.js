import React, { useContext } from 'react';

import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Context/AuthProvider';



const CheckOut = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className='w-50 mx-auto bg-light mt-5 p-5 shadow-lg rounded'>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="name" defaultValue={user.displayName} placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type="email" readOnly defaultValue={user.email} placeholder="Enter email" />
                </Form.Group>
                <p className='fs-2 fw-bold text-primary text-center'>Thank You So Much..!!</p>
            </Form>
        </div>
    );
};

export default CheckOut;