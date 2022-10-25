import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoURL, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                handleUpdateUserProfile(name, photoURL)
            })
            .catch(error => {
                console.error('error', error)
            })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
        }
        updateUserProfile(profile)
            .then(() => {
                console.log('update profile')
            })
            .catch(error => {
                console.error('error', error)
            })
    }
    return (

        <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="photoURL" name="photo" placeholder="photoURL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>

    );
};

export default Register;